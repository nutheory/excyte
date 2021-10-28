defmodule ExcyteWeb.ContactView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/contact/templates", path: ""]}
  alias ExcyteWeb.Contact.{
    Create,
    ListItem,
    ListOptions,
    Overview
  }
end
