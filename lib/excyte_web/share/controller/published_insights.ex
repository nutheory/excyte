defmodule ExcyteWeb.PublishedInsights do
  use ExcyteWeb, :controller
  # import Plug.Conn
  # import Phoenix.Controller

  plug :put_view, ExcyteWeb.ShareView

  def viewer(conn, params) do
    # Insights.
    render(conn, "published_insight.html", butter: "og_image_value")
  end
end
