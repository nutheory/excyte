defmodule ExcyteWeb.Agent.Subscription do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Accounts.Billing}
  alias ExcyteWeb.{AgentView}

  def render(assigns), do: AgentView.render("subscription.html", assigns)

  def mount(_params, %{"user_token" => token, "return_to" => rt}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    plans = Application.get_env(:excyte, :agent_plans)

    {:ok, assign(socket,
      plans: plans,
      account: account,
      payment_success: false,
      errors: [],
      plan: Enum.find(plans, fn p -> p.default === true end),
      current_user: cu
    )}
  end

  def handle_event("payment-method-success", %{"id" => pm_id}, %{assigns: %{account: account, plan: pl}} = socket) do
    cust_id = account.source_customer_id

    with {:ok, subscription} <- Billing.create_subscription(%{
                                  customer_id: cust_id,
                                  plan_id: pl.stripe_id,
                                  payment_id: pm_id,
                                  trial_length: 30
                                }),
        {:ok, _acc} <- Accounts.update_account_details(account.id, %{
                        status: subscription.status,
                        amount: subscription.plan.amount,
                        source_plan_id: subscription.plan.id,
                        payment_method_id: pm_id,
                        current_period_end: DateTime.from_unix!(subscription.current_period_end) |> DateTime.add(3*24*60*60, :second),
                        source_subscription_id: subscription.id
                       }) do
        receipt = %{
          name: pl.name,
          invoice_pdf: subscription.latest_invoice.invoice_pdf,
          status: subscription.latest_invoice.status,
          charge: subscription.latest_invoice.charge,
          total: subscription.latest_invoice.total,
          subscription: subscription.latest_invoice.subscription,
        }
      {:noreply, assign(socket, payment_success: true, receipt: receipt)}
    else
      {:error, err} -> {:noreply, assign(socket, errors: err)}
    end
  end

  def handle_event("toggle-selected-plan", %{"option" => opt}, %{assigns: a} = socket) do
    plan = Enum.find(a.plans, fn p -> p.id === opt end)
    {:noreply, assign(socket,  plan: plan)}
  end
end
