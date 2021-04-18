defmodule Excyte.Brokerages.Brokerage do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.Account,
    Accounts.User,
    Utils.MapType,
  }

  @timestamps_opts [type: :utc_datetime]

  schema "brokerages" do
    field :owner_id, :integer
    field :name, :string
    field :office_broker_key, :string
    field :office_key, :string
    field :agent_limit, :integer
    field :contact_settings, MapType
    field :legal_link, :string
    field :legal_text, :string
    belongs_to(:account, Account)
    timestamps()
  end

  def changeset(agent, attrs) do
    agent
    |> cast(attrs, [
      :name,
      :contact_settings,
      :account_id,
      :owner_id,
      :office_broker_key,
      :office_key,
      :agent_limit,
      :legal_link,
      :legal_text
    ])
  end

  def registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [:name, :contact_settings, :account_id])
    |> validate_required([:name, :contact_settings, :account_id])
  end
end
