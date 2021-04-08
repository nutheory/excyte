defmodule Excyte.Agents do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo

  alias Excyte.Agents.{Contact, Profile}

  def get_agent_profile!(aid) do
    Repo.get_by(Profile, %{agent_id: aid} )
    |> Repo.preload(contacts: from(c in Contact, order_by: c.id))
  end

  def get_agent_profile(_agent_id), do: %Profile{contacts: []}

  def change_profile(%Profile{} = profile, attrs \\ %{}) do
    Profile.changeset(profile, attrs)
  end

  def change_contact(%Contact{} = contact, attrs \\ %{}) do
    Contact.changeset(contact, attrs)
  end

  def create_profile(%Profile{} = profile, attrs) do
    profile
    |> Profile.changeset(attrs)
    |> Repo.insert()
  end

  def update_profile(%Profile{} = profile, attrs) do
    profile
    |> Profile.changeset(attrs)
    |> Repo.update()
  end
end
