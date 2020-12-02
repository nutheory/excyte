defmodule ExcyteWeb.Settings.PaymentLive do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.UserView
  alias Excyte.{Accounts, Accounts.Billing}

  def render(assigns), do: UserView.render("payment.html", assigns)

  def update(%{plan_id: plan_id}, socket) do
    {:ok, assign(socket, plan: plan_details(plan_id))}
  end

  def update(assigns, socket) do
    {:ok, assign(socket,
      intent: nil,
      payment_success: false,
      plan: plan_details(assigns.current_user.account.source_plan_id),
      current_user: assigns.current_user
    )}
  end

  def handle_event("payment-success", %{"id" => pm_id}, %{assigns: %{current_user: cu, plan: pl}} = socket) do
    cu_id = cu.account.source_customer_id
    # Add confirmation email
    {:ok, receipt} =
      with {:ok, subscription} <- Billing.create_subscription(%{
              customer_id: cu_id,
              plan_id: pl.plan_id,
              payment_id: pm_id,
              trial_length: 30
          }),
          {:ok, acc} <- Accounts.update_account_details(cu.account_id, %{
              status: subscription.status,
              amount: subscription.plan.amount,
              source_plan_id: subscription.plan.id,
              payment_method_id: pm_id,
              source_subscription_id: subscription.id
          }) do
        {:ok, %{
          name: pl.name,
          description: pl.description,
          invoice_pdf: subscription.latest_invoice.invoice_pdf,
          status: subscription.latest_invoice.status,
          charge: subscription.latest_invoice.charge,
          total: subscription.latest_invoice.total,
          subscription: subscription.latest_invoice.subscription,
        }}
    else
      err -> err
    end
    {:noreply, assign(socket, payment_success: true, receipt: receipt)}
  end

  def handle_event("change-plan", params, socket) do
    {:noreply, assign(socket,  plan: nil)}
  end

  defp plan_details(plan_id) do
    Enum.find(Application.get_env(:excyte, :pricing_items), fn p -> p.plan_id === plan_id end)
  end
end
