defmodule Excyte.InsightFixtures do
    @moduledoc """
    This module defines test helpers for creating
    entities via the `Excyte.Insights` context.
  """

  alias Excyte.Insights

  def excyte_document_template(attrs \\ %{}) do
    {:ok, temp} =
      attrs
        |> Enum.into(%{
          insight_type: "cma",
          is_excyte_made: true,
          name: "Excyte Basic CMA",
          is_public: true,
          attributes: %{
            background_color: "#FFFFFF",
            font_family: "Helvetica, Arial",
            text_color: "#4B5563",
            header_color: "#0E7490",
            highlight_color: "#E0F2FE",
          }
        })
        |> Insights.create_document_template()
     temp
  end

  def excyte_section_template(attrs \\ %{}) do
    {:ok, temp} =
      attrs
        |> Enum.into(%{
          is_public: true
        })
        |> Insights.create_section_template()
    temp
  end

end
