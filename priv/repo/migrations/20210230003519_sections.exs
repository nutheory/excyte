defmodule Excyte.Repo.Migrations.Sections do
  use Ecto.Migration

  def change do
    create table(:sections) do
      add :created_by_id, references(:users)
      add :insight_id, references(:insights)
      add :section_template_id, references(:section_templates)
      add :foreign_id, :string
      add :name, :string, null: false
      add :html_content, :text
      add :position, :integer

      timestamps()
    end

    create index(:sections, [:created_by_id])
    create index(:sections, [:insight_id])
  end
end
