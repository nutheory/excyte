defmodule ExcyteWeb.Insight.EditorMenuBubble do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("editor_menu_bubble.html", assigns)
end
