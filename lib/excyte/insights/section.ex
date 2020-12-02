defmodule Excyte.Insights.Section do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Brokerages.Brokerage,
    Accounts.User
  }

  schema "sections" do
    field :title, :string, null: false
    field :content, {:array, :map}
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(instight, attrs) do
    instight
    |> cast(attrs, [
      :title,
      :content,
      :brokerage_id,
      :created_by_id
    ])
  end
end
