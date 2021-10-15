defmodule ExcyteWeb.Insight.Customize do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Accounts,
    Assets,
    Activities,
    Insights,
    Insights.Insight,
    Properties.PublicDataApi
  }
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
          listings: [],
          assets: videos,
          data: nil,
          name: "",
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
            Map.merge(Map.from_struct(st), %{ temp_id: i })
          end)
        listings = with_listings(res.insight.content.listings, res.insight.type)
        insight = merge_theme(res) |> needs_cover_photo?(listings)
        {:noreply, assign(socket,
          sections: sections,
          insight: Map.update!(insight, :content, &Map.delete(&1, :listings)),
          data: %{
            agent_profile: res.agent_profile,
            brokerage: res.brokerage
          },
          name: set_default_name(insight),
          listings: Enum.map(listings, fn lst ->
            Map.put(lst, "collapse", ["features", "layout_details"])
          end),
          loading: false
        )}
      {:error, err} -> err
    end
  end

  def handle_info({:public_listing_info, %{lst_id: lst_id, name: name}}, %{assigns: a} = socket) do
    listings =
      Enum.map(a.listings, fn lst ->
        if lst["listing_id"] === lst_id do
          open =
            if Map.has_key?(lst, "public_data") === true do
              lst
            else
              case PublicDataApi.merge_public_data(lst) do
                {:ok, with_public} -> with_public
                err -> IO.inspect(err, label: "PUBLIC ERR")
              end
            end
          add_remove_collapse(name, open)
        else
          lst
        end
      end)
    {:noreply, assign(socket, listings: listings)}
  end

  def handle_info({Assets, [:asset, _], result}, %{assigns: a} = socket) do
    ua = if result.status === "ready", do: nil, else: result
    assets = if result.status === "ready", do: [result | a.assets], else: a.assets
    {:noreply, assign(socket, uploaded_asset: ua, assets: assets)}
  end

  def handle_info({:load_preview, %{ theme: theme }}, %{assigns: a} = socket) do
    {:noreply, push_event(socket, "loadPreview", %{ theme: theme })}
  end

  def handle_info({:create_video_section, asset}, %{assigns: a} = socket) do
    section = [%{
        position: 100,
        created_by_id: a.current_user.id,
        component_name: "video_section",
        enabled: true,
        type: "video",
        temp_id: String.to_integer(List.last(String.split(asset.uuid, "_"))),
        description: asset.description,
        name: asset.title,
        content: Map.from_struct(asset)
      }]
    {:noreply, assign(socket, show_video_form: false, sections: a.sections ++ section)}
  end

  def handle_event("publish", %{"publish" => %{"name" => name}}, %{assigns: a} = socket) do
    published =
      case Insights.publish_insight(%{
        insight: %{
          id: a.insight.id,
          created_by_id: a.current_user.id,
          name: name,
          cover_photo_url: a.insight.cover_photo_url,
          content: Map.merge(a.insight.content, %{"listings" => a.listings }),
          published: true
        }, sections: publish_sections(a)}) do
          {:ok, pub} -> pub
          {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Insight.Customize")
      end
    IO.inspect(published, label: "PUBBED")
    {:noreply,
      socket
      |> put_flash(:info, "#{Utilities.insight_type_to_name(published.insight.type)} was created and published successfully.")
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
    send self(), {:load_preview, %{ theme: a.insight.document_attributes }}
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
    rearranged =
      Enum.map(listings, fn %{"id" => id, "position" => pos} ->
        Enum.find(a.listings, fn %{"excyte_data" => %{"temp_id" => tid}} -> String.to_integer(id) === tid end)
        |> Map.update!("excyte_data", &Map.merge(&1, %{"position" => pos}))
      end)
    # IO.inspect(rearranged, label: "REARR")
    # sections = Enum.map(a.sections, fn s ->
    #   if Enum.member?(["comparable", "tour_stop"], s.component_name) do
    #     Map.merge(s, %{content: %{listings: rearranged}})
    #   else
    #     s
    #   end
    # end)

    {:noreply, assign(socket, listings: rearranged)}
  end

  def handle_event("toggle-enabled", %{"id" => id}, %{assigns: a} = socket) do
    sections =
      Enum.map(a.sections, fn st ->
        if st.temp_id === String.to_integer(id), do: Map.merge(st, %{enabled: !st.enabled}), else: st
      end)
    {:noreply, assign(socket, sections: sections)}
  end

  def handle_event("toggle-listing-enabled", %{"id" => id}, %{assigns: a} = socket) do
    updated =
      Enum.map(a.listings, fn st ->
        if st["excyte_data"]["temp_id"] === String.to_integer(id) do
          Map.update!(st, "excyte_data", &Map.merge(&1, %{"enabled" => !st["excyte_data"]["enabled"]}))
        else
          st
        end
      end)
    {:noreply, assign(socket, listings: updated)}
  end

  defp merge_theme(%{brokerage: bk, agent_profile: ag, insight: ins}) do
    if bk !== nil && bk.theme_settings.brokerage_default === true do
      Map.merge(ins, %{document_attributes: bk.theme_settings})
    else
      Map.merge(ins, %{document_attributes: ag.theme_settings})
    end
  end

  defp with_listings(listings, type) do
    if Enum.member?(["cma", "buyer_tour"], type) && listings && length(listings) > 0 do
      Enum.with_index(listings, 0)
      |> Enum.map(fn {sl, i} ->
        Map.merge(sl, %{"excyte_data" =>
          %{
            "position" => (if sl["position"], do: sl["position"], else: i),
            "enabled" => true,
            "temp_id" => (if sl["position"], do: sl["position"], else: i),
            "description" => "#{Utilities.humanize_listing_name(type)}",
            "name" => "#{sl["street_number"]} #{sl["street_name"]}",
          }
        })
      end)
    else
      listings
    end
  end

  # defp export_content(sections) do
  #   Enum.reduce(sections, [], fn s, acc ->
  #     if s.enabled === true do
  #       if Enum.member?(["comparable", "tour_stop", "showcase"], s.component_name) do
  #         [Map.merge(s, %{content: %{
  #           listings: Enum.filter(s.content.listings, fn l -> l.enabled === true end)
  #         }}) | acc]
  #       else
  #         [s | acc]
  #       end
  #     else
  #       acc
  #     end
  #   end)
  #   |> Enum.map(fn section -> Map.drop(section, [:__meta__, :__struct__, :brokerage, :created_by, :document_template]) end)
  # end

  defp publish_sections(assigns) do
    Enum.map(assigns.sections, fn s ->
      %{
        created_by_id: assigns.current_user.id,
        insight_id: assigns.insight.id,
        position: s.position,
        description: s.description,
        enabled: s.enabled,
        name: s.name,
        content: (if Map.has_key?(s, :content), do: Map.drop(s.content, [:__meta__, :__struct__, :brokerage, :uploaded_by]), else: nil),
        html_content: (if Map.has_key?(s, :html_content), do: s.html_content, else: nil),
        section_template_id: (if Map.has_key?(s, :id), do: s.id, else: nil),
        component_name: s.component_name
      }
    end)
  end

  defp set_default_name(ins) do
    case ins.type do
      "cma" -> "#{ins.property.street_number} #{ins.property.street_name}"
      "buyer_tour" -> "#{hd(ins.content.listings)["street_number"]} #{hd(ins.content.listings)["street_name"]}"
      "showcase" -> "#{hd(ins.content.listings)["street_number"]} #{hd(ins.content.listings)["street_name"]}"
    end
  end

  defp needs_cover_photo?(insight, listings) do
    cover_photo = insight.cover_photo_url
    type = insight.type
    if cover_photo === nil || cover_photo === "" do
      url =
        case type do
          "buyer_tour" ->
            key = Application.get_env(:excyte, :gcp_places)
            init = "key=#{key}&size=640x640&scale=2&markers=color:red"
            q = Enum.reduce(listings, init, fn lst, acc ->
                acc <> "|#{hd(tl(lst["coords"]))}, #{hd(lst["coords"])}"
              end)
              |> URI.encode()
            with {:ok, %{body: image}} <- HTTPoison.get("http://maps.googleapis.com/maps/api/staticmap?#{q}"),
                _ <- ExAws.request!(ExAws.S3.put_object("excyte", "insights/buyer_tour_covers/#{insight.id}/cover.png", image, acl: :public_read, content_type: "image/png")) do
              "//excyte.s3.amazonaws.com/insights/buyer_tour_covers/#{insight.id}/cover.png"
            else
              {:error, err} -> IO.inspect(err, label: "ERR")
              err -> IO.inspect(err, label: "ERR")
            end
          "showcase" ->
            first = hd(listings)
            first["main_photo_url"]
          "cma" ->
            # insight property photo
        end
      Map.put(insight, :cover_photo_url, url)
    else
      insight
    end
  end

  defp add_remove_collapse(name, open) do
    if Enum.member?(open["collapse"], name) do
      Map.update!(open, "collapse", &(List.delete(&1, name)))
    else
      Map.update!(open, "collapse", &([name | &1]))
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
