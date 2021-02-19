defmodule Excyte.Repo.Migrations.SavedSearches do
  use Ecto.Migration

  def change do
    create table(:saved_searches) do
      add :insight_id, references(:insights)
      add :zip, :string
      add :coords, :map, default: %{}
      add :query, :string
      add :subject_foreign_url, :text
      add :criteria, :map, default: %{}
      timestamps()
    end
  end
end
