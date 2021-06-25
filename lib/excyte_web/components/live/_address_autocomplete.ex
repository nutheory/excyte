defmodule ExcyteWeb.Components.AddressAutocomplete do
  use ExcyteWeb, :live_component
  # alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ComponentView}

  def render(assigns), do: ComponentView.render("address_autocomplete.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      label: assigns.label,
      callback: assigns.callback
    )}
  end

  def handle_event("location-details", %{ "opts" => opts, "idx" => idx}, %{assigns: a} = socket) do
    pos = if idx >= 0, do: idx, else: 0
    selected = Enum.at(opts, pos)
    send self(), {a.callback, %{
      prop_id: selected["id"],
      address: selected["address"],
      geo: %{
        lat: selected["geo"]["lat"],
        lng: selected["geo"]["lon"]
      }
    }}
    {:noreply, socket}
  end

end
