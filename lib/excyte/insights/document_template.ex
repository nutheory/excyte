defmodule Excyte.Insights.DocumentTemplate do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.SectionTemplate
  }

  @timestamps_opts [type: :utc_datetime]

  schema "document_templates" do
    field :attributes, :map, default: %{}
    field :type_default, :boolean, default: false
    field :is_excyte_made, :boolean, default: false
    field :is_public, :boolean, default: false
    field :is_shared, :boolean, default: false
    field :is_auto_template, :boolean, default: false
    field :insight_type, :string
    field :name, :string
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    has_many(:section_templates, SectionTemplate)
    timestamps()
  end

  def changeset(template, attrs \\ %{}) do
    template
    |>cast( attrs, [
      :brokerage_id,
      :created_by_id,
      :is_excyte_made,
      :is_auto_template,
      :is_shared,
      :is_public,
      :type_default,
      :attributes,
      :insight_type,
      :name
    ])
    |> validate_required([:name, :insight_type])
  end

  def by_type(query, type) do
    from dt in query,
    where: dt.insight_type == ^type
  end

  def by_public(query) do
    from dt in query,
    where: dt.is_public == true,
    order_by: dt.name
  end

  def by_auto(query, auto) do
    from dt in query,
    where: dt.is_auto_template == ^auto,
    order_by: dt.name
  end

  def by_creator(query, cr_id) when is_nil(cr_id) or byte_size(cr_id) == 0 do
    query
  end

  def by_creator(query, cr_id) do
    from dt in query,
    or_where: dt.created_by_id == ^cr_id,
    order_by: dt.name
  end

  def by_brokerage(query, bk_id) when is_nil(bk_id) or byte_size(bk_id) == 0 do
    query
  end

  def by_brokerage(query, bk_id) do
    from dt in query,
    or_where: dt.brokerage_id == ^bk_id,
    order_by: dt.name
  end

end
