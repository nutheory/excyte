defmodule ExcyteWeb.Insight.ReviewLive do
  use ExcyteWeb, :live_view

  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi,
    Properties,
    Properties.Adjustments
  }
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_listing_ids(cu.current_mls,
                    ins.selected_listing_ids, ins.subject) do
      subject = sanitize_subject(ins.subject)
      {:ok, assign(socket,
        current_user: cu,
        subject: subject,
        insight_uuid: id,
        listings: comps.listings,
        selected_comps: Adjustments.process_init(comps.listings, subject)
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:update_features, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, subject: Map.merge(a.subject, val))}
  end

  def handle_event("adjust-comp", %{"adjustment" => adj, "listing-id" => id}, %{assigns: a} = socket) do
    val = if String.contains?(adj, "."), do: round(String.to_float(adj)), else: String.to_integer(adj)
    comps = Enum.map(a.selected_comps, fn c ->
      if c.listing_id === id, do: Map.merge(c, %{excyte_price: val}), else: c
    end)
    {:noreply, assign(socket, selected_comps: comps)}
  end

  def handle_event("toggle-adjustment", %{"action" => act, "id" => id}, %{assigns: a} = socket) do
    comps = Enum.map(a.selected_comps, fn c ->
      val = if act === "apply", do: c.excyte_suggested_price, else: c.default_price.value
      if c.listing_id === id, do: Map.merge(c, %{excyte_price: val}), else: c
    end)
    {:noreply, assign(socket, selected_comps: comps)}
  end

  def handle_event("save_subject", %{"property" => form}, %{assigns: a} = socket) do
    formatted = Utilities.format_quoted_json(form)
    subject_attrs =
      Map.merge(formatted, map_save_features(a.subject.features))
      |> Map.merge(sanitize_lotsize(%{lotsize_unit: a.subject.lotsize_unit, lotsize_value: formatted.lotsize_value}))
    subject =
      case Properties.update_property(a.subject.id, a.current_user.id, subject_attrs) do
        {:ok, subject} -> sanitize_subject(subject)
        {:error, err} -> err
      end
    {:noreply, assign(socket,
      subject: subject,
      selected_comps: Adjustments.process_init(a.listings, subject))}
  end

  def handle_event("toggle-lot-unit", _, %{assigns: a}  = socket) do
    if a.subject.lotsize_unit === "acres" do
      {:noreply, assign(socket, subject: Map.merge(a.subject, %{
        lotsize_unit: "sqft",
        lotsize_value: round(Utilities.acres_to_sqft(a.subject.lotsize_value))
      }))}
    else
      {:noreply, assign(socket, subject: Map.merge(a.subject, %{
        lotsize_unit: "acres",
        lotsize_value: Utilities.sqft_to_acres(a.subject.lotsize_value)
      }))}
    end
  end

  defp sanitize_subject(subject_in) do
    sub = Map.from_struct(subject_in)
    features = load_features(sub)
    unit = if subject_in.lotsize_preference, do: subject_in.lotsize_preference, else: "sqft"
    Map.merge(sub, %{
      features: features,
      lotsize_unit: unit,
      lotsize_value: subject_in.lotsize_sqft
    })
  end

  defp load_features(subject) do
    Enum.reduce(Utilities.feature_options(), [], fn opt, acc ->
      attr = String.to_atom(opt.value)
      if Map.has_key?(subject, attr) && subject[attr] === true do
        [opt | acc]
      else
        acc
      end
    end)
  end

  defp map_save_features(features) do
    simple_feats = Enum.map(features, fn f -> f.value end)
    Enum.reduce(Utilities.feature_options(), %{}, fn opt, acc ->
      if Enum.member?(simple_feats, opt.value) do
        Map.put(acc, String.to_atom(opt.value), true)
      else
        Map.put(acc, String.to_atom(opt.value), false)
      end
    end)
  end

  def sanitize_lotsize(%{lotsize_unit: unit, lotsize_value: val}) do
    if unit === "acres" do
      %{lotsize_preference: "acres", lotsize_sqft: round(Utilities.acres_to_sqft(String.to_float(val)))}
    else
      %{lotsize_preference: "sqft", lotsize_sqft: round(String.to_integer(val))}
    end
  end
end
