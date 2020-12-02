defmodule Excyte.Repo.Migrations.Sections do
  use Ecto.Migration

  def change do
    create table(:sections) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:teams)
      add :title, :string, null: false
      add :content, :jsonb, default: "[]"
      timestamps()
    end

    create index(:sections, [:created_by_id])
    create index(:sections, [:brokerage_id])
  end
end
