defmodule ExcyteWeb.Components.RangeInputs do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("range_inputs.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      attribute: assigns.attribute,
      prefix: assigns.prefix,
      suffix: assigns.suffix,
      min: assigns.min,
      max: assigns.max,
      type: assigns.type,
      step: assigns.step,
      label: assigns.label,
      callback: assigns.callback
    )}
  end

  def handle_event("range-update", %{"min" => min, "max" => max}, %{assigns: a} = socket) do
    mn =
      case a.type.parse(min) do
        {res, _} -> res
        :error -> 0
      end
    mx =
      case a.type.parse(max) do
        {res, _} -> res
        :error -> 0
      end
    mn = if mn >= mx, do: mx, else: mn
    mx = if mx <= mn, do: mn, else: mx
    send self(), {a.callback, Map.put(%{}, a.attribute, %{low: mn, high: mx, type: a.type})}
    {:noreply, assign(socket, min: mn, max: mx)}
  end
end
