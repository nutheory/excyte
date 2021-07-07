defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    EditorMenuBubble,
    EditorMenuCommands,
    FilterListings,
    Listings,
    ListingCard,
    PreviewComp,
    PreviewTour,
    SectionCard,
    SelectedComps,
    SelectedTour,
    SimpleCard,
    SubjectForm,
    SubjectProperty
  }
  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    Dropdown,
    Gallery,
    MultiSelect,
    RangeInputs
  }
end
