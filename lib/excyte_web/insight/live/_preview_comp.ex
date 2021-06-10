defmodule ExcyteWeb.Insight.PreviewComp do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("preview_comp.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      excyte_price: assigns.listing.excyte_suggested_price,
      listing: assigns.listing,
      added: assigns.added,
      show_remarks: false,
      error: nil
    )}
  end

  def handle_event("toggle-remarks", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_remarks: !a.show_remarks)}
  end

  def handle_event("change-adj", %{"adj" => adj}, %{assigns: a} = socket) do
    {:noreply, assign(socket, excyte_price: adj)}
  end

  def handle_event("toggle-adj", %{"action" => act}, %{assigns: a} = socket) do
    val =
      if act === "apply" do
        a.listing.excyte_suggested_price
      else
        a.listing.default_price.value
      end
    {:noreply, assign(socket, excyte_price: val)}
  end

  def handle_event("add-comp", _, %{assigns: a} = socket) do
    send self(), {:add_comp, %{listing: Map.merge(a.listing, %{excyte_price: a.excyte_price})}}
    {:noreply, socket}
  end
end
