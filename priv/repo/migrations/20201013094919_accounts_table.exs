defmodule Excyte.Repo.Migrations.AccountsTable do
  use Ecto.Migration

  def change do
    create table(:accounts) do
      add :source_customer_id, :string
      add :source_subscription_id, :string
      add :source_subscription_item_id, :string
      add :source_plan_id, :string
      add :payment_method_id, :string
      add :agent_limit, :integer, default: 0
      add :current_period_end, :utc_datetime
      add :amount, :integer
      add :status, :string, default: "new"
      add :status_reason, :text
      add :latest_invoice_id, :string
      add :deleted_at, :utc_datetime
      timestamps()
    end

    create index(:accounts, [:source_customer_id])
    create index(:accounts, [:source_subscription_id])
  end
end
