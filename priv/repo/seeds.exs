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

template = excyte_document_template(%{})

sections = [
  %{
    document_template_id: template.id,
    section_type: "cover",
    name: "Cover Page",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 0
  },
  %{
    document_template_id: template.id,
    section_type: "profile",
    name: "Brokerage Profile",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 1
  },
  %{
    document_template_id: template.id,
    section_type: "profile",
    name: "Agent Profile",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 2
  },
  %{
    document_template_id: template.id,
    section_type: "subject",
    name: "Subject Property",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 3
  },
  %{
    document_template_id: template.id,
    section_type: "comps",
    name: "Comparable Listings",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 4
  },
    %{
    document_template_id: template.id,
    section_type: "synopsis",
    name: "Synopsis",
    json_content: %{},
    is_public: true,
    is_excyte_made: true,
    position: 5
  }
]

Enum.each(sections, fn s ->
  excyte_section_template(s)
end)

Enum.each(excyte_admins, fn a ->
  admin = agent_fixture(a)
  token =
    extract_user_token(fn url ->
      Accounts.deliver_user_confirmation_instructions(admin, url)
    end)
  Accounts.confirm_user(token)
  add_test_mls(admin)
  setup_billing(admin)
end)

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
