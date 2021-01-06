defmodule ExcyteWeb.Agent.DashboardLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_full_user(token)
    IO.inspect(cu, label: "CUUUUUUUU")
    if cu.user.completed_setup === false do
      {:ok, push_redirect(socket, to: "/agent/getting-started", current_user: cu)}
    else
      {:ok, assign(socket, current_user: cu.user)}
    end
  end
end
