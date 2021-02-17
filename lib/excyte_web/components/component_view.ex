defmodule ExcyteWeb.ComponentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/components/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    EditorMenuBubble,
    CalendarDay,
    Calendar,
    RangeSlider
  }
end
