defmodule ExcyteWeb.UserResetPasswordController do
  use ExcyteWeb, :controller
  import Phoenix.Component, only: [to_form: 1]

  alias Excyte.Accounts

  plug :put_view, ExcyteWeb.UserView
  plug :get_user_by_reset_password_token when action in [:edit, :update]

  def new(conn, _params) do
    render(conn, "send_password_reset.html", form: to_form(%{email: ""}))
  end

  def create(conn, %{"email" => email}) do
    if user = Accounts.get_user_by_email(email) do
      Accounts.deliver_user_reset_password_instructions(
        user,
        &Routes.user_reset_password_url(conn, :edit, &1)
      )
    end

    # Regardless of the outcome, show an impartial success/error message.
    conn
    |> put_flash(
      :info,
      "If your email is in our system, you will receive instructions to reset your password shortly."
    )
    |> redirect(to: "/auth")
  end

  def edit(conn, _params) do
    render(conn, "password_reset.html",
      form: to_form(Accounts.change_user_password(conn.assigns.user))
    )
  end

  # Do not log in the user after reset password to avoid a
  # leaked token giving the user access to the account.
  def update(conn, %{"user" => user_params}) do
    case Accounts.reset_user_password(conn.assigns.user, user_params) do
      {:ok, _} ->
        conn
        |> put_flash(:info, "Password reset successfully.")
        |> redirect(to: Routes.user_session_path(conn, :new))

      {:error, changeset} ->
        render(conn, "password_reset.html", form: changeset)
    end
  end

  defp get_user_by_reset_password_token(conn, _opts) do
    %{"token" => token} = conn.params

    if user = Accounts.get_user_by_reset_password_token(token) do
      conn |> assign(:user, user) |> assign(:token, token)
    else
      conn
      |> put_flash(:error, "Reset password link is invalid or it has expired.")
      |> redirect(to: "/")
      |> halt()
    end
  end
end
