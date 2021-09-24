defmodule ExcyteWeb.Insight.Customize do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Assets, Activities, Insights, Insights.Insight}
  alias ExcyteWeb.{InsightView, Helpers.Templates, Helpers.Utilities}


  def render(assigns), do: InsightView.render("customize.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    videos = Assets.get_agent_videos(%{agent_id: cu.id, brokerage_id: cu.brokerage_id})
    # {:ok, current_state} = Cachex.get(customize_cache, id)
    case Insights.get_minimal_insight(id, cu.id) do
      %Insight{} = ins ->
        send self(), {:get_sections, %{insight: ins}}
        {:ok, assign(socket,
          current_user: cu,
          insight: ins,
          sections: [],
          assets: videos,
          data: nil,
          name: "",
          listings: [],
          uploaded_asset: nil,
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
        sections =
          res.insight.document_template.section_templates
          |> Enum.sort(fn a, b -> a.position <= b.position end)
          |> Enum.with_index(fn st, i ->
            Map.merge(Map.from_struct(st), %{
              temp_id: i,
              content: with_listing_sections(st, res.insight.content.listings)
            })
          end)
        insight = merge_theme(res)
        # send self(), {:load_preview, %{sections: sections, theme: insight.document_attributes }}
        {:noreply, assign(socket,
          sections: sections,
          insight: insight,
          data: %{
            subject: insight.property,
            agent_profile: res.agent_profile,
            brokerage: res.brokerage
          },
          name: set_default_name(insight),
          loading: false
        )}
      {:error, err} -> err
    end
  end

  def handle_info({Assets, [:asset, _], result}, %{assigns: a} = socket) do
    ua = if result.status === "ready", do: nil, else: result
    assets = if result.status === "ready", do: [result | a.assets], else: a.assets
    {:noreply, assign(socket, uploaded_asset: ua, assets: assets)}
  end

  # def handle_info({:load_preview, %{sections: sections, theme: theme}}, socket) do
  #   doc = stitch_preview(sections)
  #   {:noreply, push_event(socket, "loadPreview", %{content: doc, theme: theme})}
  # end

  def handle_info({:create_video_section, asset}, %{assigns: a} = socket) do
    content = Templates.video_section(%{asset: Map.from_struct(asset)}, a.insight["type"])
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
    {:noreply, assign(socket, show_video_form: false, sections: a.sections ++ section)}
  end

  def handle_event("publish", %{"publish" => %{"name" => name}}, %{assigns: a} = socket) do
    published =
      case Insights.update_insight(a.insight.uuid, a.current_user.id, %{
          content: %{export: export_content(a.sections)},
          document_attributes: Map.from_struct(a.insight.document_attributes),
          name: name,
          cover_photo_url: needs_cover_photo?(a.insight),
          published: true
        }) do
          {:ok, pub} -> pub
          {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.Customize")
      end
    {:noreply,
      socket
      |> put_flash(:info, "#{Utilities.insight_type_to_name(published.type)} was created and published successfully.")
      |> push_redirect(to: "/agent/dash")}
  end

  def handle_event("delete_video", %{"value" => _v, "video-id" => id}, %{assigns: a} = socket) do
    asset_id = String.to_integer(id)
    assets =
      case Assets.delete_video_asset(a.current_user.id, asset_id) do
        {:ok, _} -> Enum.filter(a.assets, fn ast -> ast.id !== asset_id end)
        {:error, err} -> err
      end
    {:noreply, assign(socket, assets: assets)}
  end

  def handle_event("toggle-preview", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, preview_panel: !a.preview_panel)}
  end

  def handle_event("toggle-video", _, %{assigns: a} = socket) do
   {:noreply, assign(socket, show_video_form: !a.show_video_form)}
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
    section = Enum.find(a.sections, fn %{component_name: cn} ->
      Enum.member?(["comparable", "tour_stop"], cn)
    end)
    rearranged =
      Enum.map(listings, fn %{"id" => id, "position" => pos} ->
        Enum.find(section.content.listings, fn %{temp_id: tid} -> String.to_integer(id) === tid end)
        |> Map.put(:position, pos)
      end)
    sections = Enum.map(a.sections, fn s ->
      if Enum.member?(["comparable", "tour_stop"], s.component_name) do
        Map.merge(s, %{content: %{listings: rearranged}})
      else
        s
      end
    end)

    {:noreply, assign(socket, sections: sections)}
  end

  def handle_event("toggle-enabled", %{"id" => id}, %{assigns: a} = socket) do
    sections =
      Enum.map(a.sections, fn st ->
        if st.temp_id === String.to_integer(id), do: Map.merge(st, %{enabled: !st.enabled}), else: st
      end)
    {:noreply, assign(socket, sections: sections)}
  end

  def handle_event("toggle-listing-enabled", %{"id" => id}, %{assigns: a} = socket) do
    section = Enum.find(a.sections, fn %{component_name: cn} ->
      Enum.member?(["comparable", "tour_stop"], cn)
    end)
    updated =
      Enum.map(section.content.listings, fn st ->
        if st.temp_id === String.to_integer(id), do: Map.merge(st, %{enabled: !st.enabled}), else: st
      end)

    sections = Enum.map(a.sections, fn s ->
      if Enum.member?(["comparable", "tour_stop"], s.component_name), do: Map.merge(s, %{content: %{listings: updated}}), else: s
    end)
    {:noreply, assign(socket, sections: sections)}
  end

  defp merge_theme(%{brokerage: bk, agent_profile: ag, insight: ins}) do
    if bk !== nil && bk.theme_settings.brokerage_default === true do
      Map.merge(ins, %{document_attributes: bk.theme_settings})
    else
      Map.merge(ins, %{document_attributes: ag.theme_settings})
    end
  end

  defp with_listing_sections(section, listings) do
    if Enum.member?(["comparable", "tour_stop", "showcase"], section.component_name) do
      %{listings: Enum.with_index(listings, 0) |> Enum.map(fn {sl, i} ->
        %{
          position: (if sl["position"], do: sl["position"], else: i),
          component_name: "#{section.component_name}_listing",
          enabled: true,
          temp_id: (if sl["position"], do: sl["position"], else: i),
          description: "#{Utilities.humanize_component_name(section.component_name)} Listing",
          name: "#{sl["street_number"]} #{sl["street_name"]}",
          content: sl
        }
      end)}
    else
      nil
    end
  end

  defp export_content(sections) do
    Enum.reduce(sections, [], fn s, acc ->
      if s.enabled === true do
        if Enum.member?(["comparable", "tour_stop", "showcase"], s.component_name) do
          [Map.merge(s, %{content: %{
            listings: Enum.filter(s.content.listings, fn l -> l.enabled === true end)
          }}) | acc]
        else
          [s | acc]
        end
      else
        acc
      end
    end)
    |> Enum.map(fn section -> Map.drop(section, [:__meta__, :__struct__, :brokerage, :created_by, :document_template]) end)
  end

  def set_default_name(ins) do
    case ins.type do
      "cma" -> "#{ins.property.street_number} #{ins.property.street_name}"
      "buyer_tour" -> "#{hd(ins.content.listings)["street_number"]} #{hd(ins.content.listings)["street_name"]}"
      "showcase" -> "#{hd(ins.content.listings)["street_number"]} #{hd(ins.content.listings)["street_name"]}"
    end
  end

  defp needs_cover_photo?(ins) do
    if ins.cover_photo_url === nil || ins.cover_photo_url === "" do
      first = hd(ins.content.listings)
      first["main_photo_url"]
    else
      ins.cover_photo_url
    end
  end
end


  # def handle_event("new-section", _, %{assigns: a} = socket) do
  #   # TODO Create new from template
  #   key = "usr-#{a.current_user.id}_#{System.os_time(:second)}"
  #   Cachex.put!(:editor_cache, key, %{data: a.data, section: nil})
  #   {:noreply, assign(socket, editing_key: "new")}
  # end

  # def handle_event("edit-section", %{"section-pos" => pos}, %{assigns: a} = socket) do
  #   key = "usr-#{a.current_user.id}_section-#{pos}_#{System.os_time(:second)}"
  #   section = Enum.find(a.sections, fn s -> s.position === String.to_integer(pos) end)
  #   Cachex.put!(:editor_cache, key, %{section: section})
  #   {:noreply, assign(socket, editing_key: key)}
  # end
