defmodule ExcyteWeb.Brokerage.GettingStarted do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Brokerages, Mls}
  alias ExcyteWeb.BrokerageView

  def render(assigns), do: BrokerageView.render("getting_started.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    mls_list = Mls.get_credentials(%{agent_id: cu.id})
    bk_profile = Brokerages.get_brokerage_profile(cu.brokerage_id)
    profile = Agents.get_agent_profile(cu.id)
    {:ok, assign(socket,
      current_user: cu,
      account: account,
      mls_list: mls_list,
      brokerage_profile: bk_profile,
      profile: profile
    )}
  end

  def handle_params(params, _uri, %{assigns: a} = socket) do
    current_step =
      cond do
        params["step"] !== nil -> params["step"]
        length(a.mls_list) === 0 -> "mls"
        a.account.current_period_end === nil -> "payment"
        a.brokerage_profile.updated_by_user === false -> "brokerage_profile"
        a.profile.updated_by_user === false -> "agent_profile"
        true -> "completed"
      end

    if current_step === "completed" do
      case Accounts.update_user(a.current_user.id, %{completed_setup: true}) do
        {:ok, _} ->
          {:noreply,
            socket
            |> put_flash(:info, "Profile created successfully")
            |> push_redirect(to: "/agent/dash")}
        {:error, err} -> {:noreply, put_flash(socket, :error, "An error has occured. #{err}")}
      end
    else
      {:noreply, assign(socket,
        current_step: current_step,
        return_to: "/brokerage/getting-started?step=#{current_step}"
      )}
    end
  end
end
