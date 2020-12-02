defmodule Excyte.Repo.Migrations.ErrorsTable do
  use Ecto.Migration

  def change do
    create table(:logs) do
      add :user_id, :integer
      add :severity, :integer
      add :source, :string
      add :location, :string
      add :note, :text
      add :type, :string
      add :fixed, :boolean, default: false
      add :error, :jsonb, default: "[]"
      timestamps()
    end
  end
end
