defmodule Excyte.Properties.Property do
  @moduledoc """
    Property DB schema
  """
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{
    Insights.Insight,
    Properties.Feature,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]
  defimpl Jason.Encoder, for: [Excyte.Properties.Property] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  @cast_opts [
      :agent_id,
      :foreign_id,
      :insight_id,
      :doc_id,
      :internal_type,
      :street_name,
      :street_number,
      :unit,
      :city,
      :zip,
      :coords,
      :state,
      :status,
      :parking_type,
      :parking_spaces,
      :public_remarks,
      :overview,
      :foreign_url,
      :year_built,
      :days_on_market,
      :property_type,
      :property_sub_type,
      :beds,
      :baths,
      :sqft,
      :main_photo_url,
      :lotsize_sqft,
      :lotsize_preference,
      :close_date,
      :pending_timestamp,
      :distance_from_subject,
      :list_price,
      :est_price,
      :stories,
      :walkscore,
      :listing_key,
      :listing_id,
      # :features,
      :last_modified,
      :dirty_info,
      :history,
      :public_records,
      :pool,
      :spa,
      :view,
      :waterfront,
      :horses,
      :manually_updated,
      :median_dom,
      :median_sale_price,
      :median_list_price,
      :schools,
      :association_fee,
      :association_amenities,
      :association_name,
      :association_fee_frequency,
      :tax_assessed_value,
      :tax_annual_amount,
      :tax_year
    ]

  schema "properties" do
    field :foreign_id, :string
    field :doc_id, :integer
    field :internal_type, :string
    field :street_name, :string
    field :street_number, :string
    field :unit, :string
    field :city, :string
    field :zip, :string
    field :coords, MapType
    field :state, :string
    field :status, :string
    field :parking_type, :string
    field :parking_spaces, :integer
    field :public_remarks, :string
    field :overview, :string
    field :foreign_url, :string
    field :year_built, :integer
    field :days_on_market, :integer
    field :property_type, :string
    field :property_sub_type, :string
    field :beds, :integer
    field :baths, :float
    field :sqft, :integer
    field :main_photo_url, :string
    field :lotsize_sqft, :integer
    field :lotsize_preference, :string
    field :close_date, :string
    field :pending_timestamp, :utc_datetime
    field :distance_from_subject, :string
    field :list_price, :string
    field :stories, :float
    field :walkscore, :integer
    field :est_price, :integer
    field :listing_key, :string
    field :listing_id, :string
    # field :features, {:array, :map}
    field :last_modified, :utc_datetime
    field :dirty_info, {:array, :map}
    field :history, MapType
    field :public_records, MapType
    field :pool, :boolean
    field :spa, :boolean
    field :waterfront, :boolean
    field :view, :boolean
    field :horses, :boolean
    field :manually_updated, :boolean
    field :new_construction, :boolean
    field :median_dom, :string
    field :median_sale_price, :string
    field :median_list_price, :string
    field :schools, {:array, :map}
    field :association_fee, :string
    field :association_amenities, {:array, :map}
    field :association_name, :string
    field :association_fee_frequency, :string
    field :tax_assessed_value, :string
    field :tax_annual_amount, :string
    field :tax_year, :string
    embeds_many(:features, Feature)
    belongs_to(:insight, Insight)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:agent, User)
    timestamps()
  end

  def changeset(property, attrs) do
    property
    |> cast(attrs, @cast_opts)
    |> cast_embed(:features)
    |> validate_required([:agent_id, :internal_type, :beds, :baths])
    |> validate_number(:beds, greater_than: 0)
    |> validate_number(:baths, greater_than: 0)
  end

end
