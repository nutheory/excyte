defmodule ExcyteWeb.Client.TemplateRender do
  use ExcyteWeb, :live_component
  alias ExcyteWeb.{ClientView}

  def render(assigns), do: ClientView.render("sections/#{assigns.template}.html", assigns)

  def update(assigns, socket) do
    {:ok, assign(socket,
      current_user: assigns.current_user,
      template: assigns.section.component_name,
      theme: assigns.insight.document_attributes,
      brokerage: assigns.brokerage,
      agent: assigns.agent,
      insight: assigns.insight,
      listings: assigns.listings
    )}
  end

  # defp sanitize_data(struct) do
  #   if is_struct(struct) do
  #     Enum.reduce(Map.from_struct(struct), %{}, fn
  #       ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
  #       ({:__meta__, _}, acc) -> acc
  #       ({k, v}, acc) -> Map.put(acc, k, v)
  #     end)
  #     |> Excyte.Utils.Methods.stringify_keys()
  #   else
  #     struct
  #   end
  # end
end
