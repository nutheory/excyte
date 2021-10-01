defmodule ExcyteWeb.ClientView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/client/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.{Utilities}
  alias ExcyteWeb.Client.{
    Components,
    Functions,
    Header,
    MoreInfo,
    Interactions,
    TemplateRender
  }
  alias ExcyteWeb.Components.{
    ContactView,
    ShowcaseGallery,
    Collapsable
  }
end
