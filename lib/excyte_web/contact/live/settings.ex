defmodule ExcyteWeb.Contact.Settings do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ContactView}

  @impl true
  def render(assigns), do: ContactView.render("settings.html", assigns)

  @impl true
  def update(_assigns, socket) do
    {:ok, socket}
  end
end
