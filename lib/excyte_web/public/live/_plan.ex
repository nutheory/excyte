defmodule ExcyteWeb.PricingLive.Plan do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{PublicView, Settings.PaymentLive}

  def render(assigns), do: PublicView.render("plan.html", assigns)

  def handle_event("choose-plan", %{"value" => plan_id}, socket) do
    send_update(PaymentLive, [id: :payment, plan_id: plan_id])
    {:noreply, socket}
  end
end
