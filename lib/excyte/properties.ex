defmodule Excyte.Properties do
  import Ecto.Query, warn: false
  alias Excyte.{
    Activities,
    Properties.Property,
    Properties.PublicDataApi,
    Repo
  }

  # @topic inspect(__MODULE__)

  # def subscribe(id) do
  #   Phoenix.PubSub.subscribe(Excyte.PubSub, @topic <> "#{id}")
  # end

  def fetch_subject_details(mpr_id, _aid) do
    case PublicDataApi.get_subject_by_foreign_id(mpr_id) do
      {:ok, res} -> {:ok, res}
      {:error, err} ->
        Activities.handle_errors(err, "Excyte.Properties.fetch_subject_details")
        {:error, err}
    end
  end

  # def fetch_mls_info(mpr_id) do
  #   case PublicDataApi.get_listing_info(mpr_id) do
  #     {:ok, res} -> {:ok, res}
  #     {:error, err} ->
  #       Activities.handle_errors(err, "Excyte.Properties.get_listing_info")
  #       {:error, err}
  #   end
  # end

  def get_subject_by_foreign_id(%{foreign_id: fid, agent_id: aid}) do
    Repo.get_by(Property, %{agent_id: aid, foreign_id: fid, internal_type: "subject"})
  end

  def get_subject_by_address(%{street_number: sn, agent_id: aid} = attrs) do
    Repo.get_by(Property, %{
      agent_id: aid,
      street_number: sn,
      street_name: attrs.street_name,
      internal_type: "subject"})
  end

  def get_property(id) do
    Repo.get_by(Property, %{id: id})
  end

  # def find_or_create_subject_property(%{foreign_id: fid, agent_id: aid} = attrs) do
  #   case get_subject_by_foreign_id(%{foreign_id: fid, agent_id: aid}) do
  #     %Property{} = subject -> {:ok, subject}
  #     nil -> __MODULE__.create_property(attrs)
  #   end
  # end

  # def find_or_create_subject_property(%{agent_id: aid} = attrs) do
  #   case get_subject_by_address(%{
  #     street_number: attrs.street_number,
  #     street_name: attrs.street_name,
  #     agent_id: aid}) do
  #     %Property{} = subject -> {:ok, subject}
  #     nil -> __MODULE__.create_property(attrs)
  #   end
  # end

  def create_property(attrs) do
    %Property{}
    |> Property.changeset(attrs)
    |> Repo.insert()
  end

  def update_property(id, uid, attrs) do
    prop = Repo.get_by(Property, %{id: id, agent_id: uid})
    Property.changeset(prop, attrs)
    |> Repo.update()
    # |> notify_subscribers([:property, :updated])
  end

  def change_property(sid, attrs) do
    prop = Repo.get_by(Property, %{id: sid})
    Property.changeset(prop, attrs)
  end

  def change_property(attrs) do
    Property.changeset(%Property{}, attrs) |> Map.put(:action, :validate)
  end

  # defp format_foreign_id(foreign_map) do
  #   line = String.replace(foreign_map.line, " ", "-")
  #   city = String.replace(foreign_map.city, " ", "-")
  #   address = "#{line}_#{city}_#{foreign_map.state_code}_#{foreign_map.postal_code}_"
  #   id = String.split(foreign_map.mpr_id, "") |> List.insert_at(6, "-") |> Enum.join("")
  #   "#{address}M#{id}"
  # end

  # def notify_subscribers({:ok, result}, event) do
  #   Phoenix.PubSub.broadcast(Excyte.PubSub, @topic, {__MODULE__, event, result})
  #   Phoenix.PubSub.broadcast(
  #     Excyte.PubSub,
  #     @topic <> "#{result.foreign_id}",
  #     {__MODULE__, event, result}
  #   )

  #   {:ok, result}
  # end

  # def notify_subscribers({:error, reason}, _), do: {:error, reason}
end
