defmodule Excyte.Accounts.Account do
  @moduledoc """
    Account DB schema
  """

  use Ecto.Schema
  @timestamps_opts [type: :utc_datetime]
  import Ecto.Changeset

  alias Excyte.{
    Accounts.User
  }

  schema "accounts" do
    field(:status, :string)
    field(:amount, Money.Ecto.Amount.Type)
    field(:payment_method_id, :string)
    field(:source_customer_id, :string)
    field(:source_subscription_id, :string)
    field(:source_subscription_item_id, :string)
    field(:source_plan_id, :string)
    field(:latest_invoice_id, :string)
    field(:agent_limit, :integer)
    field(:current_period_end, :utc_datetime)
    field(:deleted_at, :utc_datetime)
    has_many(:users, User)
    timestamps()
  end

  def registration_changeset(acc, attrs) do
    acc
    |> cast(attrs, [
      :status,
      :amount,
      :source_customer_id,
      :source_plan_id,
      :source_subscription_id,
      :source_subscription_item_id,
      :payment_method_id,
      :agent_limit,
      :current_period_end
    ])
  end

  def update_changeset(acc, attrs) do
    acc
    |> cast(attrs, [
      :status,
      :amount,
      :source_plan_id,
      :source_subscription_id,
      :source_subscription_item_id,
      :payment_method_id,
      :agent_limit,
      :current_period_end,
      :latest_invoice_id,
      :deleted_at
    ])
  end
end
