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
end
