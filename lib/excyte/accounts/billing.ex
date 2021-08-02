defmodule Excyte.Accounts.Billing do
  @moduledoc """
    Methods for interacting with Stripes API
  """
  alias Excyte.{Accounts, Activities}
  alias Stripe.{Customer, PaymentMethod, Session, Subscription, Plan, Invoice}

  def create_checkout_session(price_id) do
    url = Application.get_env(:excyte, :base_url)
    case Session.create(%{
      success_url: "#{url}stripe/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "#{url}stripe/canceled",
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [%{
        quantity: 1,
        price: price_id
      }]
    }) do
      {:ok, res} ->
        IO.inspect(res, label: "RES")
        res
      {:error, err} -> Activities.handle_errors(err, "Billing.create_checkout_session")
    end
  end

  def get_invoice_history(customer_id, limit) do
    limit = if limit === nil, do: 10, else: limit
    Invoice.list(%{customer: customer_id, limit: limit})
  end

  def get_plans(active) do
    {:ok, plans} = Plan.list(%{active: active})

    Enum.map(plans.data, fn plan ->
      %{
        plan_id: plan.id,
        name: plan.nickname,
        prod_id: plan.product,
        amount: plan.amount,
        interval: plan.interval
      }
    end)
  end

  def get_current_plan(plan_id) do
    {:ok, plan} = Plan.retrieve(plan_id)

    %{
      plan_id: plan.id,
      name: plan.nickname,
      prod_id: plan.product,
      amount: plan.amount,
      interval: plan.interval
    }
  end

  def create_subscription(%{customer_id: cid, price_id: pid, payment_id: pmid, trial_length: tl}) do
    with {:ok, payment_method} <- attach_payment_to_customer(cid, pmid),
         {:ok, _cust_id} <- set_default_payment_for_customer(cid, payment_method.id),
         {:ok, subscription} <- create_initial_subscription(cid, pid, tl) do
      {:ok, subscription}
    else
      {:error, err} ->
        Activities.handle_errors(err, "Billing.create_stripe_subscription catch_with")

      err ->
        Activities.handle_errors(err, "Billing.create_stripe_subscription catch_with... no error")
    end
  end

  def update_subscription(%{subscription_id: sub_item_id, price_id: price_id}) do
    case SubscriptionItem.update(sub_item_id, %{items: [%{price: price_id}]}) do
      {:ok, subscription} ->
        {:ok, subscription}
    end
  end

#   def change_payment_setup(customer_id) do
#     case SetupIntent.create(%{customer: customer_id}) do
#       {:ok, si} -> {:ok, %{secret: si.client_secret}}
#       {:error, err} -> {:error, err}
#     end
#   end

  def change_payment_finish(customer_id, pm_id) do
    Customer.update(customer_id, %{invoice_settings: %{default_payment_method: pm_id}})
    {:ok, %{updated: true}}
  end

  def get_payment_method(customer_id) do
    {:ok, pm} =
      Customer.retrieve(customer_id, expand: ["invoice_settings.default_payment_method"])

    if pm.invoice_settings.default_payment_method != nil do
      %{
        payment_method_id: pm.invoice_settings.default_payment_method.id,
        last_four: pm.invoice_settings.default_payment_method.card.last4,
        brand: pm.invoice_settings.default_payment_method.card.brand,
        exp_month: pm.invoice_settings.default_payment_method.card.exp_month,
        exp_year: pm.invoice_settings.default_payment_method.card.exp_year
      }
    else
      nil
    end
  end

  def cancel_subscription(acc_id) do
    acc = Accounts.get_account!(acc_id)

    with {:ok, _} <- Subscription.update(acc.source_subscription_id, %{cancel_at_period_end: true}),
         {:ok, updated} <-
           Accounts.update_account_details(acc_id, %{
             status: "inactive",
             source_subscription_id: nil,
             source_plan_id: nil
           }) do
      {:ok, updated}
    else
      {:error, cancel_err} ->
        Activities.handle_errors(cancel_err, "Billing.cancel_subscription")
    end
  end

  def reactivate_subscription(acc_id) do
    acc = Accounts.get_account!(acc_id)

    with {:ok, _} <- Subscription.update(acc.source_subscription_id, %{cancel_at_period_end: false}),
         {:ok, updated} <-
           Accounts.update_account_details(acc_id, %{
             status: "inactive",
             source_subscription_id: nil,
             source_plan_id: nil
           }) do
      {:ok, updated}
    else
      {:error, cancel_err} ->
        Activities.handle_errors(cancel_err, "Billing.cancel_subscription")
    end
  end

#   # PRIVATE
  defp attach_payment_to_customer(customer_id, payment_id) do
    case PaymentMethod.attach(%{payment_method: payment_id, customer: customer_id}) do
      {:ok, payment} ->
        {:ok, payment}

      {:error, pay_err} ->
        Activities.handle_errors(pay_err, "Billing.create_subscription/PaymentMethod.attach")
    end
  end

  defp set_default_payment_for_customer(customer_id, payment_id) do
    case Customer.update(customer_id, %{invoice_settings: %{default_payment_method: payment_id}}) do
      {:ok, cust_id} ->
        {:ok, cust_id}

      {:error, default_err} ->
        Activities.handle_errors(default_err, "Billing.create_subscription/Customer.update")
    end
  end

  defp create_initial_subscription(customer_id, plan_id, trial_length) do
    case Subscription.create(%{
      customer: customer_id,
      items: [%{price: plan_id}],
      trial_period_days: trial_length
    },
           expand: ["latest_invoice.payment_intent"]
         ) do
      {:ok, sub} ->
        item = hd(sub.items.data)
        {:ok, %{sub: sub, sub_item: item}}

      {:error, sub_err} ->
        Activities.handle_errors(sub_err, "Billing.create_subscription/Subscription.create")
    end
  end

end
