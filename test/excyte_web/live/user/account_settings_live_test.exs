defmodule ExcyteWeb.AccountSettingsLiveTest do
  use ExcyteWeb.ConnCase
  import Phoenix.LiveViewTest
  import Excyte.AccountsFixtures
  alias Excyte.Accounts

  setup :register_and_log_in_user

  describe "GET /settings" do
    test "renders settings page", %{conn: conn} do
      {:ok, _, html} = live(conn, "/settings")
      assert html =~ "Settings</h1>"
    end

    test "redirects if user is not logged in" do
      conn = build_conn()
      conn = get(conn, "/settings")
      assert redirected_to(conn) == Routes.user_session_path(conn, :new)
    end
  end

  describe "PUT /settings change password" do
    test "updates the user password and resets tokens", %{conn: conn, user: user} do
      {:ok, view, _} = live(conn, "/settings")
      view
      |> form("#change-password-form", %{
          "current_password" => valid_user_password(),
          "user" => %{
            "password" => "new valid1Password",
            "password_confirmation" => "new valid1Password"
          }
        })
      |> render_submit()

      assert Accounts.get_user_by_email_and_password(user.email, "new valid1Password")
    end

    test "does not update password on invalid data", %{conn: conn} do
      {:ok, view, _} = live(conn, "/settings")
      view
      |> form("#change-password-form", %{
          "current_password" => "invalid",
          "user" => %{
            "password" => "too sh",
            "password_confirmation" => "does no"
          }
        })
      |> render_submit()


      assert render(view) =~ "should be at least 8 character(s)"
      assert render(view) =~ "does not match password"
      assert render(view) =~ "is not valid"
    end
  end

  describe "PUT /settings change email" do
    @tag :capture_log
    test "updates the user email", %{conn: conn, user: user} do
      {:ok, view, _} = live(conn, "/settings")
      view
      |> form("#change-email-form",  %{
        "current_password" => valid_user_password(),
        "user" => %{"email" => unique_agent_email()}
      })
      |> render_submit()

      assert render(view) =~ "A link to confirm your email"
      assert Accounts.get_user_by_email(user.email)
    end

    test "does not update email on invalid data", %{conn: conn} do
      {:ok, view, _} = live(conn, "/settings")
      view
      |> form("#change-email-form", %{
          "current_password" => "invalid",
          "user" => %{"email" => "with spaces"}
        })
      |> render_submit()

      assert render(view) =~ "must have the @ sign and no spaces"
    end
  end

  describe "GET /users/settings/confirm_email/:token" do
    setup %{user: user} do
      email = unique_agent_email()

      token =
        extract_user_token(fn url ->
          Accounts.deliver_update_email_instructions(%{user | email: email}, user.email, url)
        end)

      %{token: token, email: email}
    end

    test "updates the user email once", %{conn: conn, user: user, token: token, email: email} do
      conn = get(conn, Routes.user_settings_path(conn, :confirm_email, token))
      assert redirected_to(conn) == "/settings"
      assert get_flash(conn, :info) =~ "Email changed successfully"
      refute Accounts.get_user_by_email(user.email)
      assert Accounts.get_user_by_email(email)

      conn = get(conn, Routes.user_settings_path(conn, :confirm_email, token))
      assert redirected_to(conn) == "/settings"
      assert get_flash(conn, :error) =~ "Email change link is invalid or it has expired"
    end

    test "does not update email with invalid token", %{conn: conn, user: user} do
      conn = get(conn, Routes.user_settings_path(conn, :confirm_email, "oops"))
      assert redirected_to(conn) == "/settings"
      assert get_flash(conn, :error) =~ "Email change link is invalid or it has expired"
      assert Accounts.get_user_by_email(user.email)
    end

    test "redirects if user is not logged in", %{token: token} do
      conn = build_conn()
      conn = get(conn, Routes.user_settings_path(conn, :confirm_email, token))
      assert redirected_to(conn) == Routes.user_session_path(conn, :new)
    end
  end
end
