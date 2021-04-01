defmodule Excyte.Repo.Migrations.DocumentTemplates do
  use Ecto.Migration

  def change do
    create table(:document_templates) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :template_id, references(:templates, on_delete: :nothing)
      add :document_id, references(:documents, on_delete: :nothing)
      add :default, :boolean, default: false
      timestamps()
    end

    create index(:document_templates, [:document_id])
    create index(:document_templates, [:template_id])
    create index(:document_templates, [:created_by_id])
    create index(:document_templates, [:brokerage_id])
  end
end
