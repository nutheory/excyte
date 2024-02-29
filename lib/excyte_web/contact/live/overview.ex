defmodule ExcyteWeb.Contact.Overview do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Contacts
    # Insights,
    # Properties.PublicDataApi
  }

  alias ExcyteWeb.{ContactView}

  @default_list_options %{
    offset: 0,
    limit: 60
  }

  @impl true
  def render(assigns), do: ContactView.render("overview.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    scope = %{agent_id: cu.id, brokerage_id: cu.brokerage_id}

    list_options =
      Map.merge(@default_list_options, %{
        scope: "all",
        type: nil,
        sort: "name_desc",
        filter: ""
      })

    {:ok,
     assign(socket,
       current_user: cu,
       default_scope: scope,
       current_view: "overview",
       list_options: list_options,
       loading: false,
       contacts: load_contacts(list_options, scope)
     )}
  end

  @impl true
  def handle_params(_params, _, socket) do
    {:noreply, socket}
  end

  def handle_event(
        "select_filter_change",
        %{"option" => opt, "attr" => attr},
        %{assigns: a} = socket
      ) do
    lo = Map.merge(a.list_options, Map.put(%{}, String.to_atom(attr), opt))
    {:noreply, assign(socket, list_options: lo, contacts: load_contacts(lo, a.default_scope))}
  end

  def handle_event("toggle_settings", _, %{assigns: a} = socket) do
    view = if a.current_view === "settings", do: "overview", else: "settings"
    {:noreply, assign(socket, current_view: view)}
  end

  def handle_event(
        "search_change",
        %{"search_filter" => %{"term" => filter}},
        %{assigns: a} = socket
      ) do
    lo = Map.put(a.list_options, :filter, filter)
    {:noreply, assign(socket, contacts: load_contacts(lo, a.default_scope))}
  end

  def handle_event("import_google_contacts", _, socket) do
    Contacts.import_google_contacts()
    {:noreply, socket}
  end

  defp load_contacts(list_options, default_scope) do
    sort_arr = String.split(list_options.sort, "_")
    sort_term = if hd(sort_arr) === "name", do: "last_name", else: hd(sort_arr)

    Contacts.get_contacts(%{
      scope: get_scope(list_options.scope, default_scope),
      type: list_options.type,
      sort_dir: hd(tl(sort_arr)),
      sort_by: sort_term,
      offset: list_options.offset,
      limit: list_options.limit,
      filter: list_options.filter
    })
  end

  defp get_scope(scope, ds) do
    case scope do
      "all" -> ds
      "agent" -> %{agent_id: ds.agent_id, brokerage_id: nil}
      "brokerage" -> %{agent_id: nil, brokerage_id: ds.brokerage_id}
    end
  end
end
