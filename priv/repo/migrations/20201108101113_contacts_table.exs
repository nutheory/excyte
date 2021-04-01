defmodule Excyte.Repo.Migrations.ContactsTable do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :agent_id, references(:users)
      add :assigned_to_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :shared, :boolean, default: false
      add :is_lead, :boolean, default: false
      add :description, :text
      add :name, :string
      add :email, :string
      add :points_of_contact, :jsonb, default: "[]"
      timestamps()
    end

    create index(:contacts, [:agent_id])
    create index(:contacts, [:brokerage_id])
    create index(:contacts, [:assigned_to_id])
  end
end
