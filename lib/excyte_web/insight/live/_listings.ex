defmodule ExcyteWeb.Insight.Listings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      filters: assigns.filters,
      search: "",
      search_results: [],
      listings: assigns.listings,
      selected_listings: assigns.selected_listings,
      subject: assigns.subject,
      show_filters: assigns.show_filters
    )}
  end

  def handle_event("finder_update", %{"search" => srch}, %{assigns: a} = socket) do
    res =
      if length(srch) > 2 do
        Enum.filter(a.listings, fn lst ->

        end)
      else
        []
      end
    {:noreply, assign(socket, finder_input: srch, search_results: res)}
  end
end
