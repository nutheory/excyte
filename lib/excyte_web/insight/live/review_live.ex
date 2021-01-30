defmodule ExcyteWeb.Insight.ReviewLive do
  use ExcyteWeb, :live_view
  use ViewportHelpers
  alias Excyte.{Accounts, Insights, Mls.ResoApi}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    {:ok, comp_info} = Cachex.get(:insight_cache, id)
    if comp_info do
      {:ok, assign(socket,
        current_user: comp_info.current_user,
        insight_id: id,
        subject_property: comp_info.subject,
        comparables: comp_info.selected_comps
      )}
    else
      {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end
end
