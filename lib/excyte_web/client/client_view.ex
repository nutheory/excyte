defmodule ExcyteWeb.ClientView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/client/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.{
    Utilities,
    ClientFunctions
  }
  alias ExcyteWeb.Client.{
    Components,
    Functions,
    Header,
    MoreInfo,
    Interactions,
    TemplateRender
  }
  alias ExcyteWeb.Agent.Dashboard
  alias ExcyteWeb.Components.{
    ContactView,
    ShowcaseGallery,
    Collapsable
  }
end
