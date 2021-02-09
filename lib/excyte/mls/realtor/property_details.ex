defmodule Excyte.Realtor.PropertyDetails do
  use Crawly.Spider

  alias Crawly.Utils

  @impl Crawly.Spider
  def base_url(), do: :ok

  @impl Crawly.Spider
  def init(options), do: [start_urls: Keyword.get(options, :urls)]

  @impl Crawly.Spider
  def parse_item(response) do
    {:ok, document} = Floki.parse_document(response.body)
    start = Floki.find(document, ".container-ldp")
    summary = Floki.find(start, "#ldp-property-meta")
    history = Floki.find(start, ".pdp-timeline-content")
    public = Floki.find(start, "#ldp-detail-public-records li")
      |> Enum.reduce(%{}, fn item, acc ->
        key_val = String.split(Floki.text(item), ":")
        Map.put(acc, String.to_atom(hd(key_val)), hd(tl(key_val)))
      end)
    details = Floki.find(start, ".ldp-key-fact-item")
      |> Enum.reduce(%{}, fn item, acc ->
        IO.inspect(item, label: "inspect")
        case Floki.text(hd(Floki.find(item, "div"))) do
          "Status" -> Map.put(acc, :status, Floki.text(Floki.find(item, ".key-fact-data")))
          "Price/Sq Ft" -> Map.put(acc, :sqft_price, Floki.text(Floki.find(item, ".key-fact-data")))
          "Type" -> Map.put(acc, :property_type, Floki.text(Floki.find(item, ".key-fact-data")))
          i -> IO.inspect(i, label: "inspect")
        end
      end)
    neighbor = Floki.find(start, ".neighborhood-flex-item")
      |> Enum.reduce(%{}, fn item, acc ->
        case Floki.text(Floki.find(item, ".neighborhood-flex-item-attribute")) do
          "Median Listing Price" -> Map.put(acc, :median_list_price, Floki.text(Floki.find(item, "p")))
          "Median Sales Price" -> Map.put(acc, :median_sale_price, Floki.text(Floki.find(item, "p")))
          "Median Days on Market" -> Map.put(acc, :median_dom, Floki.text(Floki.find(item, "p")))
          _ -> acc
        end
      end)
    overview = process_overview(Floki.text(Floki.find(start, "#ldp-detail-romance")))

    %Crawly.ParsedItem{
      requests: [],
      items: [%{
        beds: Floki.text(Floki.find(summary, "[data-label=property-meta-beds] span")),
        baths: Floki.text(Floki.find(summary, "[data-label=property-meta-bath] span")),
        sqft: to_i(Floki.text(Floki.find(summary, "[data-label=property-meta-sqft] span"))),
        lotsize: Floki.text(Floki.find(summary, "[data-label=property-meta-lotsize] span")),
        est_price: to_i(hd(Floki.attribute(Floki.find(start, ".ldp-header-price"), "span", "content"))),
        overview: overview,
        history: %{
          overview: Floki.text(Floki.find(history, "p")),
          timeline_items: Floki.find(history, ".pdp-timeline-item")
            |> Enum.map(fn item ->
              %{
                date: Floki.text(Floki.find(item, ".pdp-date:first-child")),
                action: Floki.text(Floki.find(item, ".timeline-text div"))
                  |> String.replace("\n", "")
                  |> String.trim()
              }
            end)
        },
        sqft_price: String.trim(String.replace(details.sqft_price, "\n", "")),
        property_type: String.trim(String.replace(details.property_type, "\n", "")),
        status: String.trim(String.replace(details.status, "\n", "")),
        public_records: public,
        median_dom: String.trim(String.replace(neighbor.median_dom, "\n", "")),
        median_list_price: String.trim(String.replace(neighbor.median_list_price, "\n", "")),
        median_sale_price: String.trim(String.replace(neighbor.median_sale_price, "\n", "")),
        foriegn_url: response.request_url
      }]
    }
  end

  defp to_i(str) do
    String.replace(str, "$", "")
    |> String.replace(",", "")
    |> String.to_integer()
  end

  defp process_overview(overview) do
    if overview && overview !== "" do
      String.split(overview, "\n                  ")
      |> Enum.at(1)
      |> String.trim()
      |> String.replace("\n\n", "</p><p>")
    end
  end
end
