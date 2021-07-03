defmodule ExcyteWeb.Insight.PreviewComp do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.InsightView

  def render(assigns), do: InsightView.render("preview_comp.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      excyte_price: (if assigns.listing.excyte_price, do: assigns.listing.excyte_price, else: assigns.listing.excyte_suggested_price),
      custom_adjustments: assigns.listing.custom_adjustments,
      auto_adjusted: assigns.listing.auto_adjusted,
      adj_name: "",
      adj_value: "",
      listing: assigns.listing,
      added: assigns.added,
      show_remarks: false,
      show_adjustment_form: false,
      error: nil
    )}
  end

  def handle_event("add-adjustment-item", _, socket) do
    {:noreply, assign(socket, show_adjustment_form: true)}
  end

  def handle_event("cancel-adjustment-item", _, socket) do
    {:noreply, assign(socket, show_adjustment_form: false, adj_name: "", adj_value: "")}
  end

  def handle_event("change-adjustment-item", %{"adjustment" => %{"adj_name" => name, "adj_value" => val}}, socket) do
    int_val =
      case Integer.parse(val) do
        {int, _} -> int
        :error -> IO.inspect(val, label: "ERR")
      end
    {:noreply, assign(socket, adj_name: name, adj_value: int_val)}
  end

  def handle_event("commit-adjustment-item", btn, %{assigns: a} = socket) do
    value = if Map.has_key?(btn, "add"), do: a.adj_value, else: a.adj_value * -1
    adj = a.custom_adjustments ++ [%{
      id: Ecto.UUID.generate,
      name: a.adj_name,
      value: value
    }]

    {:noreply, assign(socket,
      adj_name: "",
      adj_value: "",
      custom_adjustments: adj,
      show_adjustment_form: false,
      excyte_price: a.excyte_price + value
    )}
  end

  def handle_event("remove-adjustment-item", %{"adj-id" => id}, %{assigns: a} = socket) do
    itm = Enum.find(a.custom_adjustments, fn ca -> ca.id === id end)
    adj = Enum.filter(a.custom_adjustments, fn ca -> ca.id !== id end)

    {:noreply, assign(socket,
      custom_adjustments: adj,
      excyte_price: a.excyte_price - itm.value
    )}
  end

  def handle_event("toggle-remarks", _, %{assigns: a} = socket) do
    {:noreply, assign(socket, show_remarks: !a.show_remarks)}
  end

  def handle_event("manual-adj", %{"adj" => adj}, socket) do
    int_val =
      case Integer.parse(adj) do
        {int, _} -> int
        :error -> IO.inspect(adj, label: "ERR")
      end
    {:noreply, assign(socket, excyte_price: int_val)}
  end

  def handle_event("toggle-auto-adj", %{"action" => act}, %{assigns: a} = socket) do
    val =
      if act === "apply" do
        a.listing.excyte_suggested_price + custom_adjustment_value(a.custom_adjustments)
      else
        a.listing.default_price.value + custom_adjustment_value(a.custom_adjustments)
      end
    {:noreply, assign(socket, excyte_price: val, auto_adjusted: !a.auto_adjusted)}
  end

  def handle_event("add-comp", _, %{assigns: a} = socket) do
    send self(), {:add_comp, %{listing: Map.merge(a.listing, %{
      excyte_price: a.excyte_price,
      custom_adjustments: a.custom_adjustments,
      auto_adjusted: a.auto_adjusted
    })}}
    {:noreply, socket}
  end

  defp custom_adjustment_value(adj) do
    Enum.reduce(adj, 0, fn ca, acc -> ca.value + acc end)
  end
end
