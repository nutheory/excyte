defmodule Excyte.Brokerages.Brokerage do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.Account,
    Accounts.User,
    Utils.MapType,
  }

  @timestamps_opts [type: :utc_datetime]
  defimpl Jason.Encoder, for: [Excyte.Brokerages.Brokerage] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  schema "brokerages" do
    field :name, :string
    field :contact_settings, MapType
    field :legal_link, :string
    field :legal_text, :string
    belongs_to(:account, Account)
    timestamps()
  end

  def changeset(agent, attrs) do
    agent
    |> cast(attrs, [
      :name,
      :contact_settings,
      :account_id,
      :legal_link,
      :legal_text
    ])
  end

  def registration_changeset(agent, attrs) do
    agent
    |> cast(attrs, [:name, :contact_settings, :account_id])
    |> validate_required([:name, :contact_settings, :account_id])
  end
end
