defmodule ExcyteWeb.Insight.CreateLive do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts, Insights, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if connected?(socket), do: Accounts.subscribe(cu.id)
    {:ok, assign(socket,
      current_user: cu,
      selected_comps: [],
      filters: %{},
      client_info: assign_client_info(socket),
      subject: nil,
      fetching: false,
      possible_subject_properties: nil,
      comparables: nil,
      preview: nil,
      show_panel: false,
      show_filters: false
    )}
  end

  def handle_info({:init_comp_search, %{address: addr}}, %{assigns: a} = socket) do
    find_by =
      if addr.coords.lat do
        %{zip: hd(String.split(addr.zip, "-")),
          coords: %{lng: addr.coords.lng, lat: addr.coords.lat}}
      else
        %{ zip: hd(String.split(addr.zip, "-"))}
      end
    opts = Map.merge(a.filters, find_by)
    if connected?(socket) do
      sub = get_subject_property_id(addr)
      Properties.subscribe(sub.mpr_id)
      if Application.get_env(:excyte, :env) === :prod do
        Properties.get_subject_details(sub)
      else
        Properties.get_subject_by_foreign_id(sub.mpr_id)
      end
    end
    {:noreply, assign(socket, subject: addr, filters: opts, fetching: true)}
  end

  def handle_info({:update_filter, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, filters: Map.merge(a.filters, val))}
  end

  def handle_event("filter_search", form, %{assigns: a} = socket) do
    IO.inspect(a.filters, label: "FORM")
    {:noreply, socket}
  end

  def handle_event("toggle-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !a.show_panel)}
  end

  def handle_event("toggle-filters", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_filters: !a.show_filters)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, socket) do
    sel = Enum.find(socket.assigns.comparables, fn lk -> lk.listing_key === selected_lk end)
    {:noreply, assign(socket, preview: sel, show_panel: true)}
  end

  def handle_event("remove-preview", _, socket) do
    {:noreply, assign(socket, preview: nil, show_panel: false)}
  end

  def handle_event("add-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    sel = Enum.find(s.comparables, fn lk -> lk.listing_key === selected_lk end)

    {:noreply, assign(socket, selected_comps: s.selected_comps ++ [sel], preview: nil)}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    ret = Enum.reject(s.selected_comps, fn lk -> lk.listing_key === selected_lk end)

    {:noreply, assign(socket, selected_comps: ret)}
  end

  def handle_event("review-cma", _,  %{assigns: assigns} = socket) do
    key = "cma#{assigns.current_user.id}#{System.os_time(:second)}"
    Cachex.put(:insight_cache, key, %{
      filters: nil,
      selected_comps: assigns.selected_comps,
      current_user: assigns.current_user,
      subject: assigns.subject,
      client_info: assigns.client_info
    })
    {:noreply, push_redirect(socket, to: "/insights/cma/review/#{key}")}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil,
      filters: @defaults,
      possible_subject_properties: nil
    )}
  end

  def handle_info({Accounts, [:user, _], updated_user}, socket) do
    IO.inspect(updated_user.current_mls, label: "FOUND")
    {:noreply, assign(socket, current_user: updated_user)}
  end

  def handle_info({Properties, [:property, _], created_property}, %{assigns: a} = socket) do
     case Properties.update_property(created_property.id, a.subject) do
       {:ok, full_subject} -> setup_comp_query(full_subject, socket)
       {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false)}
     end
  end

  defp setup_comp_query(subject, %{assigns: a} = socket) do
    filters = Map.merge(a.filters, %{
      default: true,
      price_min: (if subject.est_price, do: round(subject.est_price * 0.95), else: 0),
      price_max: (if subject.est_price, do: round(subject.est_price * 1.05), else: 100000000),
      beds_min: (if subject.beds, do: subject.beds - 1, else: 0),
      beds_max: (if subject.beds, do: subject.beds + 1, else: 100),
      baths_min: (if subject.baths, do: round(subject.baths) - 1, else: 0),
      baths_max: (if subject.baths, do: round(subject.baths) + 1, else: 0),
      sqft_min: (if subject.sqft, do: round(subject.sqft * 0.9), else: 0),
      sqft_max: (if subject.sqft, do: round(subject.sqft * 1.1), else: 0),
      # TODO switch to live make statuses ["closed", "pending"]
      selected_statuses: [%{value: "active", name: "Active"}],
      distance: 200.0
    })
    query_mls(%{subject: subject, filters: filters}, socket)
  end

  defp query_mls(%{subject: subject, filters: filters},  %{assigns: a} = socket) do
    case ResoApi.comparable_properties(a.current_user.current_mls, subject, filters) do
      {:ok, c} -> {:noreply, assign(socket, comparables: c.listings, fetching: false,
                        filters: c.filters, subject: subject, comp_count: c.count)}
      {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false,
                        subject: subject)}
    end
  end

  defp get_subject_property_id(loc) do
    HTTPoison.get("https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input="
      <> "#{loc.street_number}%20#{URI.encode(loc.street_name)}%20#{loc.zip}&area_types=state%2Ccity%2Ccounty%2C"
      <> "postal_code%2Cneighborhood%2Caddress%2Cstreet%2Cbuilding%2Cmlsid%2Cbuilding%2Cschool%2C"
      <> "school_district%2Cuniversity%2Cpark%2Cstate&limit=10")
    |> case do
      {:ok, %{body: body}} -> hd(Utilities.format_str_json(body).autocomplete)
      {:error, err} -> err
    end
  end
end
