defmodule ExcyteWeb.Brokerage.ManageTeam do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Accounts.User, Brokerages}
  alias ExcyteWeb.{Endpoint, Helpers.Utilities, BrokerageView}
  on_mount ExcyteWeb.UserLiveAuth

  def render(assigns), do: BrokerageView.render("manage_team.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    acc = Accounts.get_account_with_brokerage_agents(%{brokerage: cu.brokerage_id, account: cu.account_id})
    bp = Brokerages.get_brokerage_profile(cu.brokerage_id)
    cs = Accounts.change_invitation(%User{}, %{})
    {:ok, assign(socket,
      changeset: cs,
      current_user: cu,
      brokerage: bp,
      account: acc,
      message_user_edited: false,
      members: acc.users,
      errors: []
    )}
  end

  def handle_event("delete_user", %{"user-id" => uid}, %{assigns: a} = socket) do
    {id, _} = Integer.parse(uid)
    if Utilities.authorized?(a.current_user.brokerage_role) do
      case Accounts.delete_user(%{brokerage_id: a.current_user.brokerage_id, id: id}) do
        {:ok, user} ->
          members = Enum.filter(a.members, fn usr -> usr.id !== id end)
          {:noreply, assign(socket, members: members)}
        _ ->
          {:noreply, put_flash(socket, :error, "Could not delete selected user. We'll look into why.")}
      end
    else
      {:noreply, assign(socket, errors: [%{message: "You are not authorized to delete users."}])}
    end
  end

  def handle_event("validate", %{"user" => ivt} = f, %{assigns: a} = socket) do
    ue = if Enum.member?(f["_target"], "invite_message") && ivt["invite_message"] !== "", do: true, else: false
    m =
      if Enum.member?(f["_target"], "full_name") && a.message_user_edited === false do
        Map.merge(ivt, %{"invite_message" => default_message(%{
          to: ivt["full_name"],
          from: a.current_user.full_name,
          brokerage: a.brokerage.company_name
        })})
      else
        ivt
      end
    cs = Accounts.change_invitation(%User{}, m)
    {:noreply, assign(socket, changeset: cs, message_user_edited: ue)}
  end

  def handle_event("reset-message", _, %{assigns: a} = socket) do
    cs = Accounts.change_invitation(%User{},
      Map.merge(a.changeset.changes, %{"invite_message" => default_message(%{
        to: a.changeset.changes["full_name"],
        from: a.current_user.full_name,
        brokerage: a.brokerage.company_name})}))
    {:noreply, assign(socket, changeset: cs, message_user_edited: false)}
  end

  def handle_event("save", %{"user" => ivt}, %{assigns: a} = socket) do
    if Utilities.authorized?(a.current_user.brokerage_role) do
      if length(a.members) <= a.account.agent_limit do
        br = if ivt["brokerage_role"] === true, do: "admin", else: "agent"
        with {:ok, invite} <- Accounts.create_brokerage_invitation(Map.merge(ivt, %{
                                "brokerage_id" => a.current_user.brokerage_id,
                                "account_id" => a.current_user.account_id,
                                "brokerage_role" => br,
                                "current_mls" => a.current_user.current_mls,
                                "invited_by_id" => a.current_user.id
                              })),
            {:ok, _} <- Accounts.deliver_user_invitation_instructions(
                          invite,
                          &Routes.user_invitation_url(Endpoint, :accept, &1)
                        ) do

          {:noreply, put_flash(socket, :info, "Invite sent to #{ivt["email"]}.")
                    |> assign(members: [invite | a.members])}
        else
          {:error, %Ecto.Changeset{} = err_cs} -> {:noreply, assign(socket, changeset: err_cs)}
        end
      else
        {:noreply, assign(socket, errors: [%{message: "You have maxed out your agent sign ups."}])}
      end
    else
      {:noreply, assign(socket, errors: [%{message: "You are not authorized to invite agents to this account."}])}
    end
  end

  defp default_message(%{to: to, from: from, brokerage: brokerage}) do
    "Dear #{to},\nYou have been invited by #{from} to join the team from #{brokerage} using ExcyteCMA."
  end
end
