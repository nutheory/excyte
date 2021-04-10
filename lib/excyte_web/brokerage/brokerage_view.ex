defmodule ExcyteWeb.BrokerageView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/brokerage/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Agent.{MlsAuth}
  alias ExcyteWeb.Brokerage.{
    Dashboard,
    GettingStarted
  }
  alias ExcyteWeb.{Settings, Settings.Payment}
end
