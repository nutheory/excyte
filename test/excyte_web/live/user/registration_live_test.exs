defmodule ExcyteWeb.RegistrationLiveTest do
  use ExcyteWeb.ConnCase
  use Bamboo.Test
  import Phoenix.LiveViewTest
  import Excyte.AccountsFixtures

  describe "GET registration" do
    test "renders registration view", %{conn: conn} do
      {:ok, view, html} = live(conn, "/registration")
      assert html =~ "Create a new account"
      assert render(view) =~ "show password"
    end

    test "redirects if already logged in", %{conn: conn} do
      assert {:error, {:redirect, %{to: "/agent/dash"}}} = conn |> log_in_user(agent_fixture()) |>live("/registration")
    end
  end

  describe "POST /registration" do
    @tag :capture_log
    test "creates account and sends confirmation email", %{conn: conn} do
      {:ok, view, _} = live(conn, "/registration")
      email = unique_agent_email()

      view
      |> form("#agent-registration-form",
        agent: %{
          full_name: "Jimmy Crack Corn",
          email: email,
          password: valid_user_password()
        })
      |> render_submit()

      assert {:error, {:redirect, %{to: "/log_in"}}}
    end

    test "render errors for invalid data", %{conn: conn} do
      {:ok, view, _} = live(conn, "/registration")

      view
      |> form("#agent-registration-form",
        agent: %{
          full_name: "Jimmy Crack Corn",
          email: "email.com",
          password: valid_user_password()
        })
      |> render_submit()

      assert render(view) =~ "must have the @ sign"
    end
  end
end
