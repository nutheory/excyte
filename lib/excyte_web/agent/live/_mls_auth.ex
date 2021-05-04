defmodule ExcyteWeb.Agent.MlsAuth do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Mls}
  alias ExcyteWeb.{AgentView, UserConfirmationController}

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
      mls_opts: opts,
      mls_list: mls_list
    )}
  end

  def handle_event("authorize", %{"mls" => mls, "page" => return_to}, socket) do
    # mls_redirect =
    #   OpenIDConnect.authorization_uri(
    #     String.to_atom(mls),
    #     %{
    #       excyte_user_id: socket.assigns.current_user.id,
    #       return_to: return_to
    #     }
    #   )
    # {:noreply, redirect(socket, external: mls_redirect)}

    UserConfirmationController.bypass_open_id(socket.assigns.current_user.id, %{
      "access_token" => "6baca547742c6f96a6ff71b138424f21",
      "member_key" => "M_5dba1fa4a2a50c5b81f082d9",
      "office_key" => "O_5dba1f95cf17cd5b43eb0255",
      "refresh_token" => "3o0iipzrpiknijyxtjrugkt29",
      "code" => "5465c65",
      "mls_name" => "TEST",
      "dataset_id" => "test",
      "id_token" => "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazci",
      "expires_in" => "3600"
    })
    mls_list = Mls.get_credentials(%{agent_id: socket.assigns.current_user.id})
    send self(), {:update_mls, %{current_user: socket.assigns.current_user, mls_list: mls_list}}
    {:noreply, assign(socket, current_user: socket.assigns.current_user, mls_list: mls_list)}
    # {:noreply, assign(socket, mls_list: mls_list)}
  end

  def handle_event("disconnect", %{"cred-id" => cred_id}, socket) do
    new_creds = Mls.destroy_credential(%{
      cred_id: String.to_integer(cred_id),
      agent_id: socket.assigns.current_user.id
    })

    send self(), {:update_mls, %{current_user: socket.assigns.current_user, mls_list: new_creds}}
    {:noreply, assign(socket, current_user: socket.assigns.current_user, mls_list: new_creds)}
  end
end
