defmodule Excyte.Properties.Adjustments do

  def process_init(listings, subj) do
    # sale price w/ days on market and how long ago
    # compare boolean features
    subject = sanitize_nils(subj)
    Enum.map(listings, fn li ->
      listing = sanitize_nils(li)
      price = if Map.has_key?(listing, :close_price), do: :close_price, else: :list_price
      # lotsize = normalize_lotsize(subject, listing)

      adj =
        %{
          adjustments: %{
            sqft: calculate_sqft(subject, listing, listing[price]),
            stories: (if Map.has_key?(listing, :stories) && Map.has_key?(subject, :stories),
                    do: numeric_difference(subject.stories, listing.stories, "story"), else: nil),
            beds: (if Map.has_key?(listing, :beds) && Map.has_key?(subject, :beds),
                    do: numeric_difference(subject.beds, listing.beds, "bedroom"), else: nil),
            baths: (if Map.has_key?(listing, :baths) && Map.has_key?(subject, :baths),
                    do: numeric_difference(subject.baths, listing.baths.total, "bathroom"), else: nil),
            lotsize: calculate_lotsize(subject, listing),
            year_built: calculate_time(subject, listing, :year_built, "year")
          }
        }
        |> sanitize_equals()


      Map.merge(li, %{adjustments: adj})
    end)
  end

  defp sanitize_nils(listing) do
    Enum.filter(listing, fn {_, v} -> !is_nil(v) end)
    |> Enum.into(%{})
  end

  defp sanitize_equals(listing) do
    Enum.filter(listing.adjustments, fn {_, v} -> !is_nil(v) && v.difference !== 0 end)
    |> Enum.into(%{})
  end

  defp calculate_lotsize(subject, listing) do
    if Map.has_key?(subject.lotsize, :unit) && Map.has_key?(listing.lotsize, :unit) do
      %{
        difference: Float.round(subject.lotsize.value - listing.lotsize.value, 2),
        to_text: to_text(Float.round(subject.lotsize.value - listing.lotsize.value, 2), "lot #{listing.lotsize.unit}")
      }
    else
      nil
    end
  end

  defp calculate_sqft(subject, listing, listing_price) do
    if Map.has_key?(listing, :sqft) && Map.has_key?(subject, :sqft) && listing_price do
      %{
        difference: subject.sqft - listing.sqft,
        price_per_sqft: round(listing_price/listing.sqft),
        adjustment: round((subject.sqft - listing.sqft) * (listing_price/listing.sqft))
      }
    end
  end

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
    number = if val < 0, do: val * -1, else: val
    adj = if val < 0, do: "-", else: "+"
    "#{adj}#{number} #{Inflex.inflect(attr, number)}"
  end

  defp to_text_time(val, attr) do
    number = if val < 0, do: val * -1, else: val
    adj = if val < 0, do: "older", else: "newer"
    plural_attr = if number === 1, do: attr, else: "#{attr}s"
    "#{number} #{plural_attr} #{adj}"
  end
end
