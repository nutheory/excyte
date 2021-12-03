defmodule Excyte.Taggable.Tagging do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte. {
    Taggable.Tag,
    Contacts.Contact
  }

  schema "taggings" do
    belongs_to :tag, Tag
    belongs_to :contact, Contact

    timestamps()
  end

  @doc false
  def changeset(tagging, attrs) do
    tagging
    |> cast(attrs, [])
    |> unique_constraint(:name, name: :taggings_tag_id_contact_id_index)
    |> cast_assoc(:tag)
  end
end
