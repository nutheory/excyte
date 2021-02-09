defmodule ExcyteWeb.Insight.CreateLive do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts, Insights, Mls.ResoApi, Mls.RealtorApi}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  # @filter_defaults %{ distance: 20.0, status: ["closed", "pending"] }
  @filter_defaults %{ distance: 2.0 }
  @test_subject_info %{
    beds: 3,
    baths: 3,
    stories: 2,
    estimated_price: 951000,
    address: nil
  }

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    if connected?(socket), do: Accounts.subscribe(cu.id)
    {:ok, assign(socket,
      current_user: cu,
      selected_comps: [],
      filters: @filter_defaults,
      client_info: assign_client_info(socket),
      subject: nil,
      possible_subject_properties: nil,
      comparables: nil,
      preview: nil,
      show_panel: false
    )}
  end

  def handle_info({:get_property, %{address: address}}, socket) do
    mls = socket.assigns.mls
    {:ok, possible_subjects} = ResoApi.property_by_address(mls.dataset_id, address)

    if length(possible_subjects.properties) === 1 do
      handle_event("select-subject", %{"prop" => hd(possible_subjects.properties)}, socket)
    else
      {:noreply, assign(socket, possible_subject_properties: possible_subjects.properties )}
    end
  end

  def handle_info({:get_comps, %{address: addr}}, %{assigns: a} = socket) do
    find_by =
      if addr.coords.lat do
        %{zip: hd(String.split(addr.zip, "-")),
          coords: %{lng: addr.coords.lng, lat: addr.coords.lat}}
      else
        %{ zip: hd(String.split(addr.zip, "-"))}
      end
    subject = Map.merge(@test_subject_info, addr)
    opts = Map.merge(a.filters, find_by)
    sub = get_subject_property_id(addr)
    RealtorApi.get_subject_details_start(sub)
    case ResoApi.comparable_properties(a.current_user.current_mls, subject, opts) do
      {:ok, comps} -> {:noreply, assign(socket,
                        subject: addr, comparables: comps.listings,
                        filters: opts, comp_count: comps.count)}
      {:error, err} -> {:noreply, assign(socket,
                          errors: err, filters: opts, subject: addr)}
    end
  end

  def handle_event("toggle-panel", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !a.show_panel)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, socket) do
    sel = Enum.find(socket.assigns.comparables, fn lk -> lk.listing_key === selected_lk end)
    {:noreply, assign(socket, preview: sel, show_panel: true)}
  end

  def handle_event("remove-preview", _, socket) do
    {:noreply, assign(socket, preview: nil, show_panel: false)}
  end

  def handle_event("add-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    sel = Enum.find(s.comparables, fn lk -> lk.listing_key === selected_lk end)

    {:noreply, assign(socket, selected_comps: s.selected_comps ++ [sel], preview: nil)}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    ret = Enum.reject(s.selected_comps, fn lk -> lk.listing_key === selected_lk end)

    {:noreply, assign(socket, selected_comps: ret)}
  end

  def handle_event("review-cma", _,  %{assigns: assigns} = socket) do
    key = "cma#{assigns.current_user.id}#{System.os_time(:second)}"
    Cachex.put(:insight_cache, key, %{
      filters: nil,
      selected_comps: assigns.selected_comps,
      current_user: assigns.current_user,
      subject: assigns.subject,
      client_info: assigns.client_info
    })
    {:noreply, push_redirect(socket, to: "/insights/cma/review/#{key}")}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil,
      filters: @defaults,
      possible_subject_properties: nil
    )}
  end

  def handle_info({Accounts, [:user, _], updated_user}, socket) do
    IO.inspect(updated_user.current_mls, label: "FOUND")
    {:noreply, assign(socket, current_user: updated_user)}
  end

  defp get_subject_property_id(loc) do
    HTTPoison.get("https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input="
      <> "#{loc.street_number}%20#{URI.encode(loc.street_name)}%20#{loc.zip}&area_types=state%2Ccity%2Ccounty%2C"
      <> "postal_code%2Cneighborhood%2Caddress%2Cstreet%2Cbuilding%2Cmlsid%2Cbuilding%2Cschool%2C"
      <> "school_district%2Cuniversity%2Cpark%2Cstate&limit=10")
    |> case do
      {:ok, %{body: body}} -> hd(Utilities.format_str_json(body).autocomplete)
      {:error, err} -> err
    end
    |> IO.inspect(label: "RESP")
  end
end

# templates = Insights.get_templates(cu.id, cu.brokerage_id)
# min_price: subject["ListPrice"] - round(35/100 * subject["ListPrice"]),
# max_price: subject["ListPrice"] + round(35/100 * subject["ListPrice"]),
# price_interval: ceil(subject["ListPrice"]/100),
# low_price: subject["ListPrice"] - round(15/100 * subject["ListPrice"]),
# high_price: subject["ListPrice"] + round(15/100 * subject["ListPrice"])
