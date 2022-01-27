defmodule ExcyteWeb.Client.TemplateRender do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      template: assigns.template,
      theme: assigns.insight.document_attributes,
      brokerage: assigns.brokerage,
      content: assigns.content,
      agent: assigns.agent,
      insight: assigns.insight,
      index: assigns.index,
      is_live: assigns.is_live || false,
      listings: assigns.listings
    )}
  end

  def handle_event("walk_nbrhd", %{"lat" => lat, "lng" => lng, "id" => id}, socket) do
    {:noreply, push_event(socket, "load_neighborhood", %{coords: %{lat: lat, lng: lng}, id: id})}
  end

  def handle_event("map_all_properties", _, %{assigns: a} = socket) do
    sub = a.insight.property
    subject = %{
      address: "#{sub.street_number} #{sub.street_name}, #{sub.city}",
      coords: sub.coords,
      main_photo_url: sub.main_photo_url
    }
    listings = Enum.map(a.listings, fn lst ->
      %{
        address: "#{lst["street_number"]} #{lst["street_name"]}, #{lst["city"]}",
        coords: %{lat: lst["coords"]["lat"], lng: lst["coords"]["lng"]},
        main_photo_url: lst["main_photo_url"]
      }
    end)
    {:noreply, push_event(socket, "create_map_and_markers", %{subject: subject, listings: listings})}
  end
end
