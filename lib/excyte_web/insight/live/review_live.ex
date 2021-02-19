defmodule ExcyteWeb.Insight.ReviewLive do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi
  }
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, %{assigns: a} = socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_Listing_ids(a.current_user.current_mls,
                    ins.selected_listing_ids) do
      {:ok, assign(socket,
        current_user: cu,
        subject: ins.subject,
        insight_uuid: id,
        selected_comps: comps
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end
end
