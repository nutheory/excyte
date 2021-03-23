defmodule ExcyteWeb.Insight.SubjectForm do
  use ExcyteWeb, :live_component
  alias Excyte.{Properties, Properties.Property}
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("subject_form.html", assigns)

  def update(%{subject: subj} = assigns, socket) do
    subject = if subj, do: subj, else: %Property{}
    cs = Properties.change_property(subj.id, subj.agent_id, subject)
    new = if Map.has_key?(assigns, :new), do: assigns.new, else: false
    lotsize_unit = if Map.has_key?(subject, :lotsize_preference), do: subject.lotsize_preference, else: "sqft"
    lotsize_value = if Map.has_key?(subject, :lotsize_sqft), do: subject.lotsize_sqft, else: nil
    {:ok, assign(socket,
      changeset: cs,
      lotsize_unit: lotsize_unit,
      lotsize_value: lotsize_value,
      subject: subject,
      new: new,
      label: assigns.label,
      feature_options: Utilities.feature_options()
    )}
  end

  # def update(assigns, socket) do
  #   cs = Property.changeset(%Property{}, %{})
  #   {:ok, assign(socket,
  #     changeset: cs,
  #     subject: nil,
  #     label: assigns.label,
  #     feature_options: Utilities.feature_options()
  #   )}
  # end
end
