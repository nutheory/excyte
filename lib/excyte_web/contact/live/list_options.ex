defmodule ExcyteWeb.Contact.ListOptions do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ContactView}

  @scope_options [%{value: "all", text: "All Contacts"},
                  %{value: "agent", text: "My Contacts"},
                  %{value: "brokerage", text: "Brokerage Contacts"}]

  @sort_options  [%{value: "name_desc", text: "Name A-Z"},
                  %{value: "name_asc", text: "Name Z-A"},
                  %{value: "client", text: "Add a Client"}]

  @type_options  [%{value: nil, text: "All Types"},
                  %{value: "leads", text: "Leads"},
                  %{value: "clients", text: "Clients"},
                  %{value: "brokers", text: "Brokers"}]

  @impl true
  def render(assigns), do: ContactView.render("list_options.html", assigns)

  @impl true
  def update(%{list_options: lo, default_scope: ds}, socket) do
    {:ok, assign(socket,
      default_scope: ds,
      scope_options: @scope_options,
      sort_options: @sort_options,
      type_options: @type_options,
      scope: Enum.find(@scope_options, fn so -> lo.scope === so.value end),
      type: Enum.find(@type_options, fn to -> lo.type === to.value end),
      sort: Enum.find(@sort_options, fn so -> lo.sort === so.value end),
      filter: lo.filter
    )}
  end
end
