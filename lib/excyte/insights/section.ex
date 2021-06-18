defmodule Excyte.Insights.Section do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Insights.Insight,
    Insights.SectionTemplate
  }

  @timestamps_opts [type: :utc_datetime]

  schema "sections" do
    field :name, :string, null: false
    field :description, :string, default: ""
    field :type, :string
    field :html_content, :string
    field :foreign_id, :string
    field :position, :integer
    belongs_to(:section_template, SectionTemplate)
    belongs_to(:insight, Insight)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(insight, attrs) do
    insight
    |> cast(attrs, [
      :name,
      :description,
      :type,
      :html_content,
      :position,
      :insight_id,
      :section_template_id,
      :created_by_id
    ])
  end
end
