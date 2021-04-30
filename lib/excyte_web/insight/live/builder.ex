defmodule ExcyteWeb.Insight.Builder do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight}
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("builder.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    case Insights.get_minimal_insight(id, cu.id) do
      %Insight{} = ins ->
        send self(), {:get_sections, %{usr: cu, insight: ins}}
        {:ok, assign(socket, usr: cu, insight: ins)}
      err ->
        IO.inspect(err, label: "OOPS")
        {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:get_sections, %{usr: cu, insight: ins}}, %{assigns: a} = socket) do
    if ins.published do

    else
      case Insights.build_from_templates(cu.id, ins.id) do
        {:ok, res} -> {:noreply, socket}
        {:error, err} -> err
      end
    end
  end

  # def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
  #   {:ok, comp_info} = Cachex.get(:insight_cache, id)
  #   if comp_info do
  #     cu = Accounts.get_user_by_session_token(token)
  #     send self() , {:initial_build, comp_info}
  #     {:ok, assign(socket,
  #       current_user: cu,
  #       errors: [],
  #       sections: [],
  #       insight_id: id,
  #       templates: comp_info.templates,
  #       subject_property: comp_info.subject,
  #       comparables: comp_info.selected_comps
  #     )}
  #   else
  #     {:ok, push_redirect(socket, to: "/insights/cma/create")}
  #   end
  # end

  # def handle_info({:initial_build, %{"template" => t} = params}, socket) do
  #   tmpl = Enum.find(params.templates, fn pt -> pt.id === t end)
  #   if tmpl do
  #     sections =
  #       Enum.map(tmpl.sections, fn ts ->
  #         if Map.has_key?(ts, :func) do
  #           apply(Template, ts[:func], [params])
  #         else
  #           case Insights.get_section(ts[:id]) do
  #             %Section{} = res -> Map.merge(ts, res)
  #              _ -> ts
  #           end
  #         end
  #       end)
  #     {:noreply, assign(socket, sections: sections)}
  #   else
  #     {:noreply, socket}
  #   end
  # end

  # def handle_info({:initial_build, _}, socket) do
  #   IO.inspect(label: "Dont GOT-IT")
  #   {:noreply, socket}
  # end

  # def handle_event("create-section", params, socket) do
  #   {:noreply, socket}
  # end
end
