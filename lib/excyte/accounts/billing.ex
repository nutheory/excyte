defmodule Excyte.Accounts.Billing do
  @moduledoc """
    Methods for interacting with Stripes API
  """
  alias Excyte.{Activities}
  alias Stripe.{Customer, PaymentMethod, Session, Subscription, Plan, Invoice}

  @trial_days 21

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

  def get_plans(prod_id, active) do
    {:ok, plans} = Plan.list(%{product: prod_id, active: active})

    Enum.reduce(plans.data, [], fn plan, acc ->
      if plan.nickname !== "free" do
        [%{
          plan_id: plan.id,
          name: plan.nickname,
          prod_id: plan.product,
          amount: plan.amount,
          default: (if Map.has_key?(plan.metadata, "default"), do: true, else: false),
          max_agents: plan.metadata["agent_limit"],
          interval: plan.interval,
          trial_period_days: plan.trial_period_days
        } | acc]
      else
        acc
      end
    end)
    |> Enum.sort_by(&(&1.amount))
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

  def get_current_subscription(sub_id) do
    case Subscription.retrieve(sub_id) do
      {:ok, subscription} -> {:ok, subscription}
      {:error, err} ->
        Activities.handle_errors(err, "Billing.get_current_subscription")
        {:error, %{message: "Oops. We could not find your Subscription. Please retry again later or contact us at (949) 280-8977."}}
    end
  end

  def create_subscription(%{account: acc, price_id: pid, payment_id: pm_id, max_agents: ma}) do
    with {:ok, payment_method} <- attach_payment_to_customer(acc.source_customer_id, pm_id),
         {:ok, _cust_id} <- set_default_payment_for_customer(acc.source_customer_id, payment_method.id),
         {:ok, subscription} <- create_initial_subscription(acc, pid, payment_method.id, ma) do
      {:ok, subscription}
    else
      {:error, err} ->
        Activities.handle_errors(err, "Billing.create_subscription catch_with")
      err ->
        Activities.handle_errors(err, "Billing.create_subscription catch_with... no error")
    end
  end

  def update_subscription(%{account: acc, price_id: price_id, max_agents: max}) do
    case Subscription.update(acc.source_subscription_id, %{
      cancel_at_period_end: false,
      proration_behavior: "none",
      items: [%{
        id: acc.source_subscription_item_id,
        price: price_id,
        metadata: %{
           agent_limit: max
        }
      }]
    }) do
      {:ok, subscription} -> {:ok, subscription}
      {:error, err} ->
        Activities.handle_errors(err, "Billing.get_current_method_payment")
        {:error, %{message: "Oops. There was a error. Please do not retry. Contact us at (949) 280-8977."}}
    end
  end

  def update_payment_method(%{customer_id: cid, subscription_id: sub_id, payment_id: pm_id}) do
    with {:ok, payment_method} <- attach_payment_to_customer(cid, pm_id),
         {:ok, _cust_id} <- set_default_payment_for_customer(cid, payment_method.id),
         {:ok, subscription} <- Subscription.update(sub_id, %{default_payment_method: payment_method.id}) do
      {:ok, subscription}
    else
      {:error, err} ->
        Activities.handle_errors(err, "Billing.update_subscription catch_with")
      err ->
        Activities.handle_errors(err, "Billing.update_subscription catch_with... no error")
    end
  end

  def get_current_payment_method(pm_id) do
    case PaymentMethod.retrieve(pm_id) do
      {:ok, pm} -> pm
      {:error, err} ->
        Activities.handle_errors(err, "Billing.get_current_method_payment")
        nil
    end
  end

  def cancel_subscription(%{account: acc}) do
    case Subscription.update(acc.source_subscription_id, %{
      cancel_at_period_end: true,
      metadata: %{
        excyte_account_id: acc.id
      }}) do
      {:ok, sub} -> {:ok, sub}
      {:error, cancel_err} ->
        Activities.handle_errors(cancel_err, "Billing.cancel_subscription")
    end
        #  {:ok, updated} <-
        #    Accounts.update_account_details(acc_id, %{
        #      status: "inactive",
        #      source_subscription_id: nil,
        #      source_plan_id: nil
        #    }) do
  end

  def reactivate_subscription(sub_id) do
    case Subscription.update(sub_id, %{cancel_at_period_end: false}) do
      {:error, cancel_err} ->
        Activities.handle_errors(cancel_err, "Billing.cancel_subscription")
    end
        #  {:ok, updated} <-
        #    Accounts.update_account_details(acc_id, %{
        #      status: "inactive",
        #      source_subscription_id: nil,
        #      source_plan_id: nil
        #    }) do
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

  defp create_initial_subscription(acc, plan_id, pm_id, max) do
    case Subscription.create(%{
      customer: acc.source_customer_id,
      default_payment_method: pm_id,
      metadata: %{
        excyte_account_id: acc.id,
        agent_limit: max
      },
      items: [%{price: plan_id}],
      trial_period_days: @trial_days
    }) do
      {:ok, sub} ->
        item = hd(sub.items.data)
        {:ok, %{sub: sub, sub_item: item}}

      {:error, sub_err} ->
        Activities.handle_errors(sub_err, "Billing.create_subscription/Subscription.create")
    end
  end

end
