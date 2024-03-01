defmodule ExcyteWeb.UserOauth do
  use ExcyteWeb, :controller
  plug Ueberauth
  alias Ueberauth.Strategy.Helpers
  alias ExcyteWeb.Router.Helpers, as: Routes
  alias Excyte.Accounts
  alias ExcyteWeb.UserAuth

  def request(conn, _params) do
    render(conn, "request.html", callback_url: Routes.callback_url(conn))
  end

  def callback(%{assigns: %{ueberauth_failure: _fails}} = conn, _params) do
    conn
    |> put_flash(:error, "Failed to authenticate.")
    |> redirect(to: "/")
  end

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do
    case Accounts.get_user_by_email(auth) do
      {:ok, user} ->
        UserAuth.log_in_user(conn, user, auth)

      _ ->
        put_flash(conn, :error, "Could not find a user with the email address.")
        |> redirect(to: "/")
    end
  end
end
