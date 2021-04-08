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
    |> Multi.run(:count, __MODULE__, :get_credential_count, [attrs])
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

  def update_current_mls(_repo, changes, %{agent_id: agent_id}) do
    Accounts.update_user(agent_id, %{current_mls: %{
      id: changes.save.id,
      dataset_id: changes.save.dataset_id,
      member_key: changes.save.member_key,
      access_token: changes.save.access_token,
      mls_name: changes.save.mls_name,
      count: changes.count
    }})
  end

  def get_credential_count(_repo, _changes, %{agent_id: agent_id}) do
    query =
      from c in Credential,
      where: c.agent_id == ^agent_id,
      select: count()

    {:ok, hd(Repo.all(query))}
  end

  def destroy_credential(%{agent_id: agent_id, cred_id: cred_id}) do
    user = Repo.get!(User, agent_id) |> Repo.preload([:mls_credentials])
    cred = Enum.find(user.mls_credentials, fn cred -> cred.id === cred_id end)
    case Repo.delete cred do
      {:ok, _} -> reset_after_destroy(%{agent_id: agent_id})
      {:error, changeset} -> {:error, changeset}
    end
  end

  def get_credentials(%{agent_id: agent_id}) do
    query =
      from c in Credential,
      where: c.agent_id == ^agent_id

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
    creds = get_credentials(%{agent_id: attrs.agent_id})

    new_attrs =
      if length(creds) > 0 do
        attrs
      else
        Map.merge(attrs, %{default: true})
      end

    {:ok, new_attrs}
  end

  defp reset_after_destroy(%{agent_id: agent_id}) do
    creds = get_credentials(%{agent_id: agent_id})
    user =
      if length(creds) > 0 do
        Accounts.update_user(agent_id, %{current_mls: %{
          id: hd(creds).id,
          dataset_id: hd(creds).dataset_id,
          access_token: hd(creds).access_token,
          member_key: hd(creds).member_key,
          mls_name: hd(creds).mls_name,
          count: length(creds)
        }})
      else
        Accounts.update_user(agent_id, %{current_mls: nil})
      end
    creds
  end
end
