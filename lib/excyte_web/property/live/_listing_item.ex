defmodule ExcyteWeb.Property.ListingItem do
  use ExcyteWeb, :live_component
    alias ExcyteWeb.{
    PropertyView
  }

  @impl true
  def render(assigns), do: PropertyView.render("listing_item.html", assigns)


end
