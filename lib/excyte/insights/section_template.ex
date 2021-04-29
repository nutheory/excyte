defmodule Excyte.Insights.SectionTemplate do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.DocumentTemplate
  }

  @timestamps_opts [type: :utc_datetime]

  schema "section_templates" do

    field :json_content, :map, default: %{}
    field :is_shared, :boolean, default: false
    field :document_type, :string
    field :name, :string
    field :position, :integer
    belongs_to(:document_template, DocumentTemplate)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(sec_temp, attrs \\ %{}) do
    sec_temp
    |> cast(attrs, [
      :json_content,
      :is_shared,
      :name,
      :position,
      :document_template_id,
      :brokerage_id,
      :created_by_id
    ])
  end
end
