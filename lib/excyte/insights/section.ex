defmodule Excyte.Insights.Section do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Insights.Insight,
    Insights.SectionTemplate,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]

  schema "sections" do
    field :name, :string
    field :description, :string, default: ""
    field :enabled, :boolean, default: true
    field :component_name, :string
    field :type, :string
    field :html_content, :string
    field :content, MapType
    field :foreign_id, :string
    field :position, :integer
    belongs_to(:section_template, SectionTemplate)
    belongs_to(:insight, Insight)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(section, attrs) do
    section
    |> cast(attrs, [
      :name,
      :description,
      :type,
      :component_name,
      :enabled,
      :html_content,
      :content,
      :position,
      :insight_id,
      :section_template_id,
      :created_by_id
    ])
  end
end
