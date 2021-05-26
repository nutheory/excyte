defmodule ExcyteWeb.UserView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/user/templates", path: ""]}
  alias ExcyteWeb.{
    Agent.GettingStarted,
    Agent.MlsAuth,
    AgentPricing,
    BrokeragePricing,
    Settings.Dashboard,
    Settings.Account,
    Settings.Payment
  }
end
