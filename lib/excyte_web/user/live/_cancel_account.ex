defmodule ExcyteWeb.Settings.CancelAccount do
  use ExcyteWeb, :live_component
    alias ExcyteWeb.UserView
  alias Excyte.{Accounts}

   def render(assigns), do: UserView.render("cancel_account.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      account: assigns.account,
      errors: []
    )}
  end

  def handle_event("cancel_submit", %{"cancel_account" => %{"confirm_text" => text}}, %{assigns: a} = socket) do
    if text === String.downcase(a.current_user.email) do
      if a.current_user.brokerage_role === "owner" do
        case Accounts.cancel_subscription(a.current_user.account_id) do
          {:ok, res} ->
            {:noreply, put_flash(socket, :info, "Your account has been schreduled for deletion, you will not be charged again.")}
          {:error, err} ->
            {:noreply, assign(socket, errors: [%{message: "Something went wrong. #{err}"} | a.errors])}
        end
      else
        {:noreply, assign(socket, errors: [%{message: "You must be the account owner (the original person that signed up) to cancel your account."} | a.errors])}
      end
    else
      {:noreply, assign(socket, errors: [%{message: "Please enter the email address above to cancel your account"} | a.errors])}
    end
  end
end
