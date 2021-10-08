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

  def get_listing_info(foreign_id) do
    case get("/properties/v2/detail", query: [property_id: foreign_id]) do
      {:ok, %Tesla.Env{:body => %{"properties" => properties}}} ->
        prop = hd(properties)
        if Map.has_key?(prop, "mls") do
          {:ok, %{name: prop["mls"]["name"], id: prop["mls"]["id"]}}
        else
          {:error, %{message: "no mls info returned"}}
        end
      {:ok, %Tesla.Env{:body => _err} = _response} -> {:error, %{message: "no properties returned"}}
      {:error, %Tesla.Env{:body => _body} = _response} -> {:error, %{message: "data fetching failed"}}
      err -> {:error, err}
    end
  end

  def merge_public_data(lst) do
    addr = "#{lst["street_number"]} #{lst["street_name"]} #{lst["city"]} #{lst["state"]} #{lst["zip"]}"
    url = "https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=#{URI.encode(addr)}"
    with {:ok, %{body: response_body}} <- HTTPoison.get(url),
         {:ok, fvr} <- first_valid_response(response_body),
         {:ok, public_lst} <- fetch_public_listing(fvr),
         {:ok, merged_lst} <- merge_resolve(lst, public_lst) do
      {:ok, merged_lst}
    else
      _ -> {:ok, {:ok, Map.merge(lst, %{
          "public_data" => %{
            "schools" => "Could not find any information.",
            "property_history" => "Could not find any information.",
            "sold_history" => "Could not find any information.",
            "tax_history" => "Could not find any information."
            }}
         )}}
    end
  end

  def first_valid_response(response_body) do
    results_arr = Jason.decode!(response_body)["autocomplete"]
    Enum.find(results_arr, nil, fn res -> Map.has_key?(res, "mpr_id") end)
    |> case do
      %{} = best_result -> {:ok, best_result["mpr_id"]}
      nil -> nil
    end
    |> IO.inspect(label: "FVR")
  end

  defp fetch_public_listing(valid_id) do
    case get("/properties/v2/detail", query: [property_id: valid_id]) do
      {:ok, %Tesla.Env{:body => %{"properties" => properties}}} -> {:ok, hd(properties)}
      {:error, err} ->
        IO.inspect(err, label: "ERR")
        {:error, err}
      res ->
        IO.inspect(res, label: "RES")
        {:error, res}
    end
  end

  defp merge_resolve(lst, public) do
    {:ok, Map.merge(lst, %{
      "foreign_id" => public["property_id"],
      "beds" => resolve_public(lst, public, "beds"),
      "baths" => %{
        "total" => resolve_baths(lst, public)
      },
      "style" => resolve_public(lst, public, "style"),
      "year_built" => resolve_public(lst, public, "year_built"),
      "stories" => resolve_public(lst, public, "stories"),
      "public_data" => %{
        "overview" => public["description"],
        "est_price" => public["price"],
        "schools" => public["schools"],
        "property_history" => public["property_history"],
        "sold_history" => public["sold_history"],
        "tax_history" => public["tax_history"]
      }
    })}
  end

  def resolve_public(lst, public, attr) do
    cond do
      lst[attr] -> lst[attr]
      public[attr] -> public[attr]
      is_list(public["public_records"]) && hd(public["public_records"])[attr] -> hd(public["public_records"])[attr]
      true -> "N/A"
    end
  end

  def resolve_baths(lst, public) do
    cond do
      lst["baths"]["total"] -> lst["baths"]["total"]
      public["baths"] -> public["baths"]
      is_list(public["public_records"]) && hd(public["public_records"])["baths"] -> hd(public["public_records"])["baths"]
      true -> "N/A"
    end
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


# RES: {:ok,
#  %Tesla.Env{
#    __client__: %Tesla.Client{adapter: nil, fun: nil, post: [], pre: []},
#    __module__: Excyte.Properties.PublicDataApi,
#    body: "400 - Bad Request",
#    headers: [
#      {"access-control-allow-credentials", "true"},
#      {"access-control-allow-headers", "ver"},
#      {"access-control-allow-methods", "GET, POST"},
#      {"access-control-allow-origin", "*"},
#      {"cache-control", "must-revalidate,no-cache,no-store"},
#      {"content-type", "text/html; charset=ISO-8859-1"},
#      {"date", "Thu, 07 Oct 2021 16:38:24 GMT"},
#      {"server", "RapidAPI-1.2.8"},
#      {"x-rapidapi-region", "AWS - us-west-2"},
#      {"x-rapidapi-version", "1.2.8"},
#      {"x-ratelimit-requests-limit", "10000"},
#      {"x-ratelimit-requests-remaining", "9700"},
#      {"x-ratelimit-requests-reset", "2467586"},
#      {"content-length", "17"},
#      {"connection", "keep-alive"}
#    ],
#    method: :get,
#    opts: [],
#    query: [property_id: nil],
#    status: 400,
#    url: "https://realty-in-us.p.rapidapi.com/properties/v2/detail"
#  }}
