defmodule ExcyteWeb.InsightView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/insight/templates", path: ""]}
  import Number.{Delimit}

  alias ExcyteWeb.{
    Helpers.Utilities,
    Helpers.UI,
    Client.TemplateRender
  }

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
    SubjectProperty,
    UploadVideo
  }

  alias ExcyteWeb.Components.{
    AddressAutocomplete,
    Gallery,
    MultiSelect,
    RangeInputs,
    ImageEditor
  }
end
