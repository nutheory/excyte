defmodule ExcyteWeb.Insight.Listings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      filters: assigns.filters,
      listings: assigns.listings,
      selected_listings: assigns.selected_listings,
      subject: assigns.subject,
      show_filters: assigns.show_filters
    )}
  end
end
