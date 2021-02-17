defmodule Excyte.Properties.Rankings do
  @moduledoc """
    Property DB schema
  """

  def process(listing, subject) do
    # res =
      Map.merge(listing, %{
        excyte_ranking: %{
          beds: %{
            percentage: generic_percentage(listing.beds, subject.beds)
            # weight:
          },
          baths: %{
            percentage: generic_percentage(listing.baths.total, subject.baths)
          },
          sqft: %{
            percentage: generic_percentage(listing.sqft, subject.sqft)
          },
          lotsize_sqft: %{
            percentage: generic_percentage(listing.lotsize_sqft, subject.lotsize_sqft)
          },
          lotsize_acres: %{
            percentage: generic_percentage(listing.lotsize_acres, subject.lotsize_acres)
          }
        }
      })
    # IO.inspect(res.excyte_ranking, label: "RES")
  end

  defp generic_percentage(listing_val, subject_val) do
    IO.inspect(listing_val, label: "LV")
    IO.inspect(subject_val, label: "SV")
    if listing_val === nil || subject_val === nil || listing_val === 0 || subject_val === 0 do
      nil
    else
      srt = Enum.sort([listing_val, subject_val])
      round(Enum.at(srt, 0)/Enum.at(srt, 1) * 100)
    end
  end
end
