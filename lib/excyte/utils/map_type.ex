defmodule Excyte.Utils.MapType do
  use Ecto.Type
  def type, do: :map
  def cast(m) when is_map(m) do
    {:ok, Map.new(m, fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), v}
      else
        {k, v}
      end
    end)}
  end
  def cast(_), do: :error
  def load(m) when is_map(m) do
    {:ok, Map.new(m, fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), v}
      else
        {k, v}
      end
    end)}
  end
  def dump(m) when is_map(m), do: {:ok, m}
  def dump(_), do: :error
end
