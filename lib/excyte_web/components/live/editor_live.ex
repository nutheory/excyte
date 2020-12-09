defmodule ExcyteWeb.Components.EditorLive do
  use ExcyteWeb, :live_view

  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("editor.html", assigns)

  def mount(params, session, socket) do
    {:ok, socket}
  end


end
