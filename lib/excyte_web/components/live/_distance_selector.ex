defmodule ExcyteWeb.Components.DistanceSelector do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("distance_selector.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      distance: assigns.distance,
      step: assigns.step,
      callback: assigns.callback)}
  end

  def handle_event("update", action, %{assigns: a} = socket) do
    d=
      case action do
        "add" -> a.distance + a.step
        "minus" -> a.distance - a.step
        %{} = dis -> elem(Float.parse(dis["distance"]), 0)
      end

    if is_float(d) do
      send self(), {a.callback, %{distance: d}}
      {:noreply, assign(socket, distance: d)}
    else
      {:noreply, socket}
    end
  end
end
