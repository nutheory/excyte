defmodule ExcyteWeb.Insight.Listings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("listings.html", assigns)

  def update(assigns, socket) do
    # action =
    # if assigns.action.key === assigns.listing["ListingKey"] do
    #    assigns.action.perform
    # else
    #   ""
    # end
    {:ok, assign(socket,
      filters: assigns.filters,
      comps: assigns.comps,
      selected_comps: assigns.selected_comps,
      subject: assigns.subject
    )}
  end
end
