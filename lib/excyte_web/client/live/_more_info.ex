defmodule ExcyteWeb.Client.MoreInfo do
  use ExcyteWeb, :live_component
  alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("more_info.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      listing: nil,
      show_panel: false
    )}
  end

  def handle_event("toggle-more-info", _payload, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_panel: !a.show_panel)}
  end

  @impl true
  def handle_event("get-more-info", %{"pId" => mpr_id, "lId" => id}, %{assigns: a} = socket) do
    IO.inspect(a.current_user.current_mls, label: "CU")
    case ResoApi.get_by_listing_id(a.current_user.current_mls, id) do
      {:ok, %{listing: listing}} -> {:noreply, assign(socket, show_panel: true, listing: listing)}
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end

  # defp
end
