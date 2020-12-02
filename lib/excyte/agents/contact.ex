defmodule Excyte.Agents.Contact do
  use Ecto.Schema
  import Ecto.Changeset

  schema "contacts" do
    field(:temp_id, :string, virtual: true)
    field(:delete, :boolean, virtual: true)
    field(:type, :string)
    field(:name, :string)
    field(:ext, :string)
    field(:content, :string)
    field(:textable, :boolean)
  end

  def changeset(contact, attrs) do
    contact
    |> Map.put(:temp_id, (contact.temp_id || attrs["temp_id"]))
    |> cast(attrs, [:type, :name, :content, :ext, :delete])
    |> validate_required([:type, :name, :content])
    |> maybe_mark_for_deletion()
    # |> validate_phone_number()
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset), do: changeset
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end

  defp validate_phone_number(contact) do
    IO.inspect(contact, label: "con")
    # if t === "phone" do
    #   # validate phone
    #   contact
    # else
    #   contact
    # end
  end
end
