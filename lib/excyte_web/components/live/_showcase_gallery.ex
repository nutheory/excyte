defmodule ExcyteWeb.Components.ShowcaseGallery do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("showcase_gallery.html", assigns)

  def update(assigns, socket) do
    {:ok,
     assign(socket,
       main: List.first(assigns.media),
       previews: if(length(assigns.media) > 1, do: Enum.drop(assigns.media, 1), else: []),
       #  hidden: elem(groups, 1),
       listing_id: assigns.listing_id
     )}
  end
end
