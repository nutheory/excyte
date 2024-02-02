defmodule ExcyteWeb.UserInvitationController do
  use ExcyteWeb, :controller
  import Phoenix.Component, only: [to_form: 1]

  alias Excyte.{Accounts}
  alias ExcyteWeb.UserAuth

  plug :put_view, ExcyteWeb.UserView

  def accept(conn, %{"token" => token}) do
    case Accounts.fetch_user_from_invitation(token) do
      {:ok, user} ->
        changeset = Accounts.change_invitation(user)
        render(conn, "accept_invitation.html", form: to_form(changeset), user: user,
        token: token, password_type: "password", brokerage: user.brokerage.profile,
        password_value: "", show_text: "show password")

      err -> invalid_token(conn)
    end
  end

  def update_user(conn, %{"user" => user_params, "token" => token} = all) do
    case Accounts.accept_invitation(token, user_params) do
      {:ok, user} -> put_flash(conn, :info, "Account created successfully.")
                     |> UserAuth.log_in_user(user)
      {:error, %Ecto.Changeset{} = changeset} ->
        case Accounts.fetch_user_from_invitation(token) do
          {:ok, user} ->
            render(conn, "accept_invitation.html", form: to_form(changeset),
            user: user, token: token, brokerage: user.brokerage.profile,
            password_type: "password", password_value: "", show_text: "show password")
          _ -> invalid_token(conn)
        end
      _ -> invalid_token(conn)
    end
  end

  defp invalid_token(conn) do
    conn
    |> put_flash(:error, "Invitation link is invalid or it has expired.")
    |> redirect(to: "/")
  end
end
