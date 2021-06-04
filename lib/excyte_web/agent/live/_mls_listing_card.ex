defmodule ExcyteWeb.Agent.MlsListingCard do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("mls_listing_card.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, listing: assigns.listing)}
  end
end
