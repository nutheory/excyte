defmodule Excyte.Properties.PublicAttomApi do
  use Tesla, only: [:get], docs: false

  plug Tesla.Middleware.BaseUrl, "https://api.gateway.attomdata.com/propertyapi/v1.0.0/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [
    {"apikey", Application.get_env(:excyte, :attom_api_key)},
    {"accept", "application/json"}
  ]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  def get_subject_by_address(%{"address" => addr, "coords" => coords}) do
    address_one = URI.encode("#{addr["street_number"]} #{addr["street_name"]}")
    address_two = URI.encode("#{addr["city"]}, #{addr["state"]}")
    get("/property/expandedprofile?address1=#{address_one}&address2=#{address_two}")
    |> IO.inspect(label: "BOOM")
    # |> process_subject()
  end
end
