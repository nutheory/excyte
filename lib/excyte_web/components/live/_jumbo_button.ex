defmodule ExcyteWeb.Components.JumboButton do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("jumbo_button.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      action: assigns.action,
      color: assigns.color,
      title: assigns.title,
      text: assigns.text
    )}
  end
end
