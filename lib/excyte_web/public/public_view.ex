defmodule ExcyteWeb.PublicView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/public/templates", path: ""]}
  alias ExcyteWeb.Public.{
    AgentSignup
  }
  alias ExcyteWeb.Settings.{
    Payment
  }
end
