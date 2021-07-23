defmodule ExcyteWeb.AgentSignup do
  use ExcyteWeb, :live_public_view
  alias ExcyteWeb.{PublicView, Settings.Payment}

  def render(assigns), do: PublicView.render("agent_signup.html", assigns)

  def mount(_params, _sesh, socket) do
    plans = Application.get_env(:excyte, :pricing_items)
    |> Enum.sort_by(&(&1.amount), :asc)

    cu = if Map.has_key?(socket, :current_user), do: socket.current_user, else: nil

    {:ok, assign(socket, plans: plans, current_user: cu)}
  end

  def handle_event("choose-plan", %{"value" => plan_id}, socket) do
    send_update(Payment, [id: :payment, plan_id: plan_id])
    {:noreply, socket}
  end
end
