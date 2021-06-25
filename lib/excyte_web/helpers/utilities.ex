defmodule ExcyteWeb.Helpers.Utilities do
  import Phoenix.LiveView.Helpers
  use Timex
  import Number.{Delimit}

  def authorized?(role), do: if Enum.member?(["admin", "owner"], role), do: true, else: false

  def insight_type_to_name(type) do
    case type do
      "cma" -> "CMA"
      "buyer_tour" -> "Buyer Tour"
      "showcase" -> "Showcase"
    end
  end

  def humanize_component_name(type) do
    case type do
      "tour_stop" -> "Tour Stop"
      "comparable" -> "Comparable"
      _ -> ""
    end
  end

  def status_options() do
    [
      %{value: "active", name: "Active"},
      %{value: "active_under_contract", name: "Active Under Contract"},
      %{value: "canceled", name: "Canceled"},
      %{value: "closed", name: "Closed"},
      %{value: "expired", name: "Expired"},
      %{value: "pending", name: "Pending"},
      %{value: "withdrawn", name: "Withdrawn"}
    ]
  end

  def feature_options() do
    [
      %{value: "pool", name: "Pool"},
      %{value: "spa", name: "Spa"},
      %{value: "view", name: "View"},
      %{value: "waterfront", name: "Waterfront"},
      %{value: "construction", name: "New Construction"},
      %{value: "horses", name: "Horse Stable"}
    ]
  end

  def assign_contact_type(content) do
    cond do
      String.match?(content, ~r/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/) -> "phone"
      String.match?(content, ~r/^\S+@\S+\.\S+$/) -> "email"
      String.match?(content, ~r/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/) -> "url"
      true -> nil
    end
  end

  def icon_adjustment(adj_diff) do
    adj = to_string(adj_diff)
    if String.starts_with?(adj, "-") do
      assigns = %{__changed__: nil, adj: String.slice(adj, 1..10)}
      ~L"""
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
        </svg><span class="font-bold"><%= @adj %></span>
      """
    else
      assigns = if String.starts_with?(adj, "+"), do: %{__changed__: nil,adj: String.slice(adj, 1..20)}, else: %{__changed__: nil, adj: adj}
      ~L"""
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg><span class="font-bold"><%= @adj %></span>
      """
    end
  end

  def default_filter(subject) do
    %{
      default: true,
      price_min: (if subject.est_price, do: round(subject.est_price * 0.95), else: 0),
      price_max: (if subject.est_price, do: round(subject.est_price * 1.05), else: 100000000),
      price: %{
        type: Integer,
        low: (if subject.est_price, do: round(subject.est_price * 0.95), else: 0),
        high: (if subject.est_price, do: round(subject.est_price * 1.05), else: 100000000)
      },
      beds: %{
        type: Integer,
        low: (if subject.beds, do: subject.beds - 2, else: 0),
        high: (if subject.beds, do: subject.beds + 2, else: 100)
      },
      baths: %{
        type: Float,
        low: (if subject.baths, do: round(subject.baths) - 2, else: 0),
        high: (if subject.baths, do: round(subject.baths) + 2, else: 0)
      },
      sqft: %{
        type: Integer,
        low: (if subject.sqft, do: round(subject.sqft * 0.7), else: 0),
        high: (if subject.sqft, do: round(subject.sqft * 1.6), else: 0)
      },
      # TODO switch to live make statuses ["closed", "pending"]
      selected_statuses: [%{value: "active", name: "Active"}],
      status_updated: %{value: 24, text: "Past 2 years"},
      distance: 200.0
    }
  end

  def summarize_auto_adjust(%{adjustment: adj, difference: diff, price_per_sqft: pps}) do
    assigns = %{__changed__: nil, adj: adj, diff: diff, price_per_sqft: pps}
    ~L"""
      Total has been adjusted <strong><%= number_to_delimited(@adj, precision: 0) %></strong>
      based on a difference of <%= diff %> at $<%= pps %> per sqft
    """
  end

  def summarize_auto_adjust(_) do
    assigns = %{__changed__: nil}
    ~L"""
      None
    """
  end

  def summarize_sale_info(listing) do
    if listing.list_price !== nil || listing.close_price !== nil do
      if listing.close_price !== nil do
        when_text = time_to_text(listing, :close_date)
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}
        ~L"""
          Closed for $<strong><%= number_to_delimited(@listing.close_price, precision: 0) %></strong>
          <%= if Map.has_key?(@listing, :close_date) do %>
            after <%= @listing.days_on_market %> days on the market
          <% end %>
          <%= @when_text %>
        """
      else
        when_text = time_to_text(listing, :on_market_date)
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}
        ~L"""
          Listed for $<strong><%= number_to_delimited(@listing.list_price, precision: 0) %></strong>
          <%= if Map.has_key?(@listing, :days_on_market) do %>
            with <strong><%= @listing.days_on_market %></strong> days on the market
          <% end %>
          <%= when_text %>
        """
      end
    else
      ""
    end
  end

  def time_to_text(listing, key) do
    if Map.has_key?(listing, key) && listing[key] !== nil do
      months = Timex.diff(DateTime.utc_now(), Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :months)
      cond do
        months <= 2 ->
          assigns = %{__changed__: nil, days: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :days)}
          ~L"""
            <%= @days %> <%= Inflex.inflect("day", @days) %> ago
          """
        months <= 18 ->
          assigns = %{__changed__: nil, months: months}
          ~L"""
            <%= @months %> <%= Inflex.inflect("month", @months) %> ago
          """
        months > 18 ->
          assigns = %{__changed__: nil, years: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :years)}
          ~L"""
            over <%= @years %> <%= Inflex.inflect("year", @years) %> ago
          """
      end
    else
      ""
    end
  end

  def calculate_distance(subject_coords, listing_coords) do
    m = Geocalc.distance_between(subject_coords, listing_coords)
    Float.round(m * 0.000621371192, 2)
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
      <ul class="feature-list">
        <%= for {{key, val}, _idx} <- Enum.with_index(assigns) do %>
          <li class="feature-item">
            <label class="block"><%= split_by_case(key) %></label>
            <p class="text-sm"><%= Enum.join(val, ", ") %></p>
          </li>
         <% end %>
      </ul>
    """
  end


  def get_temp_id, do: :crypto.strong_rand_bytes(5) |> Base.url_encode64 |> binary_part(0, 5)

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

  def acres_to_sqft(acres) do
    acres * 43560
  end

  def sqft_to_acres(sqft) do
    Float.round(sqft/43560, 2)
  end

  def format_str_json(body) do
    Jason.decode!(body)
    |> Map.new(fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), handle_nested(v)}
      else
        {k, handle_nested(v)}
      end
    end)
  end

  def format_quoted_json(body) do
    Map.new(body, fn {k, v} ->
      if is_binary(k) do
        {String.to_atom(k), handle_nested(v)}
      else
        {k, handle_nested(v)}
      end
    end)
  end

  defp handle_nested(v) when is_list(v) do
    Enum.map(v, fn x ->
      if Enumerable.impl_for(x) do
        Map.new(x, fn {k, val} -> {String.to_atom(k), handle_nested(val)} end)
      else
        x
      end
    end)
  end

  defp handle_nested(v) when is_map(v) do
    Map.new(v, fn {k, vm} -> {String.to_atom(k), handle_nested(vm)} end)
  end

  defp handle_nested(v), do: v
end
