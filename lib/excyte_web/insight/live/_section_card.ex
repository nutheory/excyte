defmodule ExcyteWeb.Insight.SectionCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("section_card.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      name: assigns.name,
      description: assigns.description,
      type: assigns.type,
      enabled: assigns.enabled,
      position: assigns.position,
      temp_id: assigns.temp_id
    )}
  end
end
