defmodule ExcyteWeb.BrokerageView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/brokerage/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities

  alias ExcyteWeb.{
    Agent,
    Agent.MlsAuth
  }

  alias ExcyteWeb.{
    Brokerage,
    Brokerage.ManageTeam,
    Brokerage.Subscription,
    Brokerage.TeamMember
  }

  alias ExcyteWeb.Components.{
    ColorPicker,
    Function,
    ImageEditor
  }

  alias ExcyteWeb.{
    Settings.CancelAccount,
    Settings.Payment
  }
end
