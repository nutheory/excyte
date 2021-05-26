defmodule ExcyteWeb.Brokerage.Theme do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Brokerages, Brokerages.Profile}
  alias ExcyteWeb.{Helpers.SimpleS3Upload, Helpers.Utilities, BrokerageView}

  def render(assigns), do: BrokerageView.render("theme.html", assigns)

  def mount(_params, %{"user_token" => token, "return_to" => rt}, socket) do
    {:ok, assign(socket,
      logo: nil,
      background: nil,
      header_text: nil,
      accent: nil,
      highlight_background: nil,
      highlight_text: nil,
      text: nil
    )}
  end
end
