defmodule ExcyteWeb.Client.Interactions do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("interactions.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      created_by: assigns.created_by,
      insight: assigns.insight,
      show_comm: "init"
    )}
  end

end
