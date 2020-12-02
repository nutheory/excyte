defmodule ExcyteWeb.Insight.ListingLive do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listing.html", assigns)

  def update(assigns, socket) do
    action =
    if assigns.action.key === assigns.listing["ListingKey"] do
       assigns.action.perform
    else
      ""
    end
    {:ok, assign(socket, l: assigns.listing, sel: assigns.selected, action: action)}
  end

end
