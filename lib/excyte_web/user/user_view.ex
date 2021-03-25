defmodule ExcyteWeb.UserView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/user/templates", path: ""]}
  alias ExcyteWeb.{
    Agent.GettingStartedLive,
    Agent.Profile,
    Agent.MlsAuth,
    PricingLive,
    Settings.DashboardLive,
    Settings.Account,
    Settings.Payment
  }
end
