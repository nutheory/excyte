defmodule ExcyteWeb.Insight.FilterListings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("filter_listings.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      subject: assigns.subject,
      status_options: Utilities.status_options,
      filters: assigns.filters)}
  end
end
