defmodule Excyte.AccountsFixtures do
  @moduledoc """
    This module defines test helpers for creating
    entities via the `Excyte.Accounts` context.
  """

  alias Excyte.Accounts

  def full_name, do: "Derek Rush"
  def unique_agent_email, do: "agent#{System.unique_integer()}@example.com"
  def valid_user_password, do: "Letmein1"
  def billing_status, do: "trialing"

  def agent_fixture(attrs \\ %{}) do
    {:ok, agent} =
      attrs
      |> Enum.into(%{
        full_name: full_name(),
        email: unique_agent_email(),
        password: valid_user_password()
      })
      |> Accounts.register_agent()

    agent
  end

  def extract_user_token(fun) do
    {:ok, captured} = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token, _] = String.split(captured.text_body, "[TOKEN]")
    token
  end

  def brokerage_fixture(attrs \\ %{}) do
    {:ok, broker} =
      attrs
      |> Enum.into(%{
        full_name: full_name(),
        email: unique_agent_email(),
        password: valid_user_password(),
        brokerage_name: Faker.Company.bs(),
        phone: Faker.Phone.EnUs.phone()
      })
      |> Accounts.register_brokerage()

    broker
  end

  def brokerage_agent_fixture(attrs \\ %{}) do
    {:ok, agent} =
      attrs
      |> Enum.into(%{
        full_name: full_name(),
        email: unique_agent_email(),
        password: valid_user_password(),
        brokerage_token: attrs.token
      })
      |> Accounts.register_agent()

    agent
  end

  def setup_billing(user) do
    attrs =
      Enum.into(Map.from_struct(user), %{
        source_subscription_id: "sub_IMlYsXSQIisFl8",
        source_plan_id: "price_1HiUm7JYg86TDWnATXPkLgB7",
        payment_method_id: "pm_1Hm211JYg86TDWnAPXmQ5qzb",
        amount: 3000,
        status: billing_status()
      })
    Accounts.update_account_details(user.account_id, attrs)
  end
end
