defmodule ExcyteWeb.UserLiveAuth do
  import Phoenix.LiveView
  alias Excyte.{Accounts}
  alias ExcyteWeb.{Helpers.Utilities}

  def on_mount(:default, _params, %{"user_token" => token} = _sesh, socket) do
    socket = assign_new(socket, :current_user, fn ->
      Accounts.get_user_by_session_token(token)
    end)

    cu = socket.assigns.current_user
    if cu.completed_setup do
      {:cont, socket}
    else
      if cu.brokerage_role && Utilities.authorized?(cu.brokerage_role) do
        {:halt, redirect(socket, to: "/auth/brokerage/getting-started")}
      else
        {:halt, redirect(socket, to: "/auth/agent/getting-started")}
      end
    end
  end
end
