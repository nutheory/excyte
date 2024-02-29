defmodule Excyte.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, args) do
    credentials =
      "GOOGLE_APPLICATION_CREDENTIALS"
      |> System.fetch_env!()
      |> Jason.decode!()

    source = {:service_account, credentials}

    children =
      case args do
        [env: :test] ->
          [
            Excyte.Repo,
            # ExcyteWeb.Telemetry,
            Excyte.Mls.MetaCache,
            {Cachex, name: :insights_cache},
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint,
            {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]

        [env: :dev] ->
          [
            Excyte.Repo,
            {Goth, name: Excyte.Goth, source: source},
            Excyte.Mls.MetaCache,
            Excyte.Scheduler,
            %{id: :insights_cache, start: {Cachex, :start_link, [:insights_cache, []]}},
            # %{id: :scrape_agent_cache, start: {Cachex, :start_link, [:scrape_agent_cache, []]}},
            ExcyteWeb.Telemetry,
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint
            # {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]

        [_] ->
          [
            Excyte.Repo,
            {Goth, name: Excyte.Goth, source: source},
            Excyte.Mls.MetaCache,
            Excyte.Scheduler,
            {Cachex, name: :insights_cache},
            ExcyteWeb.Telemetry,
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint,
            {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]
      end

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Excyte.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    ExcyteWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
