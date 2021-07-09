defmodule Excyte.Repo.Migrations.CreateAssets do
  use Ecto.Migration

  def change do
    create table(:assets) do
      add :uploaded_by_id, references(:users)
      add :brokerage_id, references(:brokerages)
      add :uuid, :string
      add :title, :string
      add :description, :text
      add :original_name, :string
      add :content_type, :string
      add :type, :string
      add :source, :string
      add :status, :string
      add :thumb_url, :text
      add :large_url, :text
      add :video_url, :text
      add :raw_url, :text
      add :size, :integer
      add :stream_id, :string
      add :source_id, :string
      add :last_used, :utc_datetime
      add :is_shared, :boolean, default: false
      add :content, :map, default: %{}
      timestamps()
    end
    create index(:assets, [:uploaded_by_id])
    create index(:assets, [:brokerage_id])
    create index(:assets, [:uuid])
  end
end
