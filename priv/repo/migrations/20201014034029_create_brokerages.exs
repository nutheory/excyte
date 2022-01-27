defmodule Excyte.Repo.Migrations.Brokerages do
  use Ecto.Migration

  def change do
    create table(:brokerages) do
      add :account_id, references(:accounts, on_delete: :delete_all)
      add :name, :string
      add :contact_settings, :map, default: %{}
      add :legal_link, :text
      add :legal_text, :text
      timestamps()
    end

    create index(:brokerages, [:account_id])
  end
end
