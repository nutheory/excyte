defmodule Excyte.Insights.Insight do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.SavedSearch,
    Properties.Property,
    Utils.MapType
  }

  schema "insights" do
    field :type, :string
    field :mls, :string
    field :uuid, :string
    field :selected_listing_ids, {:array, :string}
    field :title, :string, null: false
    field :content, MapType
    field :published, :boolean
    has_one(:subject, Property)
    has_one(:saved_search, SavedSearch)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(insight, attrs) do
    insight
    |> cast(attrs, [
      :type,
      :mls,
      :title,
      :uuid,
      :selected_listing_ids,
      :content,
      :published,
      :brokerage_id,
      :created_by_id
    ])
  end
end
