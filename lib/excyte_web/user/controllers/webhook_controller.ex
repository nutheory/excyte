defmodule ExcyteWeb.WebhookController do
  use ExcyteWeb, :controller
  alias Excyte.{Accounts, Activities, Assets}

  def stripe_incoming(conn, _params) do
    secret = Application.get_env(:excyte, :stripe_signing_secret)
    signature = List.first(get_req_header(conn, "stripe-signature"))
    payload = List.first(conn.assigns.raw_body)
    case Stripe.Webhook.construct_event(payload, signature, secret) do
      {:ok, %Stripe.Event{} = event} ->
        case event.type do
          # "invoice.paid" -> update_account_standing(event)
          "customer.subscription.deleted" -> subscription_deleted(event)
          "customer.subscription.updated" -> subscription_updated(event)
          _ -> nil
        end

      {:error, reason} ->
        IO.inspect(reason, label: "RE")
    end
    send_resp(conn, 200, "")
  end

  def checkout_success(conn, params) do
    IO.inspect(conn, label: "Conn")
    IO.inspect(params, label: "PAR")
    send_resp(conn, 200, "")
  end

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

  defp save_created_video(%{"data" => data}) do
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

  defp subscription_deleted(%{data: %{object: sub}}) do
    IO.inspect(sub, label: "TESTING HOOK")
    Accounts.soft_delete_account(%{
      account_id: sub.metadata["excyte_account_id"],
      subscription_id: sub.id
    })
  end

  # defp update_account_standing(%{data: %{object: inv}}) do
  #   line_item = hd(inv.lines.data)
  #   Accounts.update_account_subscription(inv.subscription, %{
  #     current_period_end:

  #   }})
  # end

  defp subscription_updated(_ev) do
    nil
  end
end
