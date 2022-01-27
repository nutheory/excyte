defmodule Excyte.Repo.Migrations.CreateUsersAuthTables do
  use Ecto.Migration

  def change do
    execute "CREATE EXTENSION IF NOT EXISTS citext", ""
    execute "CREATE EXTENSION IF NOT EXISTS pg_trgm", ""
    execute "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch", ""

    create table(:users) do
      add :account_id, references(:accounts, on_delete: :delete_all)
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :invited_by_id, references(:users)
      add :full_name, :string
      add :email, :citext
      add :timezone, :string, default: "America/Los_Angeles"
      add :invite_message, :text
      add :brokerage_role, :string, default: nil
      add :excyte_role, :string, default: "user"
      add :current_mls, :map, default: %{}
      add :current_avatar, :text
      add :completed_setup, :boolean, default: false
      add :contact_settings, :map, default: %{}
      add :hashed_password, :string
      add :confirmed_at, :utc_datetime
      add :last_sign_in_at, :utc_datetime
      timestamps()
    end

    create index(:users, [:account_id])
    create index(:users, [:brokerage_id])
    create unique_index(:users, [:email])

    create table(:users_tokens) do
      add :user_id, references(:users, on_delete: :delete_all)
      add :token, :binary
      add :context, :string
      add :sent_to, :string
      timestamps(updated_at: false)
    end

    create index(:users_tokens, [:user_id])
    create unique_index(:users_tokens, [:context, :token])
  end
end
