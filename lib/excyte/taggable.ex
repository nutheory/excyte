defmodule Excyte.Taggable do
  @moduledoc """
  The Taggable context.
  """

  import Ecto.Query, warn: false
  alias Excyte.Repo

  alias Excyte.Taggable.Tag
  alias Excyte.Taggable.Tagging

  def list_tags do
    Repo.all(Tag)
  end

  def tag_contact(contact, %{tag: tag_attrs} = attrs) do
    tag = create_or_find_tag(tag_attrs)

    contact
    |> Ecto.build_assoc(:taggings)
    |> Tagging.changeset(attrs)
    |> Ecto.Changeset.put_assoc(:tag, tag)
    |> Repo.insert()
  end

  defp create_or_find_tag(%{name: "" <> name} = attrs) do
    %Tag{}
    |> Tag.changeset(attrs)
    |> Repo.insert()
    |> case do
      {:ok, tag} -> tag
      _ -> Repo.get_by(Tag, name: name)
    end
  end
  defp create_or_find_tag(_), do: nil

  def delete_tag_from_contact(contact, tag) do
    Repo.find_by(Tagging, contact_id: contact.id, tag_id: tag.id)
    |> case do
      %Tagging{} = tagging -> Repo.delete(tagging)
      nil -> {:ok, %Tagging{}}
    end
  end
end
