defmodule Excyte.Repo.Migrations.ContactsFix do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :created_by_id, references(:users)
      add :assigned_to_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :property_id, references(:properties)
      add :referring_insight_id, :integer
      add :is_shared, :boolean, default: false
      add :is_archived, :boolean, default: false
      add :type, :string, default: "lead"
      add :status, :string, default: "new"
      add :needs_attention, :boolean, default: false
      add :description, :text
      add :name, :string
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
      add(:insight_id, references(:insights, on_delete: :delete_all), primary_key: true)
      add(:contact_id, references(:contacts, on_delete: :delete_all), primary_key: true)
      add(:notes, :jsonb, default: "[]")
      timestamps()
    end

    alter table(:activities) do
      remove :client_id
      add :contact_id, references(:contacts)
    end

    alter table(:conversations) do
      remove :client_id
      add :contact_id, references(:contacts)
    end

    alter table(:insights) do
      remove :client_id
    end

    alter table(:properties) do
      add :contact_id, references(:contacts)
    end

    drop table("clients")

    create index(:activities, [:contact_id])
    create index(:conversations, [:contact_id])
    create index(:properties, [:contact_id])
    create index(:contacts, [:created_by_id])
    create index(:contacts, [:brokerage_id])
    create index(:contacts, [:assigned_to_id])
    create index(:contact_insight, [:insight_id])
    create index(:contact_insight, [:contact_id])
  end
end
