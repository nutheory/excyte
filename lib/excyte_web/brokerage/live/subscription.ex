defmodule ExcyteWeb.Brokerage.Subscription do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Accounts.Billing, EmailNotifiers}
  alias ExcyteWeb.{BrokerageView}

  def render(assigns), do: BrokerageView.render("subscription.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    plans = Application.get_env(:excyte, :brokerage_plans) |> Billing.get_plans(true)
    default_plan = Enum.find(plans, fn pl -> pl.default === true end)

    current_plan =
      if cu.account.source_subscription_id do
        case Billing.get_current_subscription(cu.account.source_subscription_id) do
          {:ok, sub} -> sub
          {:error, err} -> {:ok, assign(socket, errors: [err])}
        end
      else
        nil
      end

    {:ok,
     assign(socket,
       plans: plans,
       account: cu.account,
       payment_success: false,
       updating_plan: if(current_plan, do: false, else: true),
       max_agents: default_plan.max_agents,
       errors: [],
       selected_plan: default_plan,
       current_plan: current_plan,
       current_user: cu
     )}
  end

  def handle_event(
        "payment-success",
        %{"id" => pm_id, "mode" => "update"},
        %{assigns: %{account: acc} = a} = socket
      ) do
    with {:ok, sub} <-
           Billing.update_payment_method(%{
             customer_id: acc.source_customer_id,
             subscription_id: acc.source_subscription_id,
             payment_id: pm_id
           }),
         {:ok, _} <- Accounts.update_account_details(acc.id, %{payment: pm_id}) do
      {:noreply, assign(socket, current_plan: sub, payment_success: true)}
    else
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end

  def handle_event(
        "payment-success",
        %{"id" => pm_id},
        %{assigns: %{account: acc, selected_plan: pl} = a} = socket
      ) do
    with {:ok, %{sub: sub, sub_item: item}} <-
           create_subscription(%{
             account: acc,
             plan_id: pl.plan_id,
             payment_id: pm_id,
             max_agents: a.max_agents
           }),
         {:ok, account} <-
           update_account(acc.id, %{
             sub: sub,
             item: item,
             payment: pm_id,
             max_agents: a.max_agents
           }),
         {:ok, _} <- EmailNotifiers.deliver_welcome_email(a.current_user, account) do
      {:noreply, assign(socket, payment_success: true)}
    else
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end

  def handle_event("update-plan", _, %{assigns: %{account: acc, selected_plan: pl} = a} = socket) do
    case Billing.update_subscription(%{
           account: acc,
           price_id: pl.plan_id,
           max_agents: a.max_agents
         }) do
      {:ok, sub} -> {:noreply, assign(socket, current_plan: sub, updating_plan: false)}
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end

  def handle_event("toggle-selected-plan", %{"option" => opt}, %{assigns: a} = socket) do
    plan = Enum.find(a.plans, fn pl -> pl.plan_id === opt end)
    {:noreply, assign(socket, selected_plan: plan, max_agents: plan.max_agents)}
  end

  def handle_event("toggle-updating-plan", _, %{assigns: a} = socket) do
    selected = Enum.find(a.plans, fn pl -> pl.plan_id === a.current_plan.plan.id end)

    {:noreply,
     assign(socket,
       updating_plan: !a.updating_plan,
       selected_plan: selected,
       max_agents: selected.max_agents
     )}
  end

  defp create_subscription(%{account: acc, plan_id: pl_id, payment_id: pm_id, max_agents: max}) do
    Billing.create_subscription(%{
      account: acc,
      price_id: pl_id,
      payment_id: pm_id,
      max_agents: max
    })
  end

  defp update_account(id, %{sub: sub, item: item, payment: pm_id, max_agents: max}) do
    Accounts.update_account_details(id, %{
      status: sub.status,
      amount: sub.plan.amount,
      source_plan_id: sub.plan.id,
      payment_method_id: pm_id,
      latest_invoice_id: sub.latest_invoice,
      agent_limit: max,
      current_period_end: DateTime.from_unix!(sub.current_period_end),
      source_subscription_id: sub.id,
      source_subscription_item_id: item.id
    })
  end
end
