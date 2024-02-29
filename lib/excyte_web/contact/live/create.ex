defmodule ExcyteWeb.Contact.Create do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Contacts,
    Utils.ContactItem,
    Utils.AddressItem
  }

  alias ExcyteWeb.{
    ContactView,
    Helpers.Utilities
  }

  @impl true
  def render(assigns), do: ContactView.render("create.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    cs =
      Contacts.change_contact()
      |> Ecto.Changeset.put_embed(:contact_items, [%ContactItem{temp_id: Utilities.get_temp_id()}])
      |> Ecto.Changeset.put_embed(:address_items, [%AddressItem{temp_id: Utilities.get_temp_id()}])

    {:ok,
     assign(socket,
       current_user: cu,
       contact_types: Utilities.contact_types(),
       priorities: Utilities.contact_priorities(),
       type: nil,
       priority: nil,
       valid_address: false,
       form: to_form(cs)
     )}
  end

  def handle_event("form_change", %{"contact" => contact}, socket) do
    addr = contact["address_items"]["0"]
    cs = Contacts.change_contact(contact) |> Map.put(:action, :validate)

    valid_address =
      if addr["address_one"] && addr["city"] && addr["state"] && addr["zip"],
        do: true,
        else: false

    {:noreply, assign(socket, form: to_form(cs), valid_address: valid_address)}
  end

  def handle_event("form_submit", %{"contact" => cnt}, %{assigns: a} = socket) do
    contact =
      Map.merge(cnt, %{
        "created_by_id" => a.current_user.id,
        "brokerage_id" => a.current_user.brokerage_id
      })

    case Contacts.create_contact(contact) do
      {:ok, new_contact} ->
        {:noreply,
         put_flash(
           socket,
           :info,
           "#{new_contact.first_name} has been successfully added to contacts"
         )
         |> push_redirect(to: "/auth/contacts/overview")}

      {:error, err} ->
        IO.inspect(err, label: "ERRR")
        {:noreply, socket}
    end
  end

  def handle_event("select_change", %{"attr" => attr, "option" => opt}, %{assigns: a} = socket) do
    new_assign = Map.put(%{}, String.to_atom(attr), opt)
    {:noreply, assign(socket, new_assign)}
  end

  def handle_event("add-contact", _, %{assigns: a} = socket) do
    existing_contacts = Map.get(a.changeset.changes, :contact_items, [])
    contacts = Enum.concat(existing_contacts, [%ContactItem{temp_id: Utilities.get_temp_id()}])

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, form: to_form(cs))}
  end

  def handle_event("remove-contact", %{"remove" => remove_id}, %{assigns: a} = socket) do
    contacts =
      Enum.reject(a.changeset.changes.contact_items, fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, form: to_form(cs))}
  end

  defp filter_points_of_contact(poc) do
    # Enum.filter(poc, fn item ->  end)
  end
end
