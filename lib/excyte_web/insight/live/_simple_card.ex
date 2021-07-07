defmodule ExcyteWeb.Insight.SimpleCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("simple_card.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, listing: assigns.listing)}
  end
end
