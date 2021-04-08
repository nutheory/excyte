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

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_listing_ids(cu.current_mls,
                    ins.selected_listing_ids, ins.subject) do
      {:ok, assign(socket,
        current_user: cu,
        subject: ins.subject,
        insight_uuid: id,
        listings: comps.listings,
        selected_comps: Adjustments.process_init(comps.listings, ins.subject)
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
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

  def handle_event("save-review", _, %{assigns: a}  = socket) do
    case Insights.update_insight(a.insight_uuid, a.current_user.id, %{
      content: %{comps: a.selected_comps}
    }) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/cma/#{a.insight_uuid}/builder")}
      {:error, err} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end
end
