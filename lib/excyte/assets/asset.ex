defmodule Excyte.Assets.Asset do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Utils.MapType,
    Repo
  }

  @timestamps_opts [type: :utc_datetime]

  schema "assets" do
    field :title, :string
    field :description, :string
    field :original_name, :string
    field :content_type, :string
    field :uuid, :string
    field :type, :string
    field :source, :string
    field :status, :string
    field :thumb_url, :string
    field :large_url, :string
    field :video_url, :string
    field :raw_url, :string
    field :size, :integer
    field :stream_id, :string
    field :source_id, :string
    field :last_used, :utc_datetime
    field :is_shared, :boolean
    field :content, MapType
    belongs_to(:brokerage, Brokerage)
    belongs_to(:uploaded_by, User)
    timestamps()
  end

  def changeset(asset, attrs) do
    asset
    |> cast(attrs, [
      :title,
      :description,
      :original_name,
      :content_type,
      :type,
      :uuid,
      :source,
      :thumb_url,
      :large_url,
      :video_url,
      :raw_url,
      :size,
      :status,
      :stream_id,
      :source_id,
      :last_used,
      :is_shared,
      :content,
      :uploaded_by_id,
      :brokerage_id
    ])
  end

  def all_available_assets(aid, bid) when is_nil(bid) do
    from a in __MODULE__,
    where: [uploaded_by_id: ^aid],
    order_by: [desc: a.updated_at]
  end

  def all_available_assets(aid, bid) do
    from a in __MODULE__,
    where: [uploaded_by_id: ^aid],
    or_where: [brokerage_id: ^bid, is_shared: true],
    order_by: [desc: a.updated_at]
  end

  def all_available_videos(aid, bid) when is_nil(bid) do
    from a in __MODULE__,
    where: [uploaded_by_id: ^aid, type: "video"],
    order_by: [desc: a.updated_at]
  end

  def all_available_videos(aid, bid) do
    from a in __MODULE__,
    where: [uploaded_by_id: ^aid, type: "video"],
    or_where: [brokerage_id: ^bid, is_shared: true],
    order_by: [desc: a.updated_at]
  end
end
