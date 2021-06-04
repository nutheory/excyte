defmodule ExcyteWeb.Client.Viewer do
  use ExcyteWeb, :live_client_view
  alias Excyte.{Insights}
  alias ExcyteWeb.{Helpers.Utilities, ClientView}

  def render(assigns), do: ClientView.render("viewer.html", assigns)

  def mount(%{"insight_id" => iid}, _sesh, socket) do
    report =
      case Insights.get_published_insight(iid) do
        {:ok, ins} -> ins
        {:error, err} -> err
      end
    send self(), {:load_view, %{sections: report.sections}}
    {:ok, assign(socket,
      insight: report,
      theme: report.document_attributes,
      sections: report.sections
    )}
  end

  def handle_info({:load_view, %{sections: sections}}, socket) do
    doc = Enum.reduce(sections, "", fn section, acc -> acc <> section.html_content end)
    {:noreply, push_event(socket, "loadViewer", %{content: doc})}
  end
end
