defmodule ExcyteWeb.Brokerage.Dashboard do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts, Insights}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    agent_insights = Insights.get_published_agent_insights(cu.id, "all")
    {:ok, assign(socket,
      current_user: cu,
      insights: agent_insights,
      show_send_panel: false,
      insight_to_send: nil,
      current_view: %{value: "all", text: "View All"}
    )}
  end
end
