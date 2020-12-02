defmodule ExcyteWeb.Agent.MlsAuthLive do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Mls}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("mls_auth.html", assigns)

  def preload(list_of_assigns) do
    Enum.map(list_of_assigns, fn assigns ->
      Map.put(assigns, :mls_opts, Application.get_env(:excyte, :mls_auth_options))
    end)
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

  def handle_event("disconnect", %{"value" => cred_id}, socket) do
    cu = Mls.destroy_credential(
      %{cred_id: cred_id, user_id: socket.assigns.current_user.id}
    )

    {:noreply, assign(socket, current_user: cu)}
  end
end
