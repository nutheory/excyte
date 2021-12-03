defmodule ExcyteWeb.PropertyView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/property/templates", path: ""]}

  alias ExcyteWeb.Property.{
    Create,
    FC,
    Gallery,
    Overview
  }
  alias ExcyteWeb.Helpers.{UI}
  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    ImageEditor
  }
end
