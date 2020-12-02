defmodule Excyte.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Excyte.Accounts` context.
  """

  alias Excyte.Accounts

  def full_name, do: "Derek Rush"
  def unique_agent_email, do: "agent#{System.unique_integer()}@example.com"
  def valid_user_password, do: "Letmein1"

  def agent_fixture(attrs \\ %{}) do
    {:ok, agent} =
      attrs
      |> Enum.into(%{
        full_name: full_name(),
        email: unique_agent_email(),
        password: valid_user_password(),
        completed_setup: true
      })
      |> Accounts.register_agent()

    agent
  end

  def extract_user_token(fun) do
    {:ok, captured} = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token, _] = String.split(captured.text_body, "[TOKEN]")
    token
  end
end
