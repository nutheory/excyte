defmodule ExcyteWeb.Insight.CmaBuilderLive do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Template, Insights.Section}
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("cma_builder.html", assigns)

  def mount(%{"id" => id}, %{"user_token" => token}, socket) do
    {:ok, comp_info} = Cachex.get(:insight_cache, id)
    if comp_info do
      cu = Accounts.get_full_user_by_session_token(token)
      send self() , {:initial_build, comp_info}
      {:ok, assign(socket,
        current_user: cu,
        errors: [],
        sections: [],
        templates: comp_info.templates,
        subject_property: comp_info.subject,
        comparables: comp_info.selected_comps
      )}
    else
      {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:initial_build, %{"template" => t} = params}, socket) do
    # IO.inspect(params.templates, label: "PARAMS")
    tmpl = Enum.find(params.templates, fn pt -> pt.id === t end)
    if tmpl do
      sections =
        Enum.map(tmpl.sections, fn ts ->
          if Map.has_key?(ts, :func) do
            apply(Template, ts[:func], [params])
          else
            case Insights.get_section(ts[:id]) do
              %Section{} = res -> Map.merge(ts, res)
               _ -> ts
            end
          end
        end)
      {:noreply, assign(socket, sections: sections)}
    else
      {:noreply, socket}
    end
  end

  def handle_info({:initial_build, _}, socket) do
    IO.inspect(label: "Dont GOT-IT")
    {:noreply, socket}
  end

  def handle_event("create-section", params, socket) do
    IO.inspect(params, label: "RESO")
    {:noreply, socket}
  end
end
