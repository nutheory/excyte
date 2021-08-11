defmodule ExcyteWeb.Agent.Dashboard do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Clients, Insights}
  alias ExcyteWeb.{AgentView, Helpers.Utilities}

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if cu.completed_setup === false do
      if cu.brokerage_role && String.contains?(cu.brokerage_role, ["owner", "admin"]) do
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

  def handle_info({:query_type, %{insight_type: type}}, %{assigns: a} = socket) do
    agent_insights = Insights.get_published_agent_insights(a.current_user.id, type.value)
    {:noreply, assign(socket, insights: agent_insights, current_view: type)}
  end

  def handle_info({:save_client, attrs}, %{assigns: a} = socket) do
    case Clients.create_client(attrs) do
      {:ok, %{new_client: client}} ->
        IO.inspect(client, label: "CLI")
        {:noreply, put_flash(socket, :info, "#{Utilities.insight_type_to_name(a.insight_to_send.type)} sent to #{client.email}")
                                  |> assign(show_send_panel: false, insight_to_send: nil)}
      {:error, err} ->
        IO.inspect(err, label: "ERR")
        {:noreply, socket}
    end
  end

  def handle_event("delete-insight", %{"ins-id" => iid}, %{assigns: a} = socket) do
    {id, _} = Integer.parse(iid)
    case Insights.delete_insight(%{id: id, created_by_id: a.current_user.id}) do
      {:ok, ins} ->
        insights = Enum.reject(a.insights, fn i -> i.id === ins.id end)
        {:noreply, assign(socket, insights: insights)}
      {:error, err} -> IO.inspect(err, label: "DEL ERR")
    end
  end

  def handle_event("send-insight", %{"ins-id" => uuid}, %{assigns: a} = socket) do
    insight = Enum.find(a.insights, fn ins -> ins.uuid === uuid end)
    {:noreply, assign(socket, show_send_panel: true, insight_to_send: insight)}
  end

  def handle_event("close-send-insight", _, socket) do
    {:noreply, assign(socket, show_send_panel: false)}
  end
end
