defmodule ExcyteWeb.Components.FindById do
  use ExcyteWeb, :live_component
  # alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("find_by_id.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, mls: assigns.mls)}
  end

  # def handle_event("submit-ids", %{"listing-ids" => lids}, %{assigns: %{mls: mls}} = socket) do
  #   ids = String.split(lids, [", ", " ", ",", "/ ", "/"])
  #   this needs subject to process results
  #   res = ResoApi.get_by_Listing_ids(mls, ids, nil)
  #   send self() {:callback, %{results:res}}
  #   {:noreply, socket}
  # end
end
