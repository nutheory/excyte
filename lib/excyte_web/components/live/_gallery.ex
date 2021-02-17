defmodule ExcyteWeb.Components.Gallery do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("gallery.html", assigns)

  def update(assigns, socket) do
    idx = if Map.has_key?(assigns, :idx), do: assigns.idx, else: 0
    preview = if Map.has_key?(assigns, :show_preview), do: assigns.show_preview, else: false
    media = Enum.filter(assigns.media, fn m -> m["Disabled"] !== true end)
    {:ok, assign(socket,
      media: media,
      count: length(media),
      idx: idx,
      current_item: Enum.at(media, idx),
      show_preview: preview
    )}
  end

  def handle_event("next", _, %{assigns: assigns} = socket) do
    idx = rem(assigns.idx + 1, assigns.count)
    {:noreply, assign(socket, idx: idx, current_item: Enum.at(assigns.media, idx))}
  end

  def handle_event("prev", _, %{assigns: assigns} = socket) do
    idx = rem(assigns.idx - 1, assigns.count)
    {:noreply, assign(socket, idx: idx, current_item: Enum.at(assigns.media, idx))}
  end

  def handle_event("select", %{"idx" => idx}, %{assigns: assigns} =socket) do
    {:noreply, assign(socket, idx: idx, current_item: Enum.at(assigns.media, idx))}
  end
end
