defmodule Excyte.Agents.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{Accounts.User, Agents.Contact, Brokerages.Brokerage, Repo}
  schema "profiles" do
    field :name, :string
    field :tagline, :string
    field :bio, :string
    field :company, :string
    field :photo_url, :string
    field :intro_video_url, :string
    field :default, :boolean
    embeds_many :contacts, Contact
    belongs_to(:agent, User)
    belongs_to(:brokerage, Brokerage)
    timestamps()
  end

  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [
      :name,
      :tagline,
      :bio,
      :photo_url,
      :intro_video_url,
      :default,
      :agent_id
    ])
    |> cast_embed(:contacts)
    |> validate_required([:name, :agent_id])
  end

  def registration_changeset(profile, attrs) do
    profile
    |> cast(attrs, [:name, :agent_id, :brokerage_id])
    |> cast_embed(:contacts)
  end
end
