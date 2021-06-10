defmodule ExcyteWeb.Insight.SelectedComps do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("selected_comps.html", assigns)

  def update(assigns, socket) do
    average = average(Enum.map(assigns.selected, fn sel -> sel.excyte_price end))
    {:ok, assign(socket,
      selected: assigns.selected,
      suggested_price: average,
      suggested_range_min: (if average, do: trunc(average - (average * 0.05)), else: nil),
      suggested_range_max: (if average, do: trunc(average + (average * 0.05)), else: nil),
      insight_name: assigns.name,
      range: true,
      error: nil,
      valid: true,
    )}
  end

  def handle_info({:update_suggested_price, %{suggested_price: sp}}, %{assigns: a} = socket) do
    {:noreply, assign(socket, suggested_range_min: sp.low, suggested_range_max: sp.high)}
  end

  def handle_event("validate-cma", %{"suggested_price" => sp, "name"  => name}, %{assigns: a} = socket) do

  end

  def handle_event("save-cma", %{"suggested_price" => sp, "name"  => name}, %{assigns: a} = socket) do
    send self(), {:update_cma, %{suggested_price: sp, name: name}}
    {:noreply, socket}
  end

  defp validate() do

  end

  defp average(nums) do
    if length(nums) > 0, do: Enum.sum(nums) / length(nums), else: nil
  end
end
