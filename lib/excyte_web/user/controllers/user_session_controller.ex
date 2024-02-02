defmodule ExcyteWeb.UserSessionController do
  use ExcyteWeb, :controller
  import Phoenix.Component, only: [to_form: 1]

  alias Excyte.Accounts
  alias ExcyteWeb.UserAuth

  plug :put_view, ExcyteWeb.UserView

  def new(conn, _params) do
    render(conn, "login.html", error_message: nil)
  end

  def create(conn, %{"user" => user_params}) do
    %{"email" => email, "password" => password} = user_params

    if user = Accounts.get_user_by_email_and_password(email, password) do
      UserAuth.log_in_user(conn, user, user_params)
    else
      render(conn, "login.html", error_message: "Invalid email or password")
    end
  end

  def create_from_token(conn, %{"email" => email, "token" => token}) do
    case Accounts.get_user_by_email_and_token(token) do
      {:ok, user} -> UserAuth.log_in_user(conn, user, %{})
      err ->
        IO.inspect(err, label: "TOKEN LOGIN ERR")
        render(conn, "login.html", error_message: "Invalid email or token")
    end
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Logged out successfully.")
    |> UserAuth.log_out_user()
  end
end
