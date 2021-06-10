defmodule ExcyteWeb.AgentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/agent/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Agent.{
    Dashboard,
    InsightCard,
    GettingStarted,
    MlsAuth,
    Profile
  }
  alias ExcyteWeb.Components.{ContactForm, Toggle}
  alias ExcyteWeb.Insight.{CreateCma, CreateShowcase, CreateBuyerTour}
  alias ExcyteWeb.{Settings, Settings.Payment}
end
