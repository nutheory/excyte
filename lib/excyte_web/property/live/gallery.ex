defmodule ExcyteWeb.Property.Gallery do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Properties
  }

  alias ExcyteWeb.{Helpers.SimpleS3Upload, Property.FC, PropertyView}

  @impl true
  def render(assigns), do: PropertyView.render("gallery.html", assigns)

  @impl true
  def mount(%{"id" => id}, _sesh, %{assigns: a} = socket) do
    assets = Properties.get_property_assets(id)

    {:ok,
     assign(socket,
       asset: nil,
       property_id: id,
       cover_uuid: nil,
       uploading: false,
       done: false,
       assets: assets,
       uploaded_files: []
     )}
  end

  def handle_event("upload_and_save", params, socket) do
    # assign is_main_photo true to matching entry.uuid
    # Assets.create_upload
    IO.inspect(params, label: "PARAMS")
    {:noreply, socket}
  end

  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  def handle_event("select-cover-photo", %{"photo-id" => id}, socket) do
    {:noreply, assign(socket, cover_uuid: id)}
  end

  def handle_event("cancel-entry", %{"ref" => ref}, socket) do
    {:noreply, cancel_upload(socket, :photo, ref)}
  end

  def ext(entry) do
    [ext | _] = MIME.extensions(entry.client_type)
    ext
  end

  def error_to_string(:too_large), do: "Too large"
  def error_to_string(:too_many_files), do: "You have selected too many files"
  def error_to_string(:not_accepted), do: "You have selected an unacceptable file type"

  @bucket "excyte"
  defp s3_host, do: "//#{@bucket}.s3.amazonaws.com"

  defp s3_key(entry, property_id),
    do: "property_photos/#{property_id}/#{entry.uuid}.#{ext(entry)}"

  defp presign_entry(entry, %{assigns: a} = socket) do
    uploads = a.uploads
    key = s3_key(entry, a.property_id)

    config = %{
      region: "us-west-1",
      access_key_id: Application.get_env(:ex_aws, :access_key_id),
      secret_access_key: Application.get_env(:ex_aws, :secret_access_key)
    }

    {:ok, fields} =
      SimpleS3Upload.sign_upload_form(config, @bucket,
        key: key,
        content_type: entry.client_type,
        max_file_size: uploads.photo.max_file_size,
        expires_in: :timer.hours(2)
      )

    meta = %{uploader: "S3", key: key, url: s3_host(), fields: fields}
    {:ok, meta, socket}
  end
end
