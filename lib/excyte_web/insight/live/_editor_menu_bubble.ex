defmodule ExcyteWeb.Components.EditorMenuBubble do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("editor_menu_bubble.html", assigns)
end
