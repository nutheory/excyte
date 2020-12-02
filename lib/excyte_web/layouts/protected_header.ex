defmodule ExcyteWeb.ProtectedHeader do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts}
  alias ExcyteWeb.LayoutView

  def render(assigns), do: LayoutView.render("protected_header.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,  %{current_user: assigns.current_user})}
  end
end
