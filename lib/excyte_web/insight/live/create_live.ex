defmodule ExcyteWeb.Insight.CreateLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if connected?(socket), do: Accounts.subscribe(cu.id)
    if params["id"], do: send self(), {:load_from_store, params["id"]}
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
      show_filters: false,
      manual_subject: false
    )}
  end

  def handle_info({:load_from_store, id}, %{assigns: a} = socket) do
    case Insights.get_initial_insight(a.current_user.id, id) do
      %Insight{} = ins -> query_mls(%{
        subject: ins.subject,
        selected: ins.selected_listing_ids,
        filters: Utilities.format_quoted_json(ins.saved_search.criteria)}, socket)
      nil -> {:noreply, assign(socket, errors: [%{message: "cannot locate #{id}."}])}
    end
  end

  def handle_info({Accounts, [:user, _], updated_user}, socket) do
    {:noreply, assign(socket, current_user: updated_user)}
  end

  def handle_info({Properties, [:property, _], updated_property}, socket) do
    setup_comp_query(updated_property, socket)
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
    subject_map = get_subject_property_id(addr)
    {:ok, subject} = Properties.find_or_create_subject_property(Map.merge(addr, %{
      agent_id: a.current_user.id,
      internal_type: "subject",
      foreign_id: subject_map.mpr_id}))
    send self(), {:aquire_subject, %{map: subject_map}}
    {:noreply, assign(socket, subject: subject, filters: opts, fetching: true)}
  end

  def handle_info({:aquire_subject, %{map: map}}, %{assigns: a} = socket) do
    if a.subject.status === nil do
      Properties.fetch_subject_details(map, a.subject.id, a.subject.agent_id)
      {:noreply, socket}
    else
      setup_comp_query(a.subject, socket)
    end
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

  def handle_event("review-cma", _,  %{assigns: a} = socket) do
    key = "cma#{a.current_user.id}#{System.os_time(:second)}"
    Insights.create_insight(%{
      insight: %{
        uuid: key,
        type: "cma",
        title: "draft",
        created_by_id: a.current_user.id,
        published: false,
        mls: a.current_user.current_mls.dataset_id,
        selected_listing_ids: Enum.map(a.selected_comps, fn c -> c.listing_id end)
      },
      search: %{
        query: "",
        coords: a.subject.coords,
        zip: a.subject.zip,
        criteria: a.filters
      },
      property: %{
        subject_id: a.subject.id,
        agent_id: a.current_user.id
      }
    })
    {:noreply, push_redirect(socket, to: "/insights/cma/#{key}/review")}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil,
      possible_subject_properties: nil
    )}
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

    query_mls(%{subject: subject, filters: filters, selected: []}, socket)
  end

  defp query_mls(%{subject: subject, filters: filters, selected: sids},  %{assigns: a} = socket) do
    case ResoApi.comparable_properties(a.current_user.current_mls, subject, filters) do
      {:ok, c} -> {:noreply, assign(socket, comparables: c.listings, fetching: false,
                  filters: c.filters, subject: subject, comp_count: c.count,
                  selected_comps: Enum.map(sids, fn s ->
                    Enum.find(c.listings, fn l -> s == l.listing_id
                  end) end))}
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
      {:ok, %{body: body}} ->
        hd(Utilities.format_str_json(body).autocomplete)
      {:error, err} -> err
    end
  end
end
