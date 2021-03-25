defmodule ExcyteWeb.Agent.DashboardLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls.ResoApi}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if cu.completed_setup === false do
      {:ok, push_redirect(socket, to: "/agent/getting-started", current_user: cu)}
    else
      mls = cu.current_mls
      {:ok, agent_listings} = ResoApi.get_listings_by_agent(mls, %{list_agent_key: mls.member_key})
      IO.inspect(agent_listings, label: "AG")
      {:ok, assign(socket, current_user: cu, recents: agent_listings.listings)}
    end
  end

end
