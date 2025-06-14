defmodule Excyte.Brokerages do
  import Ecto.Query, warn: false
  alias Excyte.Repo

  alias Excyte.Brokerages.{Brokerage, Profile}
  alias Excyte.{
    Accounts.User,
    Utils.ContactItem
  }

  def create_brokerage(attrs) do
    %Brokerage{}
    |> Brokerage.changeset(attrs)
    |> Repo.insert()
  end

  def get_brokerage_profile(_repo, %{insight: insight}) do
    if is_nil(insight.brokerage_id) do
      {:ok, nil}
    else
      case Repo.get_by(Profile, %{brokerage_id: insight.brokerage_id}) do
        %Profile{} = profile -> {:ok, profile}
        nil -> {:ok, nil}
      end
    end
  end

  def get_brokerage_profile(bid) do
    Repo.get_by(Profile, %{brokerage_id: bid})
  end



  def get_invitations(bk_id) do
    query =
      from(u in User,
        where: u.brokerage_id == ^bk_id and not(is_nil(u.invited_by_id))
      )
    Repo.all(query)
  end

  # def verify_invitation(%{email: email, token: token}) do

  # end

  def change_profile(%Profile{} = profile, attrs \\ %{}) do
    Profile.changeset(profile, attrs)
  end

  def change_contact(%ContactItem{} = contact, attrs \\ %{}) do
    ContactItem.changeset(contact, attrs)
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
    # |> after_save(after_save)
  end

  # defp after_save({:ok, profile}, func) do
  #   {:ok, _profile} = func.(profile)
  # end
  # defp after_save(error, _func), do: error

end
