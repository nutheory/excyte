defmodule ExcyteWeb.Insight.Listings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      form: to_form(%{}),
      filters: assigns.filters,
      search: assigns.search,
      listings: assigns.listings,
      selected_listings: assigns.selected_listings,
      status_updated_options: assigns.status_updated_options,
      subject: assigns.subject,
      show_listing_ids_form: false,
      show_filters: assigns.show_filters
    )}
  end

  def handle_event("toggle-finder", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_listing_ids_form: !a.show_listing_ids_form)}
  end
end
