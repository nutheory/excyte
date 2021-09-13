defmodule ExcyteWeb.ClientView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/client/templates", path: ""]}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Client.{
    Header,
    MoreInfo,
    Interactions
  }
  alias ExcyteWeb.Agent.Dashboard
end
