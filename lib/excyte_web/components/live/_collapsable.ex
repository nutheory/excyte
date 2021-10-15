defmodule ExcyteWeb.Components.Collapsable do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView}

  def render(assigns), do: ComponentView.render("collapsable.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket, %{
      id: assigns.id,
      title: assigns.title,
      name: assigns.name,
      loading: false,
      public_data: assigns.public_data,
      inner_block: assigns.inner_block,
      listing_id: assigns.listing_id,
      open: assigns.open
    })}
  end

  def handle_event("fetch-public-data", %{"name" => name, "id" => c_id}, %{assigns: a} = socket) do
    send self(), {:public_listing_info, %{lst_id: a.listing_id, name: name, c_id: c_id}}
    if a.open === false do
      {:noreply, assign(socket, loading: true)}
    else
      {:noreply, socket}
    end
  end
end
