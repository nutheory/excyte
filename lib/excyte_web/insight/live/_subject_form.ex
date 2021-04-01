defmodule ExcyteWeb.Insight.SubjectForm do
  use ExcyteWeb, :live_component
  alias Excyte.{Properties, Properties.Property}
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("subject_form.html", assigns)

  def update(%{subject: subj } = assigns, socket) do
    subject = if subj, do: subj, else: %{internal_type: "subject"}
    cs = Properties.change_property(Map.merge(%{agent_id: assigns.current_user.id}, subject))
    new = if Map.has_key?(assigns, :new), do: assigns.new, else: false
    lotsize_unit = if Map.has_key?(subject, :lotsize_preference), do: subject.lotsize_preference, else: "sqft"
    lotsize_value = if Map.has_key?(subject, :lotsize_sqft), do: subject.lotsize_sqft, else: nil
    {:ok, assign(socket,
      changeset: cs,
      action: assigns.action,
      current_user: assigns.current_user,
      lotsize_unit: lotsize_unit,
      lotsize_value: lotsize_value,
      subject: sanitize_subject(subject),
      button_label: assigns.button_label,
      feature_options: Utilities.feature_options()
    )}
  end

  defp sanitize_subject(sub) do
    unit = if sub.lotsize_preference, do: sub.lotsize_preference, else: "sqft"
    Map.merge(sub, %{
      lotsize_unit: unit,
      lotsize_value: sub.lotsize_sqft
    })
  end
end
