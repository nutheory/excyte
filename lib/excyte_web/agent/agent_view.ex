defmodule ExcyteWeb.AgentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/agent/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Agent.{
    Dashboard,
    GettingStarted,
    InsightCard,
    MlsAuth,
    Profile,
    SendToClient,
    Subscription
  }
  alias ExcyteWeb.Components.{
    ContactForm,
    Toggle,
    JumboButton,
    Dropdown,
    ImageEditor
  }
  alias ExcyteWeb.Insight.{CreateCma, CreateShowcase, CreateBuyerTour}
  alias ExcyteWeb.{
    Settings,
    Settings.Payment,
    Settings.CancelAccount
  }
end
