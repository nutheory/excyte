defmodule Excyte.Clients.Conversation do
  @moduledoc """
   Client conversation DB schema
  """
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Clients.Client,
    Insights.Insight
  }

  @timestamps_opts [type: :utc_datetime]

  schema "conversations" do
    field(:friendly_name, :string)
    field(:conversation_sid, :string)
    field(:sms_participant_sid, :string)
    field(:chat_service_sid, :string)
    belongs_to(:insight, Insight)
    belongs_to(:client, Client)
    belongs_to(:agent, User)
    belongs_to(:brokerage, Brokerage)
    timestamps()
  end

  def changeset(convo, attrs) do
    convo
    |> cast(attrs, [
      :client_id,
      :friendly_name,
      :agent_id,
      :conversation_sid,
      :chat_service_sid,
      :sms_participant_sid,
      :brokerage_id,
      :insight_id
    ])
    |> validate_required([
      :insight_id,
      :client_id,
      :chat_service_sid,
      :sms_participant_sid,
      :conversation_sid
    ])
  end
end
