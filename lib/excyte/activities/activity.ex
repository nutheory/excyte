defmodule Excyte.Activities.Activity do
  @moduledoc """
    Activity schema
  """

  use Ecto.Schema
  @timestamps_opts [type: :utc_datetime]
  import Ecto.Changeset
  import Ecto.Query
  alias Excyte.{
    Accounts.Account,
    Accounts.User,
    Agents.Profile,
    Brokerages.Brokerage,
    Utils.MapType,
    Repo
  }


  schema "activities" do
    field :name, :string
    field :description, :string
    field :type, :string
    field :status, :string, default: "new"
    field :seen_by_ids, {:array, :string}
    field :details, MapType
    belongs_to(:account, Account)
    belongs_to(:agent, User)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:insight, Insight)
    belongs_to(:client, Client)

    timestamps()
  end

  def changeset(activity, attrs) do
    activity
    |> cast(attrs, [
      :name,
      :description,
      :seen_by_ids,
      :status,
      :details,
      :account_id,
      :insight_id,
      :brokerage_id,
      :agent_id,
      :client_id
    ])
  end

  def insight_activities(%{insight_id: iid, agent_id: aid}) do
    from act in __MODULE__,
    where: act.insight_id == ^iid and act.agent_id == ^aid,
    order_by: [desc: act.updated_at]
  end
end
