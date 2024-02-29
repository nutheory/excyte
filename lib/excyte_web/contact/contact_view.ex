defmodule ExcyteWeb.ContactView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/contact/templates", path: ""]}

  alias ExcyteWeb.Contact.{
    FC,
    ListItem,
    ListOptions,
    Overview,
    Settings
  }

  alias ExcyteWeb.Helpers.{UI}
end
