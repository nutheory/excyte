defmodule ExcyteWeb.Insight.EditorMenuCommands do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("editor_menu_commands.html", assigns)
end
