defmodule ExcyteWeb.Settings.Payment do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.UserView
  alias Excyte.{Accounts, Accounts.Billing}

  def render(assigns), do: UserView.render("payment.html", assigns)

  def update(_assigns, socket) do
    # account = if assigns.current_user, do: Accounts.get_account!(assigns.current_user.account_id), else: nil
    # plans = Application.get_env(:excyte, :agent_plans)
    # {:ok, assign(socket,
    #   plans: plans,
    #   account: account,
    #   payment_success: false,
    #   plan: Map.fetch!(Enum.find(plans, fn p -> p.default === true end), :stripe_id),
    #   current_user: assigns.current_user
    # )}
    {:ok, socket}
  end

  # def handle_event("payment-success", %{"id" => pm_id}, %{assigns: %{account: account, plan: pl}} = socket) do
  #   cust_id = account.source_customer_id
  #   # Add confirmation email
  #   {:ok, receipt} =
  #     with {:ok, subscription} <- Billing.create_subscription(%{
  #             customer_id: cust_id,
  #             plan_id: pl.plan_id,
  #             payment_id: pm_id,
  #             trial_length: 30
  #         }),
  #         {:ok, _acc} <- Accounts.update_account_details(account.id, %{
  #             status: subscription.status,
  #             amount: subscription.plan.amount,
  #             source_plan_id: subscription.plan.id,
  #             payment_method_id: pm_id,
  #             source_subscription_id: subscription.id
  #         }) do
  #       {:ok, %{
  #         name: pl.name,
  #         description: pl.description,
  #         invoice_pdf: subscription.latest_invoice.invoice_pdf,
  #         status: subscription.latest_invoice.status,
  #         charge: subscription.latest_invoice.charge,
  #         total: subscription.latest_invoice.total,
  #         subscription: subscription.latest_invoice.subscription,
  #       }}
  #   else
  #     err -> err
  #   end
  #   {:noreply, assign(socket, payment_success: true, receipt: receipt)}
  # end

  # def handle_event("change-plan", _params, socket) do
  #   {:noreply, assign(socket,  plan: nil)}
  # end

end
