defmodule ExcyteWeb.Public.Terms do
  use ExcyteWeb, :live_public_view
  alias ExcyteWeb.PublicView

  def render(assigns), do: PublicView.render("terms.html", assigns)

  # @impl true
  @spec mount(any, any, any) :: {:ok, any}
  def mount(_params, _sesh, socket) do
    {:ok, socket}
  end

end
