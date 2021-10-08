defmodule ExcyteWeb.Client.Header do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("header.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      created_by: assigns.created_by,
      insight_type: assigns.insight_type,
      toc_sections: assigns.sections,
      toc_listings: assigns.listings,
      show_menu: false
    )}
  end

  def handle_event("toggle-menu", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_menu: !a.show_menu)}
  end

  def handle_event("setup-toc", %{"sections" => sections}, socket) do
    {:noreply, assign(socket, toc_sections: sections)}
  end

  def handle_event("jump-to-section", %{"id" => id}, socket) do
    IO.inspect(id, label: "ID")
    {:noreply, push_event(socket, "jumpTo", %{id: id})}
  end
end
