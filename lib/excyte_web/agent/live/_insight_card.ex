defmodule ExcyteWeb.Agent.InsightCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("insight_card.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, insight: assigns.insight)}
  end
end
