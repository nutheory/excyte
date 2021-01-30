defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    CreateLive,
    BuilderLive,
    EditorLive,
    Listings,
    ListingCard,
    PossibleSubjects,
    PreviewComp,
    SelectedComps,
    SubjectProperty
  }
  alias ExcyteWeb.Components.{
    AddressAutocompleteLive,
    RangeSliderLive,
    CalendarLive,
    GalleryLive,
    FindByIdLive
  }
end
