defmodule ExcyteWeb.Insight.EditorMenuFloat do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("editor_menu_float.html", assigns)
end
