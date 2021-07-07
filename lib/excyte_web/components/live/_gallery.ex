defmodule ExcyteWeb.Components.Gallery do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("gallery.html", assigns)

  def update(assigns, socket) do
    media = Enum.filter(assigns.media, fn m -> m["Disabled"] !== true end)
    {:ok, assign(socket,
      media: (if is_list(media) && length(media) > 0, do: tl(media), else: []),
      gid: assigns.gid,
      count: length(media),
      current_item: (if is_list(media) && length(media) > 0, do: hd(media), else: nil),
    )}
  end
end
