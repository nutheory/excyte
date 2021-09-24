defmodule ExcyteWeb.ClientView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/client/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Client.{
    Header,
    MoreInfo,
    Interactions
  }
  alias ExcyteWeb.Agent.Dashboard
  alias ExcyteWeb.Components.{
    ContactView,
    ShowcaseGallery,
    Collapsable
  }
end
