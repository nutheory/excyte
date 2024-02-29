defmodule ExcyteWeb.PropertyView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/property/templates", path: ""]}
  import Number.{Delimit}

  alias ExcyteWeb.Property.{
    ListingItem,
    Overview
  }

  alias ExcyteWeb.Helpers.{UI}

  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    Function,
    ImageEditor
  }
end
