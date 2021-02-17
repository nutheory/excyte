defmodule ExcyteWeb.Components.Dropdown do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ ComponentView}

  def render(assigns), do: ComponentView.render("dropdown.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, assigns)}
  end
end
