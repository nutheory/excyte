defmodule ExcyteWeb.ProtectedHeader do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Agents, Mls}
  alias ExcyteWeb.LayoutView

  def render(assigns), do: LayoutView.render("protected_header.html", assigns)

  def update(assigns, socket) do
    mls_list = Mls.get_credentials(%{user_id: assigns.current_user.id})
    profile = Agents.get_default_profile(assigns.current_user.id)

    {:ok, assign(socket, %{
      current_user: assigns.current_user,
      mls_options: mls_list,
      profile: profile
    })}
  end

  def handle_event("switch-mls", %{"dataset_id" => did},  %{assigns: assigns} = socket) do

  end
end
