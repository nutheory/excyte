defmodule ExcyteWeb.Insight.CmaBuilderLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls.ResoApi}
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("cma_builder.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    {:ok, comp_info} = Cachex.get(:insight_cache, id)
    if comp_info do
      cu = Accounts.get_full_user_by_session_token(token)
      {:ok, assign(socket,
        current_user: cu,
        errors: [],
        subject_property: comp_info.subject,
        comparables: comp_info.selected_comps
      )}
    else
      {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end
end
