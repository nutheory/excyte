defmodule Excyte.Properties.Feature do
  use Ecto.Schema
  import Ecto.Changeset

  @timestamps_opts [type: :utc_datetime]
  # @derive {Jason.Encoder, only: [:type, :name, :content, :textable]}
  defimpl Jason.Encoder, for: [Excyte.Properties.Feature] do
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
    field(:subject, :string)
    field(:content, :string)
    timestamps()
  end

  def changeset(feature, attrs) do
    Map.put(feature, :temp_id, (feature.temp_id || attrs["temp_id"]))
    |> cast(attrs, [:name, :subject, :content, :delete])
    |> validate_required([:name, :content])
    |> maybe_mark_for_deletion()
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
end
