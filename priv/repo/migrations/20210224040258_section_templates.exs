defmodule Excyte.Repo.Migrations.SectionTemplates do
  use Ecto.Migration

  def change do
    create table(:section_templates) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :document_template_id, references(:document_templates)
      add :is_excyte_made, :boolean, default: false
      add :component_name, :string
      add :component_data_types, :jsonb, default: "[]"
      add :name, :string, null: false
      add :html_content, :text
      add :is_editable, :boolean, default: false
      add :is_shared, :boolean, default: false
      add :is_public, :boolean, default: false
      add :position, :integer
      add :grouping, :string

      timestamps()
    end

    create index(:section_templates, [:created_by_id])
    create index(:section_templates, [:brokerage_id])
  end
end
