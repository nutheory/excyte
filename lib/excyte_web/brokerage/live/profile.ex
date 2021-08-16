defmodule ExcyteWeb.Brokerage.Profile do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Brokerages, Utils.Contact, Brokerages.Profile, Mls.ResoOfficeApi}
  alias ExcyteWeb.{Helpers.SimpleS3Upload, Helpers.Utilities, BrokerageView}

  def render(assigns), do: BrokerageView.render("profile.html", assigns)

  def mount(_params, %{"user_token" => token, "return_to" => rt}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    brokerage_profile = Brokerages.get_brokerage_profile(cu.brokerage_id)
    cs = maybe_attempt_prefill?(brokerage_profile, cu.current_mls)
    {:ok,
      assign(socket,
        changeset: cs,
        cu_id: cu.id,
        return_to: rt,
        logo_url: brokerage_profile.logo_url,
        profile: brokerage_profile)
      |> allow_upload(:logo, accept: ~w(.jpg .jpeg .png), max_file_size: 2_000_000, external: &presign_upload/2)}
  end

  def handle_event("validate", %{"profile" => attrs}, %{assigns: a} = socket) do
    cs = Brokerages.change_profile(a.profile, attrs)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{"profile" => profile_params}, socket) do
    save_profile(socket, filter_empty_contacts(profile_params))
  end

  def handle_event("toggle-logo-delete", _, %{assigns: a} = socket) do
    if a.logo_url === nil do
      {:noreply, assign(socket, logo_url: a.profile.logo_url)}
    else
      {:noreply, assign(socket, logo_url: nil)}
    end
  end

  def handle_event("add-contact", _, %{assigns: a} = socket) do
    existing_contacts = Map.get(a.changeset.changes, :contacts, a.profile.contacts)
    contacts =
      existing_contacts
      |> Enum.concat([%Contact{temp_id: Utilities.get_temp_id()}])

    cs = a.changeset |> Ecto.Changeset.put_embed(:contacts, contacts)

    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("remove-contact", %{"remove" => remove_id}, %{assigns: a} = socket) do
    contacts =
      Enum.reject(a.changeset.changes.contacts, fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    cs = Ecto.Changeset.put_embed(a.changeset, :contacts, contacts)

    {:noreply, assign(socket, changeset: cs)}
  end

  def ext(entry) do
    [ext | _] = MIME.extensions(entry.client_type)
    ext
  end

  def consume_logo(socket, %Profile{} = profile) do
    consume_uploaded_entries(socket, :logo, fn _meta, _entry -> :ok end)
    {:ok, profile}
  end

  defp filter_empty_contacts(profile_params) do
    contacts =
      Enum.filter(profile_params["contacts"], fn {_k, v} ->
        if v["name"] !== "" && v["content"] !== "", do: true, else: false
      end) |> Enum.map(fn {_k, v} -> v end)

    Map.merge(profile_params, %{"contacts" => contacts})
  end

  defp maybe_attempt_prefill?(profile, mls) do
    if profile.updated_by_user === false && Map.has_key?(mls, :office_key) && mls.office_key do
      mls_details = ResoOfficeApi.getOfficeDetails(mls)
      mls_contacts = Enum.map(mls_details.contacts, fn cnt ->
        %Contact{
          temp_id: Utilities.get_temp_id(),
          name: cnt.name,
          content: cnt.content,
          type: Utilities.assign_contact_type(cnt.content)
        }
      end)

      contacts = profile.contacts ++ mls_contacts
      Brokerages.change_profile(profile, mls_details)
      |> Ecto.Changeset.put_embed(:contacts, contacts)
      |> Map.put(:action, :validate)
    else
      contacts = if length(profile.contacts) > 0, do: profile.contacts, else: [%Contact{temp_id: Utilities.get_temp_id()}]
      Brokerages.change_profile(profile)
      |> Ecto.Changeset.put_embed(:contacts, contacts)
    end
  end

  @bucket "excyte"
  defp s3_host, do: "//#{@bucket}.s3.amazonaws.com"
  defp s3_key(entry, user_id), do: "brokerage_logos/#{user_id}/#{Utilities.get_temp_id()}.#{ext(entry)}"

  defp presign_upload(entry, socket) do
    uploads = socket.assigns.uploads
    key = s3_key(entry, socket.assigns.cu_id)

    config = Application.get_env(:excyte, :aws)

    {:ok, fields} =
      SimpleS3Upload.sign_form_upload(config, @bucket,
        key: key,
        content_type: entry.client_type,
        max_file_size: uploads.logo.max_file_size,
        expires_in: :timer.hours(1)
      )

    meta = %{uploader: "S3", key: key, url: s3_host(), fields: fields}
    {:ok, meta, assign(socket, logo_url: key)}
  end

  defp save_profile(%{assigns: a} = socket, profile_params) do
    logo = logo_url(socket)
    attrs = Map.merge(profile_params, %{ "updated_by_user" => "true", "logo_url" => logo })
    case Brokerages.update_profile(a.profile, attrs, &consume_logo(socket, &1)) do
      {:ok, _profile} -> {:noreply, put_flash(socket, :info, "Brokerage Profile updated successfully")
                                    |> push_redirect(to: a.return_to)}
      {:error, %Ecto.Changeset{} = changeset} -> {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp logo_url(%{assigns: a} = socket) do
    if a.logo_url do
      key = String.replace(a.logo_url, s3_host(), "")
      Path.join(s3_host(), key)
    else
      nil
    end
  end
end
