defmodule ExcyteWeb.Components.ColorPicker do
  use ExcyteWeb, :live_component

   alias ExcyteWeb.{ComponentView}

  def render(assigns), do: ComponentView.render("color_picker.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      instance_id: assigns.instance_id,
      color: assigns.color,
      callback: assigns.callback
    )}
  end

  def handle_event("update-color", %{"id" => id, "color" => color}, %{assigns: a} = socket) do
    send self(), {a.callback, %{id: id, color: color}}
    {:noreply, assign(socket, color: color)}
  end
end
