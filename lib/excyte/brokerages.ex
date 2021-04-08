defmodule Excyte.Brokerages do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo

  alias Excyte.Brokerages.{Brokerage}

  def create_brokerage(attrs) do
    %Brokerage{}
    |> Brokerage.changeset(attrs)
    |> Repo.insert()
  end

end
