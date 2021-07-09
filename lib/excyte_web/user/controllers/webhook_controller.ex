defmodule ExcyteWeb.WebhookController do
  use ExcyteWeb, :controller
  alias Excyte.{Activities, Assets}

  def mux_incoming(conn, params) do
    secret = Application.get_env(:mux, :signing_secret)
    signature_header = List.first(get_req_header(conn, "mux-signature"))
    raw_body = List.first(conn.assigns.raw_body)
    case Mux.Webhooks.verify_header(raw_body, signature_header, secret) do
      :ok -> case params["type"] do
              "video.upload.created" -> IO.inspect(params, label: "PROC")
              "video.asset.ready" -> save_created_video(params)
              _ -> IO.inspect(params, label: "Passed")
             end
        _ -> nil
    end
    send_resp(conn, 200, "")
  end

  def save_created_video(%{"data" => data}) do
    stream = hd(data["playback_ids"])
    case Assets.update_asset(data["passthrough"], %{
      source_id: data["id"],
      status: data["status"],
      stream_id: stream["id"],
      thumb_url: "https://image.mux.com/#{stream["id"]}/thumbnail.jpg",
      large_url: "https://image.mux.com/#{stream["id"]}/animated.gif?width=640&fps=5",
      video_url: "https://stream.mux.com/#{stream["id"]}.m3u8",
      source: "mux"
    }) do
      {:ok, _} -> nil
      {:error, err} -> Activities.handle_errors(err, "WebhookController.save_created_video")
    end
  end
end
