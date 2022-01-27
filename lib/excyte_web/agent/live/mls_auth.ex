defmodule ExcyteWeb.Agent.MlsAuth do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls, Mls.ResoMemberApi}
  alias ExcyteWeb.{AgentView, UserConfirmationController}

  @token Application.get_env(:excyte, :bridge_server_key)

  def render(assigns), do: AgentView.render("mls_auth.html", assigns)

  def mount(_params, %{"return_to" => rt, "user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    mls_list = Mls.get_credentials(%{agent_id: cu.id})
    mls_opts = Application.get_env(:excyte, :mls_auth_options)
    IO.inspect(mls_list, label: "List")
    IO.inspect(mls_opts, label: "OPTS")
    {:ok, assign(socket,
      current_user: cu,
      return_to: rt,
      show_auth_button: false,
      agents: nil,
      login_id: "",
      agent: nil,
      mls: nil,
      brokerage_approved: false,
      mls_opts: mls_opts,
      mls_list: mls_list
    )}
  end

  def handle_info({:update_mls, %{current_user: cu, mls_list: creds}}, socket) do
    {:noreply, assign(socket, current_user: cu, mls_list: creds)}
  end

  def handle_event("set_mls", %{"option" => mls}, %{assigns: a} = socket) do
    IO.inspect(mls, label: "MLS")
    if Enum.find(a.mls_list, fn ds -> ds.dataset_id === mls end) do
      {:noreply, socket}
    else
      mls = Enum.find(a.mls_opts, fn m -> m.value === mls end)
      mls_q = %{access_token: @token, dataset_id: mls.value}
      if mls.type === "bridge" do
        case ResoMemberApi.getMembersByName(mls_q, a.current_user.full_name) do
          {:ok, agents} -> {:noreply, assign(socket, agents: agents, mls: mls, show_auth_button: true)}
          {:error, _err} -> {:noreply, assign(socket, agents: [], mls: mls, show_auth_button: false)}
        end
      else
        {:noreply, assign(socket, mls: mls, show_auth_button: true)}
      end
    end
  end

  def handle_event("toggle-warning", _, socket) do
    {:noreply, assign(socket, brokerage_approved: true)}
  end

  def handle_event("select-agent", %{"agent_key" => ak}, %{assigns: a} = socket) do
    agent = Enum.find(a.agents, fn ag -> ag["MemberKey"] === ak end)
    {:noreply, assign(socket, agent: agent)}
  end

  def handle_event("authorize", %{"login-id" => l_id}, %{assigns: a} = socket) do
    if a.mls.type === "bridge" do
      with {:ok, agent} <- agent_check(l_id, socket),
                    _ <- IO.inspect(agent, label: "AG"),
           {:ok, _mls} <- Mls.create_credential(%{
                        agent_id: a.current_user.id,
                        access_token: @token,
                        member_key: (if agent, do: agent["MemberKey"], else: nil),
                        office_key: (if agent, do: agent["Office"]["OfficeKey"], else: nil),
                        mls_name: a.mls.text,
                        dataset_id: a.mls.value,
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

  defp agent_check(login_id, %{assigns: a}) do
    if a.agent do
      {:ok, a.agent}
    else
      if login_id do
        ResoMemberApi.getMemberByMlsId(%{access_token: @token, dataset_id: a.mls.value}, login_id)
      else
        nil
      end
    end
  end
end
