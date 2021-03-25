defmodule ExcyteWeb.AgentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/agent/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Agent.{
    DashboardLive,
    DashListing,
    GettingStartedLive,
    MlsAuth,
    Profile
  }
  alias ExcyteWeb.Insight.{CreateLive}
  alias ExcyteWeb.Settings.{Payment}
end
