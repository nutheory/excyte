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
    field :phone, :string
    field :logo_url, :string
    field :intro_video_url, :string
    field :tagline, :string
    field :description, :string
    field :agent_limit, :integer
    field :contacts, {:array, :map}
    field :legal_link, :string
    field :legal_text, :string
    belongs_to(:account, Account)
    timestamps()
  end
end
