defmodule ExcyteWeb.Agent.GettingStartedLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Mls}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("getting_started.html", assigns)

  def mount(%{"step" => step}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    mls_list = Mls.get_credentials(%{user_id: cu.id})
    profile = Agents.get_default_profile(cu.id)

    current_step =
      cond do
        step !== nil -> step
        length(mls_list) === 0 -> "mls"
        cu.current_account_status !== "active" -> "payment"
        length(profile) === 0 -> "profile"
        #TODO: set setup completed
        true -> "mls"
      end

    {:ok, assign(socket,
      current_user: cu,
      account: account,
      mls_list: mls_list,
      return_to: "/agent/getting-started/#{current_step}",
      current_step: current_step,
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
