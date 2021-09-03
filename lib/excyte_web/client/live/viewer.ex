defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{Insights, Accounts}
  alias ExcyteWeb.{ ClientView}

  @impl true
  def render(assigns), do: ClientView.render("viewer.html", assigns)

  @impl true
  def mount(%{"insight_id" => iid}, t, socket) do
    cu = if is_nil(t["user_token"]), do: nil, else: Accounts.get_user_by_session_token(t["user_token"])
    report =
      case Insights.get_published_insight(iid) do
        {:ok, ins} -> ins
        # {:error, err} -> err
      end
    send self(), {:load_view, %{sections: report.content.html}}
    {:ok, assign(socket,
      current_user: cu,
      insight: report,
      theme: report.document_attributes,
      created_by: report.created_by
    )}
  end

  @impl true
  def handle_info({:load_view, %{sections: sections}}, %{assigns: a} = socket) do
    # doc = Enum.reduce(sections, "", fn section, acc -> acc <> section.html_content end)
    {:noreply, push_event(socket, "loadViewer", %{content: sections, theme: a.theme})}
  end

  @impl true
  def handle_event("check-security", _payload, %{assigns: a} = socket) do
    logged_in = if a.current_user, do: true, else: false
    IO.inspect(label: "RUN")
    # {:reply, %{logged_in: logged_in}, socket}
    {:reply, %{logged_in: false}, socket}
  end

end
