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

alias Excyte.{Accounts, Mls, Insights}
import Excyte.AccountsFixtures

agent = agent_fixture(%{email: "drush81@gmail.com"})
token =
  extract_user_token(fn url ->
    Accounts.deliver_user_confirmation_instructions(agent, url)
  end)
Accounts.confirm_user(token)
mls = Mls.create_credential(%{
  agent_id: agent.id,
  access_token: "c72f9c07c32759011128b84001acb35d",
  refresh_token: "11ac9d8dad11b810ac5ed6680ef57ac3",
  id_token: "JufbUZM7YgSPn2fGSbHn",
  expires_in: 3600,
  agent_name: agent.full_name,
  mls_name: "ACTRIS",
  mls_id: "67475454757",
  member_key: "77c4b2f3ec218c88bd7e41617ef63489",
  sub: "actris_ref",
  dataset_id: "actris_ref",
  username: "nutheory",
  zoneinfo: "America/Chicago"
})
Accounts.update_account_details(agent.account_id, %{
  source_subscription_id: "sub_IMlYsXSQIisFl8",
  source_plan_id: "price_1HiUm7JYg86TDWnATXPkLgB7",
  payment_method_id: "pm_1Hm211JYg86TDWnAPXmQ5qzb",
  amount: 3000,
  status: "trialing"
})

# Insights.create_template(%{
#   name: "Excyte default layout"
#   description: "Includes general pages that would be used for a generic CMA, or as a good starting point."
#   default: true
#   type: "cma"
#   is_public: true
# })
