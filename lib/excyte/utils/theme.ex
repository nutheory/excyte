defmodule Excyte.Utils.Theme do
  use Ecto.Schema
  import Ecto.Changeset

  @fields [:id, :font, :accent, :link, :background, :header_text, :sub_header_text, :brokerage_default]

  @derive {Jason.Encoder, only: @fields}

  embedded_schema do
    field :font, :string, default: "Arial, Helvetica Neue, Helvetica, sans-serif"
    field :background, :string, default: "rgba(255, 255, 255, 1)"
    field :header_text, :string, default: "rgba(71, 85, 105, 1)"
    field :sub_header_text, :string, default: "rgba(183, 183, 183, 1)"
    field :accent, :string, default: "#0E7490"
    field :link, :string, default: "#475569"
    field :brokerage_default, :boolean, default: false
  end

  def changeset(theme, attrs) do
    theme
    |> cast(attrs, @fields)
  end
end
