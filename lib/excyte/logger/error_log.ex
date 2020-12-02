defmodule Excyte.Logger.ErrorLog do
  @moduledoc """
    Error Logger schema
  """

  use Ecto.Schema
  @timestamps_opts [type: :utc_datetime]
  import Ecto.Changeset

  schema "logs" do
    field(:user_id, :integer)
    field(:severity, :integer)
    field(:source, :string)
    field(:note, :string)
    field(:type, :string)
    field(:location, :string)
    field(:fixed, :boolean)
    field(:error, {:array, :map})
    timestamps()
  end

  def changeset(logger, attrs) do
    logger
    |> cast(attrs, [
      :user_id,
      :severity,
      :source,
      :note,
      :type,
      :fixed,
      :location,
      :error
    ])
  end
end
