defmodule ExcyteWeb.Insight.Create do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if connected?(socket), do: Accounts.subscribe(cu.id)
    {:ok, assign(socket,
      current_user: cu,
      address: nil,
      subject: nil,
      errors: nil,
      fetching: false,
      possible_subject_properties: []
    )}
  end

  def handle_info({:update_features, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, subject: Map.merge(a.subject, val))}
  end

  def handle_info({:init_subject, %{address: addr}}, socket) do
    send self(), :setup_subject
    {:noreply, assign(socket, address: addr, fetching: true)}
  end

  def handle_info(:setup_subject, %{assigns: a} = socket) do
    with {:ok, prop_id} <- get_subject_property_id(a.address),
         {:ok, subject} <- Properties.fetch_subject_details(prop_id, a.current_user.id) do
      {:noreply, assign(socket, subject: Map.merge(a.address, subject), fetching: false)}
    else
      {:error, err} -> {:noreply, assign(socket, error: err, fetching: false)}
      _ -> {:noreply, assign(socket, error: "unkown", fetching: false)}
    end
  end

  def handle_info({:create_subject, attrs}, %{assigns: a} = socket) do
    key = "cma#{a.current_user.id}#{System.os_time(:second)}"
    case Insights.create_insight(insight_data(attrs, key, a)) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{key}/comparables")}
      {:error, method, changeset, _} ->
          # TODO Log Error
          {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  defp get_subject_property_id(loc) do
    with {:ok, %{body: body}} <- HTTPoison.get("https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input="
         <> "#{loc.street_number}%20#{URI.encode(loc.street_name)}%20#{loc.zip}&area_types=state%2Ccity%2Ccounty%2C"
         <> "postal_code%2Cneighborhood%2Caddress%2Cstreet%2Cbuilding%2Cmlsid%2Cbuilding%2Cschool%2C"
         <> "school_district%2Cuniversity%2Cpark%2Cstate&limit=10"),
         %{mpr_id: mpr_id} <- hd(Utilities.format_str_json(body).autocomplete) do
      {:ok, mpr_id}
    else
      {:error, err} -> err
      _ -> {:error, "unknown error from property id"}
    end
  end

  defp insight_data(subject_attrs, key, a) do
    %{
      insight: %{
        uuid: key,
        type: "cma",
        name: "draft",
        created_by_id: a.current_user.id,
        brokerage_id: a.current_user.brokerage_id,
        published: false,
        mls: a.current_user.current_mls.dataset_id,
        selected_listing_ids: [],
        saved_search: %{
          query: "",
          coords: subject_attrs.coords,
          zip: subject_attrs.zip,
          criteria: Utilities.default_filter(subject_attrs)
        }
      },
      subject: subject_attrs
    }
  end
end
