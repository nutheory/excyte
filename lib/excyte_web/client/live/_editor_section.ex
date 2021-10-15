# defmodule ExcyteWeb.Client.TemplateRender do
#   use ExcyteWeb, :live_component
#   alias ExcyteWeb.{ClientView}

#   def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

#   def update({assigns}, socket) do
#     {:ok, assign(socket,
#       html_content: assigns.html_content
#     ) |> push_event()
#   }
#   end

#   def
# end
