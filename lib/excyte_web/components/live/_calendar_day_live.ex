defmodule ExcyteWeb.Components.CalendarDayLive do
  use ExcyteWeb, :live_component
  use Timex

  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("calendar_day.html", assigns)

  def update(assigns, socket) do
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:day_class, day_class(assigns))
    }
  end

  defp day_class(assigns) do
    cond do
      today?(assigns) ->
        "text-xs p-2 text-gray-600 border border-gray-200 bg-green-200 hover:bg-green-300 cursor-pointer"
      current_date?(assigns) ->
        "text-xs p-2 text-gray-600 border border-gray-200 bg-blue-100 cursor-pointer"
      other_month?(assigns) ->
        "text-xs p-2 text-gray-400 border border-gray-200 bg-gray-200 cursor-not-allowed"
      true ->
        "text-xs p-2 text-gray-600 border border-gray-200 bg-white hover:bg-blue-100 cursor-pointer"
    end
  end

  defp current_date?(assigns) do
    Map.take(assigns.day, [:year, :month, :day]) == Map.take(assigns.current_date, [:year, :month, :day])
  end

  defp today?(assigns) do
    Map.take(assigns.day, [:year, :month, :day]) == Map.take(Timex.now, [:year, :month, :day])
  end

  defp other_month?(assigns) do
    Map.take(assigns.day, [:year, :month]) != Map.take(assigns.current_month, [:year, :month])
  end
end
