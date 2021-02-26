defmodule Excyte.Repo.Migrations.Documents do
  use Ecto.Migration

  def change do
    create table(:documents) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:teams)
      add :insight_id, references(:insights)
      add :title, :string, null: false
      add :content, :map, default: %{}
      add :description, :string
      add :type, :string
      timestamps()
    end

    create index(:documents, [:created_by_id])
    create index(:documents, [:brokerage_id])
  end
end
