defmodule ExcyteWeb.Insight.CreateBuyerTour do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create_buyer_tour.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do

  end
end
