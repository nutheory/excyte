defmodule ExcyteWeb.Insight.SelectedComps do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("selected_comps.html", assigns)

  def update(assigns, socket) do
    average = average(Enum.map(assigns.selected, fn sel -> sel.excyte_price end))
    {:ok, assign(socket,
      size: length(assigns.selected),
      selected: sort_selected_by_status(assigns.selected),
      suggested_price: (if average, do: trunc(average), else: nil),
      suggested_price_min: (if average, do: trunc(average - (average * 0.05)), else: nil),
      suggested_price_max: (if average, do: trunc(average + (average * 0.05)), else: nil),
      range: true,
      error: nil,
      valid: true
    )}
  end

  def handle_event("validate-cma", %{"suggested_price" => sp}, %{assigns: a} = socket) do
    {:noreply, socket}
  end

  def handle_event("toggle-range", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, range: !a.range)}
  end

  def handle_event("range-update", %{"min" => min, "max" => max}, socket) do
    mn =
      case Integer.parse(min) do
        {res, _} -> res
        :error -> 0
      end
    mx =
      case Integer.parse(max) do
        {res, _} -> res
        :error -> 0
      end
    mn = if mn >= mx, do: mx, else: mn
    mx = if mx <= mn, do: mn, else: mx
    {:noreply, assign(socket, suggested_price_min: mn, suggested_price_max: mx)}
  end

  def handle_event("save-cma", %{"suggested_price" => sp}, socket) do
    send self(), {:update_cma, %{suggested_price: sp}}
    {:noreply, socket}
  end

  defp sort_selected_by_status(listings) do
    Enum.group_by(listings, &by_status(&1))
    |> Enum.sort(:asc)
  end

  defp by_status(%{status: status}) do
    cond do
      String.contains?(String.downcase(status), "expired") -> "7_expired"
      String.contains?(String.downcase(status), "contract") -> "3_active_under_contract"
      String.contains?(String.downcase(status), "withdrawn") -> "6_withdrawn"
      String.contains?(String.downcase(status), "closed") -> "1_closed"
      String.contains?(String.downcase(status), "canceled") -> "5_canceled"
      String.contains?(String.downcase(status), "active") -> "2_active"
      String.contains?(String.downcase(status), "pending") -> "4_pending"
      true -> "8_na"
    end
  end

  defp average(nums) do
    if length(nums) > 0, do: Enum.sum(nums) / length(nums), else: nil
  end
end
