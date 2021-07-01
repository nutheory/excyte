defmodule Excyte.Repo.Migrations.CreateActivities do
  use Ecto.Migration

  def change do
    create table(:activities) do
      add :agent_id, references(:users)
      add :account_id, references(:accounts)
      add :brokerage_id, references(:brokerages)
      add :insight_id, references(:insights)
      add :client_id, references(:clients)
      add :name, :string
      add :description, :text
      add :type, :string
      add :status, :string, default: "new"
      add :seen_by_ids, :jsonb, default: "[]"
      add :details, :map, default: %{}
      timestamps()
    end

    create index(:activities, [:agent_id])
    create index(:activities, [:brokerage_id])
  end
end
