defmodule ExcyteWeb.Client.TemplateRender do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      template: assigns.section.component_name,
      theme: assigns.insight.document_attributes,
      brokerage: assigns.brokerage,
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

end
