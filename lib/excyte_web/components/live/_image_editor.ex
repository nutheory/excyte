defmodule ExcyteWeb.Components.ImageEditor do
  use ExcyteWeb, :live_component
  alias Excyte.{Assets}
  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("image_editor.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      show_image_panel: assigns.show_image_panel,
      aspect_ratio: assigns.aspect_ratio,
      upload_text: assigns.upload_text,
      width: assigns.width,
      height: assigns.height,
      name: assigns.name,
      model: assigns.model,
      model_id: assigns.model_id,
      bucket: assigns.bucket,
      title: assigns.title,
      image_url: assigns.image_url
    )}
  end

  def handle_event("toggle-upload-editor-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_image_panel: !a.show_image_panel)}
  end

  def handle_event("uploader-callback", upload, %{assigns: a} = socket) do
    url = Utilities.build_url("#{upload["bucket"]}/#{a.model_id}/#{upload["filename"]}")
    case Assets.create_asset(%{
      uploaded_by_id: a.current_user.id,
      brokerage_id: a.current_user.brokerage_id,
      content_type: upload["type"],
      title: a.title,
      type: a.model,
      description: a.name,
      large_url: url,
      size: upload["size"],
      source: "aws"
    }) do
      {:ok, asset} -> send self(), {:receive_uploads, %{upload_url: url, name: upload["name"], asset: asset}}
      {:error, err} -> IO.inspect(err, label: "BOOMMMMMM")
    end
    {:noreply, assign(socket, show_image_panel: !a.show_image_panel)}
  end

  @impl true
  def handle_event("destroy-callback", %{"url" => u, "name" => name}, %{assigns: a} = socket) do
    url = Utilities.dissect_url(u)
    with {:ok, _} <- ExAws.request(ExAws.S3.delete_object("excyte", url.full)),
         _ <- Assets.delete_local_aws_asset(a.current_user.id, u) do
      send self(), {:destroy_uploads, %{name: name}}
    else
      {:error, _} -> nil
      _ -> nil
    end
    {:noreply, socket}
  end
end
