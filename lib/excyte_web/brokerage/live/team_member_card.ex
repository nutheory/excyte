defmodule ExcyteWeb.Brokerage.TeamMember do
  use ExcyteWeb, :live_component
  # alias Excyte.{Accounts, Agents, Agents.Contact, Agents.Profile}
  alias ExcyteWeb.BrokerageView

  def render(assigns), do: BrokerageView.render("manage_team.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      member: assigns.member,
      show_controls: false
    )}
  end

end
