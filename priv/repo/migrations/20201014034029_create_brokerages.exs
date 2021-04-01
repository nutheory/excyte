defmodule Excyte.Repo.Migrations.Brokerages do
  use Ecto.Migration

  def change do
    create table(:brokerages) do
      add :account_id, references(:accounts)
      add :owner_id, :integer
      add :name, :string
      add :phone, :string
      add :logo_url, :text
      add :intro_video_url, :text
      add :tagline, :text
      add :description, :text
      add :agent_limit, :integer
      add :contacts, :jsonb, default: "[]"
      add :legal_link, :text
      add :legal_text, :text
      timestamps()
    end

    create index(:brokerages, [:account_id])
  end
end
