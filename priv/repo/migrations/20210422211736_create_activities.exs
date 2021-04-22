defmodule Excyte.Repo.Migrations.CreateActivities do
  use Ecto.Migration

  def change do
    create table(:activities) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :name, :string
      add :description, :text
      add :type, :string
      add :status, :string, default: "new"
      add :seen_by_ids, :jsonb, default: "[]"
      add :details, :map, default: %{}
      timestamps()
    end

    create index(:activities, [:created_by_id])
    create index(:activities, [:brokerage_id])
  end
end
