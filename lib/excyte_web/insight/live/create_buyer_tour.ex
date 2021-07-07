defmodule ExcyteWeb.Insight.CreateBuyerTour do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  @filters %{
    price: %{low: nil, high: nil},
    beds: %{low: nil, high: nil},
    baths: %{low: nil, high: nil},
    sqft: %{low: nil, high: nil},
    lot_size: %{low: nil, high: nil},
    garage: %{low: nil, high: nil},
    stories: %{low: nil, high: nil},
    property_types: [],
    features: [],
    selected_statuses: [%{value: "active", name: "Active"}]
  }

  def render(assigns), do: InsightView.render("create_buyer_tour.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    {:ok, assign(socket,
      current_user: cu,
      coords: %{},
      zip_code: "",
      distance: 20,
      listing_ids: "",
      feature_options: Utilities.feature_options(),
      property_options: Utilities.property_options(cu.current_mls.dataset_id),
      filters: Map.merge(@filters, %{dataset_id: cu.current_mls.dataset_id}),
      errors: nil,
      fetching: false
    )}
  end

  def handle_info({:starting_point, %{geo: geo, address: addr}}, socket) do
    {:noreply, assign(socket, coords: geo, zip_code: List.last(String.split(addr, ", ")))}
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

  def handle_event("update_commit", %{"commit" => %{"listing_ids" => lids, "distance" => d}}, socket) do
    {:noreply, assign(socket, listing_ids: lids, distance: d)}
  end

  def handle_event("create_tour", _, %{assigns: a} = socket) do
    key = "tour#{a.current_user.id}#{System.os_time(:second)}"
    case Insights.create_insight(insight_data(a.filters, key, a)) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{key}/listings")}
      {:error, _method, _changeset, _} ->
          {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  defp insight_data(tour_attrs, key, a) do
    theme_attrs = Insights.get_theme_attributes(a.current_user.id, a.current_user.brokerage_id)
    template = Insights.get_document_templates(a.current_user, "buyer_tour")
    %{
      uuid: key,
      type: "buyer_tour",
      name: "draft",
      created_by_id: a.current_user.id,
      brokerage_id: a.current_user.brokerage_id,
      document_attributes: Map.from_struct(theme_attrs),
      document_template_id: hd(template).id,
      published: false,
      mls: a.current_user.current_mls.dataset_id,
      selected_listing_ids: Enum.filter(String.split(a.listing_ids, [" ", ",", "\n"]), fn l -> l !== "" end),
      saved_search: %{
        query: "",
        zip: a.zip_code,
        criteria: Map.merge(tour_attrs, %{distance: a.distance, coords: a.coords, zip: a.zip_code, dataset_id: a.current_user.current_mls.dataset_id})
      }
    }
  end
end
