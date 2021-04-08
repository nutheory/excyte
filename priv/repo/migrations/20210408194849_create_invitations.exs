defmodule Excyte.Repo.Migrations.Invitations do
  @moduledoc """
    Invitations Table
  """
  use Ecto.Migration

  def change do
    create table(:invitations) do
      add(:requested_by_id, references(:users, on_delete: :nothing), null: false)
      add(:brokerage_id, references(:brokerages, on_delete: :nothing))
      add(:email, :string, null: false)
      add(:phone, :string)
      add(:full_name, :string)
      add(:status, :string)
      add(:message, :text)
      add(:used, :utc_datetime)
      add(:token, :text, null: false)
      timestamps()
    end

    create index(:invitations, [:brokerage_id])
    create index(:invitations, [:requested_by_id])
    create index(:invitations, [:token])
    create unique_index(:invitations, [:brokerage_id, :token])
  end
end
