defmodule ExcyteWeb.BrokerageView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/brokerage/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.{
    Agent,
    Agent.MlsAuth
  }
  alias ExcyteWeb.{
    Brokerage,
    Brokerage.Dashboard,
    Brokerage.GettingStarted,
    Brokerage.InviteTeam,
  }
  alias ExcyteWeb.Components.{
    ColorPicker,
    ContactForm,
    SuperSelect,
    Toggle
  }
  alias ExcyteWeb.{Settings, Settings.Payment}
end
