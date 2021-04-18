defmodule ExcyteWeb.Brokerage.InviteTeam do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Brokerages, Brokerages.Invitation}
  alias ExcyteWeb.{Helpers.Utilities, BrokerageView}

  def render(assigns), do: BrokerageView.render("invite_team.html", assigns)

  def mount(_params, %{"user_token" => token}, %{assigns: a} = socket) do
    cu = Accounts.get_user_by_session_token(token)
    cs = Brokerages.change_invitation(%Invitation{}, %{})

    {:ok, assign(socket,
      changeset: cs,
      current_user: cu,
      invitations: []
    )}
  end

  def handle_event("validate", %{"invitation" => ivt}, %{assigns: a} = socket) do
    {:noreply, assign(socket, changeset: Brokerages.change_invitation(%Invitation{}, ivt))}
  end

  def handle_event("save", %{"invitation" => ivt}, %{assigns: a} = socket) do
    {:noreply, socket}
  end
end
