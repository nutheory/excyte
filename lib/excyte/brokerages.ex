defmodule Excyte.Brokerages do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo

  alias Excyte.Brokerages.{Brokerage, Profile, Invitation}
  alias Excyte.{Utils.Contact}

  def create_brokerage(attrs) do
    %Brokerage{}
    |> Brokerage.changeset(attrs)
    |> Repo.insert()
  end

  def get_brokerage_profile!(bid) do
    Repo.get_by(Profile, %{brokerage_id: bid})
  end

  def get_brokerage_profile(_brokerage_id), do: %Profile{contacts: []}

  def get_invitations(brokerage_id) do
    Repo.get_by(Invitation, %{brokerage_id: brokerage_id})
  end

  def verify_invitation(%{email: email, token: token}) do

  end

  def change_invitation(%Invitation{} = invite, attrs \\ %{}) do
    Invitation.changeset(invite, attrs)
  end

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

  def create_invitation(attrs) do
    %Invitation{}
    |> Invitation.changeset(attrs)
    |> Repo.insert()
  end

  def update_profile(%Profile{} = profile, attrs, after_save \\ &{:ok, &1}) do
    profile
    |> Profile.changeset(attrs)
    |> Repo.update()
    |> after_save(after_save)
  end

  defp after_save({:ok, profile}, func) do
    {:ok, _profile} = func.(profile)
  end
  defp after_save(error, _func), do: error

end
