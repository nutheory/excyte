defmodule Excyte.Repo.Migrations.ProfilesTable do
  use Ecto.Migration

  def change do
    create table(:profiles) do
      add :agent_id, references(:users)
      add :brokerage_id, references(:teams)
      add :default, :boolean, default: false
      add :photo_url, :text
      add :intro_video_url, :text
      add :bio, :text
      add :name, :string
      add :company, :string
      add :tagline, :string
      timestamps()
    end

    create index(:profiles, [:agent_id])
  end
end
