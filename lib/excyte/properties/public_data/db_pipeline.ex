defmodule Excyte.DbPipeline do
  alias Excyte.Properties

  @impl Crawly.Pipeline
  def run(item, state, _opts \\ []) do
    case Properties.create_property(item) do
      {:ok, res} ->
        IO.inspect(res, label: "RESS")
        # insert successful, carry on with pipeline
        {item, state}
      {:error, err} ->
        IO.inspect(err, label: "Error")
        # insert not successful, drop from pipeline
        {false, state}
    end
  end
end
