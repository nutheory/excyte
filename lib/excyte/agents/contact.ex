defmodule Excyte.Agents.Contact do
  use Ecto.Schema
  import Ecto.Changeset

  alias Excyte.{Agents.Profile}

  schema "contacts" do
    field(:temp_id, :string, virtual: true)
    field(:delete, :boolean, virtual: true)
    field(:type, :string)
    field(:name, :string)
    field(:content, :string)
    field(:textable, :boolean)
    belongs_to(:profile, Profile)
    timestamps()
  end

  def changeset(contact, attrs) do
    contact
    |> Map.put(:temp_id, (contact.temp_id || attrs["temp_id"]))
    |> cast(attrs, [:name, :content, :delete, :profile_id])
    |> validate_required([:name, :content])
    |> maybe_mark_for_deletion()
    |> assign_type()
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset), do: changeset
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end

  defp assign_type(changeset) do
    content = get_change(changeset, :content)
    IO.inspect(changeset, label: "CHANGE")
    if content do
      IO.inspect(content, label: "CONTENT333")
      cond do
        String.match?(content, ~r/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/) -> put_change(changeset, :type, "phone")
        String.match?(content, ~r/^\S+@\S+\.\S+$/) -> put_change(changeset, :type, "email")
        true -> put_change(changeset, :type, "none")
      end
    else
      changeset
    end
  end
end
