defmodule ExcyteWeb.Components.FindByIdLive do
  use ExcyteWeb, :live_component
  alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("find_by_id.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, mls: assigns.mls)}
  end

  def handle_event("submit-ids", %{"listing-ids" => lids}, %{assigns: %{mls: mls}} = socket) do
    ids = String.split(lids, [", ", " ", ",", "/ ", "/"])
    res = ResoApi.get_by_Listing_ids(mls, ids)
    {:noreply, socket}
  end
end
