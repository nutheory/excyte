defmodule Excyte.Insights.SavedSearch do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Utils.MapType
  }

  embedded_schema do
    field :subject_foreign_url, :string
    field :query, :string
    field :zip, :string
    field :coords, MapType
    field :criteria, MapType
  end

  def changeset(search, attrs) do
    search
    |> cast(attrs, [
      :subject_foreign_url,
      :query,
      :zip,
      :coords,
      :criteria
    ])
  end
end
