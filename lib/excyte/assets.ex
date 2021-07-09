defmodule Excyte.Assets do
  import Ecto.Query, warn: false
  alias Excyte.Repo

  alias Excyte.{Assets.Asset}

  @topic inspect(__MODULE__)

  def subscribe(asset_uuid) do
    Phoenix.PubSub.subscribe(Excyte.PubSub, @topic <> "#{asset_uuid}")
  end

  def get_agent_assets(%{agent_id: aid, brokerage_id: bid}) do
    Asset.all_available_assets(aid, bid)
    |> Repo.all()
  end

  def create_asset(attrs) do
    %Asset{}
    |> Asset.changeset(attrs)
    |> Repo.insert()
  end

  def update_asset(uuid, attrs) do
    Repo.get_by!(Asset, %{uuid: uuid})
    |> Asset.changeset(attrs)
    |> Repo.update()
    |> notify_subscribers([:asset, :updated])
  end

  defp notify_subscribers({:ok, result}, event) do
    Phoenix.PubSub.broadcast(
      Excyte.PubSub,
      @topic <> "#{result.uuid}",
      {__MODULE__, event, result}
    )
    {:ok, result}
  end

  defp notify_subscribers({:error, reason}, _), do: {:error, reason}
end
