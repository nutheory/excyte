# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# import_config "open_id_providers.exs"

config :excyte,
  ecto_repos: [Excyte.Repo]

config :excyte, Excyte.Mailer,
  adapter: SendGridAdapter,
  api_key: System.get_env("SENDGRID")

config :excyte, :gcp_places, System.get_env("GCP_EXCYTE_PLACES")

# config :ex_twilio,
#   account_sid: System.get_env("TWILIO_ACCOUNT_SID"),
#   auth_token: System.get_env("TWILIO_AUTH_TOKEN")

# remove crawly to remove this setting
config :crawly,
  port: 4002
#   closespider_timeout: 10,
#   middlewares: [
#     Crawly.Middlewares.UniqueRequest,
#     Excyte.ProxyMiddleware,
#     {Crawly.Middlewares.UserAgent, user_agents: ["Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36"]}
#   ],
#   pipelines: [
#     Excyte.DbPipeline
#   ]

config :tesla, :adapter, Tesla.Adapter.Hackney

config :money,
  default_currency: :USD,
  separator: ".",
  delimiter: ",",
  symbol: false,
  symbol_on_right: false,
  symbol_space: false,
  fractional_unit: true,
  strip_insignificant_zeros: false

# Configures the endpoint
config :excyte, ExcyteWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "tDweIsGAsxdCSmYdkiIMkZ9+EtzairrGWxEiyQjbCRXFkpGo0vFnX4oSU3gfPtr+",
  render_errors: [view: ExcyteWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Excyte.PubSub,
  live_view: [signing_salt: "o4brvFBV"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
