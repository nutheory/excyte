defmodule Excyte.Mls.ResoApi do
  use Tesla, only: [:get], docs: false
  import SweetXml
  alias Excyte.Mls.{MetaCache}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  plug Tesla.Middleware.Headers,
    [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_api_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  @minimal_fields ["ListingId", "Coordinates", "ListPrice", "MlsStatus", "StreetNumber",
                  "StreetName", "StateOrProvince", "City", "PostalCode", "UnitNumber",
                  "BathroomsOneQuarter", "BathroomsThreeQuarter", "BathroomsFull",
                  "BathroomsHalf", "BedroomsTotal", "PropertySubType", "LivingArea",
                  "PropertyType"]

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
                  "MajorChangeTimestamp", "MajorChangeType", "ModificationTimestamp"
                ]


  @main_details ["YearBuilt", "MlsStatus", "CloseDate", "Flooring", "GarageSpaces", "PropertyType",
                "GarageYN", "GarageSpaces", "AttachedGarageYN", "LotSizeAcres", "AssociationFee",
                "AssociationFeeIncludes", "AssociationFeeFrequency", "ListingTerms", "View",
                "Appliances"]

  def property_by_address(mls, %{
    street_number: street_number,
    safe_street_name: safe_street_name,
    city: city,
    state: state,
    zip: zip
  }) do
    get("#{mls}/Properties?#{get_select(mls, @minimal_fields, ["Media"])}$filter="
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

  def comparable_properties(mls, opts) do
    get("#{mls}/Properties?$top=20&"
      <> get_select(mls, @expanded_fields)
      <> "$filter=#{get_listings_by_distance(opts)}%20and%20"
      <> "#{get_attr_by_range(mls, %{attr: "ListPrice", low: opts.low_price, high: opts.high_price})}"
    )
    |> format_response()
  end

  def get_listings_by_distance(%{coords: %{lng: lng, lat: lat}, distance: d}) do
    "(geo.distance(Coordinates,POINT(#{lng}%20#{lat}))%20lt%20#{d})"
  end

  def get_listings_by_distance(%{zip: z}) do
    zip_code(z)
  end

  defp get_attr_by_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      "((#{attr}%20ge%20#{l})%20and%20(#{attr}%20le%20#{h}))"
    end
  end

  defp get_attr_by_date_range(mls, %{attr: attr, low: l, high: h}) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    if Enum.member?(entity.attributes, attr) do
      "((#{attr}%20ge%20date(#{l}))%20and%20(#{attr}%20le%20date(#{h})))"
    end
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

  defp status(status) do
    "MlsStatus%20eq%20%27#{status}%27"
  end

  defp get_select(mls, fields, extra \\ []) do
    meta = get_metadata(mls)
    entity = Enum.find(meta.entities, fn m -> m.entity_name === "Property" end)
    min_list = fields ++ extra

    Enum.reduce(fields ++ extra, "$select=ListingKey,", fn str, acc ->
      acc = if Enum.member?(entity.attributes, str), do: acc <> str <> ",", else: acc
    end)
    |> String.trim_trailing(",")
    |> (&<>/2).("&")
  end

  def get_metadata(mls) do
    case MetaCache.get(mls) do
      %{} = meta -> meta
      _ -> get_metadata_from_mls(mls)
    end
  end

  def get_metadata_from_mls(mls) do
    {:ok, %Tesla.Env{:body => body}} = get("#{mls}/$metadata")
    meta =
      parse(body)
      |> xmap(entities: [
          ~x"//Schema/EntityType"l,
          entity_name: ~x"./@Name"s,
          attributes: ~x"./Property/@Name"ls
      ])
    MetaCache.put(mls, meta)
    meta
  end

  defp process_properties(props) do
    Enum.map(props, fn property ->
      property
      |> process_media()
      |> process_bathrooms()
      |> process_attrs()
    end)
  end

  defp process_media(%{"Media" => media} = prop) do
    Map.put(prop, "MainPhotoUrl", Enum.find(media, fn m ->
      m["MediaCategory"] === "Photo"
    end)["MediaURL"])
  end

  defp process_media(prop) do
    prop
  end

  defp process_bathrooms(p) do
    bf = if p["BathroomsFull"], do: p["BathroomsFull"], else: 0
    bh = if p["BathroomsHalf"], do: p["BathroomsHalf"] * 0.5, else: 0
    boq = if p["BathroomsOneQuarter"], do: p["BathroomsOneQuarter"] * 0.25, else: 0
    btq = if p["BathroomsThreeQuarter"], do: p["BathroomsThreeQuarter"] * 0.75, else: 0
    added = bf + bh + boq + btq
    total = if round(added) == added, do: round(added), else: added
    Map.put(p, "Bathrooms", %{ "Full" => bf, "Half" => bh, "OneQuarter" => boq,
      "ThreeQuarter" => btq, "Total" => total })
  end

  defp process_attrs(prop) do
    Enum.reduce(prop, %{}, fn {key, val}, acc ->
      # IO.inspect(key["YearBuilt"], label: "TEAR")
      cond do
        String.contains?(key, "Features") ->
          feats = if acc["Features"], do: acc["Features"], else: %{}
          new_val = Map.put(feats, hd(String.split(key, "Features")), val)
          Map.put(acc, "Features", new_val)
        String.contains?(key, "School") ->
          sch = if acc["Schooling"], do: acc["Schooling"], else: %{}
          new_val = Map.put(sch, key, val)
          Map.put(acc, "Schooling", new_val)
        String.contains?(key, "Association") ->
          assc = if acc["Association"], do: acc["Association"], else: %{}
          new_val = Map.put(assc, key, val)
          Map.put(acc, "Association", new_val)
        String.contains?(key, ["Date", "Timestamp", "Days"]) ->
          tl = if acc["Timeline"], do: acc["Timeline"], else: %{}
          new_val = Map.put(tl, key, val)
          Map.put(acc, "Timeline", new_val)
        String.contains?(key, "Status") ->
          st = if acc["Status"], do: acc["Status"], else: %{}
          new_val = Map.put(st, key, val)
          Map.put(acc, "Status", new_val)
        true -> Map.put(acc, key, val)
      end
    end)
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
      properties: process_properties(body["value"])
    }}
  end

  defp format_response({:error, error}) do
    IO.inspect(error, label: "ERR")
    {:error, error}
  end
end
