defmodule ExcyteWeb.Components.SuperSelectLive do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ ComponentView}

  def render(assigns), do: ComponentView.render("super_select.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, assigns)}
  end


end
