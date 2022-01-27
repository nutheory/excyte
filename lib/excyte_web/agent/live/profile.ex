defmodule ExcyteWeb.Agent.Profile do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Accounts, Agents,
    Utils.ContactItem,
    Mls.ResoMemberApi
  }
  alias ExcyteWeb.{
    Helpers.Utilities,
    AgentView
  }

  def render(assigns), do: AgentView.render("profile.html", assigns)


  def mount(_params, %{"return_to" => rt, "user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    profile = Agents.get_agent_profile!(cu.id)
    # if cu.current_mls === nil || Enum.empty?(cu.current_mls) do
    #   {:ok, push_redirect(socket, to: "/agent/getting-started")}
    # else
      cs = maybe_attempt_prefill?(profile, cu.current_mls)
      {:ok, assign(socket,
        changeset: cs,
        current_user: cu,
        return_to: rt,
        profile: profile)}
    # end
  end

  def handle_info({:receive_uploads, %{upload_url: url, name: name}}, %{assigns: a} = socket) do
    upload_url = Map.put(%{}, String.to_atom("#{name}_url"), url)
    with {:ok, profile} <- Agents.update_profile(a.profile, upload_url),
         _ <- update_user_avatar?(a.current_user.id, %{upload_url: url, name: name}) do
      {:noreply, assign(socket, profile: profile)}
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def handle_info({:destroy_uploads, %{name: name}}, %{assigns: a} = socket) do
    destroy_url = Map.put(%{}, String.to_atom("#{name}_url"), "")
    with {:ok, profile} <- Agents.update_profile(a.profile, destroy_url),
         _ <- update_user_avatar?(a.current_user.id, %{upload_url: "", name: name}) do
      {:noreply, assign(socket, profile: profile)}
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def handle_event("validate", %{"profile" => attrs}, %{assigns: a} = socket) do
    cs = Agents.change_profile(a.profile, attrs) |> Map.put(:action, :validate)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("add-contact", _, %{assigns: a} = socket) do
    existing_contacts = Map.get(a.changeset.changes, :contact_items, a.profile.contact_items)
    contacts =
      existing_contacts
      |> Enum.concat([%ContactItem{temp_id: Utilities.get_temp_id()}])

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("remove-contact", %{"remove" => remove_id}, %{assigns: a} = socket) do
    contacts =
      Enum.reject(a.changeset.changes.contact_items, fn %{data: contact} ->
        contact.temp_id == remove_id
      end)

    cs = Ecto.Changeset.put_embed(a.changeset, :contact_items, contacts)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{"profile" => profile_params}, %{assigns: a} = socket) do
    params = filter_empty_contacts(profile_params)
    with {:ok, _} <- Agents.update_profile(a.profile, Map.merge(params, %{ "updated_by_user" => true})),
         {:ok, _} <- Accounts.update_user(a.current_user.id, %{current_avatar: a.profile.photo_url}) do
      {:noreply, put_flash(socket, :info, "Profile updated successfully") |> push_redirect(to: a.return_to)}
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp update_user_avatar?(uid, %{upload_url: url, name: name}) do
    if name === "photo", do: Accounts.update_user(uid, %{current_avatar: url})
  end

  defp filter_empty_contacts(profile_params) do
    contacts =
      Enum.filter(profile_params["contact_items"], fn {_k, v} ->
        if v["name"] !== "" && v["content"] !== "", do: true, else: false
      end) |> Enum.map(fn {_k, v} -> v end)

    Map.merge(profile_params, %{"contact_items" => contacts})
  end

  defp maybe_attempt_prefill?(profile, mls) do
    if profile.updated_by_user === false && Map.has_key?(mls, :member_key) && mls.member_key do
      mls_details = ResoMemberApi.getMemberDetails(mls)
      mls_contacts = Enum.map(mls_details.contacts, fn cnt ->
        %ContactItem{
          temp_id: Utilities.get_temp_id(),
          name: cnt.name,
          content: cnt.content,
          type: Utilities.assign_contact_type(cnt.content)
        }
      end)

      contacts = profile.contact_items ++ mls_contacts
      Agents.change_profile(profile, mls_details)
      |> Ecto.Changeset.put_embed(:contact_items, contacts)
      # |> Map.put(:action, :validate)
    else
      contacts = if length(profile.contact_items) > 0, do: profile.contact_items, else: [%ContactItem{temp_id: Utilities.get_temp_id()}]
      Agents.change_profile(profile)
      |> Ecto.Changeset.put_embed(:contact_items, contacts)
    end
  end
end
