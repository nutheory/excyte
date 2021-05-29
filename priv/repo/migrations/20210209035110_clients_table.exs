defmodule Excyte.Repo.Migrations.ClientsTable do
  use Ecto.Migration

  def change do
    create table(:clients) do
      add :created_by_id, references(:users)
      add :assigned_to_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :referring_insight_id, :integer
      add :is_shared, :boolean, default: false
      add :is_lead, :boolean, default: false
      add :is_archived, :boolean, default: false
      add :status, :string, default: "new"
      add :position_x, :integer, default: 3
      add :position_y, :integer, default: 0
      add :needs_attention, :boolean, default: false
      add :description, :text
      add :name, :string
      add :primary_email, :string
      add :contacts, :jsonb, default: "[]"
      add :addresses, :jsonb, default: "[]"
      timestamps()
    end

    create index(:clients, [:created_by_id])
    create index(:clients, [:brokerage_id])
    create index(:clients, [:assigned_to_id])
  end
end
