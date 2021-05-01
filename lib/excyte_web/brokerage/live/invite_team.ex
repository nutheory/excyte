defmodule ExcyteWeb.Brokerage.InviteTeam do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Accounts.User, Brokerages}
  alias ExcyteWeb.{Endpoint, Helpers.Utilities, BrokerageView}

  def render(assigns), do: BrokerageView.render("invite_team.html", assigns)

  def mount(_params, %{"user_token" => token}, %{assigns: a} = socket) do
    cu = Accounts.get_user_by_session_token(token)
    bp = Brokerages.get_brokerage_profile(cu.brokerage_id)
    cs = Accounts.change_invitation(%User{}, %{})
    ivts = Brokerages.get_invitations(cu.brokerage_id)

    {:ok, assign(socket,
      changeset: cs,
      current_user: cu,
      brokerage: bp,
      message_user_edited: false,
      invitations: ivts,
      errors: []
    )}
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
      br = if ivt["brokerage_role"] === true, do: "admin", else: "agent"
      with {:ok, invite} <- Accounts.create_brokerage_invitation(Map.merge(ivt, %{
                              "brokerage_id" => a.current_user.brokerage_id,
                              "account_id" => a.current_user.account_id,
                              "brokerage_role" => br,
                              "invited_by_id" => a.current_user.id
                            })),
           {:ok, _} <- Accounts.deliver_user_invitation_instructions(
                        invite,
                        &Routes.user_invitation_url(Endpoint, :accept, &1)
                      ) do

        {:noreply, put_flash(socket, :info, "Invite sent to #{ivt["email"]}.")
                   |> assign(invitations: [invite | a.invitations])}
      else
        {:error, %Ecto.Changeset{} = err_cs} -> {:noreply, assign(socket, changeset: err_cs)}
      end
    else
      {:noreply, assign(socket, errors: [%{message: ""}])}
    end
  end

  defp default_message(%{to: to, from: from, brokerage: brokerage}) do
    "Dear #{to},\nYou have been invited by #{from} to join the team from #{brokerage} using Excyte.IO..."
  end
end
