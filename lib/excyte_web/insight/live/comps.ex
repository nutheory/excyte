defmodule ExcyteWeb.Insight.Comps do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("comps.html", assigns)

  def mount(params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if connected?(socket), do: Accounts.subscribe(cu.id)
    if params["insight_id"], do: send self(), {:load_from_store, params["insight_id"]}
    {:ok, assign(socket,
      current_user: cu,
      selected_comps: [],
      filters: %{},
      client_info: assign_client_info(socket),
      subject: nil,
      sort_by: "ranking",
      key: params["insight_id"],
      fetching: (if params["insight_id"], do: true, else: false),
      comparables: nil,
      preview: nil,
      show_panel: false,
      show_filters: false
    )}
  end

  def handle_info({:load_from_store, id}, %{assigns: a} = socket) do
    case Insights.get_initial_insight(a.current_user.id, id) do
      %Insight{} = ins -> query_mls(%{
        subject: ins.property,
        selected: ins.selected_listing_ids,
        filters: Utilities.format_quoted_json(ins.saved_search.criteria)}, socket)
      nil -> {:noreply, assign(socket, fetching: false, errors: [%{message: "cannot locate #{id}."}])}
    end
  end

  def handle_info({:update_filter, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, filters: Map.merge(a.filters, val))}
  end

  def handle_event("distance-filter-update", %{"d" => %{"distance" => d}},  %{assigns: a} = socket) do
    if d === "" do
      {:noreply, assign(socket, filters: Map.merge(a.filters, %{distance: 50.0}))}
    else
      case Float.parse(d) do
        {fl, _} -> {:noreply, assign(socket, filters: Map.merge(a.filters, %{distance: fl}))}
        :error -> {:noreply, assign(socket, filters: a.filters)}
      end
    end
  end

  def handle_event("filter-submit", %{"mf" => form}, %{assigns: a} = socket) do
    filters = Map.merge(a.filters, %{
      baths: %{low: to_i(form["baths_min"]), high: to_i(form["baths_max"])},
      beds: %{low: to_i(form["beds_min"]), high: to_i(form["beds_max"])},
      sqft: %{low: to_i(form["sqft_min"]), high: to_i(form["sqft_max"])},
      selected_statuses: a.filters.selected_statuses
    })
    query_mls(%{subject: a.subject, filters: filters, selected: []}, socket)
  end

  def handle_event("toggle-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !a.show_panel)}
  end

  def handle_event("toggle-filters", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_filters: !a.show_filters)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, socket) do
    IO.inspect(selected_lk, label: "HELLO")
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
    update = %{
      selected_listing_ids: Enum.map(a.selected_comps, fn c -> c.listing_id end),
      saved_search: %{criteria: a.filters}
    }
    case Insights.update_insight(a.key, a.current_user.id, update) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{a.key}/review")}
      {:error, _} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil,
      possible_subject_properties: nil
    )}
  end

  defp query_mls(%{subject: subject, filters: filters, selected: sids},  %{assigns: a} = socket) do
    case ResoApi.comparable_properties(a.current_user.current_mls, subject, filters) do
      {:ok, c} ->
        %{listings: ls, subject: ns, filters: fs} = sort_by(c.listings, subject, filters, socket)
        {:noreply, assign(socket, comparables: ls, fetching: false, filters: fs, subject: ns,
         comp_count: c.count, selected_comps: Enum.map(sids, fn s ->
                    Enum.find(c.listings, fn l -> s == l.listing_id
                  end) end))}
      {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false,
                        subject: subject)}
    end
  end

  defp sort_by(listings, subj, filters, %{assigns: a} = socket) do
    cond do
      a.sort_by === "ranking" ->
        sorted = Enum.sort_by(listings, &(&1.excyte_ranking.score))
        price =
          if subj.est_price === nil || subj.est_price === 0 do
            Enum.reduce(sorted, [], fn l, acc ->
              cond do
                l.close_price !== nil -> [l.close_price | acc]
                l.list_price !== nil -> [l.list_price | acc]
                true -> acc
              end
            end)
            |> Enum.take(10)
            |> average()
          else
            subj.est_price
          end
        price_filters = setup_price_filter(price)
        %{listings: sorted,
          subject: Map.merge(subj, %{est_price: price}),
          filters: Map.merge(filters, price_filters)}
      true -> %{listings: listings, subject: subj, filters: filters}
    end
  end

  defp setup_price_filter(price) do
    filters =
      if price !== nil && price !== 0 do
        %{ price_min: round(price * 0.95), price_max: round(price * 1.05),
           price: %{ type: Integer, low: round(price * 0.95), high: round(price * 1.05) }}
      else
        %{ price_min: 0, price_max: 10_000_000, price: %{ type: Integer, low: 0, high: 10_000_000 }}
      end
  end

  defp average(nums) do
    if length(nums) > 0, do: Enum.sum(nums) / length(nums), else: nil
  end

  defp to_i(str) do
    if str === "" do
      nil
    else
      Integer.parse(str) |> elem(0)
    end
  end
end
