defmodule Excyte.Repo.Migrations.InsightUpdates do
  use Ecto.Migration

  def change do
    alter table(:properties) do
      modify :insight_id, references(:insights, on_delete: :delete_all), from: references(:insights)
    end
  end
end
