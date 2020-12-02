defmodule ExcyteWeb.Agent.GettingStartedLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("getting_started.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_full_user_by_session_token(token)

    current_step =
      if length(cu.mls_credentials) > 0 && cu.account.status !== "active", do: "payment", else: "mls"

    {:ok, assign(socket,
      current_user: cu,
      return_to: "/agent/getting-started?step=mls",
      current_step: current_step
    )}
  end

  def handle_event("disconnect", %{"value" => cred_id}, socket) do
    cu = Mls.destroy_credential(
      %{cred_id: cred_id, user_id: socket.assigns.current_user.id}
    )

    {:noreply, assign(socket, current_user: cu)}
  end

  def handle_params(params, _uri, socket) do
    {:noreply, assign(socket, current_step: params["step"])}
  end
end
