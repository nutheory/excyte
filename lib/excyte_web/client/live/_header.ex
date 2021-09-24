defmodule ExcyteWeb.Client.Header do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("header.html", assigns)

  def update(assigns, socket) do
    IO.inspect(label: "header after waking up")
    {:ok, assign(socket,
      current_user: assigns.current_user,
      created_by: assigns.created_by,
      insight_type: assigns.insight_type,
      toc_sections: [],
      show_menu: "init"
    )}
  end

  def handle_event("toggle-menu", _, %{assigns: a} = socket) do
    st =
      case a.show_menu do
        "init" -> "in"
        "in" -> "out"
        "out" -> "in"
      end
    {:noreply, assign(socket, show_menu: st)}
  end

  def handle_event("setup-toc", %{"sections" => sections}, socket) do
    {:noreply, assign(socket, toc_sections: sections)}
  end

  def handle_event("jump-to-section", %{"id" => id}, socket) do
    {:noreply, push_event(socket, "jumpTo", %{id: id})}
  end
end
