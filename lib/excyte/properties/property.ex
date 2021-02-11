defmodule Excyte.Properties.Property do
  @moduledoc """
    Property DB schema
  """
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{Utils.MapType}

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
    field :parking, :string
    field :public_remarks, :string
    field :overview, :string
    field :foreign_url, :string
    field :year_built, :string
    field :days_on_market, :integer
    field :property_type, :string
    field :property_sub_type, :string
    field :beds, :integer
    field :baths, :float
    field :sqft, :integer
    field :main_photo_url, :string
    field :lotsize_sqft, :integer
    field :lotsize_acres, :float
    field :close_date, :string
    field :pending_timestamp, :naive_datetime
    field :distance_from_subject, :string
    field :list_price, :string
    field :stories, :string
    field :walkscore, :integer
    field :est_price, :integer
    field :listing_key, :string
    field :listing_id, :string
    field :features, {:array, :map}
    field :last_modified, :naive_datetime
    field :dirty_info, {:array, :map}
    field :history, MapType
    field :public_records, MapType
    field :pool, :boolean
    field :spa, :boolean
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
    timestamps()
  end

  def changeset(property, attrs) do
    property
    |> cast(attrs, [
      :foreign_id,
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
      :parking,
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
      :lotsize_acres,
      :close_date,
      :pending_timestamp,
      :distance_from_subject,
      :list_price,
      :est_price,
      :stories,
      :walkscore,
      :listing_key,
      :listing_id,
      :features,
      :last_modified,
      :dirty_info,
      :history,
      :public_records,
      :pool,
      :spa,
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
    ])
  end
end
