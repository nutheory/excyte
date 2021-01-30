defmodule ExcyteWeb.Insight.SelectedComps do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("selected_comps.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, selected: assigns.selected)}
  end
end
