defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{Insights, Accounts, Agents, Brokerages}
  alias ExcyteWeb.{ ClientView}

  @impl true
  def render(assigns), do: ClientView.render("viewer.html", assigns)

  @impl true
  def mount(%{"insight_id" => iid}, t, socket) do
    cu = if is_nil(t["user_token"]), do: nil, else: Accounts.get_user_by_session_token(t["user_token"])
    case Insights.get_published_insight(iid) do
      {:ok, res} ->
        sections = Enum.sort(res.insight.sections, fn a, b -> a.position <= b.position end)
        insight = merge_theme(res)
        {:ok, assign(socket,
          current_user: cu,
          sections: sections,
          insight: Map.update!(insight, :content, &Map.delete(&1, :listings)),
          data: %{
            agent_profile: res.agent_profile,
            brokerage: res.brokerage
          },
          theme: insight.document_attributes,
          listings: Enum.sort(insight.content.listings, fn a, b ->
            a["excyte_data"]["position"] <= b["excyte_data"]["position"]
          end),
          loading: false
        )}
      {:error, err} -> err
    end
  end

  @impl true
  def handle_info({:load_view, %{sections: sections}}, %{assigns: a} = socket) do
    IO.inspect(label: "run after waking up")
    {:noreply, push_event(socket, "loadViewer", %{
      content: sections,
      theme: a.theme,
      authorized_agent: (if a.current_user, do: true, else: false),
      agent: a.agent_profile,
      brokerage: a.brokerage_profile
    })}
  end

  @impl true
  def handle_event("check-security", _payload, %{assigns: _a} = socket) do
    {:reply, %{logged_in: false}, socket}
  end

  defp merge_theme(%{brokerage: bk, agent_profile: ag, insight: ins}) do
    if bk !== nil && bk.theme_settings.brokerage_default === true do
      Map.merge(ins, %{document_attributes: bk.theme_settings})
    else
      Map.merge(ins, %{document_attributes: ag.theme_settings})
    end
  end
end
