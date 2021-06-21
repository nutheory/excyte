defmodule ExcyteWeb.Insight.Comps do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi,
    Properties.Adjustments
  }
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("comps.html", assigns)

  def mount(params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    {:ok, prev_state} = Cachex.get(:insights_cache, params["insight_id"])
    if prev_state do
      send self(), {:query_mls, %{
        insight: prev_state.insight,
        filters: Utilities.format_quoted_json(prev_state.insight.saved_search.criteria)
      }}
      {:ok, assign(socket, Map.merge(prev_state, %{comparables: [], fetching: true}))}
    else
      if params["insight_id"], do: send self(), {:load_from_store, params["insight_id"]}
      {:ok, assign(socket,
        current_user: cu,
        selected_comps: [],
        filters: %{},
        client_info: assign_client_info(socket),
        subject: nil,
        insight_name: nil,
        template_id: nil,
        theme_attributes: nil,
        sort_by: "ranking",
        key: params["insight_id"],
        fetching: (if params["insight_id"], do: true, else: false),
        comparables: nil,
        preview: nil,
        show_panel: false,
        show_filters: false
      )}
    end
  end

  def handle_info({:load_from_store, id}, %{assigns: a} = socket) do
    case Insights.get_initial_insight(a.current_user.id, id) do
      %Insight{} = ins ->
        get_theme(ins, socket)
        send self(), {:query_mls, %{insight: ins, filters: Utilities.format_quoted_json(ins.saved_search.criteria)}}
        {:noreply, socket}
      nil -> {:noreply, assign(socket, fetching: false, errors: [%{message: "cannot locate #{id}."}])}
    end
  end

  def handle_info({:query_mls, %{insight: ins, filters: filters}}, %{assigns: a} = socket) do
    case ResoApi.comparable_properties(a.current_user.current_mls, ins.property, filters) do
      {:ok, c} -> %{listings: ls, subject: ns, filters: fs} = sort_by(c.listings, ins.property, filters, socket)
        {:noreply, assign(socket, insight: ins, comparables: ls, fetching: false, filters: fs,
          subject: ns, comp_count: c.count)}
      {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false,
                        subject: ins.property)}
    end
  end

  def handle_info({:update_filter, val}, %{assigns: a} = socket) do
    filters =
      if Map.has_key?(val, :price) do
        low = val.price.low * 1000
        high = val.price.high * 1000
        Map.merge(a.filters, %{price: %{low: low, high: high, type: Integer}})
      else
        Map.merge(a.filters, val)
      end
    {:noreply, assign(socket, filters: filters)}
  end

  def handle_info({:add_comp, %{listing: listing}}, %{assigns: a} = socket) do
    ns = assign(socket, selected_comps: a.selected_comps ++ [listing], preview: nil, show_panel: false)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_info({:set_theme_template, %{theme_attributes: theme, template: template}}, socket) do
    {:noreply, assign(socket, theme_attributes: theme, template_id: template.id)}
  end

  def handle_info({:update_cma, %{suggested_price: sp}}, %{assigns: a} = socket) do
    update = %{
      selected_listing_ids: Enum.map(a.selected_comps, fn c -> c.listing_id end),
      saved_search: %{criteria: a.filters},
      content: %{comps: a.selected_comps, suggested_subject_price: sp},
      document_attributes: Map.from_struct(a.theme_attributes),
      document_template_id: a.template_id
    }
    case Insights.update_insight(a.key, a.current_user.id, update) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{a.key}/customize")}
      {:error, _} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
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
    filters = Map.merge(a.filters, %{
      distance: distance,
      selected_statuses: a.filters.selected_statuses
    })
    send self(), {:query_mls, %{insight: a.insight, filters: filters}}
    {:noreply, assign(socket, fetching: true)}
  end

  def handle_event("toggle-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !a.show_panel)}
  end

  def handle_event("toggle-filters", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_filters: !a.show_filters)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, %{assigns: a} = socket) do
    sel = Enum.find(a.comparables, fn lk -> lk.listing_key === selected_lk end)
    preview = Adjustments.process_init(sel, a.subject)
    {:noreply, assign(socket, preview: preview, show_panel: true)}
  end

  def handle_event("remove-preview", _, socket) do
    {:noreply, assign(socket, preview: nil, show_panel: false)}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, %{assigns: a} = socket) do
    ret = Enum.reject(a.selected_comps, fn lk -> lk.listing_key === selected_lk end)
    ns = assign(socket, selected_comps: ret)
    progress_save(ns)
    {:noreply, ns}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil
    )}
  end

  defp get_theme(ins, %{assigns: a}) do
    theme_attrs = Insights.get_theme_attributes(a.current_user.id, a.current_user.brokerage_id)
    templates = Insights.get_document_templates(a.current_user, ins.type)
    IO.inspect(templates, label: "TEMPLATES")
    send self(), {:set_theme_template, %{theme_attributes: theme_attrs, template: hd(templates)}}
  end

  defp progress_save(%{assigns: a}) do
    Cachex.put(:insights_cache, a.key, Map.drop(a, [:flash, :live_action, :socket, :comparables]))
  end

  defp sort_by(listings, subj, filters, %{assigns: a}) do
    show_filters = if length(listings) === 0, do: true, else: false
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
          filters: Map.merge(filters, price_filters),
          show_filters: show_filters}
      true -> %{listings: listings, subject: subj, filters: filters, show_filters: show_filters}
    end
  end

  defp setup_price_filter(price) do
    if price !== nil && price !== 0 do
      %{ price: %{ type: Integer, low: round(price * 0.95), high: round(price * 1.05) }}
    else
      %{ price: %{ type: Integer, low: 0, high: 10_000_000 }}
    end
  end

  defp average(nums) do
    if length(nums) > 0, do: Enum.sum(nums) / length(nums), else: nil
  end
end
