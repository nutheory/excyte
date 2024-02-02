defmodule ExcyteWeb.Client.MoreInfo do
  use ExcyteWeb, :live_component
  alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("more_info.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      form: to_form(%{}),
      current_user: assigns.current_user,
      listing_id: assigns.listing_id,
      listing: nil,
      search: nil,
      show_panel: false,
      search_term: ""
    )}
  end

  def handle_event("toggle-more-info", _, %{assigns: a} = socket) do
    if !a.show_panel && !a.listing do
      case ResoApi.get_expanded_by_listing_id(a.current_user.current_mls, a.listing_id) do
        {:ok, listing} ->
          {:noreply, assign(socket, show_panel: true, listing: listing, search: listing.details, search_term: "")}
        {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
      end
    else
      {:noreply, assign(socket, show_panel: !a.show_panel)}
    end
  end

  def handle_event("find-key", %{"finder" => %{"term" => term}}, %{assigns: a} = socket) do
    listing = Enum.filter(a.listing.details, fn {k, _v} -> String.contains?(String.downcase(k), String.downcase(term)) end)
    {:noreply, assign(socket, search: listing, search_term: term)}
  end
end
