defmodule Excyte.Mls.ProcessListings do
  alias Excyte.Properties.{Rankings}

  def simple_process({:ok, %{listings: listings} = resp}) do
    new_dataset =
      Enum.map(listings, fn listing ->
        Map.put(listing, "MainPhotoUrl", main_photo(listing["Media"]))
      end)

    {:ok, Map.merge(resp, %{listings: new_dataset})}
  end

  def simple_process({:error, :timeout}) do
    {:error, %{errors: [%{message: "MLS Server timing out."}]}}
  end

  def process_init({:ok, %{listings: listings} = resp}, subject) do
    new_dataset =
      Enum.map(listings, fn listing ->
        Enum.filter(listing, fn {_, v} ->
          cond do
            is_binary(v) -> true
            is_integer(v) -> true
            is_float(v) -> true
            is_boolean(v) -> true
            is_list(v) && length(v) > 0 -> true
            true -> false
          end
        end)
        |> Enum.into(%{})
        |> top_level_info(subject)
        |> main_booleans()
        |> process_media()
        |> Rankings.process_init(subject)
      end)

    {:ok, Map.merge(resp, %{listings: new_dataset})}
  end

  def process_init(_, _) do
    #LOG ERR in DB
    {:error, %{message: "Could not Process Comparable Listings"}}
  end

  def top_level_info(l, subject) do
    %{
      listing: l,
      changes: %{
        street_name: l["StreetName"],
        street_number: l["StreetNumber"],
        unit: l["UnitNumber"],
        city: l["City"],
        zip: l["PostalCode"],
        coords: l["Coordinates"],
        state: l["StateOrProvince"],
        status: process_status(%{
          mls: l["MlsStatus"],
          standard: l["StandardStatus"]
        }),
        parking: process_parking(%{
          garage_spaces: l["GarageSpaces"],
          garage_attached: l["AttachedGarageYN"],
          garage: l["GarageYN"],
          carport_spaces: l["CarportSpaces"],
          carport: l["CarportYN"],
          open_parking: l["OpenParkingYN"]
        }),
        public_remarks: l["PublicRemarks"],
        year_built: l["YearBuilt"],
        days_on_market: l["DaysOnMarket"],
        on_market_date: l["OnMarketDate"],
        expiration_date: l["ExpirationDate"],
        withdrawn_date: l["WithdrawnDate"],
        pending_timestamp: l["PendingTimestamp"],
        property_type: l["PropertyType"],
        property_sub_type: l["PropertySubType"],
        beds: l["BedroomsTotal"],
        baths: process_bathrooms(l),
        sqft: l["LivingArea"],
        main_photo_url: main_photo(l["Media"]),
        lotsize_sqft: process_lotsize(%{sqft: l["LotSizeSquareFeet"], acres: l["LotSizeAcres"]}),
        lotsize_preference: "sqft",
        close_date: l["CloseDate"],
        distance_from_subject: distance_from_subject(l["Coordinates"], subject),
        list_price: l["ListPrice"],
        close_price: l["ClosePrice"],
        default_price: process_price(%{list_price: l["ListPrice"], close_price: l["ClosePrice"]}),
        stories: l["Stories"],
        walkscore: l["WalkScore"],
        listing_key: l["ListingKey"],
        listing_id: l["ListingId"],
        features: process_features(l),
        last_modified: l["ModificationTimestamp"],
        # dirty_info: Map.delete(l, "Media"),
        pool: l["PoolYN"],
        spa: l["SpaYN"],
        schools: %{
          elementary: l["ElementarySchool"],
          junior: l["JuniorSchool"],
          high: l["HighSchool"]
        },
        association_fee: l["AssociationFee"],
        association_amenities: l["AssociationAmenities"],
        association_name: l["AssociationName"],
        association_fee_frequency: l["AssociationFeeFrequency"],
        tax_assessed_value: l["TaxAssessedValue"],
        tax_annual_amount: l["TaxAnnualAmount"],
        tax_year: l["TaxYear"]
      }
    }
  end

  defp main_photo(media) do
    Enum.find(media, fn m ->
      m["MediaCategory"] === "Photo" && m["Order"] === 1
    end)["MediaURL"]
  end

  def main_booleans(%{listing: l, changes: changes}) do
    %{listing: l,
      changes: Map.merge(changes, %{
        main_booleans: %{
          spa: l["SpaYN"],
          horse: l["HorseYN"],
          land_lease: l["LandLeaseYN"],
          waterfront: l["WaterfrontYN"],
          view: l["ViewYN"],
          pool_private: l["PoolPrivateYN"],
          association: l["AssociationYN"],
          new_construction: l["NewConstructionYN"],
          property_attached: l["PropertyAttachedYN"]
        }
      })
    }
  end

  def process_price(%{list_price: list, close_price: close}) do
    if close !== nil do
      %{type: "close", value: close}
    else
      %{type: "list", value: list}
    end
  end

  defp process_lotsize(%{sqft: sqft, acres: acres}) do
    if (sqft !== nil || acres !== nil) do
      cond do
        sqft !== nil -> sqft
        acres !== nil -> acres_to_sqft(acres)
        true -> nil
      end
    else
      nil
    end
  end

  defp process_features(l) do
    feat = ["FireplaceFeatures", "PoolFeatures", "ExteriorFeatures", "LotFeatures",
          "CommunityFeatures", "InteriorFeatures", "BuildingFeatures", "SpaFeatures",
          "PatioAndPorchFeatures"]

    Enum.reduce(feat, %{}, fn f, acc ->
      Map.put(acc, String.to_atom(hd(String.split(f, "Features"))), l[f])
    end)
  end

  defp process_bathrooms(p) do
    bf = if p["BathroomsFull"], do: p["BathroomsFull"], else: 0
    bh = if p["BathroomsHalf"], do: p["BathroomsHalf"] * 0.5, else: 0
    boq = if p["BathroomsOneQuarter"], do: p["BathroomsOneQuarter"] * 0.25, else: 0
    btq = if p["BathroomsThreeQuarter"], do: p["BathroomsThreeQuarter"] * 0.75, else: 0
    added = bf + bh + boq + btq
    total = if round(added) == added, do: round(added), else: added
    %{full: bf, half: bh, one_quarter: boq, three_quarter: btq, total: total}
  end

  defp distance_from_subject(listing_coords, subject) do
    if listing_coords && subject.coords do
      m = Geocalc.distance_between(listing_coords, [subject.coords.lng, subject.coords.lat])
      Float.round(m * 0.000621371192, 2)
    else
      nil
    end
  end

  defp process_status(%{mls: m, standard: s}) do
    if m do
      "#{m} (#{s})"
    else
      "#{s}"
    end
  end

  defp process_parking(p) do
    cond do
      p.garage -> %{type: "Garage", spaces: p.garage_spaces, attached: p.garage_attached}
      p.carport -> %{type: "Carport", spaces: p.carport_spaces}
      p.open_parking -> %{type: "Street", spaces: "N/A"}
      true -> %{type: "Street", spaces: "N/A"}
    end
  end

  defp process_media(%{listing: %{"Media" => media}, changes: changes}) do
    Map.put(changes, :media, Enum.map(media, fn m ->
      format_quoted_json(m)
    end))
  end

  def format_str_json(body) do
    Jason.decode!(body)
    |> Map.new(fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), handle_nested(v)}
      else
        {k, handle_nested(v)}
      end
    end)
  end

  def format_quoted_json(body) do
    Map.new(body, fn {k, v} ->
      if is_binary(k) do
        {format_atom(k), handle_nested(v)}
      else
        {k, handle_nested(v)}
      end
    end)
  end

  defp handle_nested(v) when is_list(v) do
    Enum.map(v, fn x ->
      if Enumerable.impl_for(x) do
        Map.new(x, fn {k, val} -> {format_atom(k), handle_nested(val)} end)
      else
        x
      end
    end)
  end

  defp handle_nested(v) when is_map(v) do
    Map.new(v, fn {k, vm} -> {format_atom(k), handle_nested(vm)} end)
  end

  defp handle_nested(v), do: v

  defp format_atom(str) do
    tl(String.split(str, ~r/(?=[A-Z])/))
    |> Enum.reduce("", fn lts, acc ->
      if String.length(lts) > 1 do
        acc <> "#{lts}_"
      else
        acc <> lts
      end
    end)
    |> String.trim("_")
    |> String.downcase()
    |> String.to_atom()
  end

  def split_name_by_case(str) do
    str
    |> String.split(~r/(?=[A-Z])/)
    |> tl()
    |> Enum.join(" ")
  end

  defp acres_to_sqft(acres) do
    acres * 43560
  end

  defp sqft_to_acres(sqft) do
    Float.round(sqft/43560, 2)
  end

  def process_init({:error, err}), do: {:error, err}
  def process_init(_), do: {:error, %{message: "Unknown Error"}}
end


# |> comparable_score()
# |> score_description()
# |> adjustment_considerations(waterfront, pool, )
