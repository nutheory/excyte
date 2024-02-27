defmodule Excyte.Properties do
  import Ecto.Query, warn: false

  alias Excyte.{
    Activities,
    Assets.Asset,
    Properties.Property,
    Properties.PublicDataApi,
    Repo
  }

  # @topic inspect(__MODULE__)

  # def subscribe(id) do
  #   Phoenix.PubSub.subscribe(Excyte.PubSub, @topic <> "#{id}")
  # end

  def fetch_listing_details(mpr_id, _aid) do
    case PublicDataApi.get_listing_info(mpr_id) do
      {:ok, res} ->
        {:ok, res}

      {:error, err} ->
        Activities.handle_errors(err, "Excyte.Properties.fetch_listing_details")
        {:error, err}
    end
  end

  def get_subject_by_foreign_id(%{foreign_id: fid, agent_id: aid}) do
    Repo.get_by(Property, %{agent_id: aid, foreign_id: fid, internal_type: "subject"})
  end

  def get_subject_by_address(%{street_number: sn, agent_id: aid} = attrs) do
    Repo.get_by(Property, %{
      agent_id: aid,
      street_number: sn,
      street_name: attrs.street_name,
      internal_type: "subject"
    })
  end

  def get_property(id) do
    Repo.get_by(Property, %{id: id})
  end

  def get_property_assets(property_id) do
    Repo.get_by(Asset, %{property_id: property_id})
  end

  def comparable_properties(%Property{} = subject, opts) do
    with {:ok, area} <-
           PublicDataApi.get_bounding_area(
             %{lat: subject.coords.lat, lng: subject.coords.lng},
             opts.distance
           ),
         {:ok, query} <- PublicDataApi.build_query(area, opts),
         {:ok, listings} <- fetch_listings(query),
         {:ok, full_listings} <- fetch_comp_listing_details(listings) do
      {:ok, Enum.concat(full_listings)}
    else
      err -> IO.inspect(err, label: "ERR-WITH")
    end
  end

  def fetch_listings(query) when is_list(query) do
    tasks = [
      Task.async(fn -> PublicDataApi.fetch_active_listings(query) end),
      Task.async(fn -> PublicDataApi.fetch_closed_listings(query) end)
    ]

    Task.await_many(tasks)
    |> Enum.reduce(%{}, fn tsk_res, acc ->
      acc =
        case tsk_res do
          {:ok, tsk} -> Map.merge(acc, tsk)
          {:error, _} -> acc
        end
    end)
    |> case do
      %{active: a, closed: c} -> {:ok, %{active: a, closed: c}}
      _ -> {:error, %{message: "Could not retrieve listings."}}
    end
  end

  def fetch_comp_listing_details(listings) do
    deats =
      Enum.map(listings, fn {_k, v} ->
        Enum.map(v, fn lst ->
          Task.async(fn -> PublicDataApi.get_listing_info(lst["property_id"]) end)
        end)
        |> Task.await_many()
        |> Enum.map(fn {_, lst} -> lst end)
      end)

    {:ok, deats}
  end

  def agent_pocket_listings(aid) do
    query = Property.get_pocket_by_agent(Property, aid)
    Repo.all(query) |> Repo.preload(:insights)
    # Repo.get_by(Property, %{agent_id: aid, internal_type: "pocket"})
  end

  def brokerage_pocket_listings(bid) do
    Repo.get_by(Property, %{brokerage_id: bid, internal_type: "pocket"})
  end

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

  def calculate_averages(attr) when length(attr) > 0 do
    nums = Enum.filter(attr, fn num -> num !== nil && num >= 0 end)
    trunc(Enum.sum(nums) / length(nums))
  end

  def calculate_averages(_), do: 0

  # defp active_listings(res, res), do: IO.inspect(res, label: "RES")

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
