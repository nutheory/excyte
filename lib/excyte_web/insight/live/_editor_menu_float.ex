defmodule ExcyteWeb.Components.EditorMenuFloat do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("editor_menu_float.html", assigns)
end
