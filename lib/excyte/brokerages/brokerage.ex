defmodule Excyte.Brokerages.Brokerage do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.Account,
    Accounts.User
  }

  schema "teams" do
    belongs_to(:account, Account)
    has_one(:owner, User)
    has_many(:agents, User)
  end


end
