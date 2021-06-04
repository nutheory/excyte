defmodule Excyte.Insights.Insight do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.DocumentTemplate,
    Insights.SavedSearch,
    Insights.Section,
    Properties.Property,
    Utils.MapType,
    Utils.Theme
  }

  @timestamps_opts [type: :utc_datetime]
  defimpl Jason.Encoder, for: [Excyte.Insights.Insight] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  schema "insights" do
    field :type, :string
    field :mls, :string
    field :uuid, :string
    field :selected_listing_ids, {:array, :string}
    field :name, :string, null: false
    field :content, MapType
    field :published, :boolean
    field :cover_photo_url, :string
    embeds_one(:document_attributes, Theme, on_replace: :update)
    embeds_one(:saved_search, SavedSearch, on_replace: :update)
    has_one(:property, Property, foreign_key: :insight_id)
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
      :cover_photo_url,
      :content,
      :published,
      :document_template_id,
      :brokerage_id,
      :created_by_id
    ])
    |> cast_embed(:document_attributes)
    |> cast_embed(:saved_search)
  end

  def minimal_insight(uuid, uid) do
    from ins in __MODULE__,
    where: ins.uuid == ^uuid and ins.created_by_id == ^uid,
    select: struct(ins, [:id, :published, :uuid, :type])
  end

  def published_agent_insights(uid) do
    from ins in __MODULE__,
    where: ins.created_by_id == ^uid and ins.published == true,
    select: struct(ins, [:id, :published, :uuid, :name, :cover_photo_url, :updated_at, :type])
  end

  def all_agent_insights(uid) do
    from ins in __MODULE__,
    where: ins.created_by_id == ^uid,
    select: struct(ins, [:id, :published, :uuid, :name, :cover_photo_url, :updated_at, :type])
  end

  def published_brokerage_insights(uid) do
    from ins in __MODULE__,
    where: ins.brokerage_id == ^uid and ins.published == true,
    select: struct(ins, [:id, :published, :uuid, :name, :cover_photo_url, :updated_at, :type])
  end

  def all_brokerage_insights(uid) do
    from ins in __MODULE__,
    where: ins.brokerage_id == ^uid,
    select: struct(ins, [:id, :published, :uuid, :name, :cover_photo_url, :updated_at, :type])
  end
end
