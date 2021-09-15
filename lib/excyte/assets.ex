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

  def get_agent_videos(%{agent_id: aid, brokerage_id: bid}) do
    Asset.all_available_videos(aid, bid)
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

  def delete_local_aws_asset(uid, url) do
    case Repo.get_by(Asset, %{uploaded_by_id: uid, large_url: url}) do
      %Asset{} = ast -> Repo.delete(ast)
      nil -> nil
    end
  end

  def delete_video_asset(uid, asset_id) do
    client = Mux.client()
    with %Asset{} = asset <- Repo.get_by!(Asset, %{uploaded_by_id: uid, id: asset_id}),
         {:ok, _, _env} <- Mux.Video.Assets.delete(client, asset.source_id),
         {:ok, struct} <- Repo.delete(asset) do
      {:ok, struct}
    else
      {:error, "invalid_parameters", _} ->
        Repo.get_by!(Asset, %{uploaded_by_id: uid, id: asset_id})
        |> Repo.delete()
      {:error, "not_found", ["Not Found"]} ->
        Repo.get_by!(Asset, %{uploaded_by_id: uid, id: asset_id})
        |> Repo.delete()
      {:error, err} -> IO.inspect(err, label: "ERR")
    end
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
