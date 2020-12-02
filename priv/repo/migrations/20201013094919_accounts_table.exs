defmodule Excyte.Repo.Migrations.AccountsTable do
  use Ecto.Migration

  def change do
    create table(:accounts) do
      add :source_customer_id, :string
      add :source_subscription_id, :string
      add :source_plan_id, :string
      add :payment_method_id, :string
      add :amount, :integer
      add :status, :string, default: "new"
      timestamps()
    end

    create index(:accounts, [:source_customer_id])
  end
end
