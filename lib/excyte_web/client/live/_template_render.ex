defmodule ExcyteWeb.Client.TemplateRender do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      template: assigns.section.component_name,
      type: assigns.type,
      brokerage: assigns.brokerage,
      agent: assigns.agent,
      content: assigns.section.content
    )}
  end
end
