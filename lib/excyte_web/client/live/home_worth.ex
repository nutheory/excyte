defmodule ExcyteWeb.Client.HomeWorth do
  use ExcyteWeb, :live_client_view

  alias ExcyteWeb.{ClientView}

  @impl true
  def render(assigns), do: ClientView.render("home_worth.html", assigns)

  @impl true
  def mount(%{"uid" => uid}, _sesh, socket) do

    {:ok, socket}
  end

  # @impl true
  # def handle_info(:init_address, ) do

  # end
end
