defmodule ExcyteWeb.Insight.FilterListings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("filter_listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, subject: assigns.subject, filters: assigns.filters)}
  end

end
