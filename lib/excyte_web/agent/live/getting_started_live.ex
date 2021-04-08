defmodule ExcyteWeb.Agent.GettingStartedLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Mls}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("getting_started.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    account = Accounts.get_account!(cu.account_id)
    mls_list = Mls.get_credentials(%{agent_id: cu.id})
    profile = Agents.get_agent_profile(cu.id)

    {:ok, assign(socket,
      current_user: cu,
      account: account,
      mls_list: mls_list,
      profile: profile
    )}
  end

  def handle_params(params, _uri, %{assigns: a} = socket) do
    current_step =
      cond do
        params["step"] !== nil -> params["step"]
        length(a.mls_list) === 0 -> "mls"
        a.current_user.current_account_status !== "active" -> "payment"
        a.profile.inserted_at !== a.profile.updated_at -> "profile"
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
        return_to: "/agent/getting-started?step=#{current_step}"
      )}
    end
  end

  def handle_info({:update_mls, %{current_user: cu, mls_list: creds}}, socket) do
    {:noreply, assign(socket, current_user: cu, mls_list: creds)}
  end
end
