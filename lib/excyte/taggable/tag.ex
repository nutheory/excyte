defmodule Excyte.Taggable.Tag do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{Taggable.Tagging}


  schema "tags" do
    field :name, :string
    field :description, :string
    has_many :taggings, Tagging
    has_many :contacts, through: [:taggings, :contact]
    timestamps()
  end

  @doc false
  def changeset(tag, attrs) do
    tag
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> unique_constraint(:name, name: :tags_name_index)
  end
end
