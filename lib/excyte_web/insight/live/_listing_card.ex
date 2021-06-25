defmodule ExcyteWeb.Insight.ListingCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listing_card.html", assigns)

  def update(assigns, socket) do
    # action =
    # if assigns.action.key === assigns.listing["ListingKey"] do
    #    assigns.action.perform
    # else
    #   ""
    # end
    {:ok, assign(socket,
      listing: assigns.listing,
      added: assigns.added
    )}
  end

end
