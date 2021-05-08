defmodule ExcyteWeb.Insight.Builder do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight}
  alias ExcyteWeb.InsightView
  alias ExcyteWeb.Router.Helpers, as: Routes

  def render(assigns), do: InsightView.render("builder.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    case Insights.get_minimal_insight(id, cu.id) do
      %Insight{} = ins ->
        send self(), {:get_sections, %{insight: ins}}
        {:ok, assign(socket,
          current_user: cu,
          insight: ins,
          sections: [],
          editing_key: nil,
          loading: true
        )}
      err ->
        {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:get_sections, %{insight: ins}}, %{assigns: a} = socket) do
    if ins.published do

    else
      case Insights.build_from_templates(a.current_user.id, ins.id) do
        {:ok, res} ->
          {:noreply, assign(socket,
            sections: res.sections,
            data: res.data,
            loading: false
          )}
        {:error, err} -> err
      end
    end
  end

  def handle_event("new-section", _, %{assigns: a} = socket) do
    # TODO Create new from template
    key = "usr-#{a.current_user.id}_#{System.os_time(:second)}"
    Cachex.put!(:editor_cache, key, %{data: a.data, section: nil})
    {:noreply, assign(socket, editing_key: "new")}
  end

  def handle_event("edit-section", %{"section-id" => sid}, %{assigns: a} = socket) do
    key = "usr-#{a.current_user.id}_section-#{sid}_#{System.os_time(:second)}"
    section = Enum.find(a.sections, fn s -> s.id === String.to_integer(sid) end)
    Cachex.put!(:editor_cache, key, %{data: a.data, section: section})
    {:noreply, assign(socket, editing_key: key)}
  end

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
  #   {:noreply, socket}
  # end

  # def handle_event("create-section", params, socket) do
  #   {:noreply, socket}
  # end
end
