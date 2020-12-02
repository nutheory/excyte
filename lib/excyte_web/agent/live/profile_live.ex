defmodule ExcyteWeb.Agent.ProfileLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Agents, Agents.Contact, Agents.Profile}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("profile.html", assigns)

  def mount(_params, %{"user_token" => token} = sesh, socket) do
    cu = Accounts.get_user_by_session_token(token)
    profile_id = if Map.has_key?(sesh, :profile_id), do: sesh.profile_id, else: nil
    profile = Map.merge(Agents.get_profile(profile_id), %{agent_id: cu.id})
    cs =
        Agents.change_profile(profile)
        |> Ecto.Changeset.put_assoc(:contacts, [Agents.change_contact(%Contact{temp_id: get_temp_id()})])

    {:ok, assign(socket,
      changeset: cs,
      current_user: cu,
      profile: profile,
      uploaded_files: []
    )
    |> allow_upload(:photo, accept: ~w(.jpg .jpeg .png), external: &presign_upload/2)
  }
  end

  def handle_event("validate", %{"profile" => attrs}, socket) do
    existing_contacts = Map.get(socket.assigns.changeset.changes, :contacts, socket.assigns.profile.contacts)

    cs =
      Agents.change_profile(%Profile{}, Map.merge(attrs, %{"agent_id" => socket.assigns.current_user.id}))
      |> Map.put(:action, :insert)

    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("add_contact", _, socket) do
    existing_contacts = Map.get(socket.assigns.changeset.changes, :contacts, socket.assigns.profile.contacts)

    contacts =
      existing_contacts
      |> Enum.concat([%Contact{temp_id: get_temp_id()}])

    cs =
      socket.assigns.changeset
      |> Ecto.Changeset.put_assoc(:contacts, contacts)

    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{} = params, socket) do
    # agent_id: assigns.current_user.id
    # {:noreply, assign(socket)}
  end

  def handle_event("remove_contact", %{"remove" => remove_id}, socket) do
    IO.inspect(socket.assigns.changeset.changes.contacts, label: "DATA")
    contacts =
      socket.assigns.changeset.changes.contacts
      |> Enum.reject(fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    changeset =
      socket.assigns.changeset
      |> Ecto.Changeset.put_assoc(:contacts, contacts)

    {:noreply, assign(socket, changeset: changeset)}
  end

  def handle_event("validate_photo", _params, socket) do
    IO.inspect(label: "VALID")
    {:noreply, socket}
  end

  def handle_event("save_photo", _params, socket) do
    IO.inspect(label: "HERE")
    # uploaded_files =
    #   consume_uploaded_entries(socket, :photo, fn %{} = meta, _entry ->
    #     IO.inspect(meta, label: "PURL1")
    #     {:ok, presigned_url} =
    #       ExAws.Config.new(:s3)
    #       |> ExAws.S3.presigned_url(:get, meta.bucket, meta.key, expires_in: 86_400)
    #     IO.inspect(presigned_url, label: "PURL2")
    #     # presigned_url
    #   end)
    #   IO.inspect(uploaded_files, label: "UPPED")
    # {:noreply, update(socket, :uploaded_files, &(&1 ++ uploaded_files))}
    {:noreply, socket}
  end

  def handle_info("sort_contacts", %{} = attrs, socket) do
    {:noreply, socket}
  end

  defp get_temp_id, do: :crypto.strong_rand_bytes(5) |> Base.url_encode64 |> binary_part(0, 5)

  defp presign_upload(entry, socket) do
    bucket = "excyte"
    key = "public/#{entry.client_name}"

    {:ok, presigned_url} = ExAws.Config.new(:s3) |> ExAws.S3.presigned_url(:put, bucket, key)
    meta = %{uploader: "S3", bucket: bucket, key: key, url: presigned_url}
    IO.inspect(meta, label: "META")
    {:ok, meta, socket}
  end

end
