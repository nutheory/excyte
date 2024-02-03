defmodule Excyte.Properties.PublicDataApi do
  use Tesla, only: [:get], docs: false
  alias Excyte.{Properties.Property}

  plug Tesla.Middleware.BaseUrl, "https://realty-in-us.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", cycle_api_keys()},
    {"x-rapidapi-host", "realty-in-us.p.rapidapi.com"},
    {"useQueryString", true}
  ]
  plug Excyte.RealtyMiddleware
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

  def get_listing_info(foreign_id) do
    case get("/properties/v3/detail", query: [property_id: foreign_id]) do
      {:ok, %Tesla.Env{:body => %{"data" => %{"home" => detail}}}} ->
        {:ok, process_property(detail)}
      {:ok, %Tesla.Env{:body => err}} -> IO.inspect(err, label: "ERR HIT")
      {:error, %Tesla.Env{:body => body}} ->
        {:error, %{message: "Subject property processing failed", err: body}}
    end
  end

  # def get_listing_info(foreign_id) do
  #   case get("/properties/v2/detail", query: [property_id: foreign_id]) do
  #     {:ok, %Tesla.Env{:body => %{"properties" => properties}}} ->
  #       prop = hd(properties)
  #       if Map.has_key?(prop, "mls") do
  #         {:ok, %{name: prop["mls"]["name"], id: prop["mls"]["id"]}}
  #       else
  #         {:error, %{message: "no mls info returned"}}
  #       end
  #     {:ok, %Tesla.Env{:body => _err} = _response} -> {:error, %{message: "no properties returned"}}
  #     {:error, %Tesla.Env{:body => _body} = _response} -> {:error, %{message: "data fetching failed"}}
  #     err -> {:error, err}
  #   end
  # end

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
  end

  def fetch_active_listings(query) do
    case get("/properties/v2/list-for-sale", query: query, opts: [sort: "relevance"]) do
      {:ok, %Tesla.Env{:body => %{"properties" => active}}} -> {:ok, %{active: active}}
      {:error, err} ->
        IO.inspect(err, label: "ERR-ACT")
        {:error, []}
    end
  end

  def fetch_closed_listings(query) do
    case get("/properties/v2/list-sold", query: query, opts: [sort: "relevance"]) do
      {:ok, %Tesla.Env{:body => %{"properties" => sold}}} -> {:ok, %{closed: sold}}
      {:error, err} ->
        IO.inspect(err, label: "ERR-CLO")
        {:error, []}
    end
  end

  def get_bounding_area(%{lat: lat, lng: lng}, mi_radius) do
    poi = [lat, lng]
    radius = miles_to_meters(mi_radius)
    {:ok, Geocalc.bounding_box(poi, radius)}
  end

  def build_query(area, opts) do
    IO.inspect(hd(area), label: "AREA HD")
    IO.inspect(opts, label: "OPTS")
    query = [
      offset: 0,
      limit: 5,
      # prop_type: opts.public_prop_type,
      beds_min: opts.beds.low,
      beds_max: opts.beds.high,
      baths_min: opts.baths.low,
      baths_max: opts.baths.high,
      price_min: (opts.price.low * 1000),
      price_max: (opts.price.high * 1000),
      sqft_min: opts.sqft.low,
      sqft_max: opts.sqft.high,
      # age_min: opts.age.low,
      # age_max: opts.age.high,
      # lot_sqft_min: opts.lot_sqft.low,
      # lot_sqft_max: opts.lot_sqft.high,
      lat_min: hd(hd(area)),
      lat_max: hd(List.last(area)),
      lng_min: List.last(hd(area)),
      lng_max: List.last(List.last(area))
    ]
    {:ok, query}
  end

  defp fetch_public_listing(valid_id) do
    case get("/properties/v3/detail", query: [property_id: valid_id]) do
      {:ok, %Tesla.Env{:body => %{"properties" => properties}}} -> {:ok, hd(properties)}
      {:error, err} ->
        IO.inspect(err, label: "ERR MISS")
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

  def process_property(prop) do
    street = String.split(prop["address"]["line"], " ", parts: 2)
    closed = Enum.find(prop["property_history"], fn hist -> hist["event_name"] === "Sold" end)
    listed = Enum.find(prop["property_history"], fn hist -> hist["event_name"] === "Listed" end)
    %{
      "internal_type" => "subject",
      "street_number" => List.first(street),
      "street_name" => List.last(street),
      "city" => prop["address"]["city"],
      "zip" => prop["address"]["postal_code"],
      "state" => prop["address"]["state_code"],
      "unit" => prop["address"]["unit_value"],
      "county" => prop["address"]["county"],
      "coords" => %{"lat" => prop["address"]["lat"], "lng" => prop["address"]["lon"]},
      "foreign_id" => prop["property_id"],
      "listing_id" => prop["property_id"],
      "main_photo_url" => hd(prop["photos"])["href"],
      "est_price" => prop["price"],
      "excyte_price" => prop["price"],
      "list_price" => listed["price"],
      "list_date" => listed["date"],
      "close_price" => closed["price"],
      "close_date" => closed["date"],
      "dom" => process_dom(%{closed: closed["date"], listed: listed["date"]}),
      "beds" => prop["beds"],
      "baths" => prop["baths"],
      "overview" => prop["description"],
      "property_type" => "Residential",
      "property_sub_type" => process_type(prop["prop_type"]),
      "status" => process_status(prop["prop_status"]),
      # "features" => (if prop["public_records"], do: process_features(hd(prop["public_records"])), else: nil),
      "lotsize_sqft" => process_lotsize(prop["lot_size"]),
      "lotsize_preference" => "sqft",
      "sqft" => prop["building_size"]["size"],
      "history" => %{"overview" => "", "timeline_items" => prop["property_history"]},
      "year_built" => (if prop["public_records"], do: process_year_built(hd(prop["public_records"])), else: nil),
      "stories" => (if prop["public_records"], do: hd(prop["public_records"])["stories"], else: nil),
      "foreign_url" => prop["rdc_web_url"],
      "media" => process_media(prop["photos"])
    }
  end

  def process_status(status) do
    case status do
      "not_for_sale" -> "Closed"
      "for_sale" -> "Active"
      "recently_sold" -> "Closed"
    end
  end

  def process_type(type) do
    case type do
      "single_family" -> "Single family"
      "multi_family" -> "Multi family"
      _ -> type
    end
  end

  def process_media(photos) do
    Enum.with_index(photos, 0)
    |> Enum.map(fn {ph, idx} ->
      %{
        "media_url" => ph["href"],
        "order" => idx,
        "short_description" => ""
      }
    end)
  end

  def process_dom(%{closed: cl, listed: lst}) when lst !== nil do
    IO.inspect(cl, label: "BBOMMM")
    dom =
      with closed <- get_closed(cl),
          {:ok, listed} <- NaiveDateTime.from_iso8601(lst) do
        Date.diff(closed, listed)
      end
    if dom >= 0, do: dom, else: -1
  end
  def process_dom(_), do: -1

  defp get_closed(cl) do
    if is_nil(cl), do: NaiveDateTime.utc_now(), else: NaiveDateTime.from_iso8601!(cl)
  end

  defp process_features(feats) do
    Enum.reduce(@features, [], fn f, acc ->
      if Map.has_key?(feats, f.value) && feats[f.value] !== nil do
        [f | acc]
      else
        acc
      end
    end)
    |> IO.inspect(label: "FEAT")
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

  defp miles_to_meters(mi) do
    round(mi * 1609.34)
  end

  defp cycle_api_keys() do
    IO.inspect(Enum.random([1, 2, 3]), label: "Set on every call")
    Application.get_env(:excyte, :realtor_rapid_api_key)
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
