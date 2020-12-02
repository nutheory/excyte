defmodule Excyte.Insight.Cache do
  use GenServer

  def start_link(_) do
    GenServer.start_link(__MODULE__, %{}, name: InsightCache)
  end

  def init(state) do
    :ets.new(:insight_cache, [:set, :public, :named_table])
    {:ok, state}
  end

  def delete(key) do
    GenServer.cast(InsightCache, {:delete, key})
  end

  def get(key) do
    GenServer.call(InsightCache, {:get, key})
  end

  def put(key, data) do
    GenServer.cast(InsightCache, {:put, key, data})
  end

  ### API
  def handle_call({:get, key}, _from, state) do
    reply =
      case :ets.lookup(:insight_cache, key) do
        [] -> nil
        [{_key, insight_item}] -> insight_item
      end
    {:reply, reply, state}
  end

  def handle_cast({:delete, key}, state) do
    :ets.delete(:insight_cache, key)
    {:noreply, state}
  end

  def handle_cast({:put, key, data}, state) do
    :ets.insert(:insight_cache, {key, data})
    {:noreply, state}
  end
end
