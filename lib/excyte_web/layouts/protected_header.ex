defmodule ExcyteWeb.ProtectedHeader do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts, Mls}
  alias ExcyteWeb.LayoutView

  def render(assigns), do: LayoutView.render("protected_header.html", assigns)

  @impl true
  def update(%{current_user: cu}, socket) do
    mls_list = Mls.get_credentials(%{agent_id: cu.id})
    if cu.current_mls === nil || Enum.empty?(cu.current_mls) do
      {:ok, assign(socket,
        current_user: cu,
        current_mls_id: nil,
        current_mls_name: nil,
        mls_options: mls_list
      )}
    else
      {:ok, assign(socket,
        current_user: cu,
        current_mls_id: cu.current_mls.id,
        current_mls_name: cu.current_mls.mls_name,
        mls_options: mls_list
      )}
    end
  end

  def handle_event("switch-mls", %{"mls-id" => mid}, %{assigns: assigns} = socket) do
    mls = Enum.find(assigns.mls_options, fn x -> x.id === String.to_integer(mid) end)
    {:ok, user} = Accounts.update_user(assigns.current_user.id, %{current_mls: %{
      id: mls.id,
      dataset_id: mls.dataset_id,
      access_token: mls.access_token,
      mls_name: mls.mls_name,
      member_key: mls.member_key,
      count: length(assigns.mls_options)
    }})
    {:noreply, assign(socket,
      current_user: user,
      current_mls_id: user.current_mls.id,
      current_mls_name: user.current_mls.mls_name
    )}
  end
end
