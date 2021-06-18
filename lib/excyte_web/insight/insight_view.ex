defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}
  alias ExcyteWeb.Helpers.Utilities
  alias ExcyteWeb.Insight.{
    CreateCma,
    CreateShowcase,
    CreateBuyerTour,
    CustomizeCma,
    Editor,
    EditorMenuBubble,
    EditorMenuCommands,
    EditorMenuFloat,
    FilterListings,
    Listings,
    ListingCard,
    PreviewComp,
    SectionCard,
    SelectedComps,
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
