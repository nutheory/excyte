defmodule ExcyteWeb.Components.Toggle do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ComponentView}

  def render(assigns), do: ComponentView.render("toggle.html", assigns)

  def update(a, socket) do
    c_type = if Map.has_key?(a, :c_type) && a.c_type === :large, do: :large, else: :small
    {:ok, assign(socket,
      c_type: c_type,
      input_name: a.input_name,
      label: a.label,
      form: a.form,
      id: a.id,
      callback: a.callback
    )}
  end

  def handle_event("toggle-select", val, %{assigns: a} = socket) do
    IO.inspect(val, label: "VALUE")
    send self(), {a.callback, val}
    {:noreply, socket}
  end
end
