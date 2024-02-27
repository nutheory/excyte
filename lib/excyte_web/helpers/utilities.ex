defmodule ExcyteWeb.Helpers.Utilities do
  import Phoenix.Component
  use Timex
  import Number.{Delimit}

  def authorized?(role),
    do: if(role && Enum.member?(["admin", "owner"], role), do: true, else: false)

  def subscribed?(status),
    do: if(Enum.member?(["trialing", "active"], status), do: true, else: false)

  def build_url(path) do
    "//excyte.s3.amazonaws.com/#{path}"
  end

  def dissect_url(url) do
    full = List.last(String.split(url, "//excyte.s3.amazonaws.com/"))
    parts = String.split(full, "/")
    filename = hd(Enum.reverse(parts))
    path = Enum.join(Enum.reverse(tl(Enum.reverse(parts))), "/")
    %{full: full, parts: parts, filename: filename, path: path}
  end

  def insight_type_to_name(type) do
    case type do
      "buyer_tour" -> "Buyer Tour"
      "showcase" -> "Showcase"
      _ -> "CMA"
    end
  end

  def insight_type_to_color(type) do
    case type do
      "buyer_tour" -> "orange"
      "showcase" -> "green"
      _ -> "blue"
    end
  end

  def full_insight_type_to_name(type) do
    case type do
      "buyer_tour" -> "Buyer Tour"
      "showcase" -> "Showcase"
      _ -> "Comparative Market Analysis"
    end
  end

  def insight_type_to_component_name(type) do
    case type do
      "buyer_tour" -> "tour_stop"
      "showcase" -> "showcase"
      _ -> "comparable"
    end
  end

  def humanize_listing_name(type) do
    case type do
      "buyer_tour" -> "Tour Stop"
      "cma" -> "Comparable Listing"
      _ -> ""
    end
  end

  def humanize_component_name(type) do
    case type do
      "tour_stop" -> "Tour Stop"
      "comparable" -> "Comparable"
      _ -> ""
    end
  end

  def insight_dividers(type) do
    case type do
      "buyer_tour" -> "Buyer Tour"
      "showcase" -> "Showcase"
      _ -> "CMA"
    end
  end

  def social_description(ins, agt) do
    cnt = hd(agt.contacts)

    case ins.type do
      "cma" ->
        "Comparative Market Analysis (CMA) - #{ins.name} created by #{agt.name} (#{cnt.content})"

      "buyer_tour" ->
        "Buyer Tour - #{ins.name} created by #{agt.name} (#{cnt.content})"

      "showcase" ->
        "Showcase - #{ins.name} created by #{agt.name} (#{cnt.content})"
    end
  end

  def property_options() do
    [
      %{value: "single family residence", name: "Single Family"},
      %{value: "condominium", name: "Condominium"},
      %{value: "townhouse", name: "Townhouse"},
      %{value: "multi family", name: "Multi Family"}
    ]
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
      %{value: "PoolPrivateYN", name: "Pool"},
      %{value: "SpaYN", name: "Spa"},
      %{value: "ViewYN", name: "View"},
      %{value: "WaterfrontYN", name: "Waterfront"},
      %{value: "NewConstructionYN", name: "New Construction"}
    ]
  end

  def contact_types() do
    [
      %{value: "lead", text: "Lead"},
      %{value: "client", text: "client"},
      %{value: "lender", text: "Lender"},
      %{value: "team_member", text: "Team member"},
      %{value: "personal", text: "Personal"},
      %{value: "other", text: "Other"}
    ]
  end

  def contact_priorities() do
    [
      %{value: "low", text: "Low"},
      %{value: "medium", text: "Medium"},
      %{value: "high", text: "High"},
      %{value: "urgent", text: "Urgent"}
    ]
  end

  def contact_scope_options() do
    [
      %{value: "all", text: "All Contacts"},
      %{value: "agent", text: "My Contacts"},
      %{value: "brokerage", text: "Brokerage Contacts"}
    ]
  end

  def contact_sort_options() do
    [
      %{value: "name_desc", text: "Name A-Z"},
      %{value: "name_asc", text: "Name Z-A"},
      %{value: "client", text: "Add a Client"}
    ]
  end

  def contact_type_options() do
    [
      %{value: nil, text: "All Types"},
      %{value: "leads", text: "Leads"},
      %{value: "clients", text: "Clients"},
      %{value: "brokers", text: "Brokers"}
    ]
  end

  def garage_options() do
    [
      %{value: "any", text: "Any"},
      %{value: "1", text: "1"},
      %{value: "2", text: "2"},
      %{value: "2+", text: "2+"}
    ]
  end

  def stories_options() do
    [
      %{value: "any", text: "Any"},
      %{value: "1", text: "1"},
      %{value: "2", text: "2"},
      %{value: "2+", text: "2+"}
    ]
  end

  def assign_contact_type(content) do
    if is_binary(content) do
      cond do
        String.match?(
          content,
          ~r/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        ) ->
          "phone"

        String.match?(content, ~r/^\S+@\S+\.\S+$/) ->
          "email"

        String.match?(
          content,
          ~r/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        ) ->
          "url"

        true ->
          nil
      end
    else
      nil
    end
  end

  def adjustment_value(adj_diff) do
    adj = to_string(adj_diff)

    if String.starts_with?(adj, "-") do
      assigns = %{__changed__: nil, adj: adj}

      ~H"""
      <span class="font-bold text-red-700"><%= @adj %></span>
      """
    else
      assigns =
        if String.starts_with?(adj, "+"),
          do: %{__changed__: nil, adj: String.slice(adj, 1..20)},
          else: %{__changed__: nil, adj: adj}

      ~H"""
      <span class="font-bold"><%= @adj %></span>
      """
    end
  end

  def default_filter(subject) do
    %{
      default: true,
      # dataset_id: subject.dataset_id,
      # price_min: if(subject.est_price, do: round(subject.est_price / 1000 * 0.95), else: 0),
      # price_max:
      #   if(subject.est_price, do: round(subject.est_price / 1000 * 1.05), else: 100_000_000),
      # price: %{
      #   type: Integer,
      #   low: if(subject.est_price, do: round(subject.est_price / 1000 * 0.95), else: 0),
      #   high: if(subject.est_price, do: round(subject.est_price / 1000 * 1.05), else: 100_000_000)
      # },
      # beds: %{
      #   type: Integer,
      #   low: if(subject.beds, do: subject.beds - 1, else: 0),
      #   high: if(subject.beds, do: subject.beds + 1, else: 100)
      # },
      # baths: %{
      #   type: Float,
      #   low: if(subject.baths, do: round(subject.baths) - 1, else: 0),
      #   high: if(subject.baths, do: round(subject.baths) + 1, else: 0)
      # },
      # sqft: %{
      #   type: Integer,
      #   low: if(subject.sqft, do: round(subject.sqft * 0.7), else: 0),
      #   high: if(subject.sqft, do: round(subject.sqft * 1.4), else: 0)
      dataset_id: subject["dataset_id"],
      price_min: if(subject["est_price"], do: round(subject["est_price"] / 1000 * 0.95), else: 0),
      price_max:
        if(subject["est_price"], do: round(subject["est_price"] / 1000 * 1.05), else: 100_000_000),
      price: %{
        type: Integer,
        low: if(subject["est_price"], do: round(subject["est_price"] / 1000 * 0.95), else: 0),
        high:
          if(subject["est_price"],
            do: round(subject["est_price"] / 1000 * 1.05),
            else: 100_000_000
          )
      },
      beds: %{
        type: Integer,
        low: if(subject["beds"], do: subject["beds"] - 1, else: 0),
        high: if(subject["beds"], do: subject["beds"] + 1, else: 100)
      },
      baths: %{
        type: Float,
        low: if(subject["baths"], do: round(subject["baths"]) - 1, else: 0),
        high: if(subject["baths"], do: round(subject["baths"]) + 1, else: 0)
      },
      sqft: %{
        type: Integer,
        low: if(subject["sqft"], do: round(subject["sqft"] * 0.7), else: 0),
        high: if(subject["sqft"], do: round(subject["sqft"] * 1.4), else: 0)
      },
      property_types: set_property_type(subject),
      selected_statuses: [
        %{value: "active", name: "Active"},
        %{value: "closed", name: "Closed"},
        %{value: "pending", name: "Pending"}
      ],
      status_updated: %{value: 12, text: "Past year"},
      distance: 3.0
    }
  end

  def summarize_auto_adjust(%{adjustment: adj, difference: diff, price_per_sqft: pps}) do
    assigns = %{__changed__: nil, adj: adj, diff: diff, price_per_sqft: pps}

    ~H"""
    Total has been adjusted <strong><%= number_to_delimited(@adj, precision: 0) %></strong>
    based on a difference of <%= diff %> at $<%= pps %> per sqft
    """
  end

  def summarize_auto_adjust(_) do
    assigns = %{__changed__: nil}

    ~H"""
    None
    """
  end

  def summarize_sale_info(listing) do
    if listing.list_price !== nil || listing.close_price !== nil do
      if listing.close_price !== nil do
        when_text = time_to_text(listing, :close_date)
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}

        ~H"""
        Closed for $<strong><%= number_to_delimited(@listing.close_price, precision: 0) %></strong>
        <%= if Map.has_key?(@listing, :close_date) do %>
          after <%= @listing.days_on_market %> days on the market
        <% end %>
        <%= @when_text %>
        """
      else
        when_text = time_to_text(listing, :on_market_date)
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}

        ~H"""
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
      months =
        Timex.diff(DateTime.utc_now(), Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :months)

      cond do
        months <= 2 ->
          assigns = %{
            __changed__: nil,
            days:
              Timex.diff(
                DateTime.utc_now(),
                Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"),
                :days
              )
          }

          ~H"""
          <%= @days %> <%= Inflex.inflect("day", @days) %> ago
          """

        months <= 18 ->
          assigns = %{__changed__: nil, months: months}

          ~H"""
          <%= @months %> <%= Inflex.inflect("month", @months) %> ago
          """

        months > 18 ->
          assigns = %{
            __changed__: nil,
            years:
              Timex.diff(
                DateTime.utc_now(),
                Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"),
                :years
              )
          }

          ~H"""
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

    ~H"""
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

  def get_temp_id, do: :crypto.strong_rand_bytes(5) |> Base.url_encode64() |> binary_part(0, 5)

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
    if sqft, do: Float.round(sqft / 43560, 2), else: ""
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

  def insight_type_icon(type) do
    case type do
      "cma" ->
        """
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full accent-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        """

      "buyer_tour" ->
        """
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full accent-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        """

      "showcase" ->
        """
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full accent-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        """
    end
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

  def format_atom_json(body) do
    Map.new(body, fn {k, v} ->
      if is_atom(k) do
        {Atom.to_string(k), handle_nested_atom(v)}
      else
        {k, handle_nested(v)}
      end
    end)
  end

  def set_property_type(subject) do
    case subject["dataset_id"] do
      "tmls" ->
        case subject["property_type"] do
          "single_family" -> [%{name: "Detached", value: "detached"}]
          "condo" -> [%{name: "Condo", value: "condominium"}]
          _ -> [%{name: "Attached", value: "attached"}]
        end

      "public" ->
        subject["property_type"]

      _ ->
        nil
    end
  end

  defp handle_nested_atom(v) when is_list(v) do
    Enum.map(v, fn x ->
      if Enumerable.impl_for(x) do
        Map.new(x, fn {k, val} ->
          {Atom.to_string(k), handle_nested_atom(val)}
        end)
      else
        x
      end
    end)
  end

  defp handle_nested_atom(v) when is_map(v) do
    Map.new(v, fn {k, vm} ->
      {Atom.to_string(k), handle_nested_atom(vm)}
    end)
  end

  defp handle_nested_atom(v), do: v

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
