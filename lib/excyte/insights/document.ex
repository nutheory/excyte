defmodule Excyte.Insights.Document do
  use Ecto.Schema
  import Ecto.Query
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.Insight,
    Insights.Template,
    Utils.MapType
  }

  schema "documents" do
    field :title, :string, null: false
    field :description, :string
    field :type, :string
    field :content, MapType
    belongs_to(:insight, Insight)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    many_to_many(:templates, Template, join_through: "document_templates")
    timestamps()
  end

  def changeset(insight, attrs) do
    insight
    |> cast(attrs, [
      :title,
      :insight_id,
      :content,
      :description,
      :type,
      :brokerage_id,
      :created_by_id
    ])
  end



  def available_docs(user_id, broke_id) do
    if is_nil(broke_id) do
      from docs in __MODULE__,
      where: docs.created_by_id == 1,
      or_where: docs.created_by_id == ^user_id
    else
      from docs in __MODULE__,
      where: docs.created_by_id == 1,
      or_where: docs.brokerage_id == ^broke_id,
      or_where: docs.created_by_id == ^user_id
    end
  end
end
