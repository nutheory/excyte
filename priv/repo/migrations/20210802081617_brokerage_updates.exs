defmodule Excyte.Repo.Migrations.BrokerageUpdates do
  use Ecto.Migration

  def change do
    alter table(:users) do
      modify :brokerage_role, :string, default: nil
    end

    alter table(:accounts) do
      add :source_subscription_item_id, :string
    end
  end
end
