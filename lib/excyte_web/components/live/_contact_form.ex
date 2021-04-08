defmodule ExcyteWeb.Components.ContactForm do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView, Helpers.Utilities}

  def render(assigns), do: ComponentView.render("contact_form.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      form: assigns.form
    )}
  end
end
