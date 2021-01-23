defmodule Excyte.Mls do
  @moduledoc """
  The Mls context.
  """

  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo
  alias Excyte.{Accounts, Accounts.User}
  alias Excyte.Mls.{Credential}

  def create_credential(attrs) do
    Multi.new()
    |> Multi.run(:pre_check, __MODULE__, :change_cred_registration, [attrs])
    |> Multi.run(:maybe_merge, __MODULE__, :merge_default?, [attrs])
    |> Multi.run(:save, __MODULE__, :save_credential, [attrs])
    |> Multi.run(:update_user, __MODULE__, :update_current_mls, [attrs])
    |> Repo.transaction()
    |> case do
      {:ok, res} -> {:ok, res}
      {:error, method, changeset, _} -> {:error, changeset}
    end
  end

  def save_credential(_repo, _changes, attrs) do
    %Credential{}
    |> Credential.authorization_changeset(attrs)
    |> Repo.insert()
  end

  def update_current_mls(_repo, changes, attrs) do
    IO.inspect(changes, label: "CHANGES")
    Accounts.update_user(attrs.user_id, %{current_mls: %{
      id: changes.save.id,
      dataset_id: changes.save.dataset_id,
      access_token: changes.save.access_token
    }})
  end

  def destroy_credential(%{user_id: user_id, cred_id: cred_id}) do
    cred = Repo.get_by!(Credential, %{user_id: user_id, id: cred_id})

    case Repo.delete cred do
      {:ok, _} -> Repo.get!(User, user_id) |> Repo.preload([:account, :mls_credentials])
      {:error, changeset} -> {:error, changeset}
    end
  end

  def get_credentials(%{user_id: user_id}) do
    query = from c in Credential,
          where: c.user_id == ^user_id

    Repo.all(query)
  end

  def change_cred_registration(_repo, _changes, attrs \\ %{}) do
    reg = Credential.authorization_changeset(%Credential{}, attrs)

    if reg.valid? do
      {:ok, reg}
    else
      {:error, Map.put(reg, :action, :insert)}
    end
  end

  def merge_default?(_repo, _changes, attrs) do
    creds = get_credentials(%{user_id: attrs.user_id})

    new_attrs =
      if length(creds) > 0 do
        attrs
      else
        Map.merge(attrs, %{default: true})
      end

    {:ok, new_attrs}
  end
end
