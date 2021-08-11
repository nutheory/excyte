defmodule ExcyteWeb.Brokerage.Subscription do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Accounts.Billing, EmailNotifiers}
  alias ExcyteWeb.{BrokerageView}

  def render(assigns), do: BrokerageView.render("subscription.html", assigns)

  def mount(_params, %{"user_token" => token, "return_to" => rt}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    plans = Application.get_env(:excyte, :brokerage_plans)
    plan =
      if account.source_plan_id do
        Enum.find(plans, fn p -> p.stripe_id === account.source_plan_id end)
      else
        Enum.find(plans, fn p -> p.default === true end)
      end

    {:ok, assign(socket,
      plans: plans,
      account: account,
      payment_success: false,
      errors: [],
      plan: plan,
      current_user: cu
    )}
  end

  def handle_event("payment-method-success", %{"id" => pm_id}, %{assigns: %{account: acc, plan: pl} = a} = socket) do
    with {:ok, %{sub: sub, sub_item: item}} <- create_or_update_stripe_subscription(%{account: acc, plan: pl, payment_id: pm_id}),
         {:ok, _acc} <- Accounts.update_account_details(acc.id, %{
                        status: sub.status,
                        amount: sub.plan.amount,
                        source_plan_id: sub.plan.id,
                        payment_method_id: pm_id,
                        agent_limit: pl.max_agent_count,
                        current_period_end: DateTime.from_unix!(sub.current_period_end),
                        source_subscription_id: sub.id,
                        source_subscription_item_id: item.id
                       }),
          {:ok, _} <- EmailNotifiers.deliver_welcome_email(a.current_user, acc) do
        receipt = %{
          name: pl.name,
          invoice_pdf: sub.latest_invoice.invoice_pdf,
          status: sub.latest_invoice.status,
          charge: sub.latest_invoice.charge,
          total: sub.latest_invoice.total,
          subscription: sub.latest_invoice.subscription,
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

  defp create_or_update_stripe_subscription(%{account: acc, plan: pl, payment_id: pm_id}) do
    # These need to be seperate actions
    # if acc.source_subscription_item_id do
    #   Billing.update_subscription(%{
    #     subscription_id: acc.source_subscription_id,
    #     price_id: pl.stripe_id
    #   })
    #   |> IO.inspect(label: "SUBS")
    # else
      Billing.create_subscription(%{
        customer_id: acc.source_customer_id,
        price_id: pl.stripe_id,
        payment_id: pm_id,
        trial_length: pl.trial_period
      })
    # end
  end
end
