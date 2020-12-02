defmodule Excyte.Mls do
  @moduledoc """
  The Mls context.
  """

  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.Repo
  alias Excyte.Accounts.User
  alias Excyte.Mls.{Credential}

  def create_credential(attrs) do
    %Credential{}
    |> Credential.authorization_changeset(attrs)
    |> Repo.insert()
  end

  def destroy_credential(%{user_id: user_id, cred_id: cred_id}) do
    cred = Repo.get_by!(Credential, %{user_id: user_id, id: cred_id})

    case Repo.delete cred do
      {:ok, _} -> Repo.get!(User, user_id) |> Repo.preload([:account, :mls_credentials])
      {:error, changeset} -> {:error, changeset}
    end
  end

end
