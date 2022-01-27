defmodule Excyte.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application
  alias Excyte.RateLimiter

  def start(_type, args) do
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
            Excyte.Mls.MetaCache,
            Excyte.Scheduler,
            %{id: :insights_cache, start: {Cachex, :start_link, [:insights_cache, []]}},
            # %{id: :scrape_agent_cache, start: {Cachex, :start_link, [:scrape_agent_cache, []]}},
            ExcyteWeb.Telemetry,
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint,
            # {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]
        [_] ->
          [
            Excyte.Repo,
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
