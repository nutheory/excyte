defmodule ExcyteWeb.Insight.SubjectForm do
  use ExcyteWeb, :live_component
  alias Excyte.{Properties, Properties.Property}
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("subject_form.html", assigns)

  def update(%{subject: subj} = assigns, socket) do
    subject = if subj, do: subj, else: %Property{}
    cs = Properties.change_property(subject)
    {:ok, assign(socket,
      changeset: cs,
      subject: subject,
      label: assigns.label,
      feature_options: Utilities.feature_options()
      )}
  end
end
