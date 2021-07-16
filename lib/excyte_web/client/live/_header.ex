defmodule ExcyteWeb.Client.Header do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("header.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      created_by: assigns.created_by,
      insight_type: assigns.insight_type
    )}
  end
end
