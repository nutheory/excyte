defmodule ExcyteWeb.BrokeragesMarketing do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{PublicView}

  def render(assigns), do: PublicView.render("brokerages_marketing.html", assigns)

  def mount(socket) do
    {:ok, socket}
  end
end
