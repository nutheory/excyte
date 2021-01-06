defmodule ExcyteWeb.Insight.CmaLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Mls.ResoApi}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("cma.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_full_user(token)
    templates = Insights.get_templates(cu.id, cu.brokerage_id)
    mls = hd(cu.mls_credentials)
    {:ok, assign(socket,
      current_user: cu,
      mls: mls.dataset_id,
      subject: nil,
      templates: templates,
      possible_subject_properties: nil,
      comparables: nil,
      action: %{key: "", perform: ""},
      selected_comps: [],
      filters: nil,
      filter_defaults: nil
    )}
  end

  def handle_info({:get_property, %{address: address}}, socket) do
    mls = hd(socket.assigns.current_user.mls_credentials)
    {:ok, possible_subjects} = ResoApi.property_by_address(mls.dataset_id, address)
    if length(possible_subjects.properties) === 1 do
      handle_event("select-subject", %{"prop" => hd(possible_subjects.properties)}, socket)
    else
      {:noreply, assign(socket, possible_subject_properties: possible_subjects.properties )}
    end
  end

  def handle_info({:get_comps, opts}, %{assigns: %{subject: subject, mls: mls}} = socket) do
     coords =
      if subject["Coordinates"] do
        %{lng: hd(subject["Coordinates"]), lat: hd(tl(subject["Coordinates"]))}
      else
        nil
      end

    {:ok, comps} =
      ResoApi.comparable_properties(mls, Map.merge(opts, %{coords: coords}))

    {:noreply, assign(socket,
      comparables: comps.properties,
      filters: opts,
      comp_count: comps.count
    )}
  end

  def handle_event("add-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    sel = Enum.find(s.comparables, fn lk -> lk["ListingKey"] === selected_lk end)
    ret = Enum.reject(s.comparables, fn lk -> lk["ListingKey"] === selected_lk end)

    {:noreply, assign(socket,
      action: %{key: selected_lk, perform: "animate-select"},
      comparables: ret,
      selected_comps: s.selected_comps ++ [sel]
    )}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    sel = Enum.find(s.selected_comps, fn lk -> lk["ListingKey"] === selected_lk end)
    ret = Enum.reject(s.selected_comps, fn lk -> lk["ListingKey"] === selected_lk end)

    {:noreply, assign(socket,
      action: %{key: selected_lk, perform: "animate-deselect"},
      comparables: [sel | s.comparables],
      selected_comps: ret
    )}
  end

  def handle_event("build-cma", %{"template" => t} = params,  %{assigns: assigns} = socket) do
    key = "cma#{assigns.current_user.id}#{System.os_time(:second)}"
    Cachex.put(:insight_cache, key, Map.merge(assigns, %{"template" => "default"}))
    {:noreply, push_redirect(socket, to: "/insights/cma/builder/#{key}")}
  end

  def handle_event("select-subject", %{"key" => selected_lk}, socket) do
    subject =
      Enum.find(socket.assigns.possible_subject_properties, fn lk ->
        lk["ListingKey"] === selected_lk
      end)

    opts = comparable_input(subject)
    send self(), {:get_comps, opts}
    {:noreply, assign(socket, subject: subject, filter_defaults: opts)}
  end

  def handle_event("select-subject", subject, socket) do
    opts = comparable_input(subject)
    send self(), {:get_comps, opts}
    {:noreply, assign(socket, subject: subject, filter_defaults: opts)}
  end

  def handle_event("reset-subject", _, socket) do
    {:noreply, assign(socket,
      comparables: nil,
      selected_comps: [],
      subject: nil,
      anime: nil,
      filter_defaults: nil,
      filters: nil,
      possible_subject_properties: nil)}
  end

  defp comparable_input(subject) do
    %{
      distance: 1.0,
      zip: hd(String.split(subject["PostalCode"], "-")),
      min_price: subject["ListPrice"] - round(35/100 * subject["ListPrice"]),
      max_price: subject["ListPrice"] + round(35/100 * subject["ListPrice"]),
      price_interval: ceil(subject["ListPrice"]/100),
      low_price: subject["ListPrice"] - round(15/100 * subject["ListPrice"]),
      high_price: subject["ListPrice"] + round(15/100 * subject["ListPrice"])
    }
  end
end
