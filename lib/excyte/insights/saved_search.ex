defmodule Excyte.Insights.SavedSearch do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Insights.Insight,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]

  schema "saved_searches" do
    field :subject_foreign_url, :string
    field :query, :string
    field :zip, :string
    field :coords, MapType
    field :criteria, MapType
    belongs_to(:insight, Insight)
    timestamps()
  end

  def changeset(search, attrs) do
    search
    |> cast(attrs, [
      :subject_foreign_url,
      :query,
      :zip,
      :coords,
      :criteria,
      :insight_id
    ])
  end
end
