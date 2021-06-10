defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    CreateCma,
    CreateShowcase,
    CreateBuyerTour,
    Builder,
    Editor,
    EditorMenuBubble,
    EditorMenuCommands,
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
    RangeInputs,
    Calendar,
    Dropdown,
    Gallery,
    FindById,
    MultiSelect
  }
end
