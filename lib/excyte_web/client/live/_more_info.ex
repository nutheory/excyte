defmodule ExcyteWeb.Client.MoreInfo do
  use ExcyteWeb, :live_component
  alias Excyte.{Mls.ResoApi}
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("more_info.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      listing: nil,
      search: nil,
      show_panel: false,
      search_term: ""
    )}
  end

  def handle_event("toggle-more-info", _payload, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_panel: !a.show_panel)}
  end

  def handle_event("find-key", %{"finder" => %{"term" => term}}, %{assigns: a} = socket) do
    listing = Enum.filter(a.listing.details, fn {k, _v} -> String.contains?(String.downcase(k), String.downcase(term)) end)
    {:noreply, assign(socket, search: listing, search_term: term)}
  end

  @impl true
  def handle_event("get-more-info", %{"lId" => id} = _more, %{assigns: a} = socket) do
    case ResoApi.get_expanded_by_listing_id(a.current_user.current_mls, id) do
      {:ok, listing} ->
        {:noreply, assign(socket, show_panel: true, listing: listing, search: listing.details, search_term: "")}
      {:error, err} -> {:noreply, assign(socket, errors: [err | a.errors])}
    end
  end
end
