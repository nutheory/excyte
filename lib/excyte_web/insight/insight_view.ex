defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    CreateLive,
    BuilderLive,
    EditorLive,
    EditorMenuBubble,
    EditorMenuFloat,
    FilterListings,
    Listings,
    ListingCard,
    PossibleSubjects,
    PreviewComp,
    SelectedComps,
    SubjectForm,
    SubjectProperty
  }
  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    DistanceSelector,
    RangeSlider,
    Calendar,
    Dropdown,
    Gallery,
    FindById,
    MultiSelect
  }
end
