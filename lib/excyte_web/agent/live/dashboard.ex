defmodule ExcyteWeb.Agent.Dashboard do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Clients, Insights}
  alias ExcyteWeb.{AgentView, Helpers.Utilities}

  @insight_types [
                  %{value: "all", text: "View All"},
                  %{value: "cma", text: "CMA"},
                  %{value: "showcase", text: "Showcase"},
                  %{value: "buyer_tour", text: "Buyer Tour"}
                ]

  def render(assigns), do: AgentView.render("dashboard.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    agent_insights = Insights.get_published_agent_insights(cu.id, "all")
    {:ok, assign(socket,
      current_user: cu,
      insights: agent_insights,
      insight_types: @insight_types,
      show_send_panel: false,
      insight_to_send: nil,
      current_view: hd(@insight_types)
    )}
  end

  def handle_info({:save_client, attrs}, %{assigns: a} = socket) do
    case Clients.create_client(attrs) do
      {:ok, %{new_client: client}} ->
        {:noreply, put_flash(socket, :info, "#{Utilities.insight_type_to_name(a.insight_to_send.type)} sent to #{client.email}")
                                  |> assign(show_send_panel: false, insight_to_send: nil)}
      {:error, _err} ->
        {:noreply, socket}
    end
  end

  def handle_event("query_type", %{"option" => type, "attr" => attr }, %{assigns: a} = socket) do
    view = Enum.find(a.insight_types, fn types -> types.value === type end)
    agent_insights = Insights.get_published_agent_insights(a.current_user.id, type)
    {:noreply, assign(socket, insights: agent_insights, current_view: view)}
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
