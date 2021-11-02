defmodule ExcyteWeb.Settings.CancelAccount do
  use ExcyteWeb, :live_component
    alias ExcyteWeb.UserView
  alias Excyte.{Accounts.Billing}

   def render(assigns), do: UserView.render("cancel_account.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      account: assigns.account,
      cancelled: false,
      errors: []
    )}
  end

  def handle_event("cancel_submit", %{"cancel_account" => %{"confirm_text" => text}}, %{assigns: a} = socket) do
    if String.downcase(text) === String.downcase(a.current_user.email) do
      if a.current_user.brokerage_id do
        cancel_brokerage(%{account: a.account, current_user: a.current_user}, socket)
      else
        cancel_agent(%{account: a.account, current_user: a.current_user}, socket)
      end
    else
      {:noreply, assign(socket, errors: [%{message: "Please enter the email address above to cancel your account"} | a.errors])}
    end
  end

  defp cancel_agent(%{account: _acc, current_user: _cu}, %{assigns: a} = socket) do
    case Billing.cancel_subscription(%{account: a.account}) do
      {:ok, _res} -> {:noreply, assign(socket, cancelled: true)}
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end

  defp cancel_brokerage(%{account: _acc, current_user: cu}, %{assigns: a} = socket) do
    if cu.brokerage_role === "owner" do
      case Billing.cancel_subscription(%{account: a.account}) do
        {:ok, _} -> {:noreply, assign(socket, cancelled: true)}
        {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
      end
    else
      {:noreply, assign(socket, errors: [%{message: "You must be the account owner (the original person that signed up) to cancel your account."} | a.errors])}
    end
  end
end
