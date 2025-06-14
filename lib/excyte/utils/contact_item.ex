defmodule Excyte.Utils.ContactItem do
  use Ecto.Schema
  import Ecto.Changeset

  @timestamps_opts [type: :utc_datetime]
  # @derive {Jason.Encoder, only: [:type, :name, :content, :textable]}
  defimpl Jason.Encoder, for: [Excyte.Utils.ContactItem] do
    def encode(struct, opts) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Jason.Encode.map(opts)
    end
  end

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
    |> cast(attrs, [:name, :type, :textable, :content, :delete])
    |> validate_required([:name, :content])
    |> maybe_mark_for_deletion()
    |> assign_type()
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset) do
    changeset
  end
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end

  defp assign_type(changeset) do
    content = get_change(changeset, :content)
    type = get_change(changeset, :type)
    if content && type === nil do
      cond do
        String.match?(content, ~r/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/) -> put_change(changeset, :type, "phone")
        String.match?(content, ~r/^\S+@\S+\.\S+$/) -> put_change(changeset, :type, "email")
        String.match?(content, ~r/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/) -> put_change(changeset, :type, "url")
        true -> put_change(changeset, :type, "")
      end
    else
      changeset
    end
  end
end
