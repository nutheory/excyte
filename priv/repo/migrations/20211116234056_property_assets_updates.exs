defmodule Excyte.Repo.Migrations.PropertyAssetsUpdates do
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

    alter table(:assets) do
      add :contact_id, references(:contacts)
      add :property_id, references(:properties)
      add :is_main_photo, :boolean, default: false
      add :position, :integer
    end

    alter table(:properties) do
      remove :parking
      add :parking_type, :string
      add :parking_spaces, :integer
    end

    create index(:assets, [:contact_id])
    create index(:assets, [:property_id])
    create index(:taggings, [:tag_id])
    create index(:taggings, [:contact_id])
    create unique_index(:tags, [:name])
    create unique_index(:taggings, [:tag_id, :contact_id])
  end
end
