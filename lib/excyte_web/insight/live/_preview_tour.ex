defmodule ExcyteWeb.Insight.PreviewTour do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("preview_tour.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      listing: assigns.listing,
      added: assigns.added,
      note: (if Map.has_key?(assigns.listing, :excyte_note), do: assigns.listing.excyte_note, else: ""),
      show_remarks: false,
      editing_note: false,
      error: nil
    )}
  end

  def handle_event("toggle-edit-note", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, editing_note: !a.editing_note)}
  end

  def handle_event("add-tour-stop", _, %{assigns: a} = socket) do
    send self(), {:add_tour_stop, %{listing: Map.merge(a.listing, %{excyte_note: a.note})}}
    {:noreply, socket}
  end

  def handle_event("add-note", %{"note" => note}, socket) do
    {:noreply, assign(socket, note: note)}
  end

  def handle_event("update-listing", _, %{assigns: a} = socket) do
    send self(), {:update_selected_listing, %{listing: Map.merge(a.listing, %{excyte_note: a.note})}}
    {:noreply, socket}
  end

  def handle_event("toggle-remarks", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_remarks: !a.show_remarks)}
  end
end
