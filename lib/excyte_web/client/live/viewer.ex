defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{Insights, Accounts, Agents, Brokerages}
  alias ExcyteWeb.{ ClientView}

  @impl true
  def render(assigns), do: ClientView.render("viewer.html", assigns)

  @impl true
  def mount(%{"insight_id" => iid}, t, socket) do
    cu = if is_nil(t["user_token"]), do: nil, else: Accounts.get_user_by_session_token(t["user_token"])
    r =
      case Insights.get_published_insight(iid) do
        {:ok, ins} -> ins
        # {:error, err} -> err
      end
    brk = if is_nil(r.brokerage_id), do: nil, else: Brokerages.get_brokerage_profile(r.brokerage_id)
    agt = Agents.get_agent_profile!(r.created_by_id)
    send self(), {:load_view, %{sections: r.content.html}}
    {:ok, assign(socket,
      current_user: cu,
      insight: r,
      theme: r.document_attributes,
      agent_profile: agt,
      brokerage_profile: brk
    )}
  end

  @impl true
  def handle_info({:load_view, %{sections: sections}}, %{assigns: a} = socket) do
    {:noreply, push_event(socket, "loadViewer", %{
      content: sections,
      theme: a.theme,
      authorized_agent: (if a.current_user, do: true, else: false),
      agent: a.agent_profile,
      brokerage: a.brokerage_profile
    })}
  end

  @impl true
  def handle_event("check-security", _payload, %{assigns: a} = socket) do
    logged_in = if a.current_user, do: true, else: false
    IO.inspect(label: "RUN")
    # {:reply, %{logged_in: logged_in}, socket}
    {:reply, %{logged_in: false}, socket}
  end

end
