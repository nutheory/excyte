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
import Excyte.{AccountsFixtures, InsightFixtures, MlsFixtures}

excyte_admins = [
  %{
    full_name: "Excyte Admin",
    email: "drush81+admin@gmail.com"
  }
]

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

cma_template = excyte_cma_template(%{})
showcase_template = excyte_showcase_template(%{})
buyer_tour_template = excyte_buyer_tour_template(%{})

sections = [
  %{
    document_template_id: cma_template.id,
    component_name: "cover",
    component_data_types: ["subject"],
    name: "Cover Page",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 0
  },
  %{
    document_template_id: cma_template.id,
    component_name: "whats_cma",
    component_data_types: [],
    name: "What is a CMA",
    description: "Simple explanation of a CMA for the client.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 1
  },
  %{
    document_template_id: cma_template.id,
    component_name: "brokerage_profile",
    component_data_types: ["brokerage"],
    name: "Brokerage Profile",
    description: "Details and Contact info for Brokerage",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 2
  },
  %{
    document_template_id: cma_template.id,
    component_name: "why_an_agent",
    component_data_types: [],
    name: "Why do I need a Agent",
    description: "Explanation of agents importance.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 3
  },
  %{
    document_template_id: cma_template.id,
    component_name: "agent_profile",
    component_data_types: ["agent"],
    name: "Agent Profile",
    description: "Details and contact info for agent.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 4
  },
  %{
    document_template_id: cma_template.id,
    component_name: "subject",
    component_data_types: ["subject"],
    name: "Subject Property",
    description: "Summary of clients property.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 5
  },
  %{
    document_template_id: cma_template.id,
    component_name: "comparable",
    component_data_types: ["listing"],
    name: "Comparable Listings",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 6
  },
  %{
    document_template_id: cma_template.id,
    component_name: "commission_distribution",
    component_data_types: [],
    name: "Commission Distribution",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 62
  },
  %{
    document_template_id: cma_template.id,
    component_name: "synopsis",
    component_data_types: ["subject", "listings"],
    name: "Synopsis",
    description: "Suggested Price explanation.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 60
  },
  %{
    document_template_id: cma_template.id,
    component_name: "pricing_strategy",
    component_data_types: [],
    name: "Pricing Strategy",
    description: "How the suggested price fits into the overall pricing strategy.",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 61
  },
  %{
    document_template_id: showcase_template.id,
    component_name: "showcase",
    component_data_types: ["listing"],
    name: "Property",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 0
  },
  %{
    document_template_id: showcase_template.id,
    component_name: "agent_profile",
    component_data_types: ["agent"],
    name: "Agent Profile",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 1
  },
  %{
    document_template_id: showcase_template.id,
    component_name: "brokerage_profile",
    component_data_types: ["brokerage"],
    name: "Brokerage Profile",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 2
  },
  %{
    document_template_id: buyer_tour_template.id,
    component_name: "tour_stop",
    component_data_types: ["listing"],
    name: "Property",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 0
  },
  %{
    document_template_id: buyer_tour_template.id,
    component_name: "agent_profile",
    component_data_types: ["agent"],
    name: "Agent Profile",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 1
  },
  %{
    document_template_id: buyer_tour_template.id,
    component_name: "brokerage_profile",
    component_data_types: ["brokerage"],
    name: "Brokerage Profile",
    description: "",
    type: "page",
    is_public: true,
    is_excyte_made: true,
    position: 2
  },
]

Enum.each(sections, fn s ->
  excyte_section_template(s)
end)

# Enum.each(excyte_admins, fn a ->
#   admin = agent_fixture(a)
#   token =
#     extract_user_token(fn url ->
#       Accounts.deliver_user_confirmation_instructions(admin, url)
#     end)
#   Accounts.confirm_user(token)
#   add_test_mls(admin)
#   setup_billing(admin)
# end)

# Enum.each(agents, fn a ->
#   agent = agent_fixture(a)
#   token =
#     extract_user_token(fn url ->
#       Accounts.deliver_user_confirmation_instructions(agent, url)
#     end)
#   Accounts.confirm_user(token)
#   add_test_mls(agent)
#   setup_billing(agent)
# end)

# Enum.each(brokerages, fn b ->
#   broker = brokerage_fixture(b)
#   token =
#     extract_user_token(fn url ->
#       Accounts.deliver_user_confirmation_instructions(broker, url)
#     end)
#   Accounts.confirm_user(token)
#   add_test_mls(broker)
#   setup_billing(broker)
# end)
