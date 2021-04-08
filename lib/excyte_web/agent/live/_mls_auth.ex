defmodule ExcyteWeb.Agent.MlsAuth do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Mls}
  alias ExcyteWeb.AgentView

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
    mls_redirect =
      OpenIDConnect.authorization_uri(
        String.to_atom(mls),
        %{
          excyte_user_id: socket.assigns.current_user.id,
          return_to: return_to
        }
      )
    {:noreply, redirect(socket, external: mls_redirect)}
  end

  def handle_event("disconnect", %{"cred-id" => cred_id}, socket) do
    new_creds = Mls.destroy_credential(%{
      cred_id: String.to_integer(cred_id),
      user_id: socket.assigns.current_user.id
    })

    send self(), {:update_mls, %{current_user: socket.assigns.current_user, mls_list: new_creds}}
    {:noreply, assign(socket, current_user: socket.assigns.current_user, mls_list: new_creds)}
  end
end
