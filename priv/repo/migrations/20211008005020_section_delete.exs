defmodule Excyte.Repo.Migrations.SectionDelete do
  use Ecto.Migration

  def change do
    alter table(:sections) do
      # add :enabled, :boolean, default: true
      # add :content, :map, default: %{}
      # add :component_name, :string
      # modify :insight_id, references(:insights, on_delete: :delete_all), from: references(:insights)
    end
  end
end
