defmodule ExcyteWeb.Insight.SubjectPropertyLive do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("subject_property.html", assigns)

  def update(_assigns, socket) do
    {:ok, socket}
  end
end
