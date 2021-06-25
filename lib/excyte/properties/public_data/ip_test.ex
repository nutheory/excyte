# defmodule Excyte.PublicData.TestComparables do
  # use Crawly.Spider

#   alias Crawly.Utils

#   @impl Crawly.Spider
#   def base_url(), do: :ok

#   @impl Crawly.Spider
#   def init(_), do: [start_urls: ["https://whatismyipaddress.com/"]]

#   @impl Crawly.Spider
#   def parse_item(response) do
#     {:ok, document} = Floki.parse_document(response.body)
#     result = Floki.text(Floki.find(document, "#ipv4 a"))

#     %{
#       :requests => [],
#       :items => []
#     }
#   end

# end
