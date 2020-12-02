defmodule ExcyteWeb.PublicHeader do
  use ExcyteWeb, :live_component
  alias Excyte.{Accounts}
  alias ExcyteWeb.LayoutView

  def render(assigns), do: LayoutView.render("public_header.html", assigns)

  def mount(_params, _session, socket) do
    IO.inspect(label: "loaded")
    {:ok, assign(socket, content: nil)}
  end

end
