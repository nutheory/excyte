defmodule Excyte.Contacts.Contact do
  @moduledoc """
   Contact conversation DB schema
  """
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Contacts.Contact,
    Insights.Insight,
    Taggable.Tagging,
    Utils.AddressItem,
    Utils.ContactItem,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]

  schema "contacts" do
    field :is_shared, :boolean
    field :is_archived, :boolean
    field :type, :string
    field :status, :string
    field :position, MapType
    field :needs_attention, :boolean
    field :description, :string
    field :first_name, :string
    field :last_name, :string
    field :priority, :string
    field :phone_number, :string
    field :title, :string
    field :suffix, :string
    field :email, :string
    field :state, :string
    field :zip_code, :string
    has_many :taggings, Tagging
    has_many :tags, through: [:taggings, :tag]
    embeds_many(:address_items, AddressItem)
    embeds_many(:contact_items, ContactItem, on_replace: :delete)
    many_to_many(:insights, Insight, join_through: "contact_insight", on_replace: :delete)
    belongs_to(:created_by, User)
    belongs_to(:assigned_to, User)
    belongs_to(:brokerage, Brokerage)
    timestamps()
  end

  def changeset(contact, attrs) do
    contact
    |> cast(attrs, [
      :is_shared,
      :is_archived,
      :status,
      :type,
      :needs_attention,
      :description,
      :first_name,
      :last_name,
      :phone_number,
      :title,
      :suffix,
      :priority,
      :email,
      :state,
      :zip_code,
      :created_by_id,
      :assigned_to_id,
      :brokerage_id
    ])
    |> cast_embed(:address_items)
    |> cast_embed(:contact_items)
    |> validate_required([:email])
    |> validate_format(:email, ~r/^[^\s]+@[^\s]+$/, message: "must have the @ sign and no spaces")
    |> validate_length(:email, max: 160)
  end

  def changeset_update_insights(%Contact{} = contact, insights) do
    contact
    # |> cast(%{}, @required_fields)
    # associate insights to the user
    |> put_assoc(:insights, insights)
  end


  def get_by_agent(query, agent_id) when is_nil(agent_id), do: query
  def get_by_agent(query, agent_id) do
    from c in query,
    where: c.created_by_id == ^agent_id or c.assigned_to_id == ^agent_id
  end

  def get_by_brokerage(query, brk_id) when is_nil(brk_id), do: query
  def get_by_brokerage(query, brk_id) do
    from c in query,
    where: c.brokerage_id == ^brk_id
  end

  def get_by_categories(query, cats) when length(cats) === 0, do: query
  def get_by_categories(query, cats) do
    from c in query,
    where: c.category in ^cats
  end

  def apply_fuzzy_search(query, filter) when byte_size(filter) > 0 do
    from c in query,
    where: ilike(c.last_name, ^"#{filter}%") or ilike(c.email, ^"#{filter}%"),
    where: fragment("SIMILARITY(?, ?) > 0", c.last_name, ^filter) or fragment("SIMILARITY(?, ?) > 0",  c.email, ^filter),
    order_by: fragment("LEVENSHTEIN(?, ?)", c.last_name, ^filter)
  end
  def apply_fuzzy_search(query, _filter), do: query

  def apply_list_options(query, opts) do
    sk = String.to_atom(opts.sort_by)
    sv = String.to_atom(opts.sort_dir)

    from c in query,
    offset: ^opts.offset,
    order_by: [{^sv, field(c, ^sk)}],
    limit: ^opts.limit
  end
end
