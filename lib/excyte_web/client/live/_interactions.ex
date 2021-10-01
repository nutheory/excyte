defmodule ExcyteWeb.Client.Interactions do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("interactions.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      created_by: assigns.created_by,
      insight: assigns.insight,
      show_comm: false
    )}
  end
  def handle_event("toggle-comm", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_comm: !a.show_comm)}
  end

end
