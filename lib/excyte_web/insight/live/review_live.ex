defmodule ExcyteWeb.Insight.ReviewLive do
  use ExcyteWeb, :live_view

  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi
  }
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_Listing_ids(cu.current_mls,
                    ins.selected_listing_ids) do
      subject = Map.merge(ins.subject, %{features: []})
      {:ok, assign(socket,
        current_user: cu,
        subject: subject,
        subject_form: %{features: []},
        insight_uuid: id,
        selected_comps: comps
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:update_features, val}, %{assigns: a} = socket) do
    {:noreply, assign(socket, subject: Map.merge(a.subject, val))}
  end
end
