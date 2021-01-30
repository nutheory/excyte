defmodule ExcyteWeb.Insight.PreviewComp do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("preview_comp.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, listing: assigns.listing, added: assigns.added)}
  end
end
