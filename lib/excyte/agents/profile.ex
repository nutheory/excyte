defmodule Excyte.Agents.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{
    Accounts.User,
    Utils.AddressItem,
    Utils.ContactItem,
    Utils.Theme
  }

  @timestamps_opts [type: :utc_datetime]

  defimpl Jason.Encoder, for: [Excyte.Agents.Profile] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  schema "profiles" do
    field :name, :string
    field :slug, :string
    field :tagline, :string
    field :bio, :string
    field :company_name, :string
    field :photo_url, :string
    field :logo_url, :string
    field :job_title, :string
    field :intro_video_url, :string
    field :updated_by_user, :boolean
    embeds_one :theme_settings, Theme, on_replace: :update
    embeds_many(:address_items, AddressItem)
    embeds_many(:contact_items, ContactItem, on_replace: :delete)
    belongs_to(:agent, User)
    timestamps()
  end

  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [
      :name,
      :slug,
      :tagline,
      :bio,
      :logo_url,
      :photo_url,
      :intro_video_url,
      :job_title,
      :company_name,
      :updated_by_user
    ])
    |> cast_embed(:theme_settings)
    |> cast_embed(:address_items)
    |> cast_embed(:contact_items)
  end

  def registration_changeset(profile, attrs) do
    profile
    |> cast(attrs, [:name, :agent_id])
    |> cast_embed(:contact_items)
    |> cast_embed(:theme_settings)
    |> validate_required([:name, :agent_id])
  end
end
