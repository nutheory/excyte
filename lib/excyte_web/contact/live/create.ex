defmodule ExcyteWeb.Contact.Create do
  use ExcyteWeb, :live_view_form
  alias Excyte.{
    Contacts,
    Utils.ContactItem
  }
  alias ExcyteWeb.{
    ContactView,
    Helpers.Utilities
  }

  @impl true
  def render(assigns), do: ContactView.render("create.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    cs = Contacts.new_changeset()
    |> Ecto.Changeset.put_embed(:contact_items, [%ContactItem{temp_id: Utilities.get_temp_id()}])

    {:ok, assign(socket,
      current_user: cu,
      changeset: cs
    )}
  end

  # def handle_event("select_change", %{"attr" => attr, "option" => opt}, %{assigns: a} = socket) do
  #   new_assign = Map.put(%{}, String.to_atom(attr), opt)
  #   {:noreply, assign(socket, new_assign)}
  # end

  def handle_event("add-contact", _, %{assigns: a} = socket) do
    existing_contacts = Map.get(a.changeset.changes, :contact_items, [])
    contacts = Enum.concat(existing_contacts, [%ContactItem{temp_id: Utilities.get_temp_id()}])

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("remove-contact", %{"remove" => remove_id}, %{assigns: a} = socket) do
    contacts =
      Enum.reject(a.changeset.changes.contact_items, fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("form_change", unsigned_params, socket) do

  end

  def handle_event("submit_contact", unsigned_params, socket) do

  end
end
