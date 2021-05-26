defmodule ExcyteWeb.Client.Header do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("header.html", assigns)
end
