# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Excyte.Repo.insert!(%Excyte.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Excyte.{Accounts, Insights}
import Excyte.{AccountsFixtures, MlsFixtures}

agents = [
  %{
    full_name: "Derek Rush",
    email: "drush81+agent@gmail.com",
  }
]

brokerages = [
  %{
    full_name: "Derek Broker",
    email: "drush81+broker@gmail.com",
    phone: "9492808977",
    brokerage_name: "Capitol Riot"
  }
]

Enum.each(agents, fn a ->
  agent = agent_fixture(a)
  token =
    extract_user_token(fn url ->
      Accounts.deliver_user_confirmation_instructions(agent, url)
    end)
  Accounts.confirm_user(token)
  add_test_mls(agent)
  setup_billing(agent)
end)

Enum.each(brokerages, fn b ->
  broker = brokerage_fixture(b)
  token =
    extract_user_token(fn url ->
      Accounts.deliver_user_confirmation_instructions(broker, url)
    end)
  Accounts.confirm_user(token)
  add_test_mls(broker)
  setup_billing(broker)
end)


# Insights.create_template(%{
#   name: "Excyte default layout"
#   description: "Includes general pages that would be used for a generic CMA, or as a good starting point."
#   default: true
#   type: "cma"
#   is_public: true
# })
