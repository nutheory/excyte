defmodule ExcyteWeb.Agent.DashListing do
  use ExcyteWeb, :live_component
  # alias Excyte.{Accounts, Agents, Agents.Contact, Agents.Profile}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("dash_listing.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, listing: assigns.listing)}
  end
end
