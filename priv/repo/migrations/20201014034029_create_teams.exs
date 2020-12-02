defmodule Excyte.Repo.Migrations.Teams do
  use Ecto.Migration

  def change do
    create table(:teams) do
      add :account_id, references(:accounts)
      add :owner_id, :integer
      timestamps()
    end

    create index(:teams, [:account_id])
  end
end
