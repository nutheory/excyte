defmodule Excyte.Repo.Migrations.AccountUpdates do
  use Ecto.Migration

  def change do
    alter table(:users) do
      remove :current_account_status
    end

    alter table(:brokerages) do
      remove :agent_limit
    end

    alter table(:accounts) do
      add :agent_limit, :integer, default: 0
      add :current_period_end, :utc_datetime
    end
  end
end
