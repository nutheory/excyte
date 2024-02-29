defmodule ExcyteWeb.Property.Gallery do
  alias Excyte.Properties.Property
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Assets,
    Properties
  }

  alias ExcyteWeb.{Helpers.SimpleS3Upload, Property.FC, PropertyView}

  @impl true
  def render(assigns), do: PropertyView.render("gallery.html", assigns)

  @impl true
  def mount(%{"id" => id} = params, _sesh, %{assigns: a} = socket) do
    assets = Assets.get_property_assets(id)
    step = if params["step"] === "false" do
      false
    else
      true
    end
    IO.inspect(params, label: "PARAMS")
    {:ok,
     assign(socket,
       asset: nil,
       step: step,
       property_id: id,
       cover_uuid: nil,
       uploading: false,
       done: false,
       assets: assets
     )}
  end

  def handle_info({:receive_uploads, %{upload_url: url, name: name, asset: asset}}, %{assigns: a} = socket) do
    case Assets.update_asset(asset, %{property_id: a.property_id}) do
      {:ok, asset} -> {:noreply, assign(socket, asset: nil, assets: [asset | a.assets])}
      {:error, _} -> {:noreply, socket}
    end
  end

  def handle_info({:destroy_uploads, %{name: name}}, %{assigns: a} = socket) do
  #   destroy_url = Map.put(%{}, String.to_atom("#{name}_url"), "")
  #   with {:ok, profile} <- Agents.update_profile(a.profile, destroy_url),
  #        _ <- update_user_avatar?(a.current_user.id, %{upload_url: "", name: name}) do
  #     {:noreply, assign(socket, profile: profile)}
  #   else
  #     {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, socket}
  #   end
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

  def handle_event("select-cover-photo", %{"id" => id}, %{assigns: a} = socket) do
    IO.inspect(id, label: "ID")

    asset = Enum.find(a.assets, fn asset -> asset.id == String.to_integer(id) end)
    Properties.update_property(a.property_id, asset.uploaded_by_id, %{main_photo_url: asset.large_url})
    {:noreply, socket}
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
