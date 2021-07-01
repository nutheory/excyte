defmodule ExcyteWeb.Brokerage.Dashboard do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls.ResoApi, Insights}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if cu.completed_setup === false do
      if cu.brokerage_id do
        {:ok, push_redirect(socket, to: "/brokerage/getting-started", current_user: cu)}
      else
        {:ok, push_redirect(socket, to: "/agent/getting-started", current_user: cu)}
      end
    else
      agent_insights = Insights.get_published_agent_insights(cu.id, "all")
      {:ok, assign(socket,
        current_user: cu,
        insights: agent_insights,
        show_send_panel: false,
        insight_to_send: nil,
        current_view: %{value: "all", text: "View All"}
      )}
    end
  end
end
