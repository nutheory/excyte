defmodule Excyte.Insights.Insight do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Brokerages.Brokerage,
    Accounts.User
  }

  schema "insights" do
    field :type, :string
    field :mls, :string
    field :subject_listing_id, :string
    field :title, :string, null: false
    field :content, {:array, :map}
    field :search_criteria, {:array, :map}
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(instight, attrs) do
    instight
    |> cast(attrs, [
      :type,
      :mls,
      :subject_listing_id,
      :title,
      :content,
      :search_criteria,
      :brokerage_id,
      :created_by_id
    ])
  end
end
