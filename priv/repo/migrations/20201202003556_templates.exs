defmodule Excyte.Repo.Migrations.Templates do
  use Ecto.Migration

  def change do
    create table(:templates) do
      add :created_by_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :default, :boolean, default: false
      add :name, :string, null: false
      add :description, :string
      add :type, :string
      add :is_public, :boolean, default: false
      timestamps()
    end

    create index(:templates, [:created_by_id])
    create index(:templates, [:brokerage_id])
  end
end
