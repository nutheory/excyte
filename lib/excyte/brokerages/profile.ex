defmodule Excyte.Brokerages.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{
    Brokerages.Brokerage,
    Utils.Address,
    Utils.Contact
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
    embeds_many(:addresses, Address)
    embeds_many(:contacts, Contact)
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
      :updated_by_user
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
