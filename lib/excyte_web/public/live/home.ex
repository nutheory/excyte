defmodule ExcyteWeb.Home do
  use ExcyteWeb, :live_public_view
  alias ExcyteWeb.{PublicView}

  def render(assigns), do: PublicView.render("home.html", assigns)

  @impl true
  def mount(_params, _sesh, socket) do
    {:ok, socket}
  end

end
