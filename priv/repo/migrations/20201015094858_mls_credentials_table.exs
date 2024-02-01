defmodule Excyte.Repo.Migrations.MlsCredentialsTable do
  use Ecto.Migration

  def change do
    create table(:mls_credentials) do
      add :agent_id, references(:users, on_delete: :delete_all)
      add :sub, :string
      add :agent_name, :string
      add :mls_name, :string
      add :email, :citext
      add :default, :boolean, default: false
      add :mls_id, :string
      add :zone_info, :string
      add :username, :string
      add :dataset_id, :string
      add :member_key, :string
      add :office_key, :string
      add :id_token, :text
      add :refresh_token, :text
      add :access_token, :text
      add :browser_token, :text
      add :client_id, :text
      add :client_secret, :text
      add :expires_in, :integer
      timestamps()
    end
  end
end
