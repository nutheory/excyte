defmodule ExcyteWeb.Settings.AccountLive do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts}
  alias ExcyteWeb.{UserView, Helpers.Utilities}
  alias ExcyteWeb.Router.Helpers, as: Routes

  def render(assigns), do: UserView.render("account.html", assigns)

  def update(assigns, socket) do
    email = Accounts.change_user_email(assigns.current_user)
    password = Accounts.change_user_password(assigns.current_user)

    {:ok, assign(socket,
      current_user: assigns.current_user,
      email_changeset: email,
      password_changeset: password,
      email_saved: false,
      password_saved: false
    )}
  end

  def handle_event("email-validate", _attrs, socket) do
    {:noreply, socket}
  end

  def handle_event("email-save", %{"current_password" => pass, "user" => up}, socket) do
    user = socket.assigns.current_user
    case Accounts.apply_user_email(user, pass, up) do
      {:ok, applied_user} ->
        Accounts.deliver_update_email_instructions(
          applied_user,
          user.email,
          &Routes.user_settings_url(socket, :confirm_email, &1)
        )
        {:noreply, assign(socket, email_saved: true)}
      {:error, err} -> {:noreply, assign(socket, email_changeset: err)}
    end
  end

  def handle_event("password-validate", _attrs, socket) do
    {:noreply, socket}
  end

  def handle_event("password-save", %{"current_password" => cp, "user" => attrs}, socket) do
    user = socket.assigns.current_user
    case Accounts.update_user_password(user, cp, Utilities.key_to_atom(attrs)) do
      {:ok, _} -> {:noreply, assign(socket, password_saved: true)}
      {:error, err} -> {:noreply, assign(socket, password_changeset: err)}
    end
  end
end
