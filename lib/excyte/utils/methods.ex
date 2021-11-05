defmodule Excyte.Utils.Methods do
  alias Excyte.Utils.{
    AddressItem,
    ContactItem,
    Theme
  }

  def stringify_keys(nil), do: nil

  def stringify_keys(schema = %{__meta__: _}), do: schema
  def stringify_keys(struct = %{struct: _}), do: struct

  def stringify_keys(date = %DateTime{}), do: date
  def stringify_keys(address = %AddressItem{}), do: Map.from_struct(address)
  def stringify_keys(contact = %ContactItem{}), do: Map.from_struct(contact)
  def stringify_keys(theme = %Theme{}), do: Map.from_struct(theme)

  def stringify_keys(map = %{}) do
    map
    |> Enum.map(fn {k, v} -> {stringify_key(k), stringify_keys(v)} end)
    |> Enum.into(%{})
  end

  defp stringify_key(key) when is_atom(key), do: to_string(key)
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
