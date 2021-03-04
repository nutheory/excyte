defmodule ExcyteWeb.Helpers.Utilities do
  import Phoenix.LiveView.Helpers
  use Timex
  import Number.{Delimit}

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
      %{value: "new_construction", name: "New Construction"},
      %{value: "horses", name: "Horses"}
    ]
  end

  def status_to_color(status) do
    cond do
      String.contains?(status, "Active") ->  %{text: "text-green-600", bg: "bg-green-50", border: "border border-green-600"}
      String.contains?(status, "Active Under Contract") -> %{text: "text-amber-600", bg: "bg-amber-50", border: "border border-amber-600"}
      String.contains?(status, "Canceled") -> %{text: "text-red-600", bg: "bg-red-50", border: "border border-red-600"}
      String.contains?(status, "Closed") ->  %{text: "text-teal-600", bg: "bg-teal-50", border: "border border-teal-600"}
      String.contains?(status, "Expired") -> %{text: "text-pink-600", bg: "bg-pink-50", border: "border border-pink-600"}
      String.contains?(status, "Pending") -> %{text: "text-cyan-600", bg: "bg-cyan-50", border: "border border-cyan-600"}
      String.contains?(status, "Withdrawn") -> %{text: "text-indigo-600", bg: "bg-indigo-50", border: "border border-indigo-600"}
      true -> ""
    end
  end

  def summarize_auto_adjust(%{adjustment: adj, difference: diff, price_per_sqft: pps}) do
    assigns = %{adj: adj, diff: diff, price_per_sqft: pps}
    ~L"""
      Total has been adjusted <strong><%= number_to_delimited(@adj, precision: 0) %></strong>
      based on a difference of <%= diff %> at $<%= pps %> per sqft
    """
  end

  def summarize_auto_adjust(_) do
    assigns = %{}
    ~L"""
      None
    """
  end

  def summarize_sale_info(listing) do
    if listing.list_price !== nil || listing.close_price !== nil do
      if listing.close_price !== nil do
        when_text = time_to_text(listing, :close_date)
        assigns = %{listing: listing, when_text: when_text}
        ~L"""
          Closed for $<strong><%= number_to_delimited(@listing.close_price, precision: 0) %></strong>
          <%= if Map.has_key?(@listing, :close_date) do %>
            after <%= @listing.days_on_market %> days on the market
          <% end %>
          <%= @when_text %>
        """
      else
        when_text = time_to_text(listing, :on_market_date)
        assigns = %{listing: listing, when_text: when_text}
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

  defp time_to_text(listing, key) do
    if Map.has_key?(listing, key) && listing[key] !== nil do
      months = Timex.diff(DateTime.utc_now(), Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :months)
      cond do
        months <= 2 ->
          assigns = %{days: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :days)}
          ~L"""
            <%= @days %> <%= Inflex.inflect("day", @days) %> ago
          """
        months <= 18 ->
          assigns = %{months: months}
          ~L"""
            <%= @months %> <%= Inflex.inflect("month", @months) %> ago
          """
        months > 18 ->
          assigns = %{years: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :years)}
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
        <%= for {{key, val}, idx} <- Enum.with_index(assigns) do %>
          <li class="feature-item">
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

  def acres_to_sqft(acres) do
    acres * 43560
  end

  def sqft_to_acres(sqft) do
    Float.round(sqft/43560, 2)
  end

  def simple_date_format(date) do
    # Remove Timex? Is it being used elsewhere?
    # {:ok, d, _} = DateTime.from_iso8601(date)
    # Calendar.strftime(d, "%b %d, %Y")
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
