defmodule ExcyteWeb.Insight.CustomizeCma do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Activities, Insights, Insights.Insight}
  alias ExcyteWeb.{InsightView, Helpers.Templates}


  def render(assigns), do: InsightView.render("customize_cma.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    # {:ok, prev_state} = Cachex.get(:insights_cache, params["insight_id"])
    case Insights.get_minimal_insight(id, cu.id) do
      %Insight{} = ins ->
        send self(), {:get_sections, %{insight: ins}}
        {:ok, assign(socket,
          current_user: cu,
          insight: ins,
          sections: [],
          data: nil,
          preview_content: "",
          preview_panel: false,
          loading: true
        )}
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.CustomizeCma")
      err -> Activities.handle_errors(err, "ExcyteWeb.Insight.CustomizeCma")
        {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:get_sections, %{insight: ins}}, %{assigns: a} = socket) do
    case Insights.build_cma_sections(%{usr_id: a.current_user.id, insight_id: ins.id}) do
      {:ok, res} ->
        sections = with_html_sections(res.sections, res.data)
        insight = merge_theme(res.data)
        send self(), {:load_preview, %{sections: sections, theme: insight["document_attributes"] }}
        {:noreply, assign(socket,
          sections: sections,
          insight: insight,
          data: res.data,
          loading: false
        )}
      {:error, err} -> err
    end
  end

  def handle_info({:load_preview, %{sections: sections, theme: theme}}, socket) do
    doc = stitch_preview(sections)
    {:noreply, push_event(socket, "loadPreview", %{content: doc, theme: theme})}
  end

  def handle_info(:publish, %{assigns: a} = socket) do
    published =
      case Insights.publish_insight(%{
        sections: Enum.filter(a.sections, fn st -> st.enabled === true end),
        insight: %{
          id: a.insight["id"],
          cover_photo_url: a.data.subject["main_photo_url"],
          published: true
        }}) do
          {:ok, pub} -> pub
          {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.CustomizeCma")
      end
    {:noreply,
      socket
      |> put_flash(:info, "#{String.upcase(published.update_insight.type)} was created and published successfully.")
      |> push_redirect(to: "/agent/dash")}
  end

  def handle_event("new-section", _, %{assigns: a} = socket) do
    # TODO Create new from template
    key = "usr-#{a.current_user.id}_#{System.os_time(:second)}"
    Cachex.put!(:editor_cache, key, %{data: a.data, section: nil})
    {:noreply, assign(socket, editing_key: "new")}
  end

  def handle_event("sort", %{"sections" => [_|_] = sections}, %{assigns: a} = socket) do
    rearranged =
      Enum.map(sections, fn %{"id" => id, "position" => pos} ->
        Enum.find(a.sections, fn %{temp_id: tid} -> String.to_integer(id) === tid end)
        |> Map.put(:position, pos)
      end)
    doc = stitch_preview(rearranged)
    {:noreply, push_event(socket, "loadPreview", %{content: doc}) |> assign(socket, sections: rearranged)}
  end

  def handle_event("edit-section", %{"section-pos" => pos}, %{assigns: a} = socket) do
    key = "usr-#{a.current_user.id}_section-#{pos}_#{System.os_time(:second)}"
    section = Enum.find(a.sections, fn s -> s.position === String.to_integer(pos) end)
    Cachex.put!(:editor_cache, key, %{section: section})
    {:noreply, assign(socket, editing_key: key)}
  end

  def handle_event("toggle-enabled", %{"id" => id}, %{assigns: a} = socket) do
    sections =
      Enum.map(a.sections, fn st ->
        if st.temp_id === String.to_integer(id), do: Map.merge(st, %{enabled: !st.enabled}), else: st
      end)
    doc = stitch_preview(sections)
    {:noreply, socket |> push_event("loadPreview", %{content: doc}) |> assign(sections: sections)}
  end

  def handle_event("publish", socket) do
    send self(), :publish
    {:noreply, socket}
  end

  def handle_event("republish", socket) do
    # send self(), :publish
    {:noreply, socket}
  end

  defp with_html_sections(sections, data) do
    Enum.map(sections, fn s ->
      html = if s.html_content === nil, do: get_editor_templates(s, data), else: s.html_content
      Map.merge(s, %{
        created_by_id: data.agent_profile["id"],
        insight_id: data.insight["id"],
        section_template_id: s.id,
        html_content: html
      })
    end)
  end

  defp get_editor_templates(%{component_name: component} = comp, data) do
    case component do
      "comparable" -> Templates.comparable(%{listing: comp.data})
      _ -> apply(Templates, String.to_existing_atom(component), [data])
    end
  end

  defp stitch_preview(sections) do
    Enum.reduce(sections, "", fn section, acc ->
      if section.enabled === true && section.html_content !== nil do
        acc <> section.html_content
      else
        acc
      end
    end)
  end

  defp merge_theme(%{brokerage: bk, insight: ins}) do
    Map.merge(ins, %{"document_attributes" => bk["theme_settings"]})
  end

  defp merge_theme(%{agent_profile: ag, insight: ins}) do
    Map.merge(ins, %{"document_attributes" => ag["theme_settings"]})
  end
end
