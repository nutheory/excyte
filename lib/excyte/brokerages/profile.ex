defmodule Excyte.Brokerages.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{
    Brokerages.Brokerage,
    Utils.Address,
    Utils.Contact,
    Utils.MapType,
    Utils.Theme
  }

  @timestamps_opts [type: :utc_datetime]
  defimpl Jason.Encoder, for: [Excyte.Brokerages.Profile] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

  schema "profiles" do
    field :slug, :string
    field :tagline, :string
    field :bio, :string
    field :company_name, :string
    field :logo_url, :string
    field :description, :string
    field :intro_video_url, :string
    field :updated_by_user, :boolean
    embeds_one(:theme_settings, Theme, on_replace: :update)
    embeds_many(:addresses, Address)
    embeds_many(:contacts, Contact, on_replace: :delete)
    belongs_to(:brokerage, Brokerage)
    timestamps()
  end

  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [
      :company_name,
      :slug,
      :tagline,
      :bio,
      :description,
      :logo_url,
      :intro_video_url,
      :updated_by_user,
    ])
    |> cast_embed(:theme_settings)
    |> cast_embed(:addresses)
    |> cast_embed(:contacts)
  end

  def registration_changeset(profile, attrs) do
    profile
    |> cast(attrs, [:company_name, :brokerage_id])
    |> cast_embed(:contacts)
    |> cast_embed(:theme_settings)
    |> validate_required([:company_name, :brokerage_id])
  end
end
