defmodule Excyte.PublicData.TestComparables do
  use Crawly.Spider

  alias Crawly.Utils

  @impl Crawly.Spider
  def base_url(), do: :ok

  @impl Crawly.Spider
  def init(options), do: [start_urls: Keyword.get(options, :urls)]

  @impl Crawly.Spider
  def parse_item(response) do
    {:ok, document} = Floki.parse_document(response.body)
    cards = Enum.map(Floki.find(document, ".component_property-card"), &parse_item_card/1)


    %{
      :requests => [],
      :items => []
    }
  end

  defp parse_item_card(card) do
    %{}
  end
end
