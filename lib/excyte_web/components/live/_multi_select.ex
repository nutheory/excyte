defmodule ExcyteWeb.Components.MultiSelect do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("multi_select.html", assigns)

  def update(assigns, socket) do
    selected =
      if Map.has_key?(assigns, :selected) && is_list(assigns.selected) do
        assigns.selected
      else
        []
      end
    {:ok, assign(socket,
      options: assigns.options,
      label: assigns.label,
      status: assigns.status,
      selected: selected,
      key: assigns.key,
      callback: assigns.callback)}
  end

  def handle_event("add-selection", %{"val" => val}, %{assigns: a} = socket) do
    selection = Enum.find(a.options, fn opt -> opt.value === val end)
    new_selected = [ selection | a.selected ]
    IO.inspect(new_selected, label: "New Selected")
    send self(), {a.callback, Map.put(%{}, a.key, new_selected)}
    {:noreply, socket}
  end

  def handle_event("remove-selection", %{"val" => val}, %{assigns: a} = socket) do
    # selection = Enum.find(a.options, fn opt -> opt.value === val end)
    new_selected = Enum.filter(a.selected, fn opt -> opt.value !== val end)
    IO.inspect(new_selected, label: "New Selected")
    send self(), {a.callback, Map.put(%{}, a.key, new_selected)}
    {:noreply, socket}
  end
end
