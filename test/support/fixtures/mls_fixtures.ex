defmodule Excyte.MlsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Excyte.Accounts` context.
  """

  alias Excyte.Mls

  def full_name, do: Faker.Person.En.name()
  def live_member_key, do: "e76e47e5a909f6f6a283644795c3f42b"
  def live_office_key, do: "15180c7764a1dafc1d90da4b8399a674"
  def test_member_key, do: "M_5dba1fa4a2a50c5b81f082d9"
  def test_office_key, do: "O_5af6019c75f1043ad481d99a"


  def add_live_mls(user) do
    {:ok, mls} =
      Map.from_struct(user)
      |> Enum.into(%{
        agent_id: user.id,
        access_token: "c72f9c07c32759011128b84001acb35d",
        refresh_token: "11ac9d8dad11b810ac5ed6680ef57ac3",
        id_token: "JufbUZM7YgSPn2fGSbHn",
        expires_in: 3600,
        agent_name: full_name(),
        mls_name: "ACTRIS",
        mls_id: "67475454757",
        member_key: live_member_key(),
        office_key: live_office_key(),
        sub: "actris_ref",
        dataset_id: "actris_ref",
        username: "nutheory",
        zoneinfo: "America/Chicago"
      })
      |> Mls.create_credential()

    mls
  end

  def add_test_mls(user) do
    {:ok, mls} =
      Map.from_struct(user)
      |> Enum.into(%{
        agent_id: user.id,
        access_token: "c72f9c07c32759011128b84001acb35d",
        refresh_token: "11ac9d8dad11b810ac5ed6680ef57ac3",
        id_token: "JufbUZM7YgSPn2fGSbHn",
        expires_in: 3600,
        agent_name: full_name(),
        mls_name: "TEST",
        mls_id: "67475454757",
        member_key: test_member_key(),
        office_key: test_office_key(),
        sub: "test",
        dataset_id: "test",
        username: "nutheory",
        zoneinfo: "America/Chicago"
      })
      |> Mls.create_credential()

    mls
  end

end
