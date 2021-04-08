defmodule Excyte.Brokerages.Brokerage do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.Account,
    Accounts.User
  }

  schema "brokerages" do
    field :owner_id, :integer
    field :name, :string
    field :agent_limit, :integer
    field :contact_settings, {:array, :map}
    field :legal_link, :string
    field :legal_text, :string
    belongs_to(:account, Account)
    timestamps()
  end

  def registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [:name, :owner_id, :contact_settings, :account_id])
    |> validate_required([:name, :owner_id, :contact_settings, :account_id])
  end
end
