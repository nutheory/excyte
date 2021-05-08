defmodule Excyte.Activities.Activity do
  @moduledoc """
    Activity schema
  """

  use Ecto.Schema
  @timestamps_opts [type: :utc_datetime]
  import Ecto.Changeset


  schema "activities" do
    timestamps()
  end

  def changeset(activity, attrs) do
    activity
    |> cast(attrs, [
      :user_id
    ])
  end

end
