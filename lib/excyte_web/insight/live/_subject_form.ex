defmodule ExcyteWeb.Insight.SubjectForm do
  use ExcyteWeb, :live_component
  alias Excyte.{Properties, Properties.Property}
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("subject_form.html", assigns)

  def update(%{subject: subj } = assigns, socket) do
    subject = Map.merge(subj, %{internal_type: "subject", agent_id: assigns.current_user.id})
    cs = Properties.change_property(subject)
    {:ok, assign(socket,
      changeset: cs,
      current_user: assigns.current_user,
      lotsize_unit: subject.lotsize_preference,
      lotsize_value: subject.lotsize_sqft,
      subject: subject,
      button_label: assigns.button_label,
      feature_options: Utilities.feature_options()
    )}
  end

  def handle_event("update-form", %{"property" => form}, %{assigns: a} = socket) do
    ls_val =
      if a.lotsize_unit === "acres" do
        round(Utilities.acres_to_sqft(String.to_float(form["lotsize_value"])))
      else
        round(String.to_integer(form["lotsize_value"]))
      end

    {:noreply, assign(socket, lotsize_value: ls_val)}
  end

  def handle_event("save-subject", %{"property" => form}, %{assigns: a} = socket) do
    subject_attrs =
      Map.merge(a.subject, %{
        beds: String.to_integer(form["beds"]),
        baths: String.to_float(form["baths"]),
        sqft: String.to_integer(form["sqft"]),
        stories: String.to_integer(form["stories"]),
        year_built: String.to_integer(form["year_built"]),
      })
      |> Map.merge(sanitize_lotsize(%{
        lotsize_unit: a.lotsize_unit,
        lotsize_value: form["lotsize_value"]
      }))
    send self(), {:create_subject, subject_attrs}
    {:noreply, socket}
  end

  def handle_event("toggle-lot-unit", _, %{assigns: a}  = socket) do
    if a.lotsize_unit === "acres" do
      {:noreply, assign(socket,
        lotsize_unit: "sqft",
        lotsize_value: round(Utilities.acres_to_sqft(a.lotsize_value))
      )}
    else
      {:noreply, assign(socket,
        lotsize_unit: "acres",
        lotsize_value: Utilities.sqft_to_acres(a.lotsize_value)
      )}
    end
  end

  defp sanitize_lotsize(%{lotsize_unit: unit, lotsize_value: val}) do
    if unit === "acres" do
      %{lotsize_preference: "acres", lotsize_sqft: round(Utilities.acres_to_sqft(String.to_float(val)))}
    else
      %{lotsize_preference: "sqft", lotsize_sqft: round(String.to_integer(val))}
    end
  end
end
