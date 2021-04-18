defmodule Excyte.Agents.Agent do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Mls.Credential,
    Accounts.Account,
    Accounts.User,
    Repo
  }

  @timestamps_opts [type: :utc_datetime]

  schema "users" do
    field :full_name, :string
    field :email, :string
    field :brokerage_name, :string, virtual: true
    field :phone, :string, virtual: true
    field :password, :string, virtual: true
    field :hashed_password, :string
    field :completed_setup, :boolean
    field :confirmed_at, :utc_datetime
    belongs_to(:account, Account)
    has_many(:mls_credentials, Credential)
    timestamps()
  end

  def pre_register_agent(agent, attrs) do
    agent
    |> cast(attrs, [:full_name, :email, :password])
    |> validate_required([:full_name])
    |> User.validate_email()
    |> User.validate_password()
  end

  def pre_register_brokerage(agent, attrs) do
    agent
    |> cast(attrs, [:full_name, :email, :phone, :brokerage_name, :password])
    |> validate_required([:full_name, :phone, :brokerage_name])
    |> validate_format(:phone, ~r/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message: "Phone number not valid")
    |> User.validate_email()
    |> User.validate_password()
  end

  def registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [:full_name, :email, :password, :account_id])
    |> validate_required([:full_name, :account_id])
    |> User.validate_email()
    |> User.validate_password()
  end

  def brokerage_registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [
      :full_name,
      :email,
      :password,
      :account_id,
      :brokerage_id
    ])
    |> validate_required([:full_name, :email, :account_id, :brokerage_id])
    |> put_change(:brokerage_role, "owner")
    |> User.validate_email()
    |> User.validate_password()
  end
end
