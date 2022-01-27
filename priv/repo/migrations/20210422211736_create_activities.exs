defmodule Excyte.Repo.Migrations.CreateActivities do
  use Ecto.Migration

  def change do
    create table(:activities) do
      add :agent_id, references(:users, on_delete: :nilify_all)
      add :account_id, references(:accounts, on_delete: :delete_all)
      add :brokerage_id, references(:brokerages, on_delete: :nilify_all)
      add :insight_id, references(:insights, on_delete: :nilify_all)
      add :contact_id, references(:contacts, on_delete: :nilify_all)
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
    create index(:activities, [:contact_id])
  end
end
