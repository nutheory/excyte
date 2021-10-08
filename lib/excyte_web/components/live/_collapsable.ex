defmodule ExcyteWeb.Components.Collapsable do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

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
      open: assigns.default_open || false
    })}
  end

  def handle_event("fetch-public-data", %{"name" => name, "id" => c_id}, %{assigns: a} = socket) do
    if Enum.member?(["property_history", "tax_history", "schools"], name) && a.public_data === nil do
      send self(), {:public_listing_info, %{lst_id: a.listing_id, c_id: c_id}}
      {:noreply, assign(socket, loading: true)}
    else
      {:noreply, assign(socket, open: !a.open, loading: false)}
    end
  end
end
