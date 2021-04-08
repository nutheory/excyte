defmodule ExcyteWeb.BrokeragePricing do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{PublicView}

  def render(assigns), do: PublicView.render("brokerage_pricing.html", assigns)

  def mount(socket) do
    plans = Application.get_env(:excyte, :pricing_items)
    |> Enum.sort_by(&(&1.amount), :asc)

    cu = if Map.has_key?(socket, :current_user), do: socket.current_user, else: nil

    {:ok, assign(socket, plans: plans, current_user: cu)}
  end
end
