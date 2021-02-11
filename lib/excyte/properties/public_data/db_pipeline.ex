defmodule Excyte.DbPipeline do
  alias Excyte.Properties

  @impl Crawly.Pipeline
  def run(item, state, _opts \\ []) do
    case Properties.create_property(item) do
      {:ok, _} ->
        # insert successful, carry on with pipeline
        {item, state}
      {:error, _} ->
        # insert not successful, drop from pipeline
        {false, state}
    end
  end
end
