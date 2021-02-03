defmodule ExcyteWeb.Components.AddressAutocompleteLive do
  use ExcyteWeb, :live_component
  # alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("address_autocomplete.html", assigns)

  def update(_assigns, socket) do
    {:ok, socket}
  end

  def handle_event("location-details", details, socket) do
    if details["address_components"] do
      loc =
        Enum.reduce(details["address_components"], %{}, fn dt, acc ->
          case hd(dt["types"]) do
            "street_number" -> Map.put(acc, :street_number, dt["long_name"])
            "route" ->
              Map.put(acc, :street_name, dt["long_name"])
              |> Map.put(:safe_street_name, get_safe_name(dt["long_name"]))
            "locality" -> Map.put(acc, :city, dt["long_name"])
            "administrative_area_level_2" -> Map.put(acc, :county, dt["long_name"])
            "administrative_area_level_1" ->
              Map.put(acc, :display_state, dt["long_name"])
              |> Map.put(:state, dt["short_name"])
            "country" -> Map.put(acc, :country, dt["long_name"])
            "postal_code" -> Map.put(acc, :zip, dt["long_name"])
            _ -> acc
          end
        end)
        |> Map.put(:formatted, details["formatted_address"])
        |> Map.put(:coords, details["geometry"]["location"])

      send self(), {:get_comps, %{address: Utilities.format_quoted_json(loc)}}
    end
    {:noreply, socket}
  end

  defp get_safe_name(street) do
    parsed = String.split(street, " ", trim: true)
    if length(parsed) > 0 do
      Enum.reverse(parsed)
      |> tl()
      |> Enum.reverse()
      |> Enum.join(" ")
    else
      street
    end
  end
end
