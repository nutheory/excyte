defmodule ExcyteWeb.Insight.SubjectProperty do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("subject_property.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      mls: assigns.current_user.current_mls,
      manual_subject: assigns.manual_subject,
      possible_subject_properties: assigns.possible_subject_properties
    )}
  end
end
