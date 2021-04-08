defmodule ExcyteWeb.Agent.Profile do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Agents.Contact, Agents.Profile}
  alias ExcyteWeb.{Helpers.SimpleS3Upload, Helpers.Utilities, AgentView}

  def render(assigns), do: AgentView.render("profile.html", assigns)

  def mount(_params, %{"return_to" => rt, "profile_id" => pid, "user_id" =>  uid}, socket) do
    profile = Agents.get_agent_profile(pid)
    contacts = if length(profile.contacts) > 0, do: profile.contacts, else: [%Contact{temp_id: Utilities.get_temp_id()}]
    action = if pid !== nil, do: :edit, else: :new
    cs =
      Agents.change_profile(profile)
      |> Ecto.Changeset.put_embed(:contacts, contacts)

    {:ok,
      assign(socket,
        changeset: cs,
        action: action,
        return_to: rt,
        current_user_id: uid,
        profile: profile)
      |> allow_upload(:photo, accept: ~w(.jpg .jpeg .png), external: &presign_upload/2)}
  end

  def handle_event("validate", %{"profile" => attrs}, socket) do
    existing_contacts = Map.get(socket.assigns.changeset.changes, :contacts, socket.assigns.profile.contacts)

    cs =
      Agents.change_profile(%Profile{}, Map.merge(attrs, %{"agent_id" => socket.assigns.current_user_id}))
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{"profile" => profile_params}, socket) do
    save_profile(socket, socket.assigns.action, filter_empty_contacts(profile_params))
  end

  def handle_event("add_contact", _, socket) do
    existing_contacts = Map.get(socket.assigns.changeset.changes, :contacts, socket.assigns.profile.contacts)
    contacts =
      existing_contacts
      |> Enum.concat([%Contact{temp_id: Utilities.get_temp_id()}])

    cs =
      socket.assigns.changeset
      |> Ecto.Changeset.put_embed(:contacts, contacts)

    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("remove_contact", %{"remove" => remove_id}, socket) do
    contacts =
      socket.assigns.changeset.changes.contacts
      |> Enum.reject(fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    changeset =
      socket.assigns.changeset
      |> Ecto.Changeset.put_embed(:contacts, contacts)

    {:noreply, assign(socket, changeset: changeset)}
  end

  def handle_info("sort_contacts", %{}, socket) do
    {:noreply, socket}
  end

  def ext(entry) do
    [ext | _] = MIME.extensions(entry.client_type)
    ext
  end

  def consume_photo(socket, %Profile{} = profile) do
    consume_uploaded_entries(socket, :photo, fn _meta, _entry -> :ok end)
    {:ok, profile}
  end

  defp filter_empty_contacts(profile_params) do
    contacts = Enum.filter(profile_params["contacts"], fn {k, v} ->
      if v["name"] !== "" && v["content"] !== "", do: true, else: false
    end)
    Map.merge(profile_params, %{"contacts" => contacts})
  end

  defp save_profile(socket, :new, profile_params) do
    profile =
      put_photo_url(socket, %Profile{})
    uid = socket.assigns.current_user_id
    attrs = Map.merge(profile_params, %{"agent_id" => uid})
    with {:ok, _profile} <- Agents.create_profile(profile, attrs, &consume_photo(socket, &1)),
         {:ok, _user} <- Accounts.update_user(uid, %{completed_setup: true}) do
      {:noreply,
        socket
        |> put_flash(:info, "Profile created successfully")
        |> push_redirect(to: socket.assigns.return_to)}
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
      err -> {:noreply, socket}
    end
  end

  defp save_profile(socket, :edit, profile_params) do
    profile = put_photo_url(socket, socket.assigns.profile)
    case Agents.update_profile(profile, profile_params, &consume_photo(socket, &1)) do
      {:ok, _profile} ->
        {:noreply,
          socket
          |> put_flash(:info, "Profile updated successfully")
          |> push_redirect(to: socket.assigns.return_to)}
        {:error, %Ecto.Changeset{} = changeset} ->
          {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp put_photo_url(socket, %Profile{} = profile) do
    {completed, []} = uploaded_entries(socket, :photo)
    %Profile{profile | photo_url: Path.join(s3_host(), s3_key(hd(completed), socket.assigns.current_user_id))}
  end

  @bucket "excyte"
  defp s3_host, do: "//#{@bucket}.s3.amazonaws.com"
  defp s3_key(entry, user_id), do: "agent_photos/#{user_id}/#{Utilities.get_temp_id()}.#{ext(entry)}"

  defp presign_upload(entry, socket) do
    uploads = socket.assigns.uploads
    key = s3_key(entry, socket.assigns.current_user_id)

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
