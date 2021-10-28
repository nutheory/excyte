defmodule ExcyteWeb.Components.Dropdown do
  use ExcyteWeb, :live_component

  alias ExcyteWeb.{ ComponentView}

  def render(assigns), do: ComponentView.render("dropdown.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      options: assigns.options,
      attr: assigns.attr,
      label: assigns.label,
      show_top_label: assigns.show_top_label,
      selected: assigns.selected,
      callback: assigns.callback
    )}
  end

  def handle_event("option_select", %{"option" => opt}, %{assigns: a} = socket) do
    sel = Enum.find(a.options, fn o ->
      cond do
        is_integer(o.value) -> Integer.to_string(o.value) === opt
        true -> o.value === opt
      end
    end)
    send self(), {a.callback, Map.put(%{}, a.attr, sel)}
    {:noreply, assign(socket, selected: sel)}
  end
end
