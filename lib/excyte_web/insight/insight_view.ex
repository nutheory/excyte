defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{CmaLive, CmaBuilderLive, ListingLive}
  alias ExcyteWeb.Components.{AddressAutocompleteLive, RangeSliderLive, CalendarLive, GalleryLive, EditorLive}
end
