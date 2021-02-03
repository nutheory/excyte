defmodule Excyte.Mls.CurrentMlsType do
  use Ecto.Type
  def type, do: :map
  def cast(mls_summary) when is_map(mls_summary) do
    {:ok, Map.new(mls_summary, fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), v}
      else
        {k, v}
      end
    end)}
  end
  def cast(_), do: :error
  def load(mls_summary) when is_map(mls_summary) do
    {:ok, Map.new(mls_summary, fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), v}
      else
        {k, v}
      end
    end)}
  end
  def dump(mls_summary) when is_map(mls_summary), do: {:ok, mls_summary}
  def dump(_), do: :error
end
