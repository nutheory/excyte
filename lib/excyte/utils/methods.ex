defmodule Excyte.Utils.Methods do
  def stringify_keys(nil), do: nil

  def stringify_keys(schema = %{__meta__: _}), do: schema
  def stringify_keys(struct = %{struct: _}), do: struct

  def stringify_keys(map = %{}) do
    map
    |> Enum.map(fn {k, v} ->
      if is_map(v) || is_list(v) do
        {stringify_keys(k), Jason.encode!(v)}
      else
        {stringify_keys(k), stringify_keys(v)}
      end
    end)
    |> Enum.into(%{})
  end

  defp stringify_key(key) when is_atom(key), do: Atom.to_string(key)
  defp stringify_key(key), do: key

  # Walk the list and stringify the keys of
  # of any map members
  def stringify_keys([head | rest]) do
    [stringify_keys(head) | stringify_keys(rest)]
  end

  def stringify_keys(not_a_map) do
    not_a_map
  end
end
