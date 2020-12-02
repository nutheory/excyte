defmodule ExcyteWeb.AgentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/agent/templates", path: ""]}
  alias ExcyteWeb.Agent.{DashboardLive, GettingStartedLive, MlsAuthLive, ProfileLive, ContactLive, AddressAutocomplete}
  alias ExcyteWeb.Insight.{CmaLive}
  alias ExcyteWeb.Settings.{PaymentLive}
end
