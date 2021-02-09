defmodule Excyte.Mls.RealtorApi do
  alias Excyte.Realtor.{PropertyDetails, Comparables}

  def get_subject_details_start(addr) do
    line = String.replace(addr.line, " ", "-")
    city = String.replace(addr.city, " ", "-")
    address = "#{line}_#{city}_#{addr.state_code}_#{addr.postal_code}_"
    id = String.split(addr.mpr_id, "") |> List.insert_at(6, "-") |> Enum.join("")
    Crawly.Engine.start_spider(PropertyDetails, urls: ["https://www.realtor.com/realestateandhomes-detail/#{address}M#{id}"])
  end

  def comparable_properties_start(addr, subject, opts) do
    Crawly.Engine.start_spider(Comparables, urls: ["https://www.realtor.com/soldhomeprices/#{addr.zip}"])

  end

  def get_subject_details_stop() do
    Crawly.Engine.stop_spider(PropertyDetails)
  end

  def comparable_properties_stop() do
    Crawly.Engine.stop_spider(Comparables)
  end

end

  # Replace input in querystring
  # https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=21982%20midcrest
  # &area_types=state%2Ccity%2Ccounty%2Cpostal_code%2Cneighborhood%2Caddress%2Cstreet%2Cbuilding%2C
  # mlsid%2Cbuilding%2Cschool%2Cschool_district%2Cuniversity%2Cpark%2Cstate&limit=10

  # "mpr_id":"1754163418" used to get details
  # {"meta":{"version":"3.2.0.1863.v085","es_took":4},"autocomplete":[{"area_type":"address","_id":"addr:1754163418",
  # "_score":80.37233,"mpr_id":"1754163418","full_address":["21982 Midcrest Dr El Toro CA 92630","21982 Midcrest Dr El Toro CA"],
  # "line":"21982 Midcrest Dr","city":"El Toro","postal_code":"92630","state_code":"CA","country":"USA","centroid":{"lon":-117.672693,"lat":33.643859},
  # "prop_status":["recently_sold","off_market"],"validation_code":["121"]},{"area_type":"street","_id":"street:usa_ca_piedmont_midcrest","_score":12.7755375,
  # "street":"Midcrest","city":"Piedmont","state_code":"CA","country":"USA","centroid":{"lon":-122.229857,"lat":37.809094},"slug_id":"Midcrest",
  # "city_slug_id":"Piedmont_CA"},{"area_type":"street","_id":"street:usa_ca_oakland_midcrest","_score":12.7755375,"street":"Midcrest","city":"Oakland",
  # "state_code":"CA","country":"USA","centroid":{"lon":-122.229857,"lat":37.809094},"slug_id":"Midcrest","city_slug_id":"Oakland_CA"},{"area_type":"street",
  # "_id":"street:usa_wa_stanwood_midcrest-rd","_score":12.078287,"street":"Midcrest Rd","suffix":"Rd","city":"Stanwood","state_code":"WA","country":"USA",
  # "centroid":{"lon":-122.503845,"lat":48.161517},"slug_id":"Midcrest-Rd","city_slug_id":"Stanwood_WA"},{"area_type":"street","_id":"street:usa_tx_dallas_midcrest-dr",
  # "_score":12.078287,"street":"Midcrest Dr","suffix":"Dr","city":"Dallas","state_code":"TX","country":"USA","centroid":{"lon":-96.78413,"lat":32.94672},
  # "slug_id":"Midcrest-Dr","city_slug_id":"Dallas_TX"},{"area_type":"street","_id":"street:usa_tx_plano_midcrest-dr","_score":12.078287,"street":"Midcrest Dr",
  # "suffix":"Dr","city":"Plano","state_code":"TX","country":"USA","centroid":{"lon":-96.72955,"lat":33.011697},"slug_id":"Midcrest-Dr","city_slug_id":"Plano_TX"},
  # {"area_type":"street","_id":"street:usa_tx_irving_midcrest-dr","_score":12.078287,"street":"Midcrest Dr","suffix":"Dr","city":"Irving","state_code":"TX",
  # "country":"USA","centroid":{"lon":-96.944798,"lat":32.928036},"slug_id":"Midcrest-Dr","city_slug_id":"Irving_TX"},{"area_type":"street",
  # "_id":"street:usa_tx_mckinney_midcrest-ct","_score":12.078287,"street":"Midcrest Ct","suffix":"Ct","city":"McKinney","state_code":"TX","country":"USA",
  # "centroid":{"lon":-96.712377,"lat":33.178269},"slug_id":"Midcrest-Ct","city_slug_id":"McKinney_TX"},{"area_type":"street","_id":"street:usa_ok_sapulpa_midcrest-cir",
  # "_score":12.078287,"street":"Midcrest Cir","suffix":"Cir","city":"Sapulpa","state_code":"OK","country":"USA","centroid":{"lon":-96.142576,"lat":36.034546},
  # "slug_id":"Midcrest-Cir","city_slug_id":"Sapulpa_OK"},{"area_type":"street","_id":"street:usa_md_towson_midcrest-ct","_score":12.078287,"street":"Midcrest Ct",
  # "suffix":"Ct","city":"Towson","state_code":"MD","country":"USA","centroid":{"lon":-76.560602,"lat":39.420796},"slug_id":"Midcrest-Ct","city_slug_id":"Towson_MD"}]}
