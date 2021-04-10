defmodule Excyte.Mls.Credential do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.Accounts.{User}

  schema "mls_credentials" do
    field :sub, :string
    field :agent_name, :string
    field :mls_name, :string
    field :email, :string
    field :mls_id, :string
    field :member_key, :string
    field :office_key, :string
    field :dataset_id, :string
    field :zone_info, :string
    field :username, :string
    field :id_token, :string
    field :refresh_token, :string
    field :access_token, :string
    field :default, :boolean
    field :expires_in, :integer
    belongs_to(:agent, User)
    timestamps()
  end

  def authorization_changeset(credential, attrs) do
    credential
    |> cast(attrs, [
      :agent_id,
      :sub,
      :agent_name,
      :mls_name,
      :email,
      :mls_id,
      :member_key,
      :office_key,
      :dataset_id,
      :zone_info,
      :username,
      :id_token,
      :refresh_token,
      :access_token,
      :default,
      :expires_in
    ])
    |> validate_required([
      :agent_id,
      :mls_id,
      :id_token,
      :member_key,
      :dataset_id,
      :refresh_token,
      :access_token
    ])
  end
end
