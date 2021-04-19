defmodule Excyte.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query


  alias Excyte.{
    Accounts.Account,
    Accounts.User,
    Agents.Profile,
    Brokerages.Brokerage,
    Mls.Credential,
    Utils.MapType,
    Repo
  }

  @derive {Inspect, except: [:password]}
  @timestamps_opts [type: :utc_datetime]

  schema "users" do
    field :full_name, :string
    field :email, :string
    field :timezone, :string
    field :invite_message, :string
    field :brokerage_role, :string
    field :excyte_role, :string
    field :password, :string, virtual: true
    field :current_account_status, :string
    field :contact_settings, MapType
    field :current_mls, MapType
    field :current_avatar, :string
    field :hashed_password, :string
    field :completed_setup, :boolean
    field :confirmed_at, :utc_datetime
    belongs_to(:account, Account)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:invited_by, User)
    has_many(:mls_credentials, Credential)
    has_many(:profiles, Profile)
    timestamps()
  end

  @doc """
  A user changeset for registration.

  It is important to validate the length of both email and password.
  Otherwise databases may truncate the email without warnings, which
  could lead to unpredictable or insecure behaviour. Long passwords may
  also be very expensive to hash for certain algorithms.
  """
  def update_changeset(user, attrs) do
    user
    |> cast(attrs, [
      :current_mls,
      :current_avatar,
      :current_account_status,
      :completed_setup
    ])
  end

  def client_registration_changeset(user, attrs) do
    user
    |> cast(attrs, [:full_name, :email, :password])
    |> validate_required([:full_name])
    |> validate_email()
    |> validate_password()
    |> put_change(:excyte_role, "client")
  end

  def invitation_changeset(user, attrs) do
    user
    |> cast(attrs, [
      :full_name,
      :email,
      :account_id,
      :invite_message,
      :brokerage_role,
      :brokerage_id,
      :invited_by_id
    ])
    |> validate_required([
      :full_name,
      :invite_message,
      :account_id,
      :brokerage_role,
      :brokerage_id,
      :invited_by_id
    ])
    |> validate_email()
  end

  def validate_email(changeset) do
    changeset
    |> validate_required([:email])
    |> validate_format(:email, ~r/^[^\s]+@[^\s]+$/, message: "must have the @ sign and no spaces")
    |> validate_length(:email, max: 160)
    |> unsafe_validate_unique(:email, Excyte.Repo)
    |> unique_constraint(:email)
  end

  def validate_password(changeset) do
    changeset
    |> validate_required([:password])
    |> validate_length(:password, min: 8, max: 26)
    |> validate_format(:password, ~r/[a-z]/, message: "at least one lower case character")
    |> validate_format(:password, ~r/[A-Z]/, message: "at least one upper case character")
    |> validate_format(:password, ~r/[!?@#$%^&*_0-9]/,
      message: "at least one digit or punctuation character"
    )
    |> prepare_changes(&hash_password/1)
  end

  defp hash_password(changeset) do
    password = get_change(changeset, :password)

    changeset
    |> put_change(:hashed_password, Bcrypt.hash_pwd_salt(password))
    |> delete_change(:password)
  end

  @doc """
  A user changeset for changing the email.

  It requires the email to change otherwise an error is added.
  """
  def email_changeset(user, attrs) do
    user
    |> cast(attrs, [:email])
    |> validate_email()
    |> case do
      %{changes: %{email: _}} = changeset -> changeset
      %{} = changeset -> add_error(changeset, :email, "did not change")
    end
  end

  @doc """
  A user changeset for changing the password.
  """
  def password_changeset(user, attrs) do
    user
    |> cast(attrs, [:password])
    |> validate_confirmation(:password, message: "does not match password")
    |> validate_password()
  end

  @doc """
  Confirms the account by setting `confirmed_at`.
  """
  def confirm_changeset(user) do
    now = DateTime.utc_now() |> DateTime.truncate(:second)
    change(user, confirmed_at: now)
  end

  def accept_invitation_changeset(user, attrs) do
    now = DateTime.utc_now() |> DateTime.truncate(:second)
    user
    |> cast(attrs, [:full_name, :email, :password])
    |> validate_required([:full_name])
    |> validate_email()
    |> validate_password()
    change(user, confirmed_at: now)
  end

  @doc """
  Verifies the password.

  If there is no user or the user doesn't have a password, we call
  `Bcrypt.no_user_verify/0` to avoid timing attacks.
  """
  def valid_password?(%Excyte.Accounts.User{hashed_password: hashed_password}, password)
      when is_binary(hashed_password) and byte_size(password) > 0 do
    Bcrypt.verify_pass(password, hashed_password)
  end

  def valid_password?(_, _) do
    Bcrypt.no_user_verify()
    false
  end

  @doc """
  Validates the current password otherwise adds an error to the changeset.
  """
  def validate_current_password(changeset, password) do
    if valid_password?(changeset.data, password) do
      changeset
    else
      add_error(changeset, :current_password, "is not valid")
    end
  end

  def with_mls(query) do
    from [_, user] in query,
    join: cred in Credential,
    on: cred.user_id == user.id,
    preload: [user: {user, [mls_credentials: cred]}]
  end

  def with_account(query) do
    from [_, user] in query,
    join: acc in Account,
    on: acc.id == user.account_id,
    preload: [user: {user, [account: acc]}]
  end

  def with_default_profile(query) do
    from [_, user] in query,
    join: p in Profile,
    on: p.agent_id == user.id and p.default == true,
    preload: [user: {user, [profiles: p]}]
  end

  def minimal_token_return(query) do
    from [t, user, acc, p] in query,
    select: map(t, [
      :id,
      :token,
      :user_id,
      user: [
        :id,
        :agent_id,
        :brokerage_id,
        :completed_setup,
        :full_name,
        mls_credentials: [:mls_name, :dataset_id, :member_key, :agent_name, :username, :zone_info, :id],
        profiles: [:id, :photo_url, :name],
        account: [:id, :status]
      ]
    ])
    # query
  end
end
