defmodule ExcyteWeb.Client.NotFound do
  use ExcyteWeb, :live_client_view
  # alias Excyte.{Insights, Accounts, Agents, Brokerages}
  alias ExcyteWeb.{ ClientView}

  @impl true
  def render(assigns), do: ClientView.render("not_found.html", assigns)

  @impl true
  def mount(_, _, socket) do
    {:ok, socket}
  end
end
