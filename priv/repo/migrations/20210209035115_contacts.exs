defmodule Excyte.Repo.Migrations.Contacts do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :created_by_id, references(:users, on_delete: :delete_all)
      add :assigned_to_id, references(:users, on_delete: :nilify_all)
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :referring_insight_id, :integer
      add :is_shared, :boolean, default: false
      add :is_archived, :boolean, default: false
      add :type, :string, default: "lead"
      add :priority, :string, default: "Medium"
      add :status, :string, default: "new"
      add :needs_attention, :boolean, default: false
      add :description, :text
      add :first_name, :string
      add :phone_number, :string
      add :last_name, :string
      add :title, :string
      add :suffix, :string
      add :email, :string
      add :state, :string
      add :zip_code, :string
      add :contact_items, :jsonb, default: "[]"
      add :address_items, :jsonb, default: "[]"
      add :notes, :jsonb, default: "[]"
      add :position, :map, default: %{}
      timestamps()
    end

    create table(:contact_insight, primary_key: false) do
      add(:insight_id, references(:insights, on_delete: :nilify_all), primary_key: true)
      add(:contact_id, references(:contacts, on_delete: :nilify_all), primary_key: true)
      add(:notes, :jsonb, default: "[]")
      timestamps()
    end

    create table(:contact_property, primary_key: false) do
      add(:property_id, references(:properties, on_delete: :nilify_all), primary_key: true)
      add(:contact_id, references(:contacts, on_delete: :nilify_all), primary_key: true)
      add(:notes, :jsonb, default: "[]")
      timestamps()
    end

    create index(:contacts, [:created_by_id])
    create index(:contacts, [:brokerage_id])
    create index(:contacts, [:assigned_to_id])
    create index(:contact_insight, [:insight_id])
    create index(:contact_insight, [:contact_id])
    create index(:contact_property, [:property_id])
    create index(:contact_property, [:contact_id])
  end
end
