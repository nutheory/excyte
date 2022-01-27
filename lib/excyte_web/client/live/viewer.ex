defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{
    Insights,
    Accounts,
    Properties.PublicDataApi
  }
  alias ExcyteWeb.{ClientView}

  @impl true
  def render(assigns), do: ClientView.render("viewer.html", assigns)

  @impl true
  def mount(%{"insight_id" => iid}, t, socket) do
    cu = if is_nil(t["user_token"]), do: nil, else: Accounts.get_user_by_session_token(t["user_token"])
    IO.inspect(cu, label: "CU")
    case Insights.get_published_insight(iid) do
      {:ok, res} ->
        sections = Enum.sort(res.insight.sections, fn a, b -> a.position <= b.position end)
        insight = merge_theme(res)
        send self(), {:load_view, %{}}
        {:ok, assign(socket,
          current_user: cu,
          sections: sections,
          insight: Map.update!(insight, :content, &Map.delete(&1, :listings)),
          data: %{
            agent_profile: res.agent_profile,
            brokerage: res.brokerage
          },
          theme: insight.document_attributes,
          errors: nil,
          listings: Enum.map(insight.content.listings, fn lst ->
            Map.put(lst, "collapse", ["features", "layout_details"])
          end)
          |> Enum.sort(fn a, b ->
            a["excyte_data"]["position"] <= b["excyte_data"]["position"]
          end),
          loading: false
        )}
      {:error, :insight, %{message: "No report found."}, %{}} ->
        {:ok, assign(socket, errors: [%{message: "Could not find published report."}])}
      {:error, err} -> err
    end
  end

  @impl true
  def handle_info({:load_view, %{}}, %{assigns: a} = socket) do
    {:noreply, push_event(socket, "loadViewer", %{
      theme: a.theme,
      authorized_agent: (if a.current_user, do: true, else: false),
      agent: a.data.agent_profile,
      brokerage: a.data.brokerage
    })}
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

  defp merge_theme(%{brokerage: bk, agent_profile: ag, insight: ins}) do
    if bk !== nil && bk.theme_settings.brokerage_default === true do
      Map.merge(ins, %{document_attributes: bk.theme_settings})
    else
      Map.merge(ins, %{document_attributes: ag.theme_settings})
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
