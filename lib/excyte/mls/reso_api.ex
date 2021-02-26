defmodule Excyte.Mls.ResoApi do
  use Tesla, only: [:get], docs: false
  import SweetXml
  alias Excyte.Mls.{MetaCache, ProcessListings}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  # plug Tesla.Middleware.Headers,
    # [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_api_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  @minimal_fields ["ListingId", "Coordinates", "ListPrice", "StandardStatus", "StreetNumber",
                  "StreetName", "StateOrProvince", "City", "PostalCode", "UnitNumber",
                  "BathroomsOneQuarter", "BathroomsThreeQuarter", "BathroomsFull",
                  "BathroomsHalf", "BedroomsTotal", "PropertySubType", "LivingArea",
                  "PropertyType", "ModificationTimestamp"]

  @expanded_fields @minimal_fields ++ ["Media", "PublicRemarks", "YearBuilt", "CloseDate",
                  "ExteriorFeatures", "InteriorFeatures", "WaterfrontFeatures", "PoolFeatures",
                  "SecurityFeatures", "SpaFeatures", "FireplaceFeatures", "ParkingFeatures",
                  "DoorFeatures", "WindowFeatures", "PatioAndPorchFeatures", "CommunityFeatures",
                  "Flooring", "GarageSpaces", "PropertyType", "GarageYN", "GarageSpaces",
                  "AttachedGarageYN", "BedroomsPossible", "LotSizeAcres", "AssociationFee",
                  "AssociationFeeIncludes", "AssociationFeeFrequency", "ListingTerms", "View",
                  "Appliances", "SubdivisionName", "CloseDate", "CancellationDate", "DaysOnMarket",
                  "ContractStatusChangeDate", "CumulativeDaysOnMarket", "ExpirationDate",
                  "ListingContractDate", "WithdrawnDate", "OffMarketDate", "OffMarketTimestamp",
                  "OnMarketDate", "OnMarketTimestamp", "OriginalEntryTimestamp", "PendingTimestamp",
                  "PriceChangeTimestamp", "StatusChangeTimestamp", "PurchaseContractDate",
                  "MajorChangeTimestamp", "MajorChangeType"
                ]


  @main_details ["YearBuilt", "StandardStatus", "CloseDate", "Flooring", "GarageSpaces", "GarageYN",
                "GarageSpaces", "AttachedGarageYN", "LotSizeAcres", "AssociationFee",
                "AssociationFeeIncludes", "AssociationFeeFrequency", "ListingTerms", "View",
                "Appliances"]



  # Run find/replace /Properties?access_token=#{mls.access_token} w/ /Properties?access_token=#{mls.access_token}access_token=#{mls.access_token}
  # dont forget $metadata
  # uncomment middleware above

  def get_listings_by_agent(mls, %{list_agent_key: lak}) do
    # ListAgentKet: "e01c0c36ad4a8e406770f2a56522ef91"
    # ListAgentKet: "77c4b2f3ec218c88bd7e41617ef63489" Current(Eric Moreland)
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$top=9&"
      <> "$orderby=ModificationTimestamp%20asc&#{get_select(mls, %{fields: @minimal}, ["Media"])}$filter="
      <> "ListAgentKey%20eq%20%27#{lak}%27")
    |> format_response()
  end

  def get_listings_by_brokerage(mls, %{office_broker_key: obk}) do
  # OfficeBrokerKey: "238cb1a714e69b74eccf629b85a70ffc"

  end

  def property_by_address(mls, %{
    street_number: street_number,
    safe_street_name: safe_street_name,
    city: city,
    state: state,
    zip: zip
  }) do
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&"
      <> "#{get_select(mls, %{fields: @minimal_fields}, ["Media"])}$filter="
      <> "#{number(street_number)}%20and%20"
      <> "#{street(safe_street_name)}%20and%20"
      <> "#{city(city)}%20and%20"
      <> "#{state(state)}%20and%20"
      <> zip_code(zip))
    |> format_response()
  end

  def property_by_address(_, _) do
    {:error, %{message: "invalid Address"}}
  end

  def comparable_properties(mls, subject, opts) do
    query = get_expanded(mls)
    get_by_opts = if query.coords, do: %{coords: subject.coords, distance: opts.distance}, else: %{zip: subject.zip}
    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&$top=60&"
      <> query.select_str
      <> "$filter=#{get_listings_by_distance(get_by_opts)}"
      # <> if Map.has_key?(opts, :status), do: "%20and%20(#{status(opts.status)})", else: ""
      # <> if Map.has_key?(opts, :months_back), do: "&#{get_by_months_back(opts)}&", else: "&"
      <> "%20and%20#{get_attr_by_range(mls, %{attr: "ListPrice", low: opts.price_min, high: opts.price_max})}"
      <> "%20and%20#{get_attr_by_range(mls, %{attr: "LivingArea", low: opts.sqft_min, high: opts.sqft_max})}"
      <> "%20and%20#{get_attr_by_range(mls, %{attr: "BedroomsTotal", low: opts.beds_min, high: opts.beds_max})}"
      # <> "%20and%20#{get_attr_by_range(mls, %{attr: "BathroomsTotalInteger", low: opts.baths_min, high: opts.baths_max})}"
    )
    |> format_response()
    |> ProcessListings.process_comparables(subject)
    |> case do
      {:ok, resp} -> {:ok, Map.merge(resp, %{filters: opts})}
      {:error, err} -> {:error, err}
    end
    # |> IO.inspect(label: "BOOM")
  end

  def get_listings_by_distance(%{coords: %{lng: lng, lat: lat}, distance: d}) do
    "(geo.distance(Coordinates,POINT(#{lng}%20#{lat}))%20lt%20#{d})"
  end

  def get_listings_by_distance(%{zip: z}) do
    zip_code(z)
  end

  defp get_by_months_back(opts) do
    gte_date = Timex.shift(Date.utc_today(), months: -opts.months)

    if Map.has_key?(opts, :status) do
      Enum.reduce(opts.status, "", fn st, acc ->
        case st do
          "closed" -> "#{acc}date(CloseDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          "pending" -> "#{acc}date(ListingContractDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          "active" -> "#{acc}date(OnMarketDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
          _ -> "#{acc}date(OffMarketDate)%20ge%20#{Date.to_string(gte_date)}%20or%20"
        end
      end)
      |> String.trim_trailing("%20or%20")
    else
      "#date(OnMarketDate)%20ge%20#{Date.to_string(gte_date)}"
    end
  end

  defp get_attr_by_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      "(#{attr}%20ge%20#{l}%20and%20#{attr}%20le%20#{h})"
    end
  end

  # I think date wraps the attr not the string?
  defp get_attr_by_date_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      "((#{attr}%20ge%20date(#{l}))%20and%20(#{attr}%20le%20date(#{h})))"
    end
  end

  def get_by_Listing_ids(mls, ids_array) do
    ids_str = Enum.reduce(ids_array, "$filter=", fn id, acc ->
      "#{acc}#{listing_id(id)}"
    end)
    |> String.trim_trailing("%20or%20")

    get("#{mls.dataset_id}/Properties?access_token=#{mls.access_token}&#{ids_str}")
    |> format_response()
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
      "#{acc}tolower(StandardStatus)%20eq%20%27#{st}%27%20or%20"
    end)
    |> String.trim_trailing("%20or%20")
  end

  defp status(stat) do
    status([stat])
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
    min_list = fields ++ extra
    coords = Enum.member?(entity.attributes, "Coordinates")
    res =
      Enum.reduce(fields ++ extra, "$select=ListingKey,", fn str, acc ->
        acc = if Enum.member?(entity.attributes, str), do: acc <> str <> ",", else: acc
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
    IO.inspect(error, label: "ERR")
    {:error, error}
  end

end
