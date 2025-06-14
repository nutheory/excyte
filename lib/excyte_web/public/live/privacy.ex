defmodule ExcyteWeb.Public.Privacy do
  use ExcyteWeb, :live_public_view
  alias ExcyteWeb.{PublicView}

  @impl true
  def render(assigns), do: PublicView.render("privacy.html", assigns)

  @impl true
  @spec mount(any, any, any) :: {:ok, any}
  def mount(_params, _sesh, socket) do
    {:ok, socket}
  end
end
