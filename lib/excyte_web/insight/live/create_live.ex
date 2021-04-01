defmodule ExcyteWeb.Insight.CreateLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(params, %{"user_token" => token}, socket) do
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

  # def handle_info({Accounts, [:user, _], updated_user}, socket) do
  #   {:noreply, assign(socket, current_user: updated_user)}
  # end

  # def handle_info({Properties, [:property, _], updated_property}, socket) do
  #   setup_comp_query(updated_property, socket)
  # end

  def handle_info({:update_features, val}, %{assigns: a} = socket) do
    IO.inspect(val, label: "NEW_VAL")
    {:noreply, assign(socket, subject: Map.merge(a.subject, val))}
  end

  def handle_info({:init_subject, %{address: addr}}, %{assigns: a} = socket) do
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

  defp get_subject_property_id(loc) do
    with {:ok, %{body: body}} <- HTTPoison.get("https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input="
         <> "#{loc.street_number}%20#{URI.encode(loc.street_name)}%20#{loc.zip}&area_types=state%2Ccity%2Ccounty%2C"
         <> "postal_code%2Cneighborhood%2Caddress%2Cstreet%2Cbuilding%2Cmlsid%2Cbuilding%2Cschool%2C"
         <> "school_district%2Cuniversity%2Cpark%2Cstate&limit=10"),
         %{mpr_id: mpr_id} <- hd(Utilities.format_str_json(body).autocomplete) do
          IO.inspect(body, label: "BODY")
      {:ok, mpr_id}
    else
      {:error, err} -> err
      _ -> {:error, "unknown error from property id"}
    end
  end

  # defp map_save_features(features) do
  #   simple_feats = Enum.map(features, fn f -> f.value end)
  #   Enum.reduce(Utilities.feature_options(), %{}, fn opt, acc ->
  #     if Enum.member?(simple_feats, opt.value) do
  #       Map.put(acc, String.to_atom(opt.value), true)
  #     else
  #       Map.put(acc, String.to_atom(opt.value), false)
  #     end
  #   end)
  # end
end
