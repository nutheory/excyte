defmodule ExcyteWeb.Insight.CmaBuilderLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Mls.ResoApi}
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("cma_builder.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_full_user_by_session_token(token)
    {:ok, comp_info} = Cachex.get(:insight_cache, id)
    IO.inspect(comp_info, label: "COMP")
    {:ok, assign(socket,
      current_user: cu,
      errors: [],
      subject_property: comp_info.subject,
      comparables: comp_info.selected_comps
    )}
  end

end
