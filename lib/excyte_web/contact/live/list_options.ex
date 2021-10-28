defmodule ExcyteWeb.Contact.ListOptions do
  use ExcyteWeb, :live_component
  alias Excyte.{
    Insights,
    Accounts,
    Properties.PublicDataApi
  }
  alias ExcyteWeb.{ContactView}

  @impl true
  def render(assigns), do: ContactView.render("list_options.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    {:ok, socket}
  end
end
