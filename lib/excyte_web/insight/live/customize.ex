defmodule ExcyteWeb.Insight.Customize do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Assets, Activities, Insights, Insights.Insight}
  alias ExcyteWeb.{InsightView, Helpers.Templates, Helpers.Utilities}


  def render(assigns), do: InsightView.render("customize.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    assets = Assets.get_agent_assets(%{agent_id: cu.id, brokerage_id: cu.brokerage_id})
    # {:ok, current_state} = Cachex.get(customize_cache, id)
    case Insights.get_minimal_insight(id, cu.id) do
      %Insight{} = ins ->
        send self(), {:get_sections, %{insight: ins}}
        {:ok, assign(socket,
          current_user: cu,
          insight: ins,
          sections: [],
          assets: assets,
          data: nil,
          name: "",
          preview_content: "",
          uploaded_asset: nil,
          selected_tab: "upload",
          video_form: %{title: "", description: ""},
          show_video_form: false,
          preview_panel: false,
          loading: true
        )}
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.CustomizeCma")
      err -> Activities.handle_errors(err, "ExcyteWeb.Insight.CustomizeCma")
        {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:get_sections, %{insight: ins}}, %{assigns: a} = socket) do
    case Insights.build_sections(%{usr_id: a.current_user.id, insight_id: ins.id}) do
      {:ok, res} ->
        sections = with_html_sections(res.sections, res.data)
        insight = merge_theme(res.data)
        send self(), {:load_preview, %{sections: sections, theme: insight["document_attributes"] }}
        {:noreply, assign(socket,
          sections: sections,
          insight: insight,
          data: res.data,
          name: "#{res.data.subject["street_number"]} #{res.data.subject["street_name"]}",
          loading: false
        )}
      {:error, err} -> err
    end
  end

  def handle_info({Assets, [:asset, _], result}, socket) do
    {:noreply, assign(socket, uploaded_asset: result)}
  end

  def handle_info({:load_preview, %{sections: sections, theme: theme}}, socket) do
    doc = stitch_preview(sections)
    {:noreply, push_event(socket, "loadPreview", %{content: doc, theme: theme})}
  end

  def handle_info({:create_video_section, asset}, %{assigns: a} = socket) do
    content = Templates.video_section(%{asset: Map.from_struct(asset)})
    section = [%{
        position: (length(a.sections) + 1),
        created_by_id: a.current_user.id,
        component_name: "video_section",
        enabled: true,
        type: "video",
        temp_id: String.to_integer(List.last(String.split(asset.uuid, "_"))),
        description: asset.description,
        name: asset.title,
        html_content: content
      }]
    {:noreply, assign(socket, sections: a.sections ++ section)}
  end

  def handle_event("publish", %{"publish" => %{"name" => name}}, %{assigns: a} = socket) do
    published =
      case Insights.update_insight(a.insight["uuid"], a.current_user.id, %{
          content: %{html: stitch_preview(a.sections)},
          document_attributes: a.insight["document_attributes"],
          name: name,
          cover_photo_url: needs_cover_photo?(a.insight),
          published: true
        }) do
          {:ok, pub} -> pub
          {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.Customize")
      end
    {:noreply,
      socket
      |> put_flash(:info, "#{String.upcase(published.type)} was created and published successfully.")
      |> push_redirect(to: "/agent/dash")}
  end

  def handle_event("new-section", _, %{assigns: a} = socket) do
    # TODO Create new from template
    key = "usr-#{a.current_user.id}_#{System.os_time(:second)}"
    Cachex.put!(:editor_cache, key, %{data: a.data, section: nil})
    {:noreply, assign(socket, editing_key: "new")}
  end

  def handle_event("update-new-video", %{"video_form" => vf}, %{assigns: a} = socket) do
    case Assets.update_asset(a.uploaded_asset.uuid, %{title: vf["title"], description: vf["description"]}) do
      {:ok, upload} ->
        send self(), {:create_video_section, upload}
        {:noreply, assign(socket, assets: [upload | a.assets], show_video_form: false, uploaded_asset: nil)}
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.Customize")
    end
  end

  def handle_event("validate-video-details", %{"video_form" => vf}, socket) do
    {:noreply, assign(socket, video_form: %{title: vf["title"], description: vf["description"]})}
  end

  def handle_event("delete_video", %{"value" => _v, "video-id" => id}, %{assigns: a} = socket) do
    asset_id = String.to_integer(id)
    assets =
      case Assets.delete_asset(a.current_user.id, asset_id) do
        {:ok, _} -> Enum.filter(a.assets, fn ast -> ast.id !== asset_id end)
        {:error, err} -> err
      end
    {:noreply, assign(socket, assets: assets)}
  end

  def handle_event("toggle-preview", _, %{assigns: a} = socket) do
    doc = stitch_preview(a.sections)
    {:noreply,
      socket
      |> push_event("loadPreview", %{content: doc, theme: a.insight["document_attributes"]})
      |> assign(preview_panel: !a.preview_panel)}
  end

  def handle_event("toggle-video", _, %{assigns: a} = socket) do
    uuid = "#{a.current_user.id}_#{a.insight["uuid"]}_#{System.os_time(:second)}"
    if connected?(socket), do: Assets.subscribe(uuid)
    {:noreply,
      socket
      |> push_event("idDetails", %{uuid: uuid, aid: a.current_user.id, bid: a.current_user.brokerage_id})
      |> assign(show_video_form: !a.show_video_form)}
  end

  def handle_event("toggle-upload-tab", %{"tab" => tab}, socket) do
    {:noreply, assign(socket, selected_tab: tab)}
  end

  def handle_event("select-video", %{"uuid" => uuid}, %{assigns: a} = socket) do
    send self(), {:create_video_section, Enum.find(a.assets, fn ast -> ast.uuid === uuid end)}
    {:noreply, assign(socket, selected_tab: "upload", show_video_form: false)}
  end

  def handle_event("sort-sections", %{"sections" => [_|_] = sections}, %{assigns: a} = socket) do
    rearranged =
      Enum.map(sections, fn %{"id" => id, "position" => pos} ->
        Enum.find(a.sections, fn %{temp_id: tid} -> String.to_integer(id) === tid end)
        |> Map.put(:position, pos)
      end)
    {:noreply, assign(socket, sections: rearranged)}
  end

  def handle_event("sort-listings", %{"listings" => [_|_] = listings}, %{assigns: a} = socket) do
    section = Enum.find(a.sections, fn %{component_name: cn} -> cn === "comparable" end)
    rearranged =
      Enum.map(listings, fn %{"id" => id, "position" => pos} ->
        Enum.find(section.html_content, fn %{temp_id: tid} -> String.to_integer(id) === tid end)
        |> Map.put(:position, pos)
      end)
    sections = Enum.map(a.sections, fn s ->
      if s.component_name === "comparable", do: Map.merge(s, %{html_content: rearranged}), else: s
    end)

    {:noreply, assign(socket, sections: sections)}
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
    {:noreply, assign(socket, sections: sections)}
  end

  def handle_event("toggle-listing-enabled", %{"id" => id}, %{assigns: a} = socket) do
    section = Enum.find(a.sections, fn %{component_name: cn} -> cn === "comparable" end)
    updated =
      Enum.map(section.html_content, fn st ->
        if st.temp_id === String.to_integer(id), do: Map.merge(st, %{enabled: !st.enabled}), else: st
      end)
    sections = Enum.map(a.sections, fn s ->
      if s.component_name === "comparable", do: Map.merge(s, %{html_content: updated}), else: s
    end)
    {:noreply, assign(socket, sections: sections)}
  end

  defp with_html_sections(sections, data) do
    Enum.map(sections, fn s ->
      html =
        if s.html_content === nil do
          get_template_content(s, data)
        else
          s.html_content
        end
      Map.merge(s, %{
        created_by_id: data.agent_profile["id"],
        insight_id: data.insight["id"],
        section_template_id: s.id,
        html_content: html
      })
    end)
  end

  defp get_template_content(%{component_name: component} = section, data) do
    case component do
      "comparable" ->
        Enum.with_index(section.listings, 0)
        |> Enum.map(fn {listing, i} ->
          %{
            position: i,
            created_by_id: data.agent_profile["id"],
            section_template_id: section.id,
            insight_id: data.insight["id"],
            component_name: "#{component}_item",
            enabled: true,
            type: "page",
            temp_id: i,
            description: "#{Utilities.humanize_component_name(component)} Listing",
            name: "#{listing["street_number"]} #{listing["street_name"]}",
            html_content: Templates.comparable(%{listing: listing})
          }
        end)
      "tour_stop" ->
        Enum.map(section.listings, fn sl ->
          %{
            position: sl["position"],
            created_by_id: data.agent_profile["id"],
            section_template_id: section.id,
            insight_id: data.insight["id"],
            component_name: "#{component}_item",
            enabled: true,
            type: "page",
            temp_id: sl["position"],
            description: "#{Utilities.humanize_component_name(component)} Listing",
            name: "#{sl["street_number"]} #{sl["street_name"]}",
            html_content: Templates.tour_stop(%{listing: sl})
          }
        end)
      _ -> apply(Templates, String.to_existing_atom(component), [data])
    end
  end

  defp stitch_preview(sections) do
    Enum.reduce(sections, "", fn section, acc ->
      if section.enabled === true && section.html_content !== nil do
        if is_list(section.html_content) do
          acc <> stitch_preview(section.html_content)
        else
          acc <> section.html_content
        end
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

  defp needs_cover_photo?(ins) do
    if ins["cover_photo_url"] === nil || ins["cover_photo_url"] === "" do
      first = hd(ins["content"]["listings"])
      first["main_photo_url"]
    else
      ins["cover_photo_url"]
    end
  end
end
