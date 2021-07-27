defmodule Excyte.Mls.PublicDataApi do
  use Tesla, only: [:get], docs: false
  alias Excyte.Mls.{MetaCache, ProcessReso, ResoMemberApi}
  alias Excyte.{Properties.Property}

  plug Tesla.Middleware.BaseUrl, "https://us-real-estate.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", Application.get_env(:excyte, :us_real_estate_rapid_api_key)},
    {"x-rapidapi-host", "us-real-estate.p.rapidapi.com"},
    {"useQueryString", true}
  ]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  def get_listings_by_agent(mls, %{list_agent_key: lak}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    query = get_expanded(mls)
    if Enum.member?(entity.attributes, "ListAgentKey") do
      get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$top=9&"
        <> "$orderby=ModificationTimestamp%20asc&#{query.select_str}$filter="
        <> "ListAgentKey%20eq%20%27#{lak}%27")
      |> format_response()
      |> ProcessReso.simple_process()
    else
      ResoMemberApi.getMemberListings(mls)
    end
  end

  def get_listing_by_key(mls, %{listing_key: key}) do
    get("#{mls.dataset_id}/Property(%27#{key}%27)?access_token=#{mls.access_token}")
    |> case do
      {:ok, %Tesla.Env{:body => body}} ->
        if is_nil(body) do
          {:error, %{message: "Could not find property on MLS."}}
        else
          {:ok, Map.put(body, "MainPhotoUrl", ProcessReso.main_photo(body["Media"]))}
        end
      {:error, err} -> {:error, err}
    end
  end

  def listing_properties(mls, %Property{} = subject, opts) do
    query = get_expanded(mls)
    get_by_opts = if query.coords, do: %{coords: subject.coords, distance: opts.distance}, else: %{zip: subject.zip}
    types = if Map.has_key?(opts, :property_types) && length(opts.property_types) > 0, do: "(#{property_type(opts.property_types)})%20and%20", else: ""
    mb = if Map.has_key?(opts, :status_updated), do: "#{get_by_months_back(opts)}", else: ""
    query_str = query.select_str
      <> "$filter="
      <> "(#{mb})%20and%20"
      <> "(#{status(opts.selected_statuses)})%20and%20"
      <> "#{types}"
      <> "#{get_by_all_prices(mls, opts)}%20and%20"
      <> "#{get_attr_by_range(mls, %{attr: "LivingArea", low: opts.sqft.low, high: opts.sqft.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "BedroomsTotal", low: opts.beds.low, high: opts.beds.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "BathroomsTotalInteger", low: opts.baths.low, high: opts.baths.high})}"
      <> "#{get_by_distance(get_by_opts)}"

    safe_str = String.trim_trailing(query_str, "%20and%20")
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$top=60&#{safe_str}")
    |> format_response()
    |> ProcessListings.process_init(subject)
    |> case do
      {:ok, resp} -> {:ok, Map.merge(resp, %{filters: opts})}
      {:error, err} -> {:error, err}
    end
  end

  defp get_by_price(mls, %{price: price}) do
    low = if price.low === nil || price.low < 0, do: 0, else: price.low * 1000
    high = if price.high === nil, do: 100_000_000, else: price.high * 1000
    if price === nil || Enum.empty?(price) do
      ""
    else
      "#{get_attr_by_range(mls, %{attr: "ListPrice", low: low, high: high})}"
    end
  end

  defp get_by_all_prices(mls, %{price: price}) do
    low = if price.low === nil || price.low < 0, do: 0, else: price.low * 1000
    high = if price.high === nil, do: 100_000_000, else: price.high * 1000
    if price === nil || Enum.empty?(price) do
      ""
    else
      "(#{get_simple_attr_by_range(mls, %{attr: "ListPrice", low: low, high: high})}%20or%20"
      <> "#{get_simple_attr_by_range(mls, %{attr: "ClosePrice", low: low, high: high})})"
    end
  end

  defp get_by_months_back(%{selected_statuses: statuses, status_updated: updated}) do
    gte_date = Timex.shift(Date.utc_today(), months: updated.value * -1)
    if length(statuses) > 0 do
      Enum.reduce(statuses, "", fn st, acc ->
        case st.value do
          "closed" -> "#{acc}date(CloseDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          "pending" -> "#{acc}date(ListingContractDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          "active" -> "#{acc}date(ContractStatusChangeDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          _ ->
            IO.inspect(label: "fallback")
            "#{acc}date(ContractStatusChangeDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
        end
      end)
      |> String.trim_trailing("%20or%20")
    else
      "%20and%20(ContractStatusChangeDate%20ge%20#{Date.to_string(gte_date)})"
    end
  end

  # not for chaining
  defp get_simple_attr_by_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      cond do
        l !== nil && h !== nil -> "(#{attr}%20ge%20#{l}%20and%20#{attr}%20le%20#{h})"
        l !== nil -> "#{attr}%20ge%20#{l}"
        h !== nil -> "#{attr}%20le%20#{h}"
        true -> ""
      end
    end
  end

  # for chaining
  defp get_attr_by_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      cond do
        l !== nil && h !== nil -> "(#{attr}%20ge%20#{l}%20and%20#{attr}%20le%20#{h})%20and%20"
        l !== nil -> "#{attr}%20ge%20#{l}%20and%20"
        h !== nil -> "#{attr}%20le%20#{h}%20and%20"
        true -> ""
      end
    end
  end

  defp format_response({:ok, %Tesla.Env{:body => %{"error" => error}}}) do
    # Return error to controller to log error along with MLS and User data
    # %{"error" => %{"code" => 400, "message" => "Cannot find property 'Coordinates'"}}
    {:error, error}
  end

  defp format_response({:ok, %Tesla.Env{:body => body}}) do
    {:ok, %{
      context: body["@odata.context"],
      count: body["@odata.count"],
      next_link: body["@odata.nextLink"],
      listings: body["value"]
    }}
  end

  defp format_response({:error, error}) do
    {:error, error}
  end

end
