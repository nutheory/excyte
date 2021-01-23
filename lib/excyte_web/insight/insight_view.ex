defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    CreateLive,
    BuilderLive,
    ListingLive,
    SubjectPropertyLive,
    PossibleSubjectsLive
  }
  alias ExcyteWeb.Components.{
    AddressAutocompleteLive,
    RangeSliderLive,
    CalendarLive,
    GalleryLive,
    EditorLive
  }
end
