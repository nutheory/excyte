defmodule ExcyteWeb.Insight.ReviewLive do
  use ExcyteWeb, :live_view

  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi,
    Properties.Adjustments
  }
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_listing_ids(cu.current_mls,
                    ins.selected_listing_ids, ins.subject) do
      IO.inspect(comps, label: "length")
      subject = Map.merge(ins.subject, %{features: []})
      {:ok, assign(socket,
        current_user: cu,
        subject: subject,
        insight_uuid: id,
        selected_comps: Adjustments.process_init(comps.listings, subject)
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:update_features, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, subject: Map.merge(a.subject, val))}
  end
end
