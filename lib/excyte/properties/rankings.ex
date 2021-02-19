defmodule Excyte.Properties.Rankings do
  @moduledoc """
    Property DB schema
  """

  def process(listing, subject) do
    listing_price = if listing.close_price, do: :close_price, else: :list_price
    ranks =
      %{
        attrs: %{
          beds: %{
            percentage: generic_percentage(listing.beds, subject.beds),
            text: "beds",
            value: "#{listing.beds}",
            weight: 1
          },
          baths: %{
            percentage: generic_percentage(listing.baths.total, subject.baths),
            text: "baths",
            value: "#{listing.baths.total}",
            weight: 1
          },
          lotsize_sqft: %{
            percentage: generic_percentage(listing.lotsize_sqft, subject.lotsize_sqft),
            text: "lot sqft",
            value: "#{listing.lotsize_sqft}",
            weight: 1
          },
          lotsize_acres: %{
            percentage: generic_percentage(listing.lotsize_acres, subject.lotsize_acres),
            text: "lot acres",
            value: "#{listing.lotsize_acres}",
            weight: 1
          },
          year_built: %{
            percentage: generic_percentage(listing.year_built, subject.year_built),
            text: "year built",
            value: "#{listing.year_built}",
            weight: 1
          },
          price: %{
            percentage: generic_percentage(listing[listing_price], subject.est_price),
            text: String.replace(Atom.to_string(listing_price), "_", " "),
            value: "#{listing[listing_price]}",
            weight: 2
          },
          distance: %{
            percentage: distance_percentage(listing.distance_from_subject),
            text: "distance",
            value: "#{listing.distance_from_subject}",
            weight: 2
          },
          sqft: %{
            percentage: generic_percentage(listing.sqft, subject.sqft),
            text: "sqft",
            value: "#{listing.sqft}",
            weight: 2
          }
        }
      }
      |> sanitize_attrs()
      |> average_with_weight()
      |> ranking_summary()

    Map.merge(listing, %{excyte_ranking: ranks})
  end

  defp sanitize_attrs(rankings) do
    attrs =
      Enum.filter(rankings.attrs, fn {_, v} -> !is_nil(v.percentage) end)
      |> Enum.into(%{})

    Map.merge(rankings, %{attrs: attrs})
  end

  defp generic_percentage(listing_val, subject_val) do
    if listing_val === nil || subject_val === nil || listing_val === 0 || subject_val === 0 do
      nil
    else
      srt = Enum.sort([listing_val, subject_val])
      round(Enum.at(srt, 0)/Enum.at(srt, 1) * 100)
    end
  end

  defp distance_percentage(d) do
    cond do
      d <= 0.2 -> 100
      d <= 0.6 -> 95
      d <= 1.0 -> 90
      d <= 1.5 -> 85
      d <= 2.5 -> 80
      true -> 75
    end
  end

  defp average_with_weight(rankings) do
    score =
      Enum.reduce(rankings.attrs, [], fn {_, v}, acc ->
        if v.weight > 1 do
          inner_acc =
            Enum.reduce(1..v.weight, [], fn _, i_acc -> [v.percentage | i_acc] end)
          inner_acc ++ acc
        else
          [v.percentage | acc]
        end
      end)
      |> average()

    Map.merge(rankings, %{score: round(score)})
  end

  defp ranking_summary(rankings) do
    exact_matches =
      Enum.filter(rankings.attrs, fn {_, v} -> v.percentage === 100 end)
      |> Enum.map(fn {k, v} ->
        %{ attr: k, text: v.text, value: "#{v.value}"}
      end)

    grenades =
      Enum.filter(rankings.attrs, fn {_, v} -> v.percentage > 85 && v.percentage < 100 end)
      |> Enum.map(fn {k, v} ->
        %{ attr: k, text: v.text, value: "#{v.value}"}
      end)

    Map.merge(rankings, %{summary: %{
      matches: exact_matches,
      grenades: grenades
    }})
  end

  defp average(nums) do
    Enum.sum(nums) / length(nums)
  end
end
