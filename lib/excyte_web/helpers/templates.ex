defmodule ExcyteWeb.Helpers.Templates do
  import Phoenix.LiveView.Helpers
  import Excyte.Utils.Methods
  use Timex
  import Number.{Delimit}
  alias Excyte.{Activities}

  def agent_profile(%{agent_profile: ap}) do
    """
      <struct class="section" id="agent_profile">
        <struct class="body">
          <h1 class="muted-color">Agent profile</h1>
          <struct class="data-grid">
            <struct class="minor">
              {% if agent["photo_url"] %}
                <img src="{{ agent["photo_url"] }}" alt="{{ agent["name"] }} photo" />
              {% endif %}
            </struct>
            <struct class="major">
              <struct class="">
                <h2>{{ agent["name"] }}</h2>
                <h3>{{ agent["tagline"] }}</h3>
              </struct>
              <p>{{ agent["bio"] }}</p>
            </struct>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent" => ap}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def brokerage_profile(%{brokerage: brk}) do
    """
      <struct class="section" id="brokerage">
        <struct class="body">
          <h1 class="muted-color">About {{ brokerage["company_name"]}}</h1>
          <struct class="data-grid">
            {% if brokerage["logo_url"] or brokerage["addresses"].size > 0 %}
              <struct class="minor">
                {% if brokerage["logo_url"] %}
                  <img src="{{ brokerage["logo_url"] }}" alt="logo" />
                {% endif %}
                {% for address in brokerage["addresses"] %}
                  <struct class="mt-4">
                    <h4>{{ address["address_one"] }}</h4>
                    <p>
                      {{ address["address_two"] }}<br />
                      {{ address["city"] }}, {{ address["state"] }}, {{ address["zip"] }}<br />
                    </p>
                  </struct>
                {% endfor %}
              </struct>
            {% endif %}
            <struct class="major">
              {% if brokerage["description"] %}
                <p>{{ brokerage["description"] }}</p>
              {% endif %}
            </struct>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def commission_distribution(_) do
    """
      <struct class="section" id="commission_distribution">
        <struct class="body">
        </struct>
      </struct>
    """
  end

  def comparable(%{listing: lst}) do
    media = Jason.encode!(lst["media"])
    """
      <struct class="section" id="comparable_#{lst["listing_key"]}">
        <struct class="body">
          <h1 class="muted-color">Comparable Listing</h1>
          <struct class="data-grid">
            <struct class="minor">
              <div data-type="simpleGallery" contenteditable="false" data-media-json='#{media}' class="simple-gallery"></div>
              <p class="text-xs mt-2">#{lst["public_remarks"]}</p>
            </struct>
            <struct class="major">
              <div data-type="compDetails" class="comp-details">
                <struct class="data-grid border-b border-bgray-400">
                  <struct class="major">
                    {% if listing["street_number"] or listing["street_name"] %}
                      <h3 class="mb-0">{{ listing["street_number"] }} {{ listing["street_name"] }}</h3>
                    {% endif %}
                    {% if listing["city"] %}
                      <h4 class="text-bgray-300">{{ listing["city"] }}</h4>
                    {% endif %}
                  </struct>
                  <struct class="minor">
                    {% if listing["excyte_price"] %}
                      <h3>{{ listing["excyte_price"] }}</h3>
                    {% endif %}
                  </struct>
                </struct>
                <struct class="p-2">
                  <p>#{summarize_sale_info(lst)}</p>
                </p>
              </div>
            </struct>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"listing" => lst}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def cover(%{subject: sbj, agent_profile: ag, brokerage: brk}) do
    """
      <struct class="section" id="cover">
        <struct class="body">
          {% if subject.main_photo_url %}
            <struct
              class="mx-auto lg:float-left lg:mr-4 curve rounded-full h-48 w-48 bg-cover border-4 accent-color"
              style="background-image: url({{ subject.main_photo_url }});">
            </struct>
          {% endif %}
          <struct class="w-full clear-both text-center mt-4">
            <h1>Comparative Market Analysis</h1>
            {% if subject["street_number"] or subject["street_name"] %}
              <h2 class="mb-0">{{ subject["street_number"] }} {{ subject["street_name"] }}</h2>
            {% endif %}
            {% if subject["city"] %}
              <h4 class="text-bgray-300">{{ subject["city"] }}</h4>
            {% endif %}
            <struct class="border-t accent-color p-2 flex">
              {% if agent["photo_url"] %}
                <struct
                  class="rounded-full h-12 w-12 bg-cover border-4 accent-color"
                  style="background-image: url({{ agent.photo_url }});">
                </struct>
              {% endif %}
              <struct>
                <p>Created by</p>
                <h4>{{ agent["name"] }}</h4>
              </struct>
            </struct>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj, "agent" => ag, "brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def pricing_strategy(_) do
    """
      <struct class="section" id="pricing_strategy">
        <struct class="body">
          <h1 class="muted-color">What pricing strategy Works for you?</h1>
          <struct class="data-grid-fifty">
            <struct class="fifty">
              <p><mark>Currently its a Sellers Market</mark> and its never been more important
              having an Agent like myself in your corner. I have the market knowledge
              to highlight the value of your home and the connections that can lead
              to a higher selling price.</p>

              <p>Market value is an opinion of what a property would sell for in a
              competitive market based on the features and benefits of that property
              (the value), the overall real estate market, supply and demand, and what
              other similar properties have sold for in the same condition. Using this
              strategy has a few benefits. It increases visability so more Brokers and
              Agents will want to show their Buyers. Also when Buyers search online one
              of the main criterias they search by is price so this will lead to more
              exposure.</p>
            </struct>
            <struct class="fifty">
              <h4>Above Market Value</h4>
              <p>This pricing startegy can be risky and most seasoned Agents will avoid
              doing this to Sellers. The 1st 30 days of a listing is the most important
              and over pricing can negativly effect effect this time. You will see less
              Buyers at open houses, less offers and  logner listing times. Ultimately
              this could lead to a price reduction  and lessen your opportunity to
              capitalize on todays market.</p>

              <h4>Below Market Value</h4>
              <p>This senario works best for a Seller when time is of the essence and its
              important to sell quick. Or maybe there are improvements needed that the
              seller doesnt want to address. In todays market you may leave money on the
              table but you will sell fast.</p>
            </struct>
          </struct>
        </struct>
      </struct>
    """
  end

  def subject(%{subject: sbj}) do
    """
      <struct class="section" id="subject">
        <struct class="body">
          <h1 class="muted-color">Subject property</h1>
          <struct class="data-grid">
            <struct class="major">
              <struct class="header">
                {% if subject["street_number"] or subject["street_name"] %}
                  <h3 class="mb-0">{{ subject["street_number"] }} {{ subject["street_name"] }}</h3>
                  <p>estimated price <mark>$#{number_to_delimited(sbj["est_price"], precision: 0)}</mark></p>
                {% endif %}
              </struct>
              {% if subject["overview"] %}
                <p>{{ subject["overview"] }}</p>
              {% endif %}
            </struct>
            {% if subject["main_photo_url"] %}
              <struct class="minor">
                <img src="{{ subject["main_photo_url"] }}" alt="Subject home" />
              </struct>
            {% endif %}
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def synopsis(%{subject: sbj}) do
    """
      <struct class="section" id="synopsis">
        <struct class="body">
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def whats_cma(_) do
    """
      <struct class="section" id="whats_cma">
        <struct class="body">
          <h1 class="muted-color">What is a CMA?</h1>
          <p><strong>A CMA is</strong> a comparison of the most recent Active, Sold
          and Pending properties in the same neighborhood. These homes are commonly
          referred to as Listings. Each listing is detailed with information like
          square feet, bedrooms, bathrooms and lot size to name a few. I will use
          this information to determine the Market Value and most accurate listing
          price for your home.</p>
          <struct class="data-grid-fifty">
            <struct class="fifty">
              <h3>Where does the data come from?</h3>
              <p>The information used in your CMA is provided by my local Multiple Listing
              Service or MLS. MLS data is private and can only be accessed by licensed members,
              like myself, who pay an annual dues. Brokers, Realtors and Appraisers all used
              this protected data to arrive at the most accurate listing price.</p>
            </struct>
            <struct class="fifty">
              <h3>How Accurate is a CMA?</h3>
              <p>MLS data is live and the most accurate data that can be used. Listings are
              entered and updates are realtime. There is No Way to get more accurate data
              for your home. That's why it's so important to have a Realtor in your corner
              during one of the most important transactions in your life. The market is
              constantly changing because houses are bought and sold everyday. As your
              Realtor my finger is on the Markets pulse the entire time…….Real Time.</p>
            </struct>
          </struct>
        </struct>
      </struct>
    """
  end

  def why_an_agent(%{agent_profile: ap}) do
    """
      <struct class="section" id="why_an_agent">
        <struct class="body">
          <h1 class="muted-color">Why use an agent?</h1>
          <struct class="">
            <struct
              class="float-right ml-12 curve rounded-full bg-cover accent-color border-4 w-32 h-32 lg:w-48 lg:h-48"
              style="background-image: url('/images/why_agent.jpg');"
            ></struct>
            <p>Anyone can go online and find recources that will give them an idea of what the
            estimated price your home can sell for in todays market......but whats next?
            Do you have the the knowledge and connections to capitalize in todays market?
            Do you have the tools and experience to market to the right audience?
            How do you prepare for and lead the largest transaction you'll ever enter? You
            Hire A Realtor, like myself,  to be in your corner! Todays market is challenging
            and requires more than negotion skills. I have built a career on the skills needed
            to master todays market. As your Agent I will protect you during the transaction
            and get you the most money for your home. I will also put together a plan to take
            advantage of this market and make your next purchase.</p>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent_profile" => ap}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  defp summarize_auto_adjust(%{adjustment: adj, difference: diff, price_per_sqft: pps} ) do
    """
       has been adjusted <strong>#{number_to_delimited(@adj, precision: 0)}</strong>
      based on a difference of #{diff} at $#{pps} per sqft
    """
  end

  defp time_to_text(listing, key) do
    if Map.has_key?(listing, key) && listing[key] !== nil do
      months = Timex.diff(DateTime.utc_now(), Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :months)
      cond do
        months <= 2 ->
          t = %{days: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :days)}
          "#{t.days} #{Inflex.inflect("day", t.days)} ago"
        months <= 18 ->
          t = %{months: months}
          "#{t.months} #{Inflex.inflect("month", t.months)} ago"
        months > 18 ->
          t = %{years: Timex.diff(DateTime.utc_now, Timex.parse!(listing[key], "{YYYY}-{0M}-{0D}"), :years)}
          "over #{t.years} #{Inflex.inflect("year", t.years)} ago"
      end
    else
      ""
    end
  end

  defp calculate_distance(subject_coords, listing_coords) do
    m = Geocalc.distance_between(subject_coords, listing_coords)
    Float.round(m * 0.000621371192, 2)
  end

  # def display_relevant_features(features) do
  #   assigns =
  #     Enum.reduce(features, %{}, fn {key, val}, acc ->
  #       if length(val) > 0 and hd(val) !== "None" do
  #         Map.put(acc, key, val)
  #       else
  #         acc
  #       end
  #     end)
  #   """
  #     <ul class="feature-list">
  #       <%= for {{key, val}, idx} <- Enum.with_index(assigns) do %>
  #         <li class="feature-item">
  #           <label class="block"><%= split_by_case(key) %></label>
  #           <p class="text-sm"><%= Enum.join(val, ", ") %></p>
  #         </li>
  #        <% end %>
  #     </ul>
  #   """
  # end

  defp summarize_sale_info(listing) do
    if listing["list_price"] !== nil || listing["close_price"] !== nil do
      if listing["close_price"] !== nil do
        when_text = time_to_text(listing, "close_date")
        close = if Map.has_key?(listing, "close_date"), do: " after #{listing["days_on_market"]} days on the market ", else: ""
        "Closed for $<strong>#{number_to_delimited(listing["close_price"], precision: 0)}</strong>#{close}#{when_text}"
      else
        when_text = time_to_text(listing, "on_market_date")
        listed = if Map.has_key?(listing, "close_date"), do: " with <strong>#{listing["days_on_market"]}</strong> days on the market ", else: ""
        "Listed for $<strong>#{number_to_delimited(listing["list_price"], precision: 0)}</strong>#{listed}#{when_text}"
      end
    else
      ""
    end
  end
end
