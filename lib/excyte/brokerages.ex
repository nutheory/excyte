defmodule Excyte.Brokerages do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo

  alias Excyte.Brokerages.{Brokerage, Profile}
  alias Excyte.{Accounts.User, Utils.Contact}

  def create_brokerage(attrs) do
    %Brokerage{}
    |> Brokerage.changeset(attrs)
    |> Repo.insert()
  end

  def get_brokerage_profile!(bid) do
    Repo.get_by(Profile, %{brokerage_id: bid})
  end

  def get_invitations(bk_id) do
    query =
      from(u in User,
        where: u.brokerage_id == ^bk_id and not(is_nil(u.invited_by_id))
      )
    Repo.all(query)
  end

  def verify_invitation(%{email: email, token: token}) do

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
