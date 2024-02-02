defmodule ExcyteWeb.Components.RangeSlider do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.ComponentView

  def render(assigns), do: ComponentView.render("range_slider.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      form: to_form(%{}),
      opts: assigns.opts,
      callback: assigns.callback
    )}
  end

  def handle_event("slider-update", %{"slider" => s, "_target" => target}, %{assigns: a} = socket) do
    opts = socket.assigns.opts
    field_to_update = hd(String.split(hd(tl(target)), "_"))
    new_val = String.to_integer(s[hd(tl(target))])

    new_opts =
      if field_to_update === "high" do
        if new_val <= (opts.low + (opts.interval * opts.buffer)) do
          Map.put(opts, String.to_atom(field_to_update), opts.low + (opts.interval * opts.buffer))
        else
          Map.put(opts, String.to_atom(field_to_update), new_val)
        end
      else
        if new_val >= (opts.high - (opts.interval * opts.buffer)) do
          Map.put(opts, String.to_atom(field_to_update), opts.high - (opts.interval * opts.buffer))
        else
          Map.put(opts, String.to_atom(field_to_update), new_val)
        end
      end
    send self(), {a.callback, %{price: new_opts}}
    {:noreply, assign(socket, form: to_form(%{}), opts: new_opts)}
  end
end
