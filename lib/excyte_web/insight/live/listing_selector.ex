defmodule ExcyteWeb.Insight.ListingSelector do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi,
    Properties.Adjustments,
    Properties.Property
  }

  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  @status_updated_options [
    %{value: 1, text: "Past month"},
    %{value: 2, text: "Past 2 months"},
    %{value: 3, text: "Past 3 months"},
    %{value: 6, text: "Past 6 months"},
    %{value: 9, text: "Past 9 months"},
    %{value: 12, text: "Past year"},
    %{value: 24, text: "Past 2 years"}
  ]

  def render(assigns), do: InsightView.render("listing_selector.html", assigns)

  def mount(params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    {:ok, prev_state} = Cachex.get(:insights_cache, params["insight_id"])

    if prev_state do
      send(
        self(),
        {:query_mls,
         %{
           insight: prev_state.insight,
           filters: Utilities.format_quoted_json(prev_state.insight.saved_search.criteria)
         }}
      )

      {:ok, assign(socket, Map.merge(prev_state, %{listings: [], fetching: true}))}
    else
      if params["insight_id"], do: send(self(), {:load_from_store, params["insight_id"]})

      {:ok,
       socket
       |> assign(:current_user, cu)
       |> assign(:selected_listings, [])
       |> assign(:filters, %{})
       |> assign_client_info()
       |> assign(:subject, nil)
       |> assign(:finder_input, "")
       |> assign(:sort_by, "ranking")
       |> assign(:key, params["insight_id"])
       |> assign(:status_updated_options, @status_updated_options)
       |> assign(:fetching, if(params["insight_id"], do: true, else: false))
       |> assign(:listings, nil)
       |> assign(:preview, nil)
       |> assign(:show_panel, false)
       |> assign(:show_filters, false)}
    end
  end

  def handle_info({:load_from_store, id}, %{assigns: a} = socket) do
    case Insights.get_initial_insight(a.current_user.id, id) do
      %Insight{} = ins ->
        send(
          self(),
          {:query_mls,
           %{
             insight: ins,
             filters: Utilities.format_quoted_json(ins.saved_search.criteria)
           }}
        )

        {:noreply, socket}

      nil ->
        {:noreply, assign(socket, fetching: false, errors: [%{message: "cannot locate #{id}."}])}
    end
  end

  # def handle_info({:query_mls, %{insight: ins, filters: filters}}, %{assigns: a} = socket) do
  #   case Insights.fetch_comparables(%{subject: ins.property, search_opts: filters}) do
  #     {:ok, c} -> %{listings: ls, subject: ns, filters: fs} = sort_by(c.listings, subject, filters, socket)
  #       {:noreply, assign(socket, insight: subject, listings: ls, fetching: false, filters: fs,
  #         subject: ns, comp_count: c.count, show_filters: length(ls) === 0)}

  #     {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false,
  #                       subject: subject)}
  #   end
  # end

  def handle_info({:query_mls, %{insight: ins, filters: filters}}, %{assigns: a} = socket) do
    case ResoApi.listing_properties(a.current_user.current_mls, ins.property, filters) do
      {:ok, c} ->
        %{listings: ls, subject: ns, filters: fs} =
          sort_by(c.listings, ins.property, filters, socket)

        {:noreply,
         assign(socket,
           insight: ins,
           listings: ls,
           fetching: false,
           filters: fs,
           subject: ns,
           comp_count: c.count,
           show_filters: length(ls) === 0
         )}

      {:error, err} ->
        {:noreply, assign(socket, errors: err, fetching: false, subject: ins.property)}
    end
  end

  def handle_info({:update_filter, val}, %{assigns: a} = socket) do
    filters =
      if Map.has_key?(val, :price) do
        low = val.price.low
        high = val.price.high
        Map.merge(a.filters, %{price: %{low: low, high: high, type: Integer}})
      else
        Map.merge(a.filters, val)
      end

    {:noreply, assign(socket, filters: filters)}
  end

  def handle_info({:add_comp, %{listing: listing}}, %{assigns: a} = socket) do
    ns =
      assign(socket,
        selected_listings: a.selected_listings ++ [listing],
        preview: nil,
        show_panel: false
      )

    progress_save(ns)
    {:noreply, ns}
  end

  def handle_info({:update_selected_listing, %{listing: listing}}, %{assigns: a} = socket) do
    selected =
      Enum.map(a.selected_listings, fn sl ->
        if sl.listing_key === listing.listing_key, do: listing, else: sl
      end)

    ns = assign(socket, selected_listings: selected, preview: nil)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_info({:add_tour_stop, %{listing: listing}}, %{assigns: a} = socket) do
    ns =
      assign(socket,
        selected_listings: a.selected_listings ++ [listing],
        preview: nil,
        show_panel: false
      )

    progress_save(ns)
    {:noreply, ns}
  end

  def handle_info({:tour_sorted, %{selected: sel}}, socket) do
    ns = assign(socket, selected_listings: sel)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_info({:update_cma, %{suggested_price: sp}}, %{assigns: a} = socket) do
    doms =
      Enum.reduce(a.selected_listings, [], fn %{days_on_market: dom}, acc ->
        if dom !== nil, do: [dom | acc], else: acc
      end)

    lists =
      Enum.reduce(a.selected_listings, [], fn %{list_price: list}, acc ->
        if list !== nil, do: [list | acc], else: acc
      end)

    closes =
      Enum.reduce(a.selected_listings, [], fn %{close_price: close}, acc ->
        if close !== nil, do: [close | acc], else: acc
      end)

    update = %{
      selected_listing_ids: Enum.map(a.selected_listings, fn c -> c.listing_id end),
      saved_search: %{criteria: a.filters},
      content: %{
        listings: a.selected_listings,
        suggested_subject_price: sp,
        avg_dom: if(length(doms) > 0, do: trunc(Enum.sum(doms) / length(doms)), else: 0),
        avg_list: if(length(lists) > 0, do: trunc(Enum.sum(lists) / length(lists)), else: 0),
        avg_close: if(length(closes) > 0, do: trunc(Enum.sum(closes) / length(closes)), else: 0)
      }
    }

    case Insights.update_insight(a.key, a.current_user.id, update) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/auth/insights/#{a.key}/customize")}
      {:error, _} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  def handle_event("update_filter", %{"attr" => attr, "option" => opt}, %{assigns: a} = socket) do
    res =
      case Integer.parse(opt) do
        {int, _} -> int
        :error -> opt
      end

    key = String.to_atom("#{attr}_options")
    val = Enum.find(a[key], fn at -> at.value === res end)
    new_filter = Map.put(%{}, String.to_atom(attr), val)
    {:noreply, assign(socket, filters: Map.merge(a.filters, new_filter))}
  end

  def handle_event("update-tour", _, %{assigns: a} = socket) do
    update = %{
      selected_listing_ids: Enum.map(a.selected_listings, fn c -> c.listing_id end),
      saved_search: %{criteria: a.filters},
      content: %{listings: a.selected_listings}
    }

    case Insights.update_insight(a.key, a.current_user.id, update) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "auth/insights/#{a.key}/customize")}
      {:error, _} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  def handle_event(
        "finder_submit",
        %{"finder" => %{"listing_ids" => lst_ids}},
        %{assigns: a} = socket
      ) do
    ids = String.split(lst_ids, [" ", ","], trim: true)
    subject = if a.insight.type === "cma", do: a.subject, else: a.insight.saved_search.criteria

    res =
      case ResoApi.get_by_listing_ids(a.current_user.current_mls, ids, subject) do
        {:ok, %{listings: listings}} ->
          Enum.map(listings, fn lst -> Map.merge(lst, %{search_by_listing: true}) end)

        {:error, err} ->
          IO.inspect(err, label: "ERR GETTING BY LISTING IDS")
      end

    {:noreply, assign(socket, finder_input: "", listings: res ++ a.listings)}
  end

  def handle_event("filter-submit", %{"mf" => form}, %{assigns: a} = socket) do
    distance =
      if form["distance"] === "" do
        50.0
      else
        case Float.parse(form["distance"]) do
          {fl, _} -> fl
          :error -> 50.0
        end
      end

    filters =
      Map.merge(a.filters, %{
        distance: distance,
        selected_statuses: a.filters.selected_statuses
      })

    send(self(), {:query_mls, %{insight: a.insight, filters: filters}})
    {:noreply, assign(socket, fetching: true)}
  end

  def handle_event("sort-listings", %{"listings" => [_ | _] = listings}, %{assigns: a} = socket) do
    rearranged =
      Enum.map(listings, fn %{"id" => id, "position" => pos} ->
        Enum.find(a.selected_listings, fn %{listing_id: lid} -> id === lid end)
        |> Map.put(:position, pos)
      end)

    {:noreply, assign(socket, selected_listings: rearranged)}
  end

  def handle_event("toggle-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !a.show_panel)}
  end

  def handle_event("toggle-filters", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_filters: !a.show_filters)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, %{assigns: a} = socket) do
    already_added = Enum.find(a.selected_listings, fn lk -> lk.listing_key === selected_lk end)

    preview =
      if already_added do
        already_added
      else
        new_listing = Enum.find(a.listings, fn lk -> lk.listing_key === selected_lk end)

        if Map.has_key?(a.subject, :__struct__) do
          Adjustments.process_init(new_listing, a.subject)
        else
          new_listing
        end
      end

    {:noreply, assign(socket, preview: preview, show_panel: true)}
  end

  def handle_event("remove-preview", _, socket) do
    {:noreply, assign(socket, preview: nil, show_panel: false)}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, %{assigns: a} = socket) do
    ret = Enum.reject(a.selected_listings, fn lk -> lk.listing_key === selected_lk end)
    ns = assign(socket, selected_listings: ret)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_event("remove-tour-stop", %{"key" => selected_lk}, %{assigns: a} = socket) do
    ret = Enum.reject(a.selected_listings, fn lk -> lk.listing_key === selected_lk end)
    ns = assign(socket, selected_listings: ret)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply,
     assign(socket,
       listings: nil,
       selected_listings: [],
       subject: nil
     )}
  end

  defp progress_save(%{assigns: a}) do
    Cachex.put(:insights_cache, a.key, Map.drop(a, [:flash, :live_action, :socket, :listings]))
  end

  defp sort_by(listings, %Property{} = subj, filters, %{assigns: a}) do
    show_filters = if length(listings) === 0, do: true, else: false

    cond do
      a.sort_by === "ranking" ->
        sorted = Enum.sort_by(listings, & &1.excyte_ranking.score, :desc)

        price =
          if Map.has_key?(filters.price, :low) do
            filters.price
          else
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
            |> setup_price_filter()
          end

        %{
          listings: sorted,
          subject: Map.merge(subj, %{est_price: price.low}),
          filters: filters,
          show_filters: show_filters
        }

      true ->
        %{listings: listings, subject: subj, filters: filters, show_filters: show_filters}
    end
  end

  defp sort_by(listings, _, filters, %{assigns: a}) do
    show_filters = if length(listings) === 0, do: true, else: false
    %{listings: listings, subject: a.filters, filters: filters, show_filters: show_filters}
  end

  defp setup_price_filter(price) do
    if price !== nil && price !== 0 do
      %{
        price: %{type: Integer, low: round(price / 1000 * 0.95), high: round(price / 1000 * 1.05)}
      }
    else
      %{price: %{type: Integer, low: 0, high: 100_000_000}}
    end
  end

  defp average(nums) do
    if length(nums) > 0, do: Enum.sum(nums) / length(nums), else: nil
  end
end
