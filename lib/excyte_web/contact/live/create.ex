defmodule ExcyteWeb.Contact.Create do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Insights,
    Accounts,
    Properties.PublicDataApi
  }
  alias ExcyteWeb.{ContactView}

  @impl true
  def render(assigns), do: ContactView.render("create.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    cs = Contacts.get_changeset()
    {:ok, assign(socket, changset: cs)}
  end

  def handle_event("form_change", unsigned_params, socket) do

  end

  def handle_event("submit_contact", unsigned_params, socket) do

  end
end
