defmodule Excyte.Insights.Insight do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.DocumentTemplate,
    Insights.SavedSearch,
    Insights.Section,
    Properties.Property,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]

  schema "insights" do
    field :type, :string
    field :mls, :string
    field :uuid, :string
    field :selected_listing_ids, {:array, :string}
    field :name, :string, null: false
    field :document_attributes, MapType
    field :content, MapType
    field :published, :boolean
    embeds_one(:saved_search, SavedSearch, on_replace: :update)
    has_one(:subject, Property, foreign_key: :insight_id)
    has_many(:sections, Section)
    belongs_to(:document_template, DocumentTemplate)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(insight, attrs) do
    insight
    |> cast(attrs, [
      :type,
      :mls,
      :name,
      :uuid,
      :selected_listing_ids,
      :document_attributes,
      :content,
      :published,
      :document_template_id,
      :brokerage_id,
      :created_by_id
    ])
    |>cast_embed(:saved_search)
  end
end
