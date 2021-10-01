defmodule ExcyteWeb.Components.ShowcaseGallery do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("showcase_gallery.html", assigns)

  def update(assigns, socket) do
    media = Enum.filter(assigns.media, fn m -> m["Disabled"] !== true end)
    groups = Enum.split(media, 4)
    {:ok, assign(socket,
      main: hd(elem(groups, 0)),
      previews: tl(elem(groups, 0)),
      hidden: elem(groups, 1),
      listing_id: assigns.listing_id
    )}
  end
end
