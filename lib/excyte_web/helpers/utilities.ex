defmodule ExcyteWeb.Helpers.Utilities do
  import Phoenix.LiveView.Helpers

  def status_to_color(status) do
    case status do
      "Active" -> "green-500"
      "Active Under Contract" -> "green-200"
      "Canceled" -> "yellow-500"
      "Closed" -> "red-500"
      "Expired" -> "pink-700"
      "Pending" -> "blue-500"
      "Withdrawn" -> "purple-500"
      _ -> ""
    end
  end

  def display_relevant_features(features) do
    assigns =
      Enum.reduce(features, %{}, fn {key, val}, acc ->
        if length(val) > 0 and hd(val) !== "None" do
          Map.put(acc, key, val)
        else
          acc
        end
      end)
    ~L"""
      <ul class="flex flex-wrap -mx-2">
        <%= for {{key, val}, idx} <- Enum.with_index(assigns) do %>
          <li class="w-full sm:w-1/2 xl:w-1/3 px-2 pb-1">
            <label class="block"><%= split_by_case(key) %></label>
            <p class="text-sm"><%= Enum.join(val, ", ") %></p>
          </li>
         <% end %>
      </ul>
    """
  end

  def key_to_atom(map) do
    Enum.reduce(map, %{}, fn
      # String.to_existing_atom saves us from overloading the VM by
      # creating too many atoms. It'll always succeed because all the fields
      # in the database already exist as atoms at runtime.
      {key, value}, acc when is_atom(key) -> Map.put(acc, key, value)
      {key, value}, acc when is_binary(key) -> Map.put(acc, String.to_existing_atom(key), value)
    end)
  end

  def split_by_case(str) do
    str
    |> String.split(~r/(?=[A-Z])/)
    |> tl()
    |> Enum.join(" ")
  end

  def simple_date_format(date) do
    # Remove Timex? Is it being used elsewhere?
    # {:ok, d, _} = DateTime.from_iso8601(date)
    # Calendar.strftime(d, "%b %d, %Y")
  end
end
