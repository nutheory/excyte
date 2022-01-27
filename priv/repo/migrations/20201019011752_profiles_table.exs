defmodule Excyte.Repo.Migrations.ProfilesTable do
  use Ecto.Migration

  def change do
    create table(:profiles) do
      add :agent_id, references(:users, on_delete: :delete_all)
      add :brokerage_id, references(:brokerages, on_delete: :delete_all)
      add :photo_url, :text
      add :logo_url, :text
      add :intro_video_url, :text
      add :bio, :text
      add :name, :string
      add :slug, :string
      add :company_name, :string
      add :description, :text
      add :job_title, :string
      add :tagline, :string
      add :urls, :jsonb, default: "[]"
      add :contact_items, :jsonb, default: "[]"
      add :address_items, :jsonb, default: "[]"
      add :theme_settings, :map, default: %{}
      add :updated_by_user, :boolean, default: false
      timestamps()
    end

    create index(:profiles, [:brokerage_id])
    create index(:profiles, [:agent_id])
  end
end
