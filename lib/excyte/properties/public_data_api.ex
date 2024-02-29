defmodule Excyte.Properties.PublicDataApi do
  use Tesla, only: [:get, :post], docs: false

  plug Tesla.Middleware.BaseUrl, "https://realty-in-us.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5

  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", cycle_api_keys()},
    {"x-rapidapi-host", "realty-in-us.p.rapidapi.com"},
    {"content-type", "application/json"},
    {"accept", "application/json"},
    {"useQueryString", true}
  ]

  plug Excyte.RealtyMiddleware
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  # @features [
  #   %{name: "New Construction", value: "construction"},
  #   %{name: "View", value: "view"},
  #   %{name: "Pool", value: "pool"},
  #   %{name: "Spa", value: "spa"},
  #   %{name: "Horse Stable", value: "horses"},
  #   %{name: "Waterfront", value: "waterfront"}
  # ]

  def get_listing_info(foreign_id) do
    case get("/properties/v3/detail", query: [property_id: foreign_id]) do
      {:ok, %Tesla.Env{:body => %{"data" => %{"home" => details}}}} ->
        {:ok, process_property(details)}

      {:ok, %Tesla.Env{:body => err}} ->
        IO.inspect(err, label: "ERR HIT")

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
    addr =
      "#{lst["street_number"]} #{lst["street_name"]} #{lst["city"]} #{lst["state"]} #{lst["zip"]}"

    url =
      "https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=#{URI.encode(addr)}"

    with {:ok, %{body: response_body}} <- HTTPoison.get(url),
         {:ok, fvr} <- first_valid_response(response_body),
         {:ok, public_lst} <- fetch_public_listing(fvr),
         {:ok, merged_lst} <- merge_resolve(lst, public_lst) do
      {:ok, merged_lst}
    else
      _ ->
        {:ok,
         {:ok,
          Map.merge(lst, %{
            "public_data" => %{
              "schools" => "Could not find any information.",
              "property_history" => "Could not find any information.",
              "sold_history" => "Could not find any information.",
              "tax_history" => "Could not find any information."
            }
          })}}
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
    body =
      Map.delete(query, :sold_price)
      |> Map.merge(%{
        status: [
          "for_sale",
          "ready_to_build"
        ]
      })
      |> Jason.encode!()

    case post("/properties/v3/list", body) do
      {:ok, %Tesla.Env{:body => %{"data" => %{"home_search" => %{"results" => res}}}}} ->
        {:ok, %{active: res}}

      {:error, err} ->
        IO.inspect(err, label: "ERR-ACT")
        {:error, []}

      res ->
        IO.inspect(res, label: "RES")
    end
  end

  def fetch_closed_listings(query) do
    body =
      Map.delete(query, :list_price)
      |> Map.merge(%{
        sold_date: %{
          max: DateTime.to_iso8601(DateTime.utc_now()),
          min: DateTime.to_iso8601(DateTime.add(DateTime.utc_now(), -365, :day))
        },
        status: [
          "sold"
        ]
      })
      |> Jason.encode!()

    case post("/properties/v3/list", body) do
      {:ok, %Tesla.Env{:body => %{"data" => %{"home_search" => %{"results" => res}}}}} ->
        {:ok, %{closed: res}}

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
    query = %{
      offset: 0,
      limit: 3,
      search_location: %{
        radius: 10,
        location: area
      },
      beds: %{
        max: opts.beds.high,
        min: opts.beds.low
      },
      baths: %{
        max: opts.baths.high,
        min: opts.baths.low
      },
      sqft: %{
        max: opts.sqft.high,
        min: opts.sqft.low
      },
      sold_price: %{
        max: opts.price.high,
        min: opts.price.low
      },
      list_price: %{
        max: opts.price.high,
        min: opts.price.low
      }
    }

    {:ok, query}
  end

  defp fetch_public_listing(valid_id) do
    case get("/properties/v3/detail", query: [property_id: valid_id]) do
      {:ok, %Tesla.Env{:body => %{"properties" => properties}}} ->
        {:ok, hd(properties)}

      {:error, err} ->
        IO.inspect(err, label: "ERR MISS")
        {:error, err}

      res ->
        IO.inspect(res, label: "RES")
        {:error, res}
    end
  end

  defp merge_resolve(lst, public) do
    {:ok,
     Map.merge(lst, %{
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
      lst[attr] ->
        lst[attr]

      public[attr] ->
        public[attr]

      is_list(public["public_records"]) && hd(public["public_records"])[attr] ->
        hd(public["public_records"])[attr]

      true ->
        "N/A"
    end
  end

  def resolve_baths(lst, public) do
    cond do
      lst["baths"]["total"] ->
        lst["baths"]["total"]

      public["baths"] ->
        public["baths"]

      is_list(public["public_records"]) && hd(public["public_records"])["baths"] ->
        hd(public["public_records"])["baths"]

      true ->
        "N/A"
    end
  end

  def process_property(prop) do
    IO.inspect(prop, label: "PROP")
    street = String.split(prop["location"]["address"]["line"], " ", parts: 2)
    closed = Enum.find(prop["property_history"], fn hist -> hist["event_name"] === "Sold" end)
    listed = Enum.find(prop["property_history"], fn hist -> hist["event_name"] === "Listed" end)

    %{
      "internal_type" => "subject",
      "street_number" => List.first(street),
      "street_name" => List.last(street),
      "city" => prop["location"]["address"]["city"],
      "zip" => prop["location"]["address"]["postal_code"],
      "state" => prop["location"]["address"]["state_code"],
      "unit" => prop["location"]["address"]["unit"],
      "county" => prop["address"]["county"],
      "coords" => %{
        "lat" => prop["location"]["address"]["coordinate"]["lat"],
        "lng" => prop["location"]["address"]["coordinate"]["lon"]
      },
      "foreign_id" => prop["property_id"],
      "listing_id" => prop["listing_id"],
      "main_photo_url" =>
        if(is_nil(prop["photos"]), do: prop["street_view_url"], else: hd(prop["photos"])["href"]),
      "est_price" => prop["price"],
      "excyte_price" => prop["price"],
      "list_price" => listed["price"],
      "list_date" => listed["date"],
      "close_price" => closed["price"],
      "close_date" => closed["date"],
      "dom" => process_dom(%{closed: closed["date"], listed: listed["date"]}),
      "beds" => prop["description"]["beds"],
      "baths" => prop["description"]["baths"],
      "overview" => prop["description"],
      "property_type" => "Residential",
      "property_sub_type" => process_type(prop["description"]["type"]),
      "status" => process_status(prop["status"]),
      # "features" => (if prop["public_records"], do: process_features(hd(prop["public_records"])), else: nil),
      "lotsize_sqft" => prop["description"]["lot_sqft"],
      "lotsize_preference" => "sqft",
      "sqft" => prop["description"]["sqft"],
      "history" => %{"overview" => "", "timeline_items" => prop["property_history"]},
      "year_built" => prop["description"]["year_built"],
      "stories" => prop["description"]["stories"],
      "foreign_url" => prop["href"],
      "media" => process_media(prop["photos"])
    }
  end

  def process_status(status) do
    case status do
      "not_for_sale" -> "Closed"
      "for_sale" -> "Active"
      "recently_sold" -> "Closed"
      "pending" -> "Pending"
      "sold" -> "Closed"
      _ -> status
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
    if is_nil(photos) do
      []
    else
      Enum.with_index(photos, 0)
      |> Enum.map(fn {ph, idx} ->
        %{
          "media_url" => ph["href"],
          "order" => idx,
          "short_description" => ""
        }
      end)
    end
  end

  def process_dom(%{closed: cl, listed: lst}) when lst !== nil do
    dom =
      with closed <- get_closed(cl),
           {:ok, listed} <- Date.from_iso8601(lst) do
        Date.diff(closed, listed)
      end

    if dom >= 0, do: dom, else: -1
  end

  def process_dom(_), do: -1

  defp get_closed(cl) do
    if is_nil(cl), do: Date.utc_today(), else: Date.from_iso8601!(cl)
  end

  # defp process_features(feats) do
  #   Enum.reduce(@features, [], fn f, acc ->
  #     if Map.has_key?(feats, f.value) && feats[f.value] !== nil do
  #       [f | acc]
  #     else
  #       acc
  #     end
  #   end)
  #   |> IO.inspect(label: "FEAT")
  # end

  # defp process_year_built(recs) do
  #   if recs["year_built"] do
  #     recs["year_built"]
  #   else
  #     recs["year_renovated"]
  #   end
  # end

  # defp process_lotsize(lotsize) do
  #   cond do
  #     lotsize["units"] === "sqft" -> lotsize["size"]
  #     lotsize["units"] === "acres" -> acres_to_sqft(lotsize["size"])
  #     true -> nil
  #   end
  # end

  # defp acres_to_sqft(acres) do
  #   round(acres * 43560)
  # end

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
