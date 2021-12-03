defmodule Excyte.MixProject do
  use Mix.Project

  def project do
    [
      app: :excyte,
      version: "0.1.0",
      elixir: "~> 1.16.0",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:yecc] ++ Mix.compilers(),
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
      extra_applications: [:logger, :runtime_tools, :oauth2]
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
      {:phoenix, "~> 1.7.10"},
      {:phoenix_ecto, "~> 4.4"},
      {:ecto_sql, "~> 3.10"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_live_view, "~> 0.20.1"},
      {:phoenix_view, "~> 2.0"},
      {:floki, ">= 0.27.0"},
      {:faker, "~> 0.17", only: [:dev, :test]},
      {:ex_machina, "~> 2.4", only: :test},
      {:phoenix_html, "~> 3.3"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:phoenix_live_dashboard, "~> 0.8.2"},
      {:telemetry_metrics, "~> 0.6"},
      {:telemetry_poller, "~> 0.5"},
      {:gettext, "~> 0.20"},
      {:tesla, "~> 1.4"},
      {:quantum, "~> 3.0"},
      {:nimble_csv, "~> 1.1"},
      {:key_convert, "~> 0.5.0"},
      {:hackney, "~> 1.20"},
      {:inflex, "~> 2.0.0"},
      {:number, "~> 1.0.1"},
      {:mux, "~> 2.0.0"},
      {:oauth2, "~> 2.0"},
      {:ueberauth, "~> 0.6"},
      {:ueberauth_google, "~> 0.10"},
      {:google_api_people, "~> 0.40"},
      {:goth, "~> 1.2.0"},
      {:jason, "~> 1.2", override: true},
      {:httpoison, "~> 1.8"},
      {:geocalc, "~> 0.8"},
      {:solid, "~> 0.8"},
      {:timex, "~> 3.7.5"},
      {:cachex, "~> 3.6"},
      {:plug_cowboy, "~> 2.0"},
      {:ex_aws, "~> 2.2.4"},
      {:ex_aws_s3, "~> 2.3.0"},
      {:sweet_xml, "~> 0.6"},
      {:money, "~> 1.9"},
      {:bamboo, "~> 2.2.0"},
      {:bamboo_phoenix, "~> 1.0.0"},
      {:stripity_stripe, "~> 2.10.0"},
      {:openid_connect, "~> 0.2.2"},
      {:export, github: "nutheory/export"},
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
      setup: ["deps.get", "ecto.setup", "cmd npm --prefix assets install"],
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      "assets.deploy": ["cmd npm --prefix assets run deploy", "phx.digest"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
