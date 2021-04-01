defmodule Excyte.Agents.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{Accounts.User, Agents.Contact, Repo}
  schema "profiles" do
    field :name, :string
    field :tagline, :string
    field :bio, :string
    field :company, :string
    field :photo_url, :string
    field :intro_video_url, :string
    field :default, :boolean
    field :contacts, {:array, :map}
    belongs_to(:agent, User)
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
    |> cast_assoc(:contacts)
    |> validate_required([:name, :agent_id])
  end
end
