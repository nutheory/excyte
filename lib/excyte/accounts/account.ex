defmodule Excyte.Accounts.Account do
  @moduledoc """
    Account DB schema
  """

  use Ecto.Schema
  @timestamps_opts [type: :utc_datetime]
  import Ecto.Changeset

  schema "accounts" do
    field(:status, :string)
    field(:amount, Money.Ecto.Amount.Type)
    field(:payment_method_id, :string)
    field(:source_customer_id, :string)
    field(:source_subscription_id, :string)
    field(:source_plan_id, :string)
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
      :payment_method_id
      ])
  end

  def update_changeset(acc, attrs) do
    acc
    |> cast(attrs, [
      :status,
      :amount,
      :source_plan_id,
      :source_subscription_id,
      :payment_method_id
      ])
  end

end
