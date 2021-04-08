defmodule ExcyteWeb.AgentPricingPlan do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{PublicView, Settings.Payment}

  def render(assigns), do: PublicView.render("agent_plan.html", assigns)

  def handle_event("choose-plan", %{"value" => plan_id}, socket) do
    send_update(Payment, [id: :payment, plan_id: plan_id])
    {:noreply, socket}
  end
end
