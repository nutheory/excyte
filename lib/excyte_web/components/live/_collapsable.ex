defmodule ExcyteWeb.Components.Collapsable do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("collapsable.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, assigns)}
  end
end
