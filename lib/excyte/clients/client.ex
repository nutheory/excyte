defmodule Excyte.Clients.Client do
  @moduledoc """
   Client conversation DB schema
  """
    use Ecto.Schema
    import Ecto.Changeset
    alias Excyte.{
      Accounts.User,
      Brokerages.Brokerage,
      Insights.Insight,
      Utils.Address,
      Utils.Contact,
    }

    @timestamps_opts [type: :utc_datetime]

    schema "clients" do
      field :is_shared, :boolean
      field :is_lead, :boolean, default: false
      field :is_archived, :boolean
      field :status, :string
      field :position_x, :integer
      field :position_y, :integer
      field :needs_attention, :boolean
      field :description, :string
      field :name, :string
      field :primary_email, :string
      embeds_many(:addresses, Address)
      embeds_many(:contacts, Contact, on_replace: :delete)
      belongs_to(:insight, Insight)
      belongs_to(:created_by, User)
      belongs_to(:assigned_to, User)
      belongs_to(:brokerage, Brokerage)
      timestamps()
    end

    def changeset(client, attrs) do
      client
      |> cast(attrs, [
        :is_shared,
        :is_lead,
        :is_archived,
        :status,
        :position_x,
        :position_y,
        :needs_attention,
        :description,
        :name,
        :primary_email,
        :contacts,
        :address,
        :created_by_id,
        :assigned_to_id,
        :brokerage_id
      ])
    end
end
