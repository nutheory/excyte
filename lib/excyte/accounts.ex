defmodule Excyte.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo
  alias Excyte.Accounts.{Account, User, UserToken}
  alias Excyte.{Agents, Agents.Agent, Brokerages, Brokerages.Brokerage, EmailNotifiers}

  alias Stripe.Customer

  @topic inspect(__MODULE__)

  @default_theme %{
    font: "Arial, Helvetica Neue, Helvetica, sans-serif",
    background: "rgba(255, 255, 255, 1)",
    header_text: "rgba(71, 85, 105, 1)",
    sub_header_text: "rgba(183, 183, 183, 1)",
    accent: "#0E7490",
    link: "#0E7490",
    brokerage_default: false
  }

  def subscribe(id) do
    Phoenix.PubSub.subscribe(Excyte.PubSub, @topic <> "#{id}")
  end

  ## Database getters

  @doc """
  Gets a user by email.

  ## Examples

      iex> get_user_by_email("foo@example.com")
      %User{}

      iex> get_user_by_email("unknown@example.com")
      nil

  """
  def get_user_by_email(email) when is_binary(email) do
    Repo.get_by(User, email: email)
  end

  @doc """
  Gets a user by email and password.

  ## Examples

      iex> get_user_by_email_and_password("foo@example.com", "correct_password")
      %User{}

      iex> get_user_by_email_and_password("foo@example.com", "invalid_password")
      nil

  """
  def get_user_by_email_and_password(email, password)
      when is_binary(email) and is_binary(password) do
    user = Repo.get_by(User, email: email)
    if User.valid_password?(user, password), do: user
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(User, id)

  def get_account!(id), do: Repo.get!(Account, id)

  ## User registration

  @doc """
  Registers a user.

  ## Examples

      iex> register_user(%{field: value})
      {:ok, %User{}}

      iex> register_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """

  def register_brokerage(attrs) do
    Multi.new()
    |> Multi.run(:whitelist_check, __MODULE__, :staging_whitelist_check, [attrs])
    |> Multi.run(:pre_check, __MODULE__, :change_brokerage_registration, [attrs])
    |> Multi.run(:account, __MODULE__, :create_account, [attrs])
    |> Multi.run(:brokerage, __MODULE__, :create_brokerage, [attrs])
    |> Multi.run(:agent, __MODULE__, :create_brokerage_owner, [attrs])
    |> Multi.run(:agent_profile, __MODULE__, :create_agent_profile, [attrs])
    |> Multi.run(:brokerage_profile, __MODULE__, :create_brokerage_profile, [attrs])
    |> Repo.transaction()
    |> case do
      {:ok, %{agent: agent, account: account}} -> {:ok, %{agent: agent, account: account}}
      {:error, _method, changeset, _} -> {:error, changeset}
    end
  end

  def generate_login_token(user) do
    {encoded_token, user_token} = UserToken.build_email_token(user, "login")
    Repo.insert!(user_token)
    {:ok, encoded_token}
  end

  # def register_brokerage_agent(attrs) do
  #   Multi.new()
  #   |> Multi.run(:pre_check, __MODULE__, :change_agent_registration, [attrs])
  #   |> Multi.run(:agent, __MODULE__, :create_brokerage_agent, [attrs])
  #   |> Multi.run(:agent_profile, __MODULE__, :create_agent_profile, [attrs])
  #   |> Repo.transaction()
  #   |> case do
  #     {:ok, %{agent: agent}} -> {:ok, agent}
  #     {:error, _method, changeset, _} -> {:error, changeset}
  #   end
  # end

  def register_agent(attrs) do
    Multi.new()
    |> Multi.run(:whitelist_check, __MODULE__, :staging_whitelist_check, [attrs])
    |> Multi.run(:pre_check, __MODULE__, :change_agent_registration, [attrs])
    |> Multi.run(:account, __MODULE__, :create_account, [attrs])
    |> Multi.run(:agent, __MODULE__, :create_agent, [attrs])
    |> Multi.run(:agent_profile, __MODULE__, :create_agent_profile, [attrs])
    |> Repo.transaction()
    |> case do
      {:ok, %{agent: agent, account: account}} -> {:ok, %{agent: agent, account: account}}
      {:error, _method, changeset, _} -> {:error, changeset}
    end
  end

  def staging_whitelist_check(_repo, _changes, attrs \\ %{}) do
    wl = Application.get_env(:excyte, :whitelist)
    if Enum.member?(wl, attrs.email), do: {:ok, %{}}, else: {:error, %{message: "Not whitelisted"}}
  end

  def create_brokerage(_repo, %{account: acc}, attrs) do
    %Brokerage{}
    |> Brokerage.registration_changeset(Map.merge(attrs, %{
      account_id: acc.id,
      name: attrs.brokerage_name,
      contact_settings: %{
        point_of_contact: %{
          name: attrs.full_name,
          email: attrs.email,
          phone_number: attrs.phone
        },
        send_text_alerts: true
      }
    }))
    |> Repo.insert()
  end

  def create_brokerage_owner(_repo, %{brokerage: bk, account: acc}, attrs) do
    %User{}
    |> Agent.brokerage_registration_changeset(Map.merge(attrs, %{
      brokerage_id: bk.id,
      account_id: acc.id
    }))
    |> Repo.insert()
  end

  def get_account_with_brokerage_agents(%{brokerage: bk, account: acc}) do
    if bk do
      Repo.get!(Account, acc)
      |> Repo.preload(:users)
    end
  end

  # def create_brokerage_agent(_repo, _changes, %{brokerage_id: bkid, account_id: accid} = attrs) do
  #   %User{}
  #   |> Agent.registration_changeset(Map.merge(attrs, %{
  #     brokerage_id: bkid,
  #     account_id: accid
  #   }))
  #   |> Repo.insert()
  # end

  def create_agent(_repo, %{account: acc}, attrs) do
    %User{}
    |> Agent.registration_changeset(Map.put(attrs, :account_id, acc.id))
    |> Repo.insert()
  end

  def create_agent_profile(_repo, %{agent: agent}, attrs) do
    %Agents.Profile{}
    |> Agents.Profile.registration_changeset(Map.merge(attrs, %{
      agent_id: agent.id,
      name: attrs.full_name,
      theme_settings: @default_theme,
      contacts: [%{content: attrs.email, name: "Email", type: "email"}]
    }))
    |> Repo.insert()
  end

  def create_brokerage_profile(_repo, %{brokerage: bk}, attrs) do
    %Brokerages.Profile{}
    |> Brokerages.Profile.registration_changeset(Map.merge(attrs, %{
      brokerage_id: bk.id,
      company_name: attrs.brokerage_name,
      theme_settings: @default_theme,
      contacts: [%{content: attrs.email, name: "Email", type: "email"}]
    }))
    |> Repo.insert()
  end

  def create_account(_repo, _changes, attrs) do
    case create_stripe_customer(attrs) do
      {:ok, customer} ->
        %Account{}
        |> Account.registration_changeset(Map.put(attrs, :source_customer_id, customer.id))
        |> Repo.insert()
      err ->
        {:error, err}
    end
  end

  def update_account_details(acc_id, attrs) do
    Repo.get!(Account, acc_id)
    |> Account.update_changeset(attrs)
    |> Repo.update()
    |> notify_subscribers([:account, :updated])
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user_registration(user)
      %Ecto.Changeset{data: %User{}}

  """
  def change_agent_registration(_repo, _changes, attrs \\ %{}) do
    reg = Agent.pre_register_agent(%Agent{}, attrs)

    if reg.valid? do
      {:ok, reg}
    else
      {:error, Map.put(reg, :action, :insert)}
    end
  end

  def change_brokerage_registration(_repo, _changes, attrs \\ %{}) do
    reg = Agent.pre_register_brokerage(%Agent{}, attrs)

    if reg.valid? do
      {:ok, reg}
    else
      {:error, Map.put(reg, :action, :insert)}
    end
  end

  def update_user(uid, attrs \\ %{}) do
    Repo.get!(User, uid)
    |> User.update_changeset(attrs)
    |> Repo.update()
    |> notify_subscribers([:user, :updated])
  end

  ## Settings

  @doc """
  Returns an `%Ecto.Changeset{}` for changing the user email.

  ## Examples

      iex> change_user_email(user)
      %Ecto.Changeset{data: %User{}}

  """
  def change_user_email(user, attrs \\ %{}) do
    User.email_changeset(user, attrs)
  end

  @doc """
  Emulates that the email will change without actually changing
  it in the database.

  ## Examples

      iex> apply_user_email(user, "valid password", %{email: ...})
      {:ok, %User{}}

      iex> apply_user_email(user, "invalid password", %{email: ...})
      {:error, %Ecto.Changeset{}}

  """
  def apply_user_email(user, password, attrs) do
    user
    |> User.email_changeset(attrs)
    |> User.validate_current_password(password)
    |> Ecto.Changeset.apply_action(:update)
  end

  @doc """
  Updates the user email using the given token.

  If the token matches, the user email is updated and the token is deleted.
  The confirmed_at date is also updated to the current time.
  """
  def update_user_email(user, token) do
    context = "change:#{user.email}"

    with {:ok, query} <- UserToken.verify_change_email_token_query(token, context),
         %UserToken{sent_to: email} <- Repo.one(query),
         {:ok, _} <- Repo.transaction(user_email_multi(user, email, context)) do
      :ok
    else
      _ -> :error
    end
  end

  defp user_email_multi(user, email, context) do
    changeset = user |> User.email_changeset(%{email: email}) |> User.confirm_changeset()

    Multi.new()
    |> Multi.update(:user, changeset)
    |> Multi.delete_all(:tokens, UserToken.user_and_contexts_query(user, [context]))
  end

  @doc """
  Delivers the update email instructions to the given user.

  ## Examples

      iex> deliver_update_email_instructions(user, current_email, &Routes.user_update_email_url(conn, :edit, &1))
      {:ok, %{to: ..., body: ...}}

  """
  def deliver_update_email_instructions(%User{} = user, current_email, update_email_url_fun)
      when is_function(update_email_url_fun, 1) do
    {encoded_token, user_token} = UserToken.build_email_token(user, "change:#{current_email}")

    Repo.insert!(user_token)
    EmailNotifiers.deliver_update_email_instructions(user, update_email_url_fun.(encoded_token))
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for changing the user password.

  ## Examples

      iex> change_user_password(user)
      %Ecto.Changeset{data: %User{}}

  """
  def change_user_password(user, attrs \\ %{}) do
    User.password_changeset(user, attrs)
  end

  @doc """
  Updates the user password.

  ## Examples

      iex> update_user_password(user, "valid password", %{password: ...})
      {:ok, %User{}}

      iex> update_user_password(user, "invalid password", %{password: ...})
      {:error, %Ecto.Changeset{}}

  """
  def update_user_password(user, password, attrs) do
    changeset =
      user
      |> User.password_changeset(attrs)
      |> User.validate_current_password(password)

    Multi.new()
    |> Multi.update(:user, changeset)
    |> Multi.delete_all(:tokens, UserToken.user_and_contexts_query(user, :all))
    |> Repo.transaction()
    |> case do
      {:ok, %{user: user}} -> {:ok, user}
      {:error, :user, changeset, _} -> {:error, changeset}
    end
  end

  ## Session

  @doc """
  Generates a session token.
  """
  def generate_user_session_token(user) do
    {token, user_token} = UserToken.build_session_token(user)
    Repo.insert!(user_token)
    token
  end

  @doc """
  Gets the user with the given signed token.
  """
  def get_user_by_session_token(token) do
    {:ok, query} = UserToken.verify_session_token_query(token)
    Repo.one(query)
  end

  # def get_full_user(token) do
  #   {:ok, query} = UserToken.verify_session_token_query(token)
  #   Repo.one(query) |> Repo.preload([:account, :profiles])
  # end

  @doc """
  Deletes the signed token with the given context.
  """
  def delete_session_token(token) do
    Repo.delete_all(UserToken.token_and_context_query(token, "session"))
    :ok
  end

  ## Confirmation

  @doc """
  Delivers the confirmation email instructions to the given user.

  ## Examples

      iex> deliver_user_confirmation_instructions(user, &Routes.user_confirmation_url(conn, :confirm, &1))
      {:ok, %{to: ..., body: ...}}

      iex> deliver_user_confirmation_instructions(confirmed_user, &Routes.user_confirmation_url(conn, :confirm, &1))
      {:error, :already_confirmed}

  """
  # def deliver_user_confirmation_instructions(%User{} = user, confirmation_url_fun)
  #     when is_function(confirmation_url_fun, 1) do
  #   if user.confirmed_at do
  #     {:error, :already_confirmed}
  #   else
  #     {encoded_token, user_token} = UserToken.build_email_token(user, "confirm")
  #     Repo.insert!(user_token)
  #     EmailNotifiers.deliver_confirmation_instructions(user, confirmation_url_fun.(encoded_token))
  #   end
  # end

  @doc """
  Confirms a user by the given token.

  If the token matches, the user account is marked as confirmed
  and the token is deleted.
  """
  def confirm_user(token) do
    with {:ok, query} <- UserToken.verify_email_token_query(token, "confirm"),
         %User{} = user <- Repo.one(query),
         {:ok, %{user: user}} <- Repo.transaction(confirm_user_multi(user)) do
      {:ok, user}
    else
      _ -> :error
    end
  end

  defp confirm_user_multi(user) do
    Multi.new()
    |> Multi.update(:user, User.confirm_changeset(user))
    |> Multi.delete_all(:tokens, UserToken.user_and_contexts_query(user, ["confirm"]))
  end

  ## Reset password

  @doc """
  Delivers the reset password email to the given user.

  ## Examples

      iex> deliver_user_reset_password_instructions(user, &Routes.user_reset_password_url(conn, :edit, &1))
      {:ok, %{to: ..., body: ...}}

  """
  def deliver_user_reset_password_instructions(%User{} = user, reset_password_url_fun)
      when is_function(reset_password_url_fun, 1) do
    {encoded_token, user_token} = UserToken.build_email_token(user, "reset_password")
    Repo.insert!(user_token)
    EmailNotifiers.deliver_reset_password_instructions(user, reset_password_url_fun.(encoded_token))
  end

  @doc """
  Gets the user by reset password token.

  ## Examples

      iex> get_user_by_reset_password_token("validtoken")
      %User{}

      iex> get_user_by_reset_password_token("invalidtoken")
      nil

  """

  def get_user_by_email_and_token(token) do
    with {:ok, query} <- UserToken.verify_email_token_query(token, "login"),
         %User{} = user <- Repo.one(query) do
      {:ok, user}
    else
      _ -> nil
    end
  end

  def get_user_by_reset_password_token(token) do
    with {:ok, query} <- UserToken.verify_email_token_query(token, "reset_password"),
         %User{} = user <- Repo.one(query) do
      user
    else
      _ -> nil
    end
  end

  @doc """
  Resets the user password.

  ## Examples

      iex> reset_user_password(user, %{password: "new long password", password_confirmation: "new long password"})
      {:ok, %User{}}

      iex> reset_user_password(user, %{password: "valid", password_confirmation: "not the same"})
      {:error, %Ecto.Changeset{}}

  """
  def reset_user_password(user, attrs) do
    Multi.new()
    |> Multi.update(:user, User.password_changeset(user, attrs))
    |> Multi.delete_all(:tokens, UserToken.user_and_contexts_query(user, :all))
    |> Repo.transaction()
    |> case do
      {:ok, %{user: user}} -> {:ok, user}
      {:error, :user, changeset, _} -> {:error, changeset}
    end
  end

  def change_invitation(%User{} = user, attrs \\ %{}) do
    User.accept_invitation_changeset(user, attrs)
  end

  def create_brokerage_invitation(attrs) do
    %User{}
    |> User.invitation_changeset(attrs)
    |> Repo.insert()
  end

  def deliver_user_invitation_instructions(%User{} = user, invitation_url_fun)
      when is_function(invitation_url_fun, 1) do
    if user.confirmed_at do
      {:error, :already_confirmed}
    else
      {encoded_token, user_token} = UserToken.build_email_token(user, "invitation")
      Repo.insert!(user_token)
      EmailNotifiers.deliver_invitation_instructions(user, invitation_url_fun.(encoded_token))
    end
  end

  def fetch_user_from_invitation(token) do
    with {:ok, query} <- UserToken.verify_email_token_query(token, "invitation"),
         %User{} = user <- Repo.one(query) |> Repo.preload([brokerage: :profile]) do
      {:ok, user}
    else
      _ -> :error
    end
  end

  def accept_invitation(token, user_params) do
    with {:ok, query} <- UserToken.verify_email_token_query(token, "invitation"),
         %User{} = user <- Repo.one(query),
         {:ok, changeset} <- valid_invitation_changeset(user, user_params),
         {:ok, %{agent: agent}} <- Repo.transaction(accept_invitation_multi(user, changeset)) do
      {:ok, agent}
    else
      {:error, %Ecto.Changeset{} = ch} -> {:error, ch}
      err -> :error
    end
  end

  defp valid_invitation_changeset(user, params) do
    changeset = User.accept_invitation_changeset(user, params)

    case changeset.valid? do
      true -> {:ok, changeset}
      false -> {:error, changeset}
    end
  end

  defp accept_invitation_multi(user, user_update_changeset) do
    Multi.new()
    |> Multi.update(:agent, user_update_changeset)
    |> Multi.insert(:agent_profile, create_invite_profile(user))
    |> Multi.delete_all(:tokens, UserToken.user_and_contexts_query(user, ["invitation"]))
  end

  def create_invite_profile(agent) do
    %Agents.Profile{}
    |> Agents.Profile.registration_changeset(%{
      agent_id: agent.id,
      name: agent.full_name,
      contacts: [%{content: agent.email, name: "Email", type: "email"}]
    })
  end

  def delete_user(query_attrs) do
    user = Repo.get_by!(User, query_attrs)
    Repo.delete(user)
  end

  # def cancel_subscription(account_id) do
  #   Multi.new()
  #   |> Multi.run(:cancel_subscription, Billing, :cancel_subscription, [account_id])
  #   |> Multi.run(:soft_delete, __MODULE__, :soft_delete_account, [account_id])
  #   |> Repo.transaction()
  # end

  def soft_delete_account(%{account_id: acc_id, subscription_id: sub_id}) do
    acc = Repo.get_by(Account, %{id: acc_id})

    if acc do
      Account.update_changeset(acc, %{deleted_at: DateTime.utc_now, status: "canceled"})
      |> Repo.update()
    end
  end

  defp create_stripe_customer(attrs) do
    desc = if Map.has_key?(attrs, :brokerage_name), do: "Brokerage - #{attrs.brokerage_name}", else: "Agent"
    Customer.create(%{
      email: attrs.email,
      description: "ExcyteCMA - #{desc}",
      name: attrs.full_name
    })
  end

  defp notify_subscribers({:ok, result}, event) do
    Phoenix.PubSub.broadcast(
      Excyte.PubSub,
      @topic <> "#{result.id}",
      {__MODULE__, event, result}
    )
    {:ok, result}
  end

  defp notify_subscribers({:error, reason}, _), do: {:error, reason}
end
