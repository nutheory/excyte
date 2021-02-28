defmodule Excyte.Properties.PublicDataApi do
  use Tesla, only: [:get], docs: false

  plug Tesla.Middleware.BaseUrl, "https://www.realtor.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 5
  plug Tesla.Middleware.Headers, [{"user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger


  def get_subject_by_foreign_id(foreign_id) do
    get("/realestateandhomes-detail/#{foreign_id}", opts: [adapter: [proxy: fetch_proxy()]])
    |> process_subject()
  end


  defp fetch_proxy() do
    p = Enum.random(Application.get_env(:excyte, :proxies))
    {p.ip, p.port}
  end

  defp format_response({:ok, %Tesla.Env{:body => %{"error" => error}}}) do
    {:error, error}
  end

  defp format_response({:ok, %Tesla.Env{:body => body}}) do
    {:ok, body}
  end

  defp process_subject({:ok, %Tesla.Env{:body => body} = response}) do
    {:ok, document} = Floki.parse_document(body)
    start = Floki.find(document, ".container-ldp")
    summary = Floki.find(start, "#ldp-property-meta")
    history = Floki.find(start, ".pdp-timeline-content")
    public = process_public_info(start)
    details = process_details(start)
    neighbor = process_neighbor(start)
    overview = process_overview(Floki.text(Floki.find(start, "#ldp-detail-romance")))

    {:ok, %{
      internal_type: "subject",
      foreign_id: get_foreign_id(response.url),
      beds: to_i(Floki.text(Floki.find(summary, "[data-label=property-meta-beds] span"))),
      baths: to_f(Floki.text(Floki.find(summary, "[data-label=property-meta-bath] span"))),
      sqft: to_i(Floki.text(Floki.find(summary, "[data-label=property-meta-sqft] span"))),
      lotsize: process_lotsize(Floki.find(summary, "[data-label=property-meta-lotsize]")),
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
      sqft_price: to_i(key_check(details, :sqft_price)),
      property_type: key_check(details, :property_type),
      status: key_check(details, :status),
      year_built: to_i(key_check(details, :year_built)),
      pool: process_pool(public),
      stories: process_stories(public),
      public_records: public,
      median_dom: key_check(neighbor, :median_dom),
      median_list_price: key_check(neighbor, :median_list_price),
      median_sale_price: key_check(neighbor, :median_sale_price),
      foreign_url: response.url
    }}
  end


  defp key_check(map, key) do
    if Map.has_key?(map, key) do
      String.trim(String.replace(map[key], "\n", ""))
    else
      nil
    end
  end

  defp to_bool(str) do
    if str === "yes", do: true, else: false
  end

  defp to_i(str) do
    if str && str !== "" do
      String.replace(str, ~r/\D/, "")
      |> String.to_integer()
    else
      0
    end
  end

  defp to_f(str) do
    if str !== "" do
      if String.contains?(str, ".") do
        String.replace(str, ~r/[^0-9.]/, "")
        |> String.to_float()
      else
        String.replace(str <> ".0", ~r/[^0-9.]/, "")
        |> String.to_float()
      end
    else
      0.0
    end
  end

  defp process_lotsize(lotsize) do
    str =
      String.replace(Floki.text(lotsize), "\n", "")
      |> String.trim()

    cond do
      String.contains?(str, "sqft lot") -> %{unit: "sqft", value: to_i(Floki.text(Floki.find(lotsize, ".data-value")))}
      String.contains?(str, "acres lot") -> %{unit: "acres", value: to_f(Floki.text(Floki.find(lotsize, ".data-value")))}
      true -> nil
    end
  end
    # if String.contains?(str, "sqft lot") do
    #   to_i(Floki.text(Floki.find(lotsize, ".data-value")))
    # else
    #   nil
    # end
  # end

  # defp process_lacres(lotsize) do
  #   str =
  #     String.replace(Floki.text(lotsize), "\n", "")
  #     |> String.trim()

  #   if String.contains?(str, "acres lot") do
  #     to_f(Floki.text(Floki.find(lotsize, ".data-value")))
  #   else
  #     nil
  #   end
  # end

  defp process_stories(public) do
    if Map.has_key?(public, :stories) do
      to_i(public.stories)
    end
  end

  defp process_pool(public) do
    if Map.has_key?(public, :pool) do
      to_bool(public.pool)
    end
  end

  defp process_public_info(start) do
    Floki.find(start, "#ldp-detail-public-records li")
    |> Enum.reduce(%{}, fn item, acc ->
      key_val = String.split(Floki.text(item), ":")
      Map.put(acc, name_to_atom(hd(key_val)), hd(tl(key_val)))
    end)
  end

  defp process_details(start) do
    Floki.find(start, ".ldp-key-fact-item")
    |> Enum.reduce(%{}, fn item, acc ->
      case Floki.text(hd(Floki.find(item, "div"))) do
        "Status" -> Map.put(acc, :status, Floki.text(Floki.find(item, ".key-fact-data")))
        "Price/Sq Ft" -> Map.put(acc, :sqft_price, Floki.text(Floki.find(item, ".key-fact-data")))
        "Type" -> Map.put(acc, :property_type, Floki.text(Floki.find(item, ".key-fact-data")))
        "Built" -> Map.put(acc, :year_built, Floki.text(Floki.find(item, ".key-fact-data")))
        _ -> acc
      end
    end)
  end

  defp process_neighbor(start) do
    Floki.find(start, ".neighborhood-flex-item")
    |> Enum.reduce(%{}, fn item, acc ->
      case Floki.text(Floki.find(item, ".neighborhood-flex-item-attribute")) do
        "Median Listing Price" -> Map.put(acc, :median_list_price, Floki.text(Floki.find(item, "p")))
        "Median Sales Price" -> Map.put(acc, :median_sale_price, Floki.text(Floki.find(item, "p")))
        "Median Days on Market" -> Map.put(acc, :median_dom, Floki.text(Floki.find(item, "p")))
        _ -> acc
      end
    end)
  end

  defp process_overview(overview) do
    str =
      String.split(overview, "\n")
      |> Enum.at(1)
    if str do
      String.trim(str)
      |> String.replace("\n\n", "</p><p>")
    end
  end

  defp name_to_atom(name) do
    String.downcase(name)
    |> String.replace(" ", "_")
    |> String.to_atom()
  end

  defp get_foreign_id(url) do
    String.reverse(url)
    |> String.split("_")
    |> hd()
    |> String.reverse()
    |> String.replace("-", "")
    |> String.slice(1..-1)
  end
end
