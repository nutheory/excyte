defmodule ExcyteWeb.Insight.SelectedTour do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("selected_tour.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      selected: assigns.selected
    )}
  end

  def handle_event("sort-listings", %{"listings" => [_|_] = listings}, %{assigns: a} = socket) do
    rearranged =
      Enum.map(listings, fn %{"id" => id, "position" => pos} ->
        Enum.find(a.selected, fn %{listing_id: lid} -> id === lid end)
        |> Map.put(:position, pos)
      end)
    send self(), {:tour_sorted, %{selected: Enum.sort_by(rearranged, & &1.position)}}
    {:noreply, socket}
  end

end
