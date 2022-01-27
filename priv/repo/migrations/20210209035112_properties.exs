defmodule Excyte.Repo.Migrations.Properties do
  use Ecto.Migration

  def change do
    create table(:properties) do
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :agent_id, references(:users, on_delete: :nilify_all)
      add :foreign_id, :string
      add :doc_id, :integer
      add :internal_type, :string
      add :street_name, :string
      add :street_number, :string
      add :unit, :string
      add :city, :string
      add :zip, :string
      add :coords, :map, default: %{}
      add :state, :string
      add :status, :string
      add :parking_type, :string
      add :parking_spaces, :integer
      add :public_remarks, :text
      add :overview, :text
      add :foreign_url, :text
      add :year_built, :integer
      add :days_on_market, :integer
      add :property_type, :string
      add :property_sub_type, :string
      add :beds, :integer
      add :baths, :float
      add :sqft, :integer
      add :main_photo_url, :text
      add :lotsize_sqft, :integer
      add :lotsize_preference, :string, default: "sqft"
      add :close_date, :string
      add :pending_timestamp, :utc_datetime
      add :distance_from_subject, :string
      add :list_price, :integer
      add :est_price, :integer
      add :stories, :float
      add :walkscore, :integer
      add :listing_key, :string
      add :listing_id, :string
      add :features, :jsonb, default: "[]"
      add :schools, :jsonb, default: "[]"
      add :last_modified, :utc_datetime
      add :history, :map, default: %{}
      add :manually_updated, :boolean, default: false
      add :median_dom, :string
      add :median_sale_price, :string
      add :median_list_price, :string
      add :association_fee, :string
      add :association_amenities, :jsonb, default: "[]"
      add :association_name, :string
      add :association_fee_frequency, :string
      add :tax_assessed_value, :string
      add :tax_annual_amount, :string
      add :tax_year, :string
      timestamps()
    end

    create index(:properties, [:agent_id])
    create index(:properties, [:brokerage_id])
  end
end
