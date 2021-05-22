defmodule ExcyteWeb.Insight.Builder do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Activities, Insights, Insights.Insight}
  alias ExcyteWeb.{InsightView, Helpers.Templates}
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
          preview: "",
          editing_key: nil,
          loading: true
        )}
      err -> Activities.handle_errors(err, "ExcyteWeb.Insight.Builder")
        {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:get_sections, %{insight: ins}}, %{assigns: a} = socket) do
    if ins.published do

    else
      case Insights.build_from_templates(a.current_user.id, ins.id) do
        {:ok, res} ->
          sections = with_html_sections(res.sections)
          send self(), {:load_preview, %{sections: sections}}
          {:noreply, assign(socket,
            sections: sections,
            loading: false
          )}
        {:error, err} -> err
      end
    end
  end

  def handle_info({:load_preview, %{sections: sections}}, socket) do
    doc = stitch_preview(sections)
    {:noreply, push_event(socket, "loadViewer", %{content: doc})}
  end

  def handle_event("new-section", _, %{assigns: a} = socket) do
    # TODO Create new from template
    key = "usr-#{a.current_user.id}_#{System.os_time(:second)}"
    Cachex.put!(:editor_cache, key, %{data: a.data, section: nil})
    {:noreply, assign(socket, editing_key: "new")}
  end

  def handle_event("edit-section", %{"section-pos" => pos}, %{assigns: a} = socket) do
    key = "usr-#{a.current_user.id}_section-#{pos}_#{System.os_time(:second)}"
    section = Enum.find(a.sections, fn s -> s.position === String.to_integer(pos) end)
    Cachex.put!(:editor_cache, key, %{section: section})
    {:noreply, assign(socket, editing_key: key)}
  end

  defp with_html_sections(sections) do
    Enum.map(sections, fn s ->
      if s.html_content === nil, do: Map.put(s, :html_content, get_editor_templates(s))
    end)
  end

  defp get_editor_templates(%{component_name: component} = comp) do
    case component do
      "agent_profile" -> Templates.agent_profile(%{agent_profile: comp.data})
      "brokerage_profile" -> Templates.brokerage_profile(%{brokerage: comp.data})
      "comparable" -> Templates.comparable(%{listing: comp.data})
      "commission_distribution" -> Templates.commission_distribution()
      "cover" -> Templates.cover(%{subject: comp.data})
      "pricing_strategy" -> Templates.pricing_strategy()
      "subject" -> Templates.subject(%{subject: comp.data})
      "synopsis" -> Templates.synopsis(%{subject: comp.data})
      "whats_cma" -> Templates.whats_cma()
      "why_an_agent" -> Templates.why_an_agent(%{agent_profile: comp.data})
      _ -> comp.html_content
    end
  end

  defp stitch_preview(sections) do
    Enum.reduce(sections, "", fn section, acc ->
      acc <> section.html_content
    end)
  end
end
