defmodule ExcyteWeb.ContactView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/contact/templates", path: ""]}
  alias ExcyteWeb.Contact.{
    Create,
    FC,
    ImportCsv,
    ListItem,
    ListOptions,
    Overview,
    Settings
  }
  alias ExcyteWeb.Helpers.{UI}
  alias ExcyteWeb.Components.{
    Function
  }
end
