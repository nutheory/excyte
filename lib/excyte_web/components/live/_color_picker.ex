defmodule ExcyteWeb.Components.ColorPcker do
  use ExcyteWeb, :live_component

  def render(assigns), do: ComponentView.render("color_picker.html", assigns)

  def update(assigns, %{assigns: a} = socket) do
    {:ok, assign(socket,
      instance_id: a.instance_id,
      color: a.color,
      callback: a.callback
    )}
  end

  def handle_event("update-color", %{"color" => color}, %{assigns: a} = socket) do
    send self(), {a.callback, %{id: a.instance_id, color: color}}
    {:noreply, assign(socket, color: color)}
  end
end
