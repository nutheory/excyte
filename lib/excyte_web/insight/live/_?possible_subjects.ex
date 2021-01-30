defmodule ExcyteWeb.Insight.PossibleSubjects do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("possible_subjects.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, prop: assigns.prop)}
  end

  # def handle_event("select-subject", %{"key" => selected_lk}, socket) do
  #   subject =
  #     Enum.find(socket.assigns.possible_subject_properties, fn lk ->
  #       lk["ListingKey"] === selected_lk
  #     end)

  #   opts = comparable_input(subject)
  #   send self(), {:get_comps, opts}
  #   {:noreply, assign(socket, subject: subject, filter_defaults: opts)}
  # end

  # def handle_event("select-subject", subject, socket) do
  #   opts = comparable_input(subject)
  #   send self(), {:get_comps, opts}
  #   {:noreply, assign(socket, subject: subject, filter_defaults: opts)}
  # end

end
