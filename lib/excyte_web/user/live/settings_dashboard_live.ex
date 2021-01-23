defmodule ExcyteWeb.Settings.DashboardLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts}
  alias ExcyteWeb.UserView

  def render(assigns), do: UserView.render("settings_dashboard.html", assigns)

  def mount(_params,  %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)

    {:ok, assign(socket, current_user: cu)}
  end

  def handle_info({:delivered_email, _email}, socket) do
    {:noreply,
      socket
      |> put_flash(:info, "Email confirmation sent. Please confirm your email.")
    }
  end
end
