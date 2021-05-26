defmodule Excyte.Brokerages.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{
    Brokerages.Brokerage,
    Utils.Address,
    Utils.Contact,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]
  @default_theme %{
    background: "#F3F4F6",
    header_text: "#04293A",
    accent: "#0E7490",
    highlight_background: "#FEF08A",
    highlight_text: "#475569",
    text: "#475569",
    muted_text: "#CBD5E1"
  }

  schema "profiles" do
    field :slug, :string
    field :tagline, :string
    field :bio, :string
    field :company_name, :string
    field :logo_url, :string
    field :description, :string
    field :intro_video_url, :string
    field :updated_by_user, :boolean
    field :theme_settings, MapType, default: @default_theme
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
      :theme_settings
    ])
    |> cast_embed(:addresses)
    |> cast_embed(:contacts)
  end

  def registration_changeset(profile, attrs) do
    profile
    |> cast(attrs, [:company_name, :brokerage_id])
    |> cast_embed(:contacts)
    |> validate_required([:company_name, :brokerage_id])
  end
end
