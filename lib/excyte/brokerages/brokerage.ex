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
    field :name, :string
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
