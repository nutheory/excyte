defmodule Excyte.Properties do
  import Ecto.Query, warn: false
  alias Excyte.{Properties.Property, Repo}

  def create_property(attrs) do
    %Property{}
    |> Property.changeset(attrs)
    |> IO.inspect(label: "Attrs")
    |> Repo.insert()
  end

  def update_property(id, attrs) do
    prop = Repo.get_by(Property, %{id: id})

    Property.changeset(prop, attrs)
    |> Repo.insert()
  end
end
