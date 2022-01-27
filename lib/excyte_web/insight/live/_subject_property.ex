defmodule ExcyteWeb.Insight.SubjectProperty do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("subject_property.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      errors: assigns.errors,
      mls_options: assigns.mls_options,
      current_mls: assigns.current_mls,
      subject: assigns.subject
    )}
  end
end
