defmodule ExcyteWeb.Components.Calendar do
  use ExcyteWeb, :live_component
  use Timex

  alias ExcyteWeb.Components.CalendarDayLive
  alias ExcyteWeb.ComponentView

  @week_start_at :mon

  def render(assigns), do: ComponentView.render("calendar.html", assigns)

  def update(assigns, socket) do
    current_date = assigns |> extract_from_params()
    current_month = assigns |> extract_from_params()

    {:ok,
      socket
      |> assign(assigns)
      |> assign(:current_date, current_date)
      |> assign(:current_month, current_month)
      |> assign(:day_names, day_names(@week_start_at))
      |> assign(:week_rows, week_rows(current_date))
    }
  end

  def handle_event("prev-month", _, socket) do
    current_month = Timex.shift(socket.assigns.current_month, months: -1)

    {
      :noreply,
      socket
      |> assign(:current_month, current_month)
      |> assign(:week_rows, week_rows(current_month))
    }
  end

  def handle_event("next-month", _, socket) do
    current_month = Timex.shift(socket.assigns.current_month, months: 1)

    {
      :noreply,
      socket
      |> assign(:current_month, current_month)
      |> assign(:week_rows, week_rows(current_month))
    }
  end

  def handle_event("pick-date", %{"date" => date}, socket) do
    current_date = Timex.parse!(date, "{YYYY}-{0M}-{D}")

    {
      :noreply,
      socket
      |> assign(:current_date, current_date)
    }
  end

  defp extract_from_params(%{params: %{"date" => "" <> date}}), do: Timex.parse!(date, "{YYYY}-{0M}-{D}")
  defp extract_from_params(_), do: Timex.now

  defp day_names(:sun), do:  [7, 1, 2, 3, 4, 5, 6] |> Enum.map(&Timex.day_shortname/1)
  defp day_names(_), do:  [1, 2, 3, 4, 5, 6, 7] |> Enum.map(&Timex.day_shortname/1)

  defp week_rows(current_date) do
    first =
      current_date
      |> Timex.beginning_of_month()
      |> Timex.beginning_of_week(@week_start_at)

    last =
      current_date
      |> Timex.end_of_month()
      |> Timex.end_of_week(@week_start_at)

    Interval.new(from: first, until: last)
    |> Enum.map(& &1)
    |> Enum.chunk_every(7)
  end
end
