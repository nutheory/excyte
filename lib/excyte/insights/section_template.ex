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
    field :html_content, :string
    field :is_shared, :boolean, default: false
    field :component_name, :string
    field :component_data_types, {:array, :string}
    field :name, :string
    field :description, :string, default: ""
    field :type, :string
    field :position, :integer
    belongs_to(:document_template, DocumentTemplate)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end

  def changeset(sec_temp, attrs \\ %{}) do
    sec_temp
    |> cast(attrs, [
      :html_content,
      :is_shared,
      :name,
      :description,
      :type,
      :position,
      :component_name,
      :component_data_types,
      :document_template_id,
      :brokerage_id,
      :created_by_id
    ])
  end
end
