# In this file, we load production configuration and secrets
# from environment variables. You can also hardcode secrets,
# although such is generally not recommended and you have to
# remember to add this file to your .gitignore.
import Config

database_url =
  System.get_env("DATABASE_URL") ||
    raise """
    environment variable DATABASE_URL is missing.
    For example: ecto://USER:PASS@HOST/DATABASE
    """

config :excyte, Excyte.Repo,
  ssl: true,
  url: database_url,
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")

secret_key_base =
  System.get_env("SECRET_KEY_BASE") ||
    raise """
    environment variable SECRET_KEY_BASE is missing.
    You can generate one by calling: mix phx.gen.secret
    """

config :excyte, ExcyteWeb.Endpoint,
  http: [
    port: String.to_integer(System.get_env("PORT") || "4000"),
    transport_options: [socket_opts: [:inet6]]
  ],
  url: [
    scheme: "https",
    host: "excyte.io",
    port: 443
  ],
  server: true,
  check_origin: [
    "//excyte.io",
    "//www.excyte.io",
    "//staging.excyte.io",
    "//excytecma.com",
    "//www.excytecma.com",
    "//staging.excytecma.com",
    "//excyte-re.onrender.com",
    "https://localhost:4000",
    "https://excyte.ngrok.io"
  ],
  secret_key_base: secret_key_base,
  pubsub_server: Excyte.PubSub

config :excyte, Excyte.Mailer,
  adapter: Bamboo.SendGridAdapter,
  api_key: {:system, "SENDGRID_API_KEY"},
  hackney_opts: [
    recv_timeout: :timer.minutes(1)
  ]

# config :excyte, :twilio_numbers, System.get_env("TWILIO_NUMBERS") |> File.read!()

# ## Using releases (Elixir v1.9+)
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start each relevant endpoint:

#
# Then you can assemble a release by calling `mix release`.
# See `mix help release` for more information.
