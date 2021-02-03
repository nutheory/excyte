defmodule ExcyteWeb.Agent.GettingStartedLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Mls}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("getting_started.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    mls_list = Mls.get_credentials(%{user_id: cu.id})
    profile = Agents.get_default_profile(cu.id)

    current_step =
      if length(mls_list) > 0 && cu.current_account_status !== "active", do: "payment", else: "mls"

    {:ok, assign(socket,
      current_user: cu,
      account: account,
      return_to: "/agent/getting-started?step=mls",
      current_step: current_step,
      mls_list: mls_list,
      profile: profile
    )}
  end

  def handle_params(params, _uri, socket) do
    {:noreply, assign(socket, current_step: params["step"])}
  end

  def handle_info({:update_mls, %{current_user: cu, mls_list: creds}}, socket) do
    {:noreply, assign(socket, current_user: cu, mls_list: creds)}
  end
end
