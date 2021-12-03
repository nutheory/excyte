defmodule ExcyteWeb.Insight.FilterListings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("filter_listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      subject: assigns.subject,
      status_options: Utilities.status_options,
      status_updated_options: assigns.status_updated_options,
      property_options: Utilities.property_options(assigns.filters.dataset_id),
      listing_count: assigns.listing_count,
      filters: assigns.filters)}
  end
end
