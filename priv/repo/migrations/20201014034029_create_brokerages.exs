defmodule Excyte.Repo.Migrations.Brokerages do
  use Ecto.Migration

  def change do
    create table(:brokerages) do
      add :account_id, references(:accounts)
      add :owner_id, :integer
      add :name, :string
      add :agent_limit, :integer
      add :contact_settings, :map, default: %{}
      add :legal_link, :text
      add :legal_text, :text
      timestamps()
    end

    create index(:brokerages, [:account_id])
  end
end
