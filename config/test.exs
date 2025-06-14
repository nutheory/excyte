use Mix.Config

import_config "dev_open_id_providers.exs"
config :excyte, env: :test

# Only in tests, remove the complexity from the password hashing algorithm
config :bcrypt_elixir, :log_rounds, 1

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :excyte, Excyte.Repo,
  username: "postgres",
  password: "postgres",
  database: "excyte_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :excyte, Excyte.Mailer, adapter: Bamboo.TestAdapter
config :stripity_stripe, api_key: System.get_env("STRIPE_SECRET")

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :excyte, ExcyteWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
