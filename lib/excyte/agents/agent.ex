defmodule Excyte.Agents.Agent do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Mls.Credential,
    Accounts.Account,
    Accounts.User,
    Repo
  }

  schema "users" do
    field :full_name, :string
    field :email, :string
    field :excyte_role, :string
    field :password, :string, virtual: true
    field :hashed_password, :string
    field :completed_setup, :boolean
    field :confirmed_at, :naive_datetime
    belongs_to(:account, Account)
    has_many(:mls_credentials, Credential)
    timestamps()
  end

  def pre_register(agent, attrs) do
    agent
    |> cast(attrs, [:full_name, :email, :password])
    |> validate_required([:full_name])
    |> User.validate_email()
    |> User.validate_password()
  end

  def registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [:full_name, :email, :password, :account_id])
    |> validate_required([:full_name])
    |> User.validate_email()
    |> User.validate_password()
  end
end
