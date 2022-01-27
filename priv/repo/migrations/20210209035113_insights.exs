defmodule Excyte.Repo.Migrations.Insights do
  use Ecto.Migration

  def change do
    create table(:insights) do
      add :created_by_id, references(:users, on_delete: :nilify_all)
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :document_template_id, references(:document_templates, on_delete: :nilify_all)
      add :property_id, references(:properties, on_delete: :delete_all)
      add :type, :string
      add :mls, :string
      add :uuid, :string
      add :cover_photo_url, :text
      add :name, :string
      add :selected_listing_ids, :jsonb, default: "[]"
      add :document_attributes, :map, default: %{}
      add :content, :map, default: %{}
      add :saved_search, :map, default: %{}
      add :published, :boolean, default: false
      add :auto_generated, :boolean, default: false
      timestamps()
    end

    create index(:insights, [:created_by_id, :uuid])
    create index(:insights, [:brokerage_id])
    create unique_index(:insights, [:uuid])
  end
end
