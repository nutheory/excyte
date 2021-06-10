defmodule Excyte.InsightFixtures do
    @moduledoc """
    This module defines test helpers for creating
    entities via the `Excyte.Insights` context.
  """

  alias Excyte.Insights

  def excyte_cma_template(attrs \\ %{}) do
    {:ok, temp} =
      attrs
        |> Enum.into(%{
          insight_type: "cma",
          is_excyte_made: true,
          type_default: true,
          name: "Excyte Basic CMA",
          is_public: true
        })
        |> Insights.create_document_template()
     temp
  end

  def excyte_showcase_template(attrs \\ %{}) do
    {:ok, temp} =
      attrs
        |> Enum.into(%{
          insight_type: "showcase",
          is_excyte_made: true,
          type_default: true,
          name: "Excyte Basic Showcase",
          is_public: true
        })
        |> Insights.create_document_template()
     temp
  end

  def excyte_buyer_tour_template(attrs \\ %{}) do
    {:ok, temp} =
      attrs
        |> Enum.into(%{
          insight_type: "buyer_tour",
          is_excyte_made: true,
          type_default: true,
          name: "Excyte Basic Buyer Tour",
          is_public: true
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
