defmodule Excyte.Repo.Migrations.Insights do
  use Ecto.Migration

  def change do
    create table(:insights) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:teams)
      # add :client_id, references(:clients)
      add :type, :string
      add :mls, :string
      add :uuid, :string
      add :title, :string, null: false
      add :selected_listing_ids, :jsonb, default: "[]"
      add :content, :map, default: %{}
      add :published, :boolean, default: false
      timestamps()
    end

    create index(:insights, [:created_by_id, :uuid])
    create index(:insights, [:brokerage_id])
    create unique_index(:insights, [:uuid])
  end
end
