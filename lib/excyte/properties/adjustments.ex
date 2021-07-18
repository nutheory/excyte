defmodule Excyte.Properties.Adjustments do

  def process_init(list, subj) do
    # sale price w/ days on market and how long ago
    # compare boolean features
    subject = sanitize_nils(Map.from_struct(subj))
    # Enum.map(listings, fn li ->
      listing = sanitize_nils(list)
      price = if Map.has_key?(listing, :close_price), do: :close_price, else: :list_price

      adj =
        %{
          adjustments: %{
            sqft: calculate_sqft(subject, listing, listing[price]),
            stories: (if Map.has_key?(listing, :stories) && Map.has_key?(subject, :stories),
                    do: numeric_difference(subject.stories, listing.stories, "story"), else: nil),
            beds: (if Map.has_key?(listing, :beds) && Map.has_key?(subject, :beds),
                    do: numeric_difference(subject.beds, listing.beds, "beds"), else: nil),
            baths: (if Map.has_key?(listing, :baths) && Map.has_key?(subject, :baths),
                    do: numeric_difference(subject.baths, listing.baths.total, "baths"), else: nil),
            lotsize: calculate_lotsize(subject, listing),
            year_built: calculate_time(subject, listing, :year_built, "year"),
          }
        }
        |> sanitize_equals()


      Map.merge(list, %{
        adjustments: adj,
        custom_adjustments: [],
        excyte_price: nil,
        auto_adjusted: false,
        excyte_suggested_price: listing[price]
        # excyte_suggested_price: (listing[price] + adj.sqft.adjustment)
      })
    # end)
  end

  defp sanitize_nils(listing) do
    Enum.filter(listing, fn {_, v} -> !is_nil(v) end)
    |> Enum.into(%{})
  end

  defp sanitize_equals(listing) do
    Enum.filter(listing.adjustments, fn {_, v} -> !is_nil(v) && v.difference !== 0 && v.difference !== 0.0 end)
    |> Enum.into(%{})
  end

  defp calculate_lotsize(subject, listing) do
    if Map.has_key?(subject, :lotsize_sqft) && Map.has_key?(listing, :lotsize_sqft) do
      %{
        difference: trunc(subject.lotsize_sqft - listing.lotsize_sqft),
        to_text: to_text_lot(subject.lotsize_preference, subject.lotsize_sqft - listing.lotsize_sqft)
      }
    else
      nil
    end
  end

  defp calculate_sqft(subject, listing, listing_price) do
    if Map.has_key?(listing, :sqft) && Map.has_key?(subject, :sqft) && listing_price do
      %{
        difference: trunc(subject.sqft - listing.sqft),
        price_per_sqft: round(listing_price/listing.sqft),
        adjustment: round((subject.sqft - listing.sqft) * (listing_price/listing.sqft))
      }
    else
      %{adjustment: 0}
    end
  end

  # def min_adjustment_price(price, auto_price, percent) do
  #   if price && auto_price do
  #     low_price = hd(Enum.sort([price, auto_price], :asc))
  #     round(low_price - (low_price * (percent/100)))
  #   end
  # end

  # def max_adjustment_price(price, auto_price, percent) do
  #   if price && auto_price do
  #     high_price = hd(Enum.sort([price, auto_price], :desc))
  #     round(high_price + (high_price * (percent/100)))
  #   end
  # end

  defp calculate_time(subject, listing, attr, human_attr) do
    if Map.has_key?(listing, attr) && Map.has_key?(subject, attr) && subject[attr] !== 0 do
      %{
        difference: subject[attr] - listing[attr],
        to_text: to_text_time(subject[attr] - listing[attr], human_attr)
      }
    else
      nil
    end
  end

  defp numeric_difference(subject_attr, listing_attr, human_attr) do
    %{
      difference: subject_attr - listing_attr,
      to_text: to_text(subject_attr - listing_attr, human_attr)
    }
  end

  defp to_text(val, attr) do
    adj =
      cond do
        is_integer(val) -> if val < 0, do: "-", else: "+"
        is_float(val) -> if val < 0.0, do: "-", else: "+"
      end
    number = if val < 0, do: val * -1, else: val
    "#{adj}#{number} #{Inflex.inflect(attr, number)}"
  end

  defp to_text_lot(unit, diff) do
    number = if diff < 0, do: diff * -1, else: diff
    if unit === "sqft" do
      "#{trunc(diff)}"
    else
      "#{trunc(number/43560)}"
    end
  end

  defp to_text_time(val, attr) do
    number = if val < 0, do: val * -1, else: val
    adj = if val < 0, do: "older", else: "newer"
    plural_attr = if number === 1, do: attr, else: "#{attr}s"
    "#{number} #{plural_attr} #{adj}"
  end
end
