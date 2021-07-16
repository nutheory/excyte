defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{Insights, Accounts}
  alias ExcyteWeb.{ ClientView}

  def render(assigns), do: ClientView.render("viewer.html", assigns)

  def mount(%{"insight_id" => iid}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    report =
      case Insights.get_published_insight(iid) do
        {:ok, ins} -> ins
        # {:error, err} -> err
      end
      IO.inspect(report.document_attributes, label: "DA")
    send self(), {:load_view, %{sections: report.content.html}}
    {:ok, assign(socket,
      current_user: cu,
      insight: report,
      theme: report.document_attributes,
      created_by: report.created_by
    )}
  end

  def mount(%{"insight_id" => iid}, _, socket) do
    report =
      case Insights.get_published_insight(iid) do
        {:ok, ins} -> ins
        # {:error, err} -> err
      end
      IO.inspect(report.document_attributes, label: "DA")
    send self(), {:load_view, %{sections: report.content.html}}
    {:ok, assign(socket,
      current_user: nil,
      insight: report,
      theme: report.document_attributes,
      created_by: report.created_by
    )}
  end

  def handle_info({:load_view, %{sections: sections}}, %{assigns: a} = socket) do
    # doc = Enum.reduce(sections, "", fn section, acc -> acc <> section.html_content end)
    {:noreply, push_event(socket, "loadViewer", %{content: sections, theme: a.theme})}
  end
end
