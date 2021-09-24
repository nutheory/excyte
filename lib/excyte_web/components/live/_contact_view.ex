defmodule ExcyteWeb.Components.ContactView do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("contact_view.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      type: assigns.type,
      content: content(assigns.type, assigns.content),
      title: assigns.title,
      default: assigns.default,
      link: linker(assigns.type, assigns.content)
    )}
  end

  defp content(t, c) do
   case t do
     "phone" -> Number.Phone.number_to_phone(c, area_code: true)
     _ -> c
   end
  end

  defp linker(t, c) do
    case t do
      "url" -> c
      "email" -> "mailto:#{c}"
      "phone" -> "tel:#{c}"
      _ -> c
    end
  end
end
