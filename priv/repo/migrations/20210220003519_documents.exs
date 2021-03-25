defmodule Excyte.Repo.Migrations.Documents do
  use Ecto.Migration

  def change do
    create table(:documents) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:teams)
      add :insight_id, references(:insights)
      add :foreign_id, :string
      add :title, :string, null: false
      add :content, :map, default: %{}
      add :template, :boolean, default: false
      add :is_public, :boolean, default: false
      add :order, :integer
      add :description, :string
      add :type, :string
      timestamps()
    end

    create index(:documents, [:created_by_id])
    create index(:documents, [:brokerage_id])
  end
end
