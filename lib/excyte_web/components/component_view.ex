defmodule ExcyteWeb.ComponentView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/components/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Components.{
    CalendarDay
  }
end
