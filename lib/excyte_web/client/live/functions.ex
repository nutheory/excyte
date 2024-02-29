defmodule ExcyteWeb.Client.Functions do
  use Timex
  use Phoenix.Component
  import Number.{Delimit}
  # alias ExcyteWeb.{Helpers.Utilities}

  def closed_analysis(listings) do
    closed = Enum.filter(listings, fn lst -> lst["status"] === "Closed" end)

    if length(closed) > 0 do
      closed_averages = format_averages(calculated_averages(closed))

      closed_listings =
        Enum.map(closed, fn lst ->
          %{
            address: "#{lst["street_number"]} #{lst["street_name"]}",
            percent:
              if(lst["close_price"] && lst["list_price"],
                do: Float.round(lst["close_price"] / lst["list_price"] * 100, 1),
                else: nil
              ),
            list: "$#{number_to_delimited(lst["list_price"], precision: 0)}",
            dom: lst["days_on_market"],
            close:
              if(lst["close_price"],
                do: "$#{number_to_delimited(lst["close_price"], precision: 0)}",
                else: 0
              ),
            per_sqft:
              "$#{number_to_delimited(lst["adjustments"]["sqft"]["price_per_sqft"], precision: 0)}"
          }
        end)
        |> Enum.sort_by(& &1["dom"])

      data_points =
        Enum.map(closed, fn lst ->
          %{
            list: lst["list_price"],
            close: if(lst["close_price"], do: lst["close_price"], else: 0),
            dom: lst["days_on_market"],
            label: "#{lst["days_on_market"]} DoM"
          }
        end)
        |> Enum.sort_by(& &1.dom)

      IO.inspect(closed_averages, label: "CLOSED")

      chart_data =
        Jason.encode!(%{
          min: round(closed_averages.min * 0.85),
          max: round(closed_averages.max * 1.15),
          listings: data_points
        })

      %{chart: chart_data, listings: closed_listings, averages: closed_averages}
    else
      nil
    end
  end

  def suggested_price_averages(listings) do
    Enum.group_by(listings, fn lst -> lst["status"] end)
    |> Enum.map(fn {_k, v} -> calculated_averages(v) end)
    |> Enum.map(fn avgs -> format_averages(avgs) end)
    |> Enum.sort_by(& &1.order)
  end

  defp calculated_averages(listings_list) do
    Enum.reduce(
      listings_list,
      %{list_prices: [], close_prices: [], doms: [], percents: [], pp_sqfts: [], count: 0},
      fn lst, acc ->
        IO.inspect(lst["close_price"], label: "CLOSE PRICE")
        IO.inspect(lst["list_price"], label: "LIST PRICE")
        ppsqft = lst["adjustments"]["sqft"]["price_per_sqft"]

        %{
          status: lst["status"],
          pp_sqfts: if(ppsqft !== nil, do: [ppsqft | acc.pp_sqfts], else: []),
          percents:
            if(lst["close_price"] !== nil && lst["list_price"] !== nil,
              do: [Float.round(lst["close_price"] / lst["list_price"] * 100, 1) | acc.percents],
              else: acc.percents
            ),
          list_prices:
            if(lst["list_price"] !== nil,
              do: [lst["list_price"] | acc.list_prices],
              else: acc.list_prices
            ),
          close_prices:
            if(lst["close_price"] !== nil,
              do: [lst["close_price"] | acc.close_prices],
              else: acc.close_prices
            ),
          doms:
            if(lst["days_on_market"] !== nil,
              do: [lst["days_on_market"] | acc.doms],
              else: acc.doms
            ),
          count: acc.count + 1
        }
      end
    )
  end

  defp format_averages(grp) do
    IO.inspect(grp, label: "GRP")
    prices = grp.list_prices ++ grp.close_prices

    order =
      case grp.status do
        "Active" -> 3
        "Closed" -> 1
        "Active Under Contract" -> 5
        "Canceled" -> 7
        "Expired" -> 4
        "Pending" -> 2
        "Withdrawn" -> 6
      end

    %{
      order: order,
      count: grp.count,
      min: if(Enum.empty?(prices), do: nil, else: Enum.min(prices)),
      max: if(Enum.empty?(prices), do: nil, else: Enum.max(prices)),
      status: grp.status,
      avg_sqft:
        if(length(grp.pp_sqfts) > 0,
          do:
            "$#{number_to_delimited(round(Enum.sum(grp.pp_sqfts) / length(grp.pp_sqfts)), precision: 0)}",
          else: 0
        ),
      avg_dom:
        if(length(grp.doms) > 0,
          do:
            "#{number_to_delimited(round(Enum.sum(grp.doms) / length(grp.doms)), precision: 0)}",
          else: nil
        ),
      avg_list:
        if(length(grp.list_prices) > 0,
          do:
            "$#{number_to_delimited(round(Enum.sum(grp.list_prices) / length(grp.list_prices)), precision: 0)}",
          else: nil
        ),
      avg_close:
        if(length(grp.close_prices) > 0,
          do:
            "$#{number_to_delimited(round(Enum.sum(grp.close_prices) / length(grp.close_prices)), precision: 0)}",
          else: nil
        ),
      avg_percent:
        if(length(grp.percents) > 0,
          do:
            "#{number_to_delimited(Float.round(Enum.sum(grp.percents) / length(grp.percents), 1), precision: 1)}",
          else: nil
        )
    }
  end
end
