defmodule ExcyteWeb.UserLiveAuth do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts}
  alias ExcyteWeb.{Helpers.Utilities}

  def on_mount(:default, _params, %{"user_token" => token} = _sesh, socket) do
    cu = Accounts.get_user_by_session_token(token)
    socket = assign(socket, :current_user, cu)

    if cu do
      period_end = cu.account.current_period_end
      IO.inspect(period_end > DateTime.utc_now, label: "PE")
      role = if cu.brokerage_id, do: "brokerage", else: "agent"
      cond do
        !cu.completed_setup ->
          {:halt, redirect(socket, to: "/#{role}/getting-started")}
        # !period_end || !(period_end > DateTime.utc_now) ->
        #   {:halt, redirect(socket, to: "/settings?section=subscription")}
        true ->
          {:cont, socket}
      end
    else
      {:cont, socket}
    end
  end

  def on_mount(:default, _params, _sesh, socket) do
    {:cont, socket}
  end
end
