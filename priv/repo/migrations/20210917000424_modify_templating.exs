defmodule Excyte.Repo.Migrations.ModifyTemplating do
  use Ecto.Migration

  def change do
    alter table(:section_templates) do
      add :enabled, :boolean, default: true
      add :content, :map, default: %{}
    end

    alter table(:sections) do
      add :enabled, :boolean, default: true
      add :component_name, :string
      add :content, :map, default: %{}
    end
  end
end
