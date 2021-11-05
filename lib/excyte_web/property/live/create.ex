defmodule ExcyteWeb.Property.Create do
  use ExcyteWeb, :live_view_form
  alias Excyte.{
    Properties
  }
  alias ExcyteWeb.{PropertyView}

  @impl true
  def render(assigns), do: PropertyView.render("create.html", assigns)

  @impl true
  def mount(assigns, socket) do
    cs = Properties.change_property(%{})
    {:ok, assign(socket, changeset: cs)}
  end

  def handle_event("form_change", unsigned_params, socket) do

  end

  def handle_event("submit_contact", unsigned_params, socket) do

  end
end
