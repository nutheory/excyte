defmodule Excyte.Repo.Migrations.Brokerages do
  use Ecto.Migration

  def change do
    create table(:brokerages) do
      add :account_id, references(:accounts)
      add :name, :string
      add :agent_limit, :integer, default: 0
      add :contact_settings, :map, default: %{}
      add :legal_link, :text
      add :legal_text, :text
      timestamps()
    end

    create index(:brokerages, [:account_id])
  end
end
