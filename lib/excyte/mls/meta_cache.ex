defmodule Excyte.Mls.MetaCache do
  use GenServer

  def start_link(_) do
    GenServer.start_link(__MODULE__, %{}, name: MlsMetaCache)
  end

  def init(state) do
    :ets.new(:meta_cache, [:set, :public, :named_table])
    {:ok, state}
  end

  def delete(key) do
    GenServer.cast(MlsMetaCache, {:delete, key})
  end

  def get(key) do
    GenServer.call(MlsMetaCache, {:get, key})
  end

  def put(key, data) do
    GenServer.cast(MlsMetaCache, {:put, key, data})
  end

  ### API
  def handle_call({:get, key}, _from, state) do
    reply =
      case :ets.lookup(:meta_cache, key) do
        [] -> nil
        [{_key, meta}] -> meta
      end
    {:reply, reply, state}
  end

  def handle_cast({:delete, key}, state) do
    :ets.delete(:meta_cache, key)
    {:noreply, state}
  end

  def handle_cast({:put, key, data}, state) do
    :ets.insert(:meta_cache, {key, data})
    {:noreply, state}
  end
end
