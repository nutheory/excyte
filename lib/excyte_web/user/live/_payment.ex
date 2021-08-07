defmodule ExcyteWeb.Settings.Payment do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.UserView
  alias Excyte.{Accounts, Accounts.Billing}

  def render(assigns), do: UserView.render("payment.html", assigns)

  def update(%{account: acc}, socket) do
    pm =
      if acc.payment_method_id do
        Billing.get_current_payment_method(acc.payment_method_id)
      else
        nil
      end
    {:ok, assign(socket,
      account: acc,
      payment: pm,
      status: (if pm, do: card_status(%{exp_month: pm.exp_month, exp_year: pm.exp_year}), else: nil)
    )}
  end

  defp card_status(%{exp_month: exp_month, exp_year: exp_year}) do
    year = DateTime.utc_now.year
    month = DateTime.utc_now.month
    cond do
      exp_year <= year && exp_month >= month -> %{value: "expired", text: "Expired"}
      exp_year <= year && exp_month >= (month - 4) -> %{value: "expiring_soon", text: "Expiring soon"}
      true -> %{value: "good", text: ""}
    end
  end
end
