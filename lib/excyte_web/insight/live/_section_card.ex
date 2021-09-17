defmodule ExcyteWeb.Insight.SectionCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("section_card.html", assigns)

  def update(%{section: section}, socket) do
    {:ok, assign(socket,
      name: section.name,
      description: section.description,
      type: section.type,
      enabled: section.enabled,
      position: section.position,
      temp_id: section.temp_id,
      component_name: section.component_name
    )}
  end
end
