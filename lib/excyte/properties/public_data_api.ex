defmodule Excyte.Properties.PublicDataApi do
  use Tesla, only: [:get], docs: false

  plug Tesla.Middleware.BaseUrl, "https://realty-in-us.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", Application.get_env(:excyte, :realtor_rapid_api_key)},
    {"x-rapidapi-host", "realty-in-us.p.rapidapi.com"},
    {"useQueryString", true}
  ]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  @features [
    %{name: "New Construction", value: "construction"},
    %{name: "View", value: "view"},
    %{name: "Pool", value: "pool"},
    %{name: "Spa", value: "spa"},
    %{name: "Horse Stable", value: "horses"},
    %{name: "Waterfront", value: "waterfront"}
  ]

  def get_subject_by_foreign_id(foreign_id) do
    get("/properties/v2/detail", query: [property_id: foreign_id])
    |> process_subject()
  end

  defp process_subject({:ok, %Tesla.Env{:body => %{"properties" => properties}} = _response}) do
      prop = hd(properties)
      street = String.split(prop["address"]["line"], " ", parts: 2)
      property = %{
        internal_type: "subject",
        street_number: List.first(street),
        street_name: List.last(street),
        city: prop["address"]["city"],
        zip: prop["address"]["postal_code"],
        state: prop["address"]["state_code"],
        unit: prop["address"]["unit_value"],
        county: prop["address"]["county"],
        coords: %{lat: prop["address"]["lat"], lng: prop["address"]["lon"]},
        foreign_id: prop["property_id"],
        main_photo_url: hd(prop["photos"])["href"],
        est_price: prop["price"],
        beds: prop["beds"],
        baths: prop["baths"],
        overview: prop["description"],
        property_type: prop["prop_type"],
        status: prop["prop_status"],
        features: process_features(hd(prop["public_records"])),
        lotsize_sqft: process_lotsize(prop["lot_size"]),
        lotsize_preference: "sqft",
        sqft: prop["building_size"]["size"],
        history: %{overview: "", timeline_items: prop["property_history"]},
        year_built: process_year_built(hd(prop["public_records"])),
        stories: hd(prop["public_records"])["stories"],
        public_records: hd(prop["public_records"]),
        foreign_url: prop["rdc_web_url"]
      }

      {:ok, property}
  end

  defp process_subject({:ok, %Tesla.Env{:body => err} = _response}) do
    IO.inspect(err, label: "ERROR")
  end

  defp process_subject({:error, %Tesla.Env{:body => body} = _response}) do
    {:error, %{message: "Subject property processing failed", err: body}}
  end

  defp process_features(feats) do
    Enum.reduce(@features, [], fn f, acc ->
      if Map.has_key?(feats, f.value) && feats[f.value] !== nil do
        [f | acc]
      else
        acc
      end
    end)
  end

  defp process_year_built(recs) do
    if recs["year_built"] do
      recs["year_built"]
    else
      recs["year_renovated"]
    end
  end

  defp process_lotsize(lotsize) do
    cond do
      lotsize["units"] === "sqft" -> lotsize["size"]
      lotsize["units"] === "acres" -> acres_to_sqft(lotsize["size"])
      true -> nil
    end
  end

  defp acres_to_sqft(acres) do
    round(acres * 43560)
  end
end
