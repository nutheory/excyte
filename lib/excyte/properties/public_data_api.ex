defmodule Excyte.Properties.PublicDataApi do
  use Tesla, only: [:get], docs: false

  plug Tesla.Middleware.BaseUrl, "https://realtor.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", Application.get_env(:excyte, :realtor_rapid_api_key)},
    {"x-rapidapi-host", "realtor.p.rapidapi.com"},
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

  defp process_subject({:ok, %Tesla.Env{:body => body} = response}) do
    prop = hd(body["properties"])
    property = %{
      internal_type: "subject",
      main_photo_url: hd(prop["photos"])["href"],
      est_price: prop["price"],
      beds: prop["beds"],
      baths: prop["baths"],
      overview: prop["description"],
      property_type: prop["prop_type"],
      status: prop["prop_status"],
      features: process_features(hd(prop["public_records"])),
      lotsize_sqft: process_lotsize(prop["lots_size"]),
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

  defp process_subject(response) do
    IO.inspect(response, label: "Fail")
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
      lotsize["unit"] === "sqft" -> lotsize["size"]
      lotsize["unit"] === "acres" -> acres_to_sqft(lotsize["size"])
      true -> nil
    end
  end

  defp acres_to_sqft(acres) do
    round(acres * 43560)
  end
end


# {2 items
#   "meta":{6 items
#   "build":"3.23.122"
#   "schema":"core.3"
#   "tracking":"type|meta|data|resource_type|property_detail|query|client_id|rdc_mobile_native,13.3.0.53|schema|core.3|tag_version|v2^^^$0|1|2|$3|4|5|$6|7|8|9|A|B]]]"
#   "returned_rows":1
#   "matching_rows":1
#   "tracking_params":{...}26 items
#   }
#   "properties":[1 item
#     0:{28 items
#     "property_id":"O1754163418"
#     "prop_status":"not_for_sale"
#     "prop_type":"single_family"
#     "beds":4
#     "description":"This property was last sold for $214,000 in 1986 and currently has an estimated value of $993,400. According to the El Toro public records, the property at 21982 Midcrest Dr, El Toro, CA 92630 has approximately 2509 square feet, 4 beds and 3 baths with a lot size of 0.24 acres. Nearby schools include El Toro High School, Lake Forest Elementary School and Serrano Intermediate School. "
#     "baths_full":3
#     "schools":[...]8 items
#     "heating":NULL
#     "cooling":NULL
#     "address":{16 items
#     "city":"El Toro"
#     "line":"21982 Midcrest Dr"
#     "unit_value":NULL
#     "street_direction":NULL
#     "street_post_direction":NULL
#     "postal_code":"92630"
#     "address_validation_code":"121"
#     "state_code":"CA"
#     "state":"California"
#     "county":"Orange"
#     "county_needed_for_uniq":false
#     "time_zone":"America/Los_Angeles"
#     "lat":33.643859
#     "lon":-117.672693
#     "neighborhood_name":"San Rita Ridge"
#     "neighborhoods":[...]2 items
#     }
#     "client_display_flags":{...}1 item
#     "tax_history":[13 items
#       0:{...}4 items
#       1:{...}4 items
#       2:{...}4 items
#       3:{...}4 items
#       4:{...}4 items
#       5:{...}4 items
#       6:{...}4 items
#       7:{...}4 items
#       8:{...}4 items
#       9:{...}4 items
#       10:{...}4 items
#       11:{4 items
#       "assessment":{...}3 items
#       "market":NULL
#       "tax":3315
#       "year":2009
#       }
#       12:{...}4 items
#     ]
#     "sold_history":[1 item
#       0:{3 items
#         "date":"1986-11-26T17:00:00Z"
#         "source":"Public Record"
#         "listing":{1 item
#         "price":214000
#         }
#       }
#     ]
#     "property_history":[1 item
#       0:{10 items
#       "event_name":"Sold"
#       "date":"1986-11-26T17:00:00Z"
#       "price":214000
#       "price_range_min":NULL
#       "price_range_max":NULL
#       "price_changed":0
#       "sqft":2509
#       "datasource_name":""
#       "source":"Public Record"
#       "listing":NULL
#       }
#     ]
#     "public_records":[1 item
#       0:{34 items
#         "prop_type":"single_family"
#         "baths":3
#         "baths_half":NULL
#         "baths_full":3
#         "baths_3qtr":NULL
#         "baths_1qtr":NULL
#         "beds":4
#         "distinct_baths":3
#         "sqft":2509
#         "building_sqft":2509
#         "floor_1_sqft":NULL
#         "fireplace":NULL
#         "exterior1":NULL
#         "garage_sqft":662
#         "garage_spaces":NULL
#         "lot_size":10400
#         "lot_width":NULL
#         "lot_depth":NULL
#         "stories":0
#         "year_built":NULL
#         "year_renovated":1986
#         "garage":NULL
#         "construction_quality":NULL
#         "rooms":NULL
#         "units":NULL
#         "heating":NULL
#         "cooling":NULL
#         "construction":NULL
#         "roofing":NULL
#         "pool":NULL
#         "style":NULL
#         "view":NULL
#         "cl_id":"1CFCA16EE979EE8519768C67B88E8BDF"
#         "date_updated":"01/23/2021"
#       }
#     ]
#     "office":{2 items
#       "id":"386664feceaef30c6495d5f0bc2c3380"
#       "phones":[]0 items
#     }
#     "agents":[1 item
#       0:{1 item
#       "primary":true
#       }
#     ]
#     "lot_size":{2 items
#     "size":10400
#     "units":"sqft"
#     }
#     "building_size":{2 items
#     "size":2509
#     "units":"sqft"
#     }
#     "price":993400
#     "rdc_web_url":"https://www.realtor.com/realestateandhomes-detail/21982-Midcrest-Dr_El-Toro_CA_92630_M17541-63418"
#     "rdc_app_url":"move-rdc://www.realtor.com/realestateandhomes-detail/21982-Midcrest-Dr_El-Toro_CA_92630_M17541-63418"
#     "homevalue_web_url":"https://www.realtor.com/myhome/21982-Midcrest-Dr_El-Toro_CA_92630_M17541-63418/homevalue"
#     "baths":3
#     "photo_count":1
#     "data_source_name":"public_records"
#     "detail_tracking":"type|property|data|prop_id|1754163418|address|city|El+Toro|state|CA|postal|92630|neighborhood|San+Rita+Ridge|county|Orange|price|data_source|public_records|property_status|product_code|advantage_code^LAIG|4|0|0^^$0|1|2|$3|4|5|$6|7|8|9|A|B|C|D|E|F]|G|M|H|I|J|N|K|O|L|P]]"
#     "photos":[1 item
#       0:{1 item
#       "href":"https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&size=640x480&location=21982+Midcrest+Dr%2CEl+Toro%2CCA%2C92630&signature=cgMbdRMZg8ELBVaJ8q_i6KWpZcY"
#       }
#     ]
#   }
# ]
# }
