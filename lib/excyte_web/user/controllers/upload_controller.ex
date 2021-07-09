defmodule ExcyteWeb.UploadController do
  use ExcyteWeb, :controller
  alias Excyte.Assets

  def aws_auth(conn, params) do
    aws = Application.get_env(:excyte, :aws)
    config = %{
      region: "us-west-1",
      access_key_id: aws.access_key_id,
      secret_access_key: aws.secret_access_key
    }

    expires = String.slice(params["datetime"], 0..7)
    signature = ExcyteWeb.Helpers.SimpleS3Upload.signature(config, expires, params["to_sign"])
    text(conn, signature)
  end

  def mux_auth_url(conn, params) do
    IO.inspect(params, label: "PAR")
    client = Mux.client()
    mux_params = %{
      new_asset_settings: %{
        passthrough: params["uuid"],
        playback_policies: ["public"]
      },
      cors_origin: Application.get_env(:excyte, :base_url)
    }

  url =
    with {:ok, res, _} <- Mux.Video.Uploads.create(client, mux_params),
         {:ok, asset} <- Assets.create_asset(%{
                           uploaded_by_id: params["agent_id"],
                           brokerage_id: params["brokerage_id"],
                           uuid: params["uuid"],
                           content_type: params["type"],
                           type: "video",
                           size: params["size"],
                           original_name: params["name"],
                           source_id: res["id"],
                           status: res["status"]
                         }) do
        IO.inspect(res, label: "res")
        IO.inspect(asset, label: "asset")
        res["url"]
    else
      {:error, err} -> err
      boom -> IO.inspect(boom, "BOOM")
    end

    IO.inspect(url, label: "RES")
    text(conn, url)
  end
end
