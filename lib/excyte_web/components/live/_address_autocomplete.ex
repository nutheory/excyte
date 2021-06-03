defmodule ExcyteWeb.Components.AddressAutocomplete do
  use ExcyteWeb, :live_component
  # alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("address_autocomplete.html", assigns)

  def update(_assigns, socket) do
    {:ok, socket}
  end

  def handle_event("location-details", %{ "opts" => opts, "idx" => idx}, socket) do
    pos = if idx >= 0, do: idx, else: 0
    selected = Enum.at(opts, pos)
    send self(), {:init_subject, %{prop_id: selected["id"]}}
    {:noreply, socket}
  end

end
