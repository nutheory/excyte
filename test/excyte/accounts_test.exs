defmodule Excyte.AccountsTest do
  use Excyte.DataCase

  import Excyte.AccountsFixtures
  alias Excyte.Accounts
  alias Excyte.Accounts.{Agent, User, UserToken}
  alias Excyte.Agents.Agent


  describe "get_user_by_email/1" do
    test "does not return the agent if the email does not exist" do
      refute Accounts.get_user_by_email("unknown@example.com")
    end

    test "returns the agent if the email exists" do
      %{id: id} = agent = agent_fixture()
      assert %User{id: ^id} = Accounts.get_user_by_email(agent.email)
    end
  end

  describe "get_user_by_email_and_password/2" do
    test "does not return the agent if the email does not exist" do
      refute Accounts.get_user_by_email_and_password("unknown@example.com", "hello world!")
    end

    test "does not return the agent if the password is not valid" do
      agent = agent_fixture()
      refute Accounts.get_user_by_email_and_password(agent.email, "invalid")
    end

    test "returns the agent if the email and password are valid" do
      %{id: id} = agent = agent_fixture()

      assert %User{id: ^id} =
               Accounts.get_user_by_email_and_password(agent.email, valid_user_password())
    end
  end

  describe "get_user!/1" do
    test "raises if id is invalid" do
      assert_raise Ecto.NoResultsError, fn ->
        Accounts.get_user!(-1)
      end
    end

    test "returns the agent with the given id" do
      %{id: id} = agent = agent_fixture()
      assert %User{id: ^id} = Accounts.get_user!(agent.id)
    end
  end

  describe "register_agent/1" do
    test "requires email and password to be set" do
      {:error, changeset} = Accounts.register_agent(%{})

      assert %{
               password: ["can't be blank"],
               email: ["can't be blank"]
             } = errors_on(changeset)
    end

    test "validates email and password when given" do
      {:error, changeset} = Accounts.register_agent(%{email: "not valid", password: "not valid"})

      assert %{
               email: ["must have the @ sign and no spaces"],
               password: ["at least one digit or punctuation character", "at least one upper case character"]
             } = errors_on(changeset)
    end

    test "validates maximum values for email and password for security" do
      too_long = String.duplicate("db", 100)
      {:error, changeset} = Accounts.register_agent(%{email: too_long, password: too_long})
      assert "should be at most 160 character(s)" in errors_on(changeset).email
      assert "should be at most 26 character(s)" in errors_on(changeset).password
    end

    test "validates email uniqueness" do
      %{email: email} = agent_fixture()
      {:error, changeset} = Accounts.register_agent(%{email: email})
      assert "has already been taken" in errors_on(changeset).email

      # Now try with the upper cased email too, to check that email case is ignored.
      {:error, changeset} = Accounts.register_agent(%{email: String.upcase(email)})
      assert "has already been taken" in errors_on(changeset).email
    end

    test "registers users with a hashed password" do
      email = unique_agent_email()
      {:ok, agent} = Accounts.register_agent(%{email: email, password: valid_user_password(), full_name: "Derek Rush" })
      assert agent.email == email
      assert is_binary(agent.hashed_password)
      assert is_nil(agent.confirmed_at)
      assert is_nil(agent.password)
    end
  end

  describe "change_user_registration/2" do
    test "returns a changeset" do
      assert %Ecto.Changeset{} = changeset = Agent.pre_register(%Agent{}, %{})
      assert changeset.required == [:password, :email, :full_name]
    end
  end

  describe "change_user_email/2" do
    test "returns a agent changeset" do
      assert %Ecto.Changeset{} = changeset = Accounts.change_user_email(%Agent{})
      assert changeset.required == [:email]
    end
  end

  describe "apply_user_email/3" do
    setup do
      %{agent: agent_fixture()}
    end

    test "requires email to change", %{agent: agent} do
      {:error, changeset} = Accounts.apply_user_email(agent, valid_user_password(), %{})
      assert %{email: ["did not change"]} = errors_on(changeset)
    end

    test "validates email", %{agent: agent} do
      {:error, changeset} =
        Accounts.apply_user_email(agent, valid_user_password(), %{email: "not valid"})

      assert %{email: ["must have the @ sign and no spaces"]} = errors_on(changeset)
    end

    test "validates maximum value for email for security", %{agent: agent} do
      too_long = String.duplicate("db", 100)

      {:error, changeset} =
        Accounts.apply_user_email(agent, valid_user_password(), %{email: too_long})

      assert "should be at most 160 character(s)" in errors_on(changeset).email
    end

    test "validates email uniqueness", %{agent: agent} do
      %{email: email} = agent_fixture()

      {:error, changeset} =
        Accounts.apply_user_email(agent, valid_user_password(), %{email: email})

      assert "has already been taken" in errors_on(changeset).email
    end

    test "validates current password", %{agent: agent} do
      {:error, changeset} =
        Accounts.apply_user_email(agent, "invalid", %{email: unique_agent_email()})

      assert %{current_password: ["is not valid"]} = errors_on(changeset)
    end

    test "applies the email without persisting it", %{agent: agent} do
      email = unique_agent_email()
      {:ok, agent} = Accounts.apply_user_email(agent, valid_user_password(), %{email: email})
      assert agent.email == email
      assert Accounts.get_user!(agent.id).email != email
    end
  end

  describe "deliver_update_email_instructions/3" do
    setup do
      %{agent: agent_fixture()}
    end

    test "sends token through notification", %{agent: agent} do
      token =
        extract_user_token(fn url ->
          Accounts.deliver_update_email_instructions(agent, "current@example.com", url)
        end)

      {:ok, token} = Base.url_decode64(token, padding: false)
      assert user_token = Repo.get_by(UserToken, token: :crypto.hash(:sha256, token))
      assert user_token.user_id == agent.id
      assert user_token.sent_to == agent.email
      assert user_token.context == "change:current@example.com"
    end
  end

  describe "update_user_email/2" do
    setup do
      agent = agent_fixture()
      email = unique_agent_email()

      token =
        extract_user_token(fn url ->
          Accounts.deliver_update_email_instructions(%{agent | email: email}, agent.email, url)
        end)

      %{agent: agent, token: token, email: email}
    end

    test "updates the email with a valid token", %{agent: agent, token: token, email: email} do
      assert Accounts.update_user_email(agent, token) == :ok
      changed_user = Repo.get!(Agent, agent.id)
      assert changed_user.email != agent.email
      assert changed_user.email == email
      assert changed_user.confirmed_at
      assert changed_user.confirmed_at != agent.confirmed_at
      refute Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not update email with invalid token", %{agent: agent} do
      assert Accounts.update_user_email(agent, "oops") == :error
      assert Repo.get!(Agent, agent.id).email == agent.email
      assert Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not update email if agent email changed", %{agent: agent, token: token} do
      assert Accounts.update_user_email(%{agent | email: "current@example.com"}, token) == :error
      assert Repo.get!(Agent, agent.id).email == agent.email
      assert Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not update email if token expired", %{agent: agent, token: token} do
      {1, nil} = Repo.update_all(UserToken, set: [inserted_at: ~N[2020-01-01 00:00:00]])
      assert Accounts.update_user_email(agent, token) == :error
      assert Repo.get!(Agent, agent.id).email == agent.email
      assert Repo.get_by(UserToken, user_id: agent.id)
    end
  end

  describe "change_user_password/2" do
    test "returns a agent changeset" do
      assert %Ecto.Changeset{} = changeset = Accounts.change_user_password(%Agent{})
      assert changeset.required == [:password]
    end
  end

  describe "update_user_password/3" do
    setup do
      %{agent: agent_fixture()}
    end

    test "validates password", %{agent: agent} do
      {:error, changeset} =
        Accounts.update_user_password(agent, valid_user_password(), %{
          password: "not val",
          password_confirmation: "another"
        })

      assert "should be at least 8 character(s)" in errors_on(changeset).password
      assert "does not match password" in errors_on(changeset).password_confirmation
    end

    test "validates maximum values for password for security", %{agent: agent} do
      too_long = String.duplicate("db", 100)

      {:error, changeset} =
        Accounts.update_user_password(agent, valid_user_password(), %{password: too_long})

      assert "should be at most 26 character(s)" in errors_on(changeset).password
    end

    test "validates current password", %{agent: agent} do
      {:error, changeset} =
        Accounts.update_user_password(agent, "invalid", %{password: valid_user_password()})

      assert %{current_password: ["is not valid"]} = errors_on(changeset)
    end

    test "updates the password", %{agent: agent} do
      {:ok, agent} =
        Accounts.update_user_password(agent, valid_user_password(), %{
          password: "new valid1Password"
        })

      assert is_nil(agent.password)
      assert Accounts.get_user_by_email_and_password(agent.email, "new valid1Password")
    end

    test "deletes all tokens for the given agent", %{agent: agent} do
      _ = Accounts.generate_user_session_token(agent)

      {:ok, _} =
        Accounts.update_user_password(agent, valid_user_password(), %{
          password: "new valid1Password"
        })

      refute Repo.get_by(UserToken, user_id: agent.id)
    end
  end

  describe "generate_user_session_token/1" do
    setup do
      %{agent: agent_fixture()}
    end

    test "generates a token", %{agent: agent} do
      token = Accounts.generate_user_session_token(agent)
      assert user_token = Repo.get_by(UserToken, token: token)
      assert user_token.context == "session"

      # Creating the same token for another agent should fail
      assert_raise Ecto.ConstraintError, fn ->
        Repo.insert!(%UserToken{
          token: user_token.token,
          user_id: agent_fixture().id,
          context: "session"
        })
      end
    end
  end

  describe "get_user_by_session_token/1" do
    setup do
      agent = agent_fixture()
      token = Accounts.generate_user_session_token(agent)
      %{agent: agent, token: token}
    end

    test "returns agent by token", %{agent: agent, token: token} do
      assert session_user = Accounts.get_user_by_session_token(token)
      assert session_user.id == agent.id
    end

    test "does not return agent for invalid token" do
      refute Accounts.get_user_by_session_token("oops")
    end

    test "does not return agent for expired token", %{token: token} do
      {1, nil} = Repo.update_all(UserToken, set: [inserted_at: ~N[2020-01-01 00:00:00]])
      refute Accounts.get_user_by_session_token(token)
    end
  end

  describe "delete_session_token/1" do
    test "deletes the token" do
      agent = agent_fixture()
      token = Accounts.generate_user_session_token(agent)
      assert Accounts.delete_session_token(token) == :ok
      refute Accounts.get_user_by_session_token(token)
    end
  end

  describe "deliver_user_confirmation_instructions/2" do
    setup do
      %{agent: agent_fixture()}
    end

    test "sends token through notification", %{agent: agent} do
      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_confirmation_instructions(agent, url)
        end)

      {:ok, token} = Base.url_decode64(token, padding: false)
      assert user_token = Repo.get_by(UserToken, token: :crypto.hash(:sha256, token))
      assert user_token.user_id == agent.id
      assert user_token.sent_to == agent.email
      assert user_token.context == "confirm"
    end
  end

  describe "confirm_user/2" do
    setup do
      agent = agent_fixture()

      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_confirmation_instructions(agent, url)
        end)

      %{agent: agent, token: token}
    end

    test "confirms the email with a valid token", %{agent: agent, token: token} do
      assert {:ok, confirmed_user} = Accounts.confirm_user(token)
      assert confirmed_user.confirmed_at
      assert confirmed_user.confirmed_at != agent.confirmed_at
      assert Repo.get!(Agent, agent.id).confirmed_at
      refute Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not confirm with invalid token", %{agent: agent} do
      assert Accounts.confirm_user("oops") == :error
      refute Repo.get!(Agent, agent.id).confirmed_at
      assert Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not confirm email if token expired", %{agent: agent, token: token} do
      {1, nil} = Repo.update_all(UserToken, set: [inserted_at: ~N[2020-01-01 00:00:00]])
      assert Accounts.confirm_user(token) == :error
      refute Repo.get!(Agent, agent.id).confirmed_at
      assert Repo.get_by(UserToken, user_id: agent.id)
    end
  end

  describe "deliver_user_reset_password_instructions/2" do
    setup do
      %{agent: agent_fixture()}
    end

    test "sends token through notification", %{agent: agent} do
      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_reset_password_instructions(agent, url)
        end)

      {:ok, token} = Base.url_decode64(token, padding: false)
      assert user_token = Repo.get_by(UserToken, token: :crypto.hash(:sha256, token))
      assert user_token.user_id == agent.id
      assert user_token.sent_to == agent.email
      assert user_token.context == "reset_password"
    end
  end

  describe "get_user_by_reset_password_token/1" do
    setup do
      agent = agent_fixture()

      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_reset_password_instructions(agent, url)
        end)

      %{agent: agent, token: token}
    end

    test "returns the agent with valid token", %{agent: %{id: id}, token: token} do
      assert %User{id: ^id} = Accounts.get_user_by_reset_password_token(token)
      assert Repo.get_by(UserToken, user_id: id)
    end

    test "does not return the agent with invalid token", %{agent: agent} do
      refute Accounts.get_user_by_reset_password_token("oops")
      assert Repo.get_by(UserToken, user_id: agent.id)
    end

    test "does not return the agent if token expired", %{agent: agent, token: token} do
      {1, nil} = Repo.update_all(UserToken, set: [inserted_at: ~N[2020-01-01 00:00:00]])
      refute Accounts.get_user_by_reset_password_token(token)
      assert Repo.get_by(UserToken, user_id: agent.id)
    end
  end

  describe "reset_user_password/2" do
    setup do
      %{agent: agent_fixture()}
    end

    test "validates password", %{agent: agent} do
      {:error, changeset} =
        Accounts.reset_user_password(agent, %{
          password: "not val",
          password_confirmation: "another"
        })

      assert "should be at least 8 character(s)" in errors_on(changeset).password
      assert "does not match password" in errors_on(changeset).password_confirmation
    end

    test "validates maximum values for password for security", %{agent: agent} do
      too_long = String.duplicate("db", 100)
      {:error, changeset} = Accounts.reset_user_password(agent, %{password: too_long})
      assert "should be at most 26 character(s)" in errors_on(changeset).password
    end

    test "updates the password", %{agent: agent} do
      {:ok, updated_user} = Accounts.reset_user_password(agent, %{password: "new valid1Password"})
      assert is_nil(updated_user.password)
      assert Accounts.get_user_by_email_and_password(agent.email, "new valid1Password")
    end

    test "deletes all tokens for the given agent", %{agent: agent} do
      _ = Accounts.generate_user_session_token(agent)
      {:ok, _} = Accounts.reset_user_password(agent, %{password: "new valid!Password"})
      refute Repo.get_by(UserToken, user_id: agent.id)
    end
  end

  describe "inspect/2" do
    test "does not include password" do
      refute inspect(%User{password: "123456"}) =~ "password: \"123456\""
    end
  end
end
