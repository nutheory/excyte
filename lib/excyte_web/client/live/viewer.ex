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
    {:ok, assign(socket, insight: report, sections: report.sections)}
  end
end
