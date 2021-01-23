defmodule Excyte.Repo.Migrations.CreateUsersAuthTables do
  use Ecto.Migration

  def change do
    execute "CREATE EXTENSION IF NOT EXISTS citext", ""

    create table(:users) do
      add :account_id, references(:accounts, on_delete: :delete_all)
      add :brokerage_id, references(:teams)
      add :agent_id, references(:users)
      add :full_name, :string, null: false
      add :email, :citext, null: false
      add :timezone, :string, default: "America/Los_Angeles"
      add :can_manage_team, :boolean, default: false
      add :excyte_role, :string
      add :system_role, :string, default: "user"
      add :current_mls, :map, default: %{}
      add :current_avatar, :text
      add :current_account_status, :string, default: "new"
      add :completed_setup, :boolean, default: false
      add :hashed_password, :string, null: false
      add :confirmed_at, :naive_datetime
      add :last_sign_in_at, :naive_datetime
      timestamps()
    end

    create unique_index(:users, [:email])

    create table(:users_tokens) do
      add :user_id, references(:users, on_delete: :delete_all), null: false
      add :token, :binary, null: false
      add :context, :string, null: false
      add :sent_to, :string
      timestamps(updated_at: false)
    end

    create index(:users_tokens, [:user_id])
    create unique_index(:users_tokens, [:context, :token])
  end
end
