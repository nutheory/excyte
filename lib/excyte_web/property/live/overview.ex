defmodule ExcyteWeb.Property.Overview do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Properties
  }

  alias ExcyteWeb.{PropertyView}

  def render(assigns), do: PropertyView.render("overview.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    listings = Properties.agent_pocket_listings(cu.id)

    {:ok,
     assign(socket,
       listings: listings,
       show_send_panel: false,
       insight_to_send: nil,
       insight: nil,
       current_user: cu
     )}
  end

  def handle_event("send-insight", %{"ins-id" => uuid}, %{assigns: a} = socket) do
    insight = Enum.find(a.insights, fn ins -> ins.uuid === uuid end)
    {:noreply, assign(socket, show_send_panel: true, insight_to_send: insight)}
  end

  def handle_event("close-send-insight", _, socket) do
    {:noreply, assign(socket, show_send_panel: false)}
  end
end
