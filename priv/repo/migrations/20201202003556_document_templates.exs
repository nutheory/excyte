defmodule Excyte.Repo.Migrations.DocumentTemplates do
  use Ecto.Migration

  def change do
    create table(:document_templates) do
      add :created_by_id, references(:users, on_delete: :delete_all)
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :attributes, :map, default: %{}
      add :type_default, :boolean, default: false
      add :is_excyte_made, :boolean, default: false
      add :insight_type, :string
      add :name, :string
      add :is_auto_template, :boolean, default: false
      add :is_shared, :boolean, default: false
      add :is_public, :boolean, default: false
      timestamps()
    end

    create index(:document_templates, [:created_by_id])
    create index(:document_templates, [:brokerage_id])
  end
end
