defmodule ExcyteWeb.Components.Gallery do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("gallery.html", assigns)

  def update(assigns, socket) do
    media = Enum.filter(assigns.media, fn m -> m["Disabled"] !== true end)
    {:ok, assign(socket,
      media: tl(media),
      gid: assigns.gid,
      count: length(media),
      current_item: hd(media)
    )}
  end
end
