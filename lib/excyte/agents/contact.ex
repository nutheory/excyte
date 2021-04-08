defmodule Excyte.Agents.Contact do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field :temp_id, :string, virtual: true
    field :delete, :boolean, virtual: true
    field(:type, :string)
    field(:name, :string)
    field(:content, :string)
    field(:textable, :boolean)
    timestamps()
  end

  def changeset(contact, attrs) do
    contact
    |> Map.put(:temp_id, (contact.temp_id || attrs["temp_id"]))
    |> cast(attrs, [:name, :type, :textable, :content])
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
    if content do
      cond do
        String.match?(content, ~r/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) -> put_change(changeset, :type, "phone")
        String.match?(content, ~r/^\S+@\S+\.\S+$/) -> put_change(changeset, :type, "email")
        true -> put_change(changeset, :type, "none")
      end
    else
      changeset
    end
  end
end
