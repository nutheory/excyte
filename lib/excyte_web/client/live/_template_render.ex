defmodule ExcyteWeb.Client.TemplateRender do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

  def update(assigns, socket) do
    IO.inspect(assigns.section, label: "SECTion")
    {:ok, assign(socket,
      current_user: assigns.current_user,
      template: assigns.section.component_name,
      type: assigns.type,
      brokerage: assigns.brokerage,
      agent: assigns.agent,
      content: assigns.section.content
    )}
  end

  ######## closed_analysis functions
  # closed = Enum.filter(insight["content"]["listings"], fn lst -> lst["status"] === "Closed" end)
  # closed_averages = format_averages(calculated_averages(closed))

  # closed_listings =
  #   Enum.map(closed, fn lst ->
  #     %{
  #       "address" => "#{lst["street_number"]} #{lst["street_name"]}",
  #       "percent" => (if lst["close_price"], do: Float.round(((lst["close_price"] / lst["list_price"]) * 100), 1), else: nil),
  #       "list" => "$#{number_to_delimited(lst["list_price"], precision: 0)}",
  #       "dom" => lst["days_on_market"],
  #       "close" => (if lst["close_price"], do: "$#{number_to_delimited(lst["close_price"], precision: 0)}", else: 0),
  #       "per_sqft" => "$#{number_to_delimited(lst["adjustments"]["sqft"]["price_per_sqft"], precision: 0)}"
  #     }
  #   end)
  #   |> Enum.sort_by(&(&1["dom"]))

  # data_points =
  #   Enum.map(closed, fn lst ->
  #     %{
  #         list: lst["list_price"],
  #         close: (if lst["close_price"], do: lst["close_price"], else: 0),
  #         dom: lst["days_on_market"],
  #         label: "#{lst["days_on_market"]} DoM"
  #       }
  #   end)
  #   |> Enum.sort_by(&(&1.dom))

  # chart_data = Jason.encode!(%{
  #   min: round(closed_averages["min"] * 0.85),
  #   max: round(closed_averages["max"] * 1.15),
  #   attrs: insight["document_attributes"],
  #   listings: data_points
  # })



  ######### suggested_price function
  # averages =
  #   Enum.group_by(insight["content"]["listings"], fn lst -> lst["status"] end)
  #   |> Enum.map(fn {_k, v} -> calculated_averages(v) end)
  #   |> Enum.map(fn avgs -> format_averages(avgs) end)
  #   |> Enum.sort_by(&(&1["order"]))


end
