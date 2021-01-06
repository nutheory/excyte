defmodule ExcyteWeb.Components.OldEditorLive do
  use ExcyteWeb, :live_component

  alias Excyte.{Accounts, Insights}
  alias ExcyteWeb.{Helpers.SimpleS3Upload, ComponentView}

  def render(assigns), do: ComponentView.render("editor.html", assigns)

  def mount(socket) do
    {:ok, allow_upload(socket, :photo,
        accept: ~w(.jpg .jpeg .png),
        auto_upload: true,
        external: &presign_upload/2)}
  end

  def update(assigns, socket) do
    section = Insights.get_section(1)

    # {:ok, push_event(socket, "loadContentFromDb", %{content: section})}
    {:ok, assign(socket, current_user: assigns.current_user, doc: section)}
  end

  def ext(entry) do
    [ext | _] = MIME.extensions(entry.client_type)
    ext
  end

  def handle_event("editor-update", params, socket) do
    IO.inspect(params, label: "INP")
    {:noreply, assign(socket, doc: params)}
  end

  def handle_event("editor-save", params, socket) do
    IO.inspect(params, label: "SAVE")
    {:ok, res} = Insights.create_document(%{
      "content" => [params],
      "title" => "CMA Cover",
      "created_by_id" => socket.assigns.current_user.id
    })
    {:noreply, assign(socket, doc: params)}
  end

  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  def handle_event("save_photo", params, socket) do
    IO.inspect(params, label: "HERE")
    uploaded_files =
      consume_uploaded_entries(socket, :photo, fn _meta, _entry -> :ok end)
    IO.inspect(uploaded_files, label: "UPPED")
    # {:noreply, update(socket, :uploaded_files, &(&1 ++ uploaded_files))}
    {:noreply, socket}
  end

  @bucket "excyte"
  defp s3_host, do: "//#{@bucket}.s3.amazonaws.com"
  defp s3_key(entry, user_id), do: "insights/cma/#{user_id}/#{get_temp_id}.#{ext(entry)}"

  defp get_temp_id, do: :crypto.strong_rand_bytes(5) |> Base.url_encode64 |> binary_part(0, 5)

  defp presign_upload(entry, socket) do
    uploads = socket.assigns.uploads
    key = s3_key(entry, socket.assigns.current_user.id)

    config = Application.get_env(:excyte, :aws)

    {:ok, fields} =
      SimpleS3Upload.sign_form_upload(config, @bucket,
        key: key,
        content_type: entry.client_type,
        max_file_size: uploads.photo.max_file_size,
        expires_in: :timer.hours(1)
      )

    meta = %{uploader: "S3", key: key, url: s3_host(), fields: fields}
    {:ok, meta, socket}
  end

end
