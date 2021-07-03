defmodule ExcyteWeb.Insight.AutoAdjustments do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("auto_adjustments.html", assigns)

  def update(_assigns, socket) do
    {:ok, socket}
  end
end
