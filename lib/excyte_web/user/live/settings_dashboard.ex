defmodule ExcyteWeb.Settings.Dashboard do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts}
  alias ExcyteWeb.UserView

  def render(assigns), do: UserView.render("settings_dashboard.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)

    {:ok,
     assign(socket,
       current_user: cu,
       section: "dash",
       return_to: "/settings?section=dash"
     )}
  end

  def handle_params(params, _uri, socket) do
    {:noreply, assign(socket, section: params["section"])}
  end

  def handle_info({:delivered_email, _email}, socket) do
    {:noreply,
     socket
     |> put_flash(:info, "Email confirmation sent. Please confirm your email.")}
  end

  def handle_info({:update_mls, %{current_user: cu, mls_list: creds}}, socket) do
    {:noreply, assign(socket, current_user: cu, mls_list: creds)}
  end
end
