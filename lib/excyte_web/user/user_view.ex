defmodule ExcyteWeb.UserView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/user/templates", path: ""]}

  alias ExcyteWeb.{
    Agent.MlsAuth,
    # AgentPricing,
    # BrokeragePricing,
    Helpers.Utilities,
    Settings.Account
  }
end
