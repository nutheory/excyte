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
    cs = Properties.change_property(form)
    {:noreply, assign(socket, changeset: cs, lotsize_value: ls_val)}
  end

  def handle_event("save-subject", %{"property" => form}, %{assigns: a} = socket) do
    subject_attrs =
      Map.merge(a.subject, %{
        beds: sanitize_number(form["beds"], Integer),
        baths: sanitize_number(form["baths"], Float),
        sqft: sanitize_number(form["sqft"], Integer),
        stories: sanitize_number(form["stories"], Integer),
        year_built: sanitize_number(form["year_built"], Integer),
      })
      |> Map.merge(sanitize_lotsize(%{
        lotsize_unit: a.lotsize_unit,
        lotsize_value: form["lotsize_value"]
      }))

    cs = Properties.change_property(subject_attrs)
    if cs.valid? do
      IO.inspect(cs, label: "VaLID")
      send self(), {:create_subject, subject_attrs}
      {:noreply, socket}
    else
      IO.inspect(cs, label: "iNVaLID")
      {:noreply, assign(socket, changeset: cs)}
    end
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
      %{lotsize_preference: "acres", lotsize_sqft: trunc(Utilities.acres_to_sqft(sanitize_number(val, Float)))}
    else
      %{lotsize_preference: "sqft", lotsize_sqft: sanitize_number(val, Integer)}
    end
  end

  defp sanitize_number(str, to_type) do
    if str !== "", do: elem(to_type.parse(str), 0), else: nil
  end
end
