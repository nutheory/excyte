defmodule Excyte.Agents do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo

  alias Excyte.Agents.{Contact, Profile}

  def get_profile!(id) do
    Repo.get!(Profile, id)
    |> Repo.preload(contacts: from(c in Contact, order_by: c.id))
  end

  def get_profile(_profile_id), do: %Profile{contacts: []}

  def change_profile(%Profile{} = profile, attrs \\ %{}) do
    Profile.changeset(profile, attrs)
  end

  def change_contact(%Contact{} = contact, attrs \\ %{}) do
    Contact.changeset(contact, attrs)
  end

  def create_profile(%Profile{} = profile, attrs, after_save \\ &{:ok, &1}) do
    set_default_profile(attrs.agent_id, attrs)
    profile
    |> Profile.changeset(attrs)
    |> Repo.insert()
    |> after_save(after_save)
  end

  def update_profile(%Profile{} = profile, attrs, after_save \\ &{:ok, &1}) do
    set_default_profile(profile.agent_id, attrs)
    profile
    |> Profile.changeset(attrs)
    |> Repo.update()
    |> after_save(after_save)
  end

  defp after_save({:ok, profile}, func) do
    {:ok, _profile} = func.(profile)
  end
  defp after_save(error, _func), do: error

  defp set_default_profile(aid, attrs) do
    if attrs.default === true do
      Repo.get_by(Profile, %{agent_id: aid, default: true})
      |> Repo.update(%{default: false})
    end
  end
end
