defmodule Excyte.Repo.Migrations.Tags do
  use Ecto.Migration

  def change do
    create table(:tags) do
      add :name, :string, null: false
      add :description, :string
      timestamps()
    end

    create table(:taggings) do
      add :tag_id, references(:tags, on_delete: :delete_all)
      add :contact_id, references(:contacts, on_delete: :delete_all)
      timestamps()
    end

    create index(:taggings, [:tag_id])
    create index(:taggings, [:contact_id])
    create unique_index(:tags, [:name])
    create unique_index(:taggings, [:tag_id, :contact_id])
  end
end
