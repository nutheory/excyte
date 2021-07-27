defmodule Excyte.Mls.ResoApi do
  use Tesla, only: [:get], docs: false
  import SweetXml
  alias Excyte.Mls.{MetaCache, ProcessReso, ResoMemberApi}
  alias Excyte.{Properties.Property}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  # plug Tesla.Middleware.Headers,
    # [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_api_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  @minimal_fields ["ListingId", "Coordinates", "ListPrice", "ClosePrice", "StandardStatus",
                  "StreetNumber", "StreetName", "StateOrProvince", "City", "PostalCode",
                  "UnitNumber", "BathroomsOneQuarter", "BathroomsThreeQuarter", "BathroomsFull",
                  "BathroomsHalf", "BedroomsTotal", "PropertySubType", "LivingArea",
                  "PropertyType", "ModificationTimestamp"]

  @expanded_fields @minimal_fields ++ ["Media", "PublicRemarks", "YearBuilt", "ListingTerms",
                  "ExteriorFeatures", "InteriorFeatures", "WaterfrontFeatures", "PoolFeatures",
                  "SecurityFeatures", "SpaFeatures", "FireplaceFeatures", "ParkingFeatures",
                  "DoorFeatures", "WindowFeatures", "PatioAndPorchFeatures", "CommunityFeatures",
                  "Flooring", "GarageSpaces", "PropertyType", "GarageYN", "GarageSpaces",
                  "AttachedGarageYN", "BedroomsPossible", "LotSizeAcres", "LotSizeSquareFeet",
                  "AssociationFee", "AssociationFeeIncludes", "AssociationFeeFrequency",
                  "HorseYN", "ViewYN", "WaterfrontYN", "NewConstructionYN", "PoolPrivateYN", "SpaYN",
                  "SubdivisionName", "CloseDate", "CancellationDate", "DaysOnMarket", "ExpirationDate",
                  "ContractStatusChangeDate", "CumulativeDaysOnMarket", "Appliances", "OnMarketDate",
                  "ListingContractDate", "WithdrawnDate", "OffMarketDate", "OffMarketTimestamp",
                  "OnMarketTimestamp", "OriginalEntryTimestamp", "PendingTimestamp",
                  "PriceChangeTimestamp", "StatusChangeTimestamp", "PurchaseContractDate",
                  "MajorChangeTimestamp", "MajorChangeType"]

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

  def property_by_address(mls, %{
    street_number: street_number,
    safe_street_name: safe_street_name,
    city: city,
    state: state,
    zip: zip
  }) do
    query = get_expanded(mls)
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&"
      <> "#{query.select_str}$filter="
      <> "#{number(street_number)}%20and%20"
      <> "#{street(safe_street_name)}%20and%20"
      <> "#{city(city)}%20and%20"
      <> "#{state(state)}%20and%20"
      <> zip_code(zip))
    |> format_response()
    |> ProcessReso.simple_process()
  end

  def property_by_address(_, _) do
    {:error, %{message: "invalid Address"}}
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
    |> ProcessReso.process_init(subject)
    |> case do
      {:ok, resp} -> {:ok, Map.merge(resp, %{filters: opts})}
      {:error, err} -> {:error, err}
    end
  end

  def listing_properties(mls, _subject, opts) do
    query = get_expanded(mls)
    get_by_opts = if query.coords, do: %{coords: opts.coords, distance: opts.distance}, else: %{zip: opts.zip}
    query_str = query.select_str
      <> "$filter="
      <> "(#{status(opts.selected_statuses)})%20and%20"
      <> if Map.has_key?(opts, :property_types) && length(opts.property_types) > 0, do: "(#{property_type(opts.property_types)})%20and%20", else: ""
      <> if Map.has_key?(opts, :features) && length(opts.property_types) > 0, do: "(#{get_by_features(opts.features)})%20and%20", else: ""
      <> "#{get_by_price(mls, opts)}"
      <> "#{get_attr_by_range(mls, %{attr: "LivingArea", low: opts.sqft.low, high: opts.sqft.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "LotSizeSquareFeet", low: opts.lot_size.low, high: opts.lot_size.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "GarageSpaces", low: opts.garage.low, high: opts.garage.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "Stories", low: opts.stories.low, high: opts.stories.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "BedroomsTotal", low: opts.beds.low, high: opts.beds.high})}"
      <> "#{get_attr_by_range(mls, %{attr: "BathroomsTotalInteger", low: opts.baths.low, high: opts.baths.high})}"
      <> "#{get_by_distance(get_by_opts)}"

    safe_str = String.trim_trailing(query_str, "%20and%20")
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$top=60&#{safe_str}")
    |> format_response()
    |> ProcessReso.process_init(opts)
    |> case do
      {:ok, resp} -> {:ok, Map.merge(resp, %{filters: opts})}
      {:error, err} -> {:error, err}
    end
  end

  def get_by_distance(%{coords: %{lng: lng, lat: lat}, distance: d}) do
    "geo.distance(Coordinates,%20POINT(#{lng}%20#{lat}))%20lt%20#{d}"
  end

  def get_by_distance(%{zip: z}) do
    zip_code(z)
  end

  def get_by_distance(_, _) do
    ""
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

  defp get_by_months_back(_) do
    ""
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

  def get_by_features(features) when is_list(features) do
    Enum.reduce(features, "", fn feat, acc ->
      case feat do
        "NewConstructionYN" -> "#{acc}NewConstructionYN%20eq%20%true%20or%20"
        "ViewYN" -> "#{acc}ViewYN%20eq%20%true%20or%20"
        "WaterfrontYN" -> "#{acc}WaterfrontYN%20eq%20%true%20or%20"
        "PoolPrivateYN" -> "#{acc}PoolPrivateYN%20eq%20%true%20or%20"
        "SpaYN" -> "#{acc}SpaYN%20eq%20%true%20or%20"
      end
    end)
    |> String.trim_trailing("%20or%20")
  end

  # I think date wraps the attr not the string?
  # defp get_attr_by_date_range(mls, %{attr: attr, low: l, high: h}) do
  #   meta = get_metadata(mls)
  #   entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
  #   if Enum.member?(entity.attributes, attr) do
  #     "%20and%20#((#{attr}%20ge%20date(#{l}))%20and%20(#{attr}%20le%20date(#{h})))"
  #   end
  # end

  def get_by_listing_ids(mls, ids_array, %Property{} = subject) do
    ids_str = Enum.reduce(ids_array, "$filter=", fn id, acc ->
      "#{acc}#{listing_id(id)}"
    end)
    |> String.trim_trailing("%20or%20")

    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&#{ids_str}")
    |> format_response()
    |> ProcessReso.process_init(subject)
  end

  def get_by_listing_ids(mls, ids_array, opts) do
    ids_str = Enum.reduce(ids_array, "$filter=", fn id, acc ->
      "#{acc}#{listing_id(id)}"
    end)
    |> String.trim_trailing("%20or%20")

    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&#{ids_str}")
    |> format_response()
    |> ProcessReso.process_init(opts)
  end

  def get_by_listing_id(mls, id) do
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$filter=ListingId%20eq%20%27#{URI.encode(id)}%27")
    |> format_response()
    |> ProcessReso.simple_process()
  end

  defp listing_id(id) do
    "ListingId%20eq%20%27#{URI.encode(id)}%27%20or%20"
  end

  defp number(number) do
    "StreetNumber%20eq%20%27#{URI.encode(number)}%27"
  end

  defp street(name) do
    "contains(StreetName,%20%27#{URI.encode(name)}%27)"
  end

  defp city(city) do
    "City%20eq%20%27#{URI.encode(city)}%27"
  end

  defp state(state) do
    "StateOrProvince%20eq%20%27#{state}%27"
  end

  defp zip_code(zip) do
    "startswith(PostalCode,%27#{zip}%27)"
  end

  # Active, Active Under Contract, Canceled, Closed, Expired, Pending, Withdrawn
  # ContractStatusChangeDate
  defp status(status_arr) when is_list(status_arr) do
    Enum.reduce(status_arr, "", fn st, acc ->
      "#{acc}tolower(StandardStatus)%20eq%20%27#{st.value}%27%20or%20"
    end)
    |> String.trim_trailing("%20or%20")
  end

  defp status(stat) do
    status([stat])
  end

  def property_type(property_arr) when is_list(property_arr) do
    Enum.reduce(property_arr, "", fn prop, acc ->
      "#{acc}tolower(PropertySubType)%20eq%20%27#{prop.value}%27%20or%20"
    end)
    |> String.trim_trailing("%20or%20")
  end

  defp get_expanded(mls) do
    case MetaCache.get("#{mls.dataset_id}_expanded") do
      %{} = exp -> exp
      _ -> get_select(mls, %{fields: @expanded_fields, name: "expanded"})
    end
  end

  defp get_select(mls, %{fields: fields, name: name}, extra \\ []) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    coords = Enum.member?(entity.attributes, "Coordinates")
    res =
      Enum.reduce(fields ++ extra, "$select=ListingKey,", fn str, acc ->
        if Enum.member?(entity.attributes, str), do: acc <> str <> ",", else: acc
      end)
      |> String.trim_trailing(",")
      |> (&<>/2).("&")
    MetaCache.put("#{mls.dataset_id}_#{name}", %{select_str: res, coords: coords})
    %{select_str: res, coords: coords}
  end

  def get_metadata(mls) do
    case MetaCache.get("#{mls.dataset_id}_meta") do
      %{} = meta -> meta
      _ -> get_metadata_from_mls(mls)
    end
  end

  def get_metadata_from_mls(mls) do
    {:ok, %Tesla.Env{:body => body}} = get("#{mls.dataset_id}/$metadata?access_token=#{mls.access_token}")
    meta =
      parse(body)
      |> xmap(entities: [
          ~x"//Schema/EntityType"l,
          entity_name: ~x"./@Name"s,
          attributes: ~x"./Property/@Name"ls
      ])
    MetaCache.put("#{mls.dataset_id}_meta", meta)
    meta
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
