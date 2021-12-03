defmodule ExcyteWeb.Property.Overview do
  use ExcyteWeb, :live_view
  alias Excyte.{
    # Contacts
    # Insights,
    # Properties.PublicDataApi
  }
  alias ExcyteWeb.{PropertyView}

  def render(assigns), do: PropertyView.render("overview.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    {:ok, socket}
  end
end
