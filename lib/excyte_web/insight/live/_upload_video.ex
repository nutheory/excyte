defmodule ExcyteWeb.Insight.UploadVideo do
  use ExcyteWeb, :live_component
  alias Excyte.{Activities, Assets}
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("upload_video.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      uuid: assigns.uuid,
      errors: [],
      video_form: %{title: "", description: ""}
    )}
  end

  def handle_event("create-new-video", %{"video_form" => vf}, %{assigns: a} = socket) do
    uuid = "#{a.uuid}_#{System.os_time(:second)}"
    with {:ok, asset} <- Assets.create_asset(%{
                          uuid: "#{a.uuid}_#{System.os_time(:second)}",
                          title: vf["title"],
                          description: vf["description"],
                          uploaded_by_id: a.current_user.id,
                          brokerage_id: a.current_user.brokerage_id
                        }),
         _ <- Assets.subscribe(uuid) do

      send self(), {Assets, [:asset, nil], asset}
      {:noreply,
        socket
        |> push_event("directUpload", %{uuid: uuid, aid: a.current_user.id, bid: a.current_user.brokerage_id})}
    else
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.Customize")
    end
  end

  def handle_event("validate-video-details", %{"video_form" => vf}, socket) do
    {:noreply, assign(socket, video_form: %{title: vf["title"], description: vf["description"]})}
  end
end
