defmodule Excyte.Repo.Migrations.CreateConversations do
  use Ecto.Migration

  def change do
    create table(:conversations) do
      add :conversation_sid, :string, null: false
      add :sms_participant_sid, :string
      add :chat_service_sid, :string
      add :friendly_name, :string
      add :last_message, :string
      add :agent_id, references(:users)
      add :client_id, references(:clients)
      add :brokerage_id, references(:brokerages)
      add :insight_id, references(:insights, on_delete: :delete_all)
      timestamps()
    end

    create(index(:conversations, [:conversation_sid]))
    create(index(:conversations, [:agent_id]))
    create(index(:conversations, [:brokerage_id]))

    create(
      unique_index(:conversations, [:agent_id, :conversation_sid],
        name: :agent_id_conversation_sid_unique_index
      )
    )
  end
end
