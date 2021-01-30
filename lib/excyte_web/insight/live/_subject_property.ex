defmodule ExcyteWeb.Insight.SubjectProperty do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("subject_property.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, mls: assigns.current_user.current_mls)}
  end
end
