defmodule Excyte.Repo.Migrations.Sections do
  use Ecto.Migration

  def change do
    create table(:sections) do
      add :created_by_id, references(:users, on_delete: :nilify_all)
      add :insight_id, references(:insights, on_delete: :delete_all)
      add :section_template_id, references(:section_templates, on_delete: :delete_all)
      add :enabled, :boolean, default: true
      add :content, :map, default: %{}
      add :component_name, :string
      add :foreign_id, :string
      add :name, :string
      add :description, :text
      add :html_content, :text
      add :type, :string
      add :position, :integer

      timestamps()
    end

    create index(:sections, [:created_by_id])
    create index(:sections, [:insight_id])
  end
end
