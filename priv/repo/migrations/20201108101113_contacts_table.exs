defmodule Excyte.Repo.Migrations.ContactsTable do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :profile_id, references(:profiles)
      add :textable, :boolean, default: false
      add :type, :string
      add :name, :string
      add :content, :string
      timestamps()
    end

    create index(:contacts, [:profile_id])
  end
end
