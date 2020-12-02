defmodule Excyte.Repo.Migrations.Insights do
  use Ecto.Migration

  def change do
    create table(:insights) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:teams)
      add :type, :string
      add :mls, :string
      add :subject_listing_id, :string
      add :title, :string, null: false
      add :content, :jsonb, default: "[]"
      add :search_criteria, :jsonb, default: "[]"
      timestamps()
    end

    create index(:insights, [:created_by_id])
    create index(:insights, [:brokerage_id])
  end
end
