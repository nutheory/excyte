defmodule Excyte.Utils.Address do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field :temp_id, :string, virtual: true
    field :delete, :boolean, virtual: true
    field(:name, :string)
    field(:address_one, :string)
    field(:address_two, :string)
    field(:city, :string)
    field(:state, :string)
    field(:zip, :string)
    timestamps()
  end

  def changeset(address, attrs) do
    address
    |> Map.put(:temp_id, (address.temp_id || attrs["temp_id"]))
    |> cast(attrs, [
      :name,
      :address_one,
      :address_two,
      :city,
      :state,
      :zip
    ])
    |> maybe_mark_for_deletion()
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset), do: changeset
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end
end
