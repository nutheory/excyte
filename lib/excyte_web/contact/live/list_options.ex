defmodule ExcyteWeb.Contact.ListOptions do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{
    ContactView,
    Helpers.Utilities
  }

  @scope_options Utilities.contact_scope_options()
  @type_options Utilities.contact_type_options()
  @sort_options Utilities.contact_sort_options()

  @impl true
  def render(assigns), do: ContactView.render("list_options.html", assigns)

  @impl true
  def update(%{list_options: lo, default_scope: ds}, socket) do
    {:ok, assign(socket,
      form: to_form(%{}),
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
