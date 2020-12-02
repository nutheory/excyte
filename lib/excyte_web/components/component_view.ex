defmodule ExcyteWeb.ComponentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/components/templates", path: ""]}
  import Number.Currency
  alias ExcyteWeb.Components.{AddressAutocompleteLive, CalendarDayLive, CalendarLive, RangeSliderLive}
end
