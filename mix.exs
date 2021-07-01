defmodule Excyte.MixProject do
  use Mix.Project

  def project do
    [
      app: :excyte,
      version: "0.1.0",
      elixir: "~> 1.12.1",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Excyte.Application, [env: Mix.env()]},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:dev), do: ["lib", "test/support"]
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:dialyxir, "~> 1.0", only: [:dev], runtime: false},
      {:bcrypt_elixir, "~> 2.0"},
      {:phoenix, "~> 1.5.7"},
      {:phoenix_ecto, "~> 4.1"},
      {:ecto_sql, "~> 3.4"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_live_view, "~> 0.15.4", override: true},
      {:floki, ">= 0.27.0"},
      {:faker, "~> 0.16", only: [:dev, :test]},
      {:ex_machina, "~> 2.4", only: :test},
      {:phoenix_html, "~> 2.11"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:phoenix_live_dashboard, "~> 0.3 or ~> 0.2.9"},
      {:telemetry_metrics, "~> 0.4"},
      {:telemetry_poller, "~> 0.4"},
      {:gettext, "~> 0.11"},
      {:tesla, "~> 1.4"},
      {:key_convert, "~> 0.5.0"},
      {:hackney, "~> 1.17"},
      {:inflex, "~> 2.0.0"},
      {:number, "~> 1.0.1"},
      {:jason, "~> 1.2", override: true},
      {:httpoison, "~> 1.8"},
      {:geocalc, "~> 0.5"},
      {:solid, "~> 0.8"},
      {:timex, "~> 3.7.5"},
      {:cachex, "~> 3.3"},
      {:plug_cowboy, "~> 2.0"},
      {:phx_gen_auth, "~> 0.5"},
      {:ex_aws, "~> 2.1"},
      {:ex_aws_s3, "~> 2.0"},
      {:sweet_xml, "~> 0.6"},
      {:money, "~> 1.8"},
      {:bamboo, "~> 1.6"},
      {:stripity_stripe, "~> 2.9.0"},
      {:openid_connect, "~> 0.2.2"},
      {:ex_twilio, github: "nutheory/ex_twilio"}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "ecto.setup", "cmd npm install --prefix assets"],
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
