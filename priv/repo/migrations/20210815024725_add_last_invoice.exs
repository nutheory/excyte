defmodule Excyte.Repo.Migrations.AddLastInvoice do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add :latest_invoice_id, :string
    end

    create index(:accounts, [:source_subscription_id])
  end
end
