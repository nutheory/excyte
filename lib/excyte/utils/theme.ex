defmodule Excyte.Utils.Theme do
  use Ecto.Schema
  import Ecto.Changeset

  @fields [:id, :font, :text, :muted_text, :accent, :background, :header_text, :sub_header_text, :highlight_background, :highlight_text]

  @derive {Jason.Encoder, only: @fields}

  embedded_schema do
    field :font, :string, default: "Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif"
    field :background, :string, default: "#F3F4F6"
    field :header_text, :string, default: "#04293A"
    field :sub_header_text, :string, default: "#04293A"
    field :accent, :string, default: "#0E7490"
    field :highlight_background, :string, default: "#FEF08A"
    field :highlight_text, :string, default: "#475569"
    field :muted_text, :string, default: "#CBD5E1"
    field :text, :string, default: "#475569"
  end

  def changeset(theme, attrs) do
    theme
    |> cast(attrs, @fields)
  end
end
