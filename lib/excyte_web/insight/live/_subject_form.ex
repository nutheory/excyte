defmodule ExcyteWeb.Insight.SubjectForm do
  use ExcyteWeb, :live_component
  alias Excyte.{Properties, Properties.Property}
  alias ExcyteWeb.{Helpers.Utilities, InsightView}

  def render(assigns), do: InsightView.render("subject_form.html", assigns)

  def update(%{subject: subj} = a, socket) do
    subject = Map.merge(subj, %{"internal_type" => "subject", "agent_id" => a.current_user.id})
    cs = Properties.change_property(subject)

    IO.inspect(subject, label: "SUBJECT")

    {:ok,
     assign(socket,
       form: to_form(cs),
       mls_options: a.mls_options,
       current_user: a.current_user,
       current_mls: a.current_mls,
       subject: subject,
       button_label: a.button_label,
       feature_options: Utilities.feature_options()
     )}
  end

  def handle_event("update-form", %{"property" => form}, %{assigns: a} = socket) do
    cs = Properties.change_property(form)
    {:noreply, assign(socket, form: to_form(cs))}
  end

  def handle_event("save-subject", %{"property" => form}, %{assigns: a} = socket) do
    subject_attrs =
      Map.merge(a.subject, %{
        "beds" => sanitize_number(form["beds"], Integer),
        "baths" => sanitize_number(form["baths"], Float),
        "sqft" => sanitize_number(form["sqft"], Integer),
        "stories" => sanitize_number(form["stories"], Integer),
        "year_built" => sanitize_number(form["year_built"], Integer),
        "lotsize_sqft" => sanitize_number(form["lotsize_sqft"], Integer),
        "overview" => nil
      })

    cs = Properties.change_property(subject_attrs)

    if cs.valid? do
      send(self(), {:create_subject, subject_attrs})

      {:noreply, socket}
    else
      {:noreply, assign(socket, form: to_form(cs))}
    end
  end

  # def handle_event("toggle-lot-unit", _, %{assigns: a} = socket) do
  #   if a.lotsize_unit === "acres" do
  #     {:noreply,
  #      assign(socket,
  #        lotsize_unit: "sqft",
  #        lotsize_value: round(Utilities.acres_to_sqft(a.lotsize_value))
  #      )}
  #   else
  #     {:noreply,
  #      assign(socket,
  #        lotsize_unit: "acres",
  #        lotsize_value: Utilities.sqft_to_acres(a.lotsize_value)
  #      )}
  #   end
  # end

  defp sanitize_number(str, to_type) do
    if str !== "", do: elem(to_type.parse(str), 0), else: nil
  end
end
