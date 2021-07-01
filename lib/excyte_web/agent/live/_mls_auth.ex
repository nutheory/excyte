defmodule ExcyteWeb.Agent.MlsAuth do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Mls, Mls.ResoMemberApi}
  alias ExcyteWeb.{AgentView, UserConfirmationController}

  @token Application.get_env(:excyte, :bridge_server_key)

  def render(assigns), do: AgentView.render("mls_auth.html", assigns)

  def preload(list_of_assigns) do
    Enum.map(list_of_assigns, fn assigns ->
      Map.put(assigns, :mls_opts, Application.get_env(:excyte, :mls_auth_options))
    end)
  end

  def update(assigns, socket) do
    mls_list = Mls.get_credentials(%{agent_id: assigns.current_user.id})
    dids = Enum.map(mls_list, fn li -> li.dataset_id end)
    opts = Enum.filter(assigns.mls_opts, fn %{val: val} ->
        !Enum.member?(dids, val)
    end)
    {:ok, assign(socket,
      current_user: assigns.current_user,
      return_to: assigns.return_to,
      show_auth_button: false,
      agents: nil,
      login_id: "",
      agent: nil,
      mls: nil,
      mls_opts: opts,
      mls_list: mls_list
    )}
  end

  def handle_event("select-agent", %{"agent_key" => ak}, %{assigns: a} = socket) do
    agent = Enum.find(a.agents, fn ag -> ag["MemberKey"] === ak end)
    {:noreply, assign(socket, agent: agent)}
  end

  def handle_event("get-agents", %{"mls" => mls_id} = t, %{assigns: a} = socket) do
    if hd(t["_target"]) === "login-id" do
      {:noreply, assign(socket, login_id: t["login-id"])}
    else
      sel = Enum.find(a.mls_opts, fn opt -> opt.val === mls_id end)
      mls = %{access_token: @token, dataset_id: mls_id}
      if sel.type === "bridge" do
        case ResoMemberApi.getMembersByName(mls, a.current_user.full_name) do
          {:ok, agents} -> {:noreply, assign(socket, agents: agents, mls: sel, show_auth_button: true)}
          {:error, _err} -> {:noreply, assign(socket, agents: [], mls: sel, show_auth_button: false)}
        end
      else
        {:noreply, assign(socket, mls: sel, show_auth_button: true)}
      end
    end
  end

  def handle_event("authorize", _, %{assigns: a} = socket) do
    if a.mls.type === "bridge" do
      with {:ok, agent} <- agent_check(socket),
                    _ <- IO.inspect(agent, label: "AG"),
           {:ok, _mls} <- Mls.create_credential(%{
                        agent_id: a.current_user.id,
                        access_token: @token,
                        member_key: (if agent, do: agent["MemberKey"], else: nil),
                        office_key: (if agent, do: agent["Office"]["OfficeKey"], else: nil),
                        mls_name: a.mls.name,
                        dataset_id: a.mls.val,
                        sub: "bridge"
                      }) do
          mls_list = Mls.get_credentials(%{agent_id: a.current_user.id})
          send self(), {:update_mls, %{current_user: a.current_user, mls_list: mls_list}}
          {:noreply, assign(socket, current_user: a.current_user, mls_list: mls_list)}
      else
        {:error, _err} -> {:noreply, socket}
        _err -> {:noreply, socket}
      end
    else
      # mls_redirect =
      #   OpenIDConnect.authorization_uri(
      #     String.to_atom(mls),
      #     %{
      #       excyte_user_id: socket.assigns.current_user.id,
      #       return_to: return_to
      #     }
      #   )
      # {:noreply, redirect(socket, external: mls_redirect)}
    end
  end

  def handle_event("disconnect", %{"cred-id" => cred_id}, socket) do
    new_creds = Mls.destroy_credential(%{
      cred_id: String.to_integer(cred_id),
      agent_id: socket.assigns.current_user.id
    })

    send self(), {:update_mls, %{current_user: socket.assigns.current_user, mls_list: new_creds}}
    {:noreply, assign(socket, current_user: socket.assigns.current_user, mls_list: new_creds)}
  end

  defp agent_check(%{assigns: a}) do
    if a.agent do
      {:ok, a.agent}
    else
      if a.login_id do
        ResoMemberApi.getMemberByLoginId(%{access_token: @token, dataset_id: a.mls.val}, a.login_id)
      else
        nil
      end
    end
  end
end
