defmodule Excyte.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, args) do
    children =
      case args do
        [env: :test] ->
          [
            # {Plug.Cowboy,
            #   scheme: :http, plug: Mls.MockServer, options: [port: 4005]},
            Excyte.Repo,
            # ExcyteWeb.Telemetry,
            Excyte.Mls.MetaCache,
            {Cachex, name: :insight_cache},
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint,
            {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]
        [env: :dev] ->
          [
            {Plug.Cowboy,
              scheme: :http, plug: Mls.MockServer, options: [port: 4004]},
            Excyte.Repo,
            Excyte.Mls.MetaCache,
            {Cachex, name: :insight_cache},
            ExcyteWeb.Telemetry,
            {Phoenix.PubSub, name: Excyte.PubSub},
            ExcyteWeb.Endpoint,
            {OpenIDConnect.Worker, Application.get_env(:excyte, :openid_connect_providers)}
          ]
        [_] ->
          [
            Excyte.Repo,
            Excyte.Mls.MetaCache,
            {Cachex, name: :insight_cache},
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
