defmodule ExcyteWeb.Client.Header do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("header.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, current_user: assigns.current_user)}
  end
end
