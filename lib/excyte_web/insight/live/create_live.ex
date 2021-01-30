defmodule ExcyteWeb.Insight.CreateLive do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts, Insights, Mls.ResoApi}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("create.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    templates = Insights.get_templates(cu.id, cu.brokerage_id)
    {:ok, assign(socket,
      current_user: cu,
      mls: cu.current_mls,
      subject: nil,
      client_info: assign_client_info(socket),
      templates: templates,
      possible_subject_properties: nil,
      comparables: nil,
      preview: nil,
      show_panel: false,
      selected_comps: [],
      filters: nil,
      filter_defaults: nil
    )}
  end

  # def handle_info({:get_property, %{address: address}}, socket) do
  #   mls = hd(socket.assigns.current_user.mls_credentials)
  #   {:ok, possible_subjects} = ResoApi.property_by_address(mls.dataset_id, address)
  #   if length(possible_subjects.properties) === 1 do
  #     handle_event("select-subject", %{"prop" => hd(possible_subjects.properties)}, socket)
  #   else
  #     {:noreply, assign(socket, possible_subject_properties: possible_subjects.properties )}
  #   end
  # end

  def handle_info({:get_comps, %{address: address}}, %{assigns: %{mls: mls}} = socket) do
    coords =
      if address.coords["lat"] do
        %{lng: address.coords["lng"], lat: address.coords["lat"]}
      else
        nil
      end

    opts = comparable_input(address)

    IO.inspect(Map.merge(opts, %{coords: coords}), label: "BOINK")
    {:ok, comps} =
      ResoApi.comparable_properties(mls, Map.merge(opts, %{coords: coords}))

    {:noreply, assign(socket,
      subject: address,
      comparables: comps.properties,
      filters: opts,
      comp_count: comps.count
    )}
  end

  def handle_event("toggle-selected", _, %{assigns: assigns} = socket) do
    {:noreply, assign(socket, preview: nil, show_panel: !assigns.show_panel)}
  end

  def handle_event("preview-property", %{"key" => selected_lk}, socket) do
    sel = Enum.find(socket.assigns.comparables, fn lk -> lk["ListingKey"] === selected_lk end)
    {:noreply, assign(socket, preview: sel, show_panel: true)}
  end

  def handle_event("remove-preview", _, socket) do
    {:noreply, assign(socket, preview: nil, show_panel: false)}
  end

  def handle_event("add-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    sel = Enum.find(s.comparables, fn lk -> lk["ListingKey"] === selected_lk end)

    {:noreply, assign(socket, selected_comps: s.selected_comps ++ [sel], preview: nil)}
  end

  def handle_event("remove-comp", %{"key" => selected_lk}, socket) do
    s = socket.assigns
    ret = Enum.reject(s.selected_comps, fn lk -> lk["ListingKey"] === selected_lk end)

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
      anime: nil,
      filter_defaults: nil,
      filters: nil,
      possible_subject_properties: nil)}
  end

  defp comparable_input(subject) do
    IO.inspect(subject, label: "BOOM")
    %{
      distance: 10.0,
      zip: hd(String.split(subject.zip, "-"))
      # min_price: subject["ListPrice"] - round(35/100 * subject["ListPrice"]),
      # max_price: subject["ListPrice"] + round(35/100 * subject["ListPrice"]),
      # price_interval: ceil(subject["ListPrice"]/100),
      # low_price: subject["ListPrice"] - round(15/100 * subject["ListPrice"]),
      # high_price: subject["ListPrice"] + round(15/100 * subject["ListPrice"])
    }
  end
end
