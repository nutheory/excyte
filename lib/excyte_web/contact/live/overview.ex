defmodule ExcyteWeb.Contact.Overview do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Contacts
    # Insights,
    # Properties.PublicDataApi
  }
  alias ExcyteWeb.{ContactView}

  @default_list_options %{
    offset: 0,
    limit: 60,
    sort_by: "name",
    sort_dir: "desc"
  }

  @impl true
  def render(assigns), do: ContactView.render("overview.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    scope = %{agent_id: cu.id, brokerage_id: cu.brokerage_id}
    {:ok, assign(socket,
      current_user: cu,
      filter: "",
      default_scope: scope,
      scope: nil,
      category: nil,
      current_view: "settings",
      list_options: @default_list_options,
      contacts: load_contacts(scope, "", @default_list_options)
    )}
  end

  def handle_params(_params, _, socket) do
   {:noreply, socket}
  end

  def handle_event("import_google_contacts", _, %{assigns: a} = socket) do
    Contacts.import_google_contacts()
    {:noreply, socket}
  end

  defp load_contacts(scope, filter, list_options) do
    Contacts.get_contacts(scope, filter, list_options)
  end
end
