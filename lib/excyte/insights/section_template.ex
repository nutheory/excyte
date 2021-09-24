defmodule Excyte.Insights.SectionTemplate do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.DocumentTemplate,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]
  defimpl Jason.Encoder, for: [Excyte.Insights.SectionTemplate] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  schema "section_templates" do
    field :html_content, :string
    field :is_shared, :boolean, default: false
    field :enabled, :boolean, default: true
    field :component_name, :string
    field :component_data_types, {:array, :string}
    field :name, :string
    field :description, :string, default: ""
    field :type, :string
    field :position, :integer
    field :content, MapType
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
      :enabled,
      :name,
      :description,
      :type,
      :position,
      :content,
      :component_name,
      :component_data_types,
      :document_template_id,
      :brokerage_id,
      :created_by_id
    ])
  end
end
