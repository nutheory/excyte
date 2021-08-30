defmodule ExcyteWeb.Components.ImageEditor do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("image_editor.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      show_image_panel: assigns.show_image_panel,
      aspect_ratio: assigns.aspect_ratio,
      upload_text: assigns.upload_text,
      width: assigns.width,
      height: assigns.height,
      name: assigns.name,
      title: assigns.title,
      image_url: assigns.image_url,
      callback: assigns.callback
    )}
  end

  def handle_event("toggle-upload-editor-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_image_panel: !a.show_image_panel)}
  end
end
