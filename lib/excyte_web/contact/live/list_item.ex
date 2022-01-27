defmodule ExcyteWeb.Contact.ListItem do
  use ExcyteWeb, :live_component
  alias Excyte.{
    Insights,
    Accounts,
    Properties.PublicDataApi
  }
  alias ExcyteWeb.{ContactView}

  @impl true
  def render(assigns), do: ContactView.render("list_item.html", assigns)

  # @impl true
  # def update(%{contact: cnt}, socket) do
  #   {:ok, assign(socket, contact: cnt)}
  # end
end
