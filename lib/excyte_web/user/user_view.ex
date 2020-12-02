defmodule ExcyteWeb.UserView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/user/templates", path: ""]}
  alias ExcyteWeb.{PricingLive, Settings.PaymentLive, Settings.AccountLive, Agent.GettingStartedLive}
end
