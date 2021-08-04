defmodule ExcyteWeb.Brokerage.TeamMember do
  use ExcyteWeb, :live_component
  # alias Excyte.{Accounts, Agents, Agents.Contact, Agents.Profile}
  alias ExcyteWeb.BrokerageView

  def render(assigns), do: BrokerageView.render("team_member.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      member: assigns.member,
      show_actions: assigns.show_actions
    )}
  end
end
