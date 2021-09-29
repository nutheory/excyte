defmodule Excyte.Agents do
  import Ecto.Query, warn: false
  alias Excyte.Repo
  alias Excyte.{Utils.Contact, Agents.Profile}

  def get_agent_profile!(aid) do
    Repo.get_by(Profile, %{agent_id: aid})
  end

  def get_agent_profile(_repo, %{insight: insight}) do
    case Repo.get_by(Profile, %{agent_id: insight.created_by_id}) do
      %Profile{} = profile -> {:ok, profile}
      nil -> {:error, %{message: "Agent profile not found."}}
    end
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
