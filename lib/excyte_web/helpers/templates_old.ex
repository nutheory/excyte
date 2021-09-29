defmodule ExcyteWeb.Helpers.Templates do
  use Timex
  import Number.{Delimit}
  alias Excyte.{Activities, Mls.ProcessReso}
  alias ExcyteWeb.{Helpers.Utilities}


  def agent_profile(%{agent_profile: ap}, type) do
    profile = Excyte.Utils.Methods.stringify_keys(ap)
    """
      <divider type="#{type}"></divider>
      <struct class="section agent w-full lg:w-4/5 mx-auto" id="agent_profile" title="Agent Profile" subtitle="{{ agent["name"] }}">
        <struct class="flex flex-wrap">
          {% if agent["photo_url"] %}
            <struct class="avatar"><img src="{{ agent["photo_url"] }}" alt="{{ agent["name"] }} photo" /></struct>
          {% endif %}
          <struct class="w-full pt-4 md:ml-6 md:flex-1 md:flex md:items-end">
            <struct class="text-center md:text-left">
              {% if agent["name"] %}
                <h1 class="header-color">{{ agent["name"] }}</h1>
              {% endif %}
              {% if agent["tagline"] %}
                <struct class="my-4 lg:my-6">
                  <blockquote>{{ agent["tagline"] }}</blockquote>
                </struct>
              {% endif %}
              {% if agent["company_name"] %}
                <h3 class="mb-0 header-color">{{ agent["company_name"] }}</h3>
              {% endif %}
              {% if agent["job_title"] %}
                <p class="font-semibold mb-4"><i>{{ agent["job_title"] }}</i></p>
              {% endif %}
            </struct>
          </struct>
        </struct>
        {% if agent["bio"] %}
          <p class="mt-4 mb-4 sub-header-color font-semibold text-lg md:text-xl lg:text-2xl">{{ agent["bio"] }}</p>
        {% endif %}
        <struct class="grid sm:grid-cols-2 gap-x-6 gap-y-4">
          {% if agent["contacts"].size > 0 %}
            <struct class="mt-6">
              {% for cnt in agent["contacts"] %}
                <contact type="{{ cnt["type"] }}" content="{{ cnt["content"] }}" name="{{ cnt["name"] }}"></contact>
              {% endfor %}
            </struct>
          {% endif %}
          {% if agent["logo_url"] %}
            <struct class="w-full flex items-center justify-center md:justify-end">
              <img src="{{ agent["logo_url"] }}" alt="{{ agent["company_name"] }} logo" />
            </struct>
          {% endif %}
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent" => profile}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def brokerage_profile(%{brokerage: brk}, type) do
    profile = Excyte.Utils.Methods.stringify_keys(brk)
    """
      <divider type="#{type}"></divider>
      <struct class="section w-full lg:w-4/5 mx-auto" id="brokerage_profile" title="Brokerage" subtitle="{{ brokerage["company_name"] }}">
        {% if brokerage["logo_url"] %}
          <struct class="flex items-center justify-center"><img src="{{ brokerage["logo_url"] }}" alt="logo" /></struct>
        {% endif %}
        <h2 class="header-color text-center">{{ brokerage["company_name"] }}</h2>
        {% if brokerage["tagline"] %}
          <struct class="flex items-center justify-center my-4">
            <blockquote>{{ brokerage["tagline"] }}</blockquote>
          </struct>
        {% endif %}
        {% if brokerage["description"] %}
          <p class="sub-header-color mb-4 font-semibold text-lg md:text-xl lg:text-2xl">{{ brokerage["description"] }}</p>
        {% endif %}
        <struct class="grid sm:grid-cols-2 gap-y-2 gap-x-6">
          {% if brokerage["contacts"] or brokerage["addresses"] %}
            {% for cnt in brokerage["contacts"] %}
              <contact type="{{ cnt["type"] }}" content="{{ cnt["content"] }}" name="{{ cnt["name"] }}"></contact>
            {% endfor %}
            {% for address in brokerage["addresses"] %}
            {% endfor %}
          {% endif %}
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"brokerage" => profile}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  # def commission_distribution(_, type) do
  #   """
  #     <struct class="section" id="commission_distribution">
  #       <struct class="body">
  #       </struct>
  #     </struct>
  #   """
  # end

  def closed_analysis(%{insight: insight}, type) do
    closed = Enum.filter(insight["content"]["listings"], fn lst -> lst["status"] === "Closed" end)
    closed_averages = format_averages(calculated_averages(closed))

    closed_listings =
      Enum.map(closed, fn lst ->
        %{
          "address" => "#{lst["street_number"]} #{lst["street_name"]}",
          "percent" => (if lst["close_price"], do: Float.round(((lst["close_price"] / lst["list_price"]) * 100), 1), else: nil),
          "list" => "$#{number_to_delimited(lst["list_price"], precision: 0)}",
          "dom" => lst["days_on_market"],
          "close" => (if lst["close_price"], do: "$#{number_to_delimited(lst["close_price"], precision: 0)}", else: 0),
          "per_sqft" => "$#{number_to_delimited(lst["adjustments"]["sqft"]["price_per_sqft"], precision: 0)}"
        }
      end)
      |> Enum.sort_by(&(&1["dom"]))

    data_points =
      Enum.map(closed, fn lst ->
        %{
           list: lst["list_price"],
           close: (if lst["close_price"], do: lst["close_price"], else: 0),
           dom: lst["days_on_market"],
           label: "#{lst["days_on_market"]} DoM"
         }
      end)
      |> Enum.sort_by(&(&1.dom))

    chart_data = Jason.encode!(%{
      min: round(closed_averages["min"] * 0.85),
      max: round(closed_averages["max"] * 1.15),
      attrs: insight["document_attributes"],
      listings: data_points
    })


    """
      <divider type="#{type}"></divider>
      <struct class="section closed-analysis" id="closed_analysis" title="Closed Listings Analysis">
        <h1 class="header-color">Closed Listings Analysis</h1>
        <p class="sub-header-color text-lg md:text-xl lg:text-2xl font-semibold mb-4">
        Overview and comparison of closed properties and their relevant information.</p>
        <closed-listings-chart class="my-12" data-chart='#{chart_data}'></closed-listings-chart>
        <struct class="sold-table">
          <table>
            <tr>
              <td class="text-left font-bold text-lg">Address</td>
              <td class="text-center font-bold text-lg">List price</td>
              <td class="text-center font-bold text-lg">Close price</td>
              <td class="text-center font-bold text-lg">% of list</td>
              <td class="text-center font-bold text-lg">DOM</td>
              <td class="text-center font-bold text-lg">$ per sqft</td>
            </tr>
            {% for cl in closed %}
              <tr>
                <td>{{ cl['address'] }}</td>
                <td class="text-center">{{ cl['list'] }}</td>
                <td class="text-center">{{ cl['close'] }}</td>
                <td class="text-center">{{ cl['percent'] }}</td>
                <td class="text-center">{{ cl['dom'] }}</td>
                <td class="text-center">{{ cl['per_sqft'] }}</td>
              </tr>
            {% endfor %}
            <tr>
              <td>Averages</td>
              <td class="text-center">{{ avgs['avg_list'] }}</td>
              <td class="text-center">{{ avgs['avg_close'] }}</td>
              <td class="text-center">{{ avgs['avg_percent'] }}</td>
              <td class="text-center">{{ avgs['avg_dom'] }}</td>
              <td class="text-center">{{ avgs['avg_sqft'] }}</td>
            </tr>
          </table>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"closed" => closed_listings, "avgs" => closed_averages}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def comparable(%{listing: listing}, type) do
    adjustments = Enum.map(listing["custom_adjustments"], fn adj ->
      Map.merge(adj, %{"display_value" => number_to_delimited(adj["value"], precision: 0)})
    end)
    media = Jason.encode!(listing["media"]) |> String.replace("'", "")
    """
      <divider type="#{type}"></divider>
      <struct class="section comparable" id="comparable_#{listing["listing_key"]}" title="Comparable" subtitle="{{ lst["street_number"] }} {{ lst["street_name"] }}">
        <showcase-gallery
          contenteditable="false"
          data-title="Comparable Listing"
          data-media-json='#{media}'
          data-addr-number='{{ lst["street_number"] }}'
          data-addr-street='{{ lst["street_name"] }}'
          data-addr-city='{{ lst["city"] }}'
          data-listing-id='{{ lst["listing_id"] }}'
          class="showcase-gallery"></showcase-gallery>
        <p class="summary pt-4 mb-4 sub-header-color">#{summarize_sale_info(listing)}</p>
        <struct class="main-details">
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["sqft"] %}
                #{number_to_delimited(listing["sqft"], precision: 0)}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Sqft</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["lotsize_preference"] == "sqft" %}
                #{number_to_delimited(listing["lotsize_sqft"], precision: 0)}
              {% else %}
                #{Utilities.sqft_to_acres(listing["lotsize_sqft"])}
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Lot #{String.capitalize(listing["lotsize_preference"])}</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["year_built"] %}
                {{ lst["year_built"] }}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Built</h4>
          </struct>
        </struct>
        <struct class="info-adjustments">
          <struct class="extra-details">
            <struct class="extra-info">
              <struct class="val header-color">
                {% if lst["beds"] %}
                  {{ lst["beds"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Beds</struct>
              <struct class="val header-color">
                {% if lst["baths"] and lst["baths"]["total"] %}
                  {{ lst["baths"]["total"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Baths</struct>
              <struct class="val header-color">
                {% if lst["stories"] %}
                  {{ lst["stories"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Stories</struct>
              <struct class="val header-color">
                {{ lst["parking"]["type"] }}
                {% if lst["parking"]["spaces"] == "N/A" %}
                {% else %}
                  (#{listing["parking"]["spaces"]})
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Parking</struct>
              <struct class="val header-color">
                {% if lst["property_sub_type"] %}
                  {{ lst["property_sub_type"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Sub-Type</struct>
            </struct>
            <struct class="extra-options">
              <struct>
                {% if lst["coords"] and lst["coords"][0] %}
                  <a href="https://www.google.com/maps/search/?api=1&query={{ lst["coords"][1] }}%2C{{ lst["coords"][0] }}">
                    <img src="/images/map_icon.png" alt="Map this address" /><span class="block text-sm">Map view</span>
                  </a>
                {% else %}
                  N/A
                {% endif %}
              </struct>
            </struct>
          </struct>
          <struct class="adjustments sub-header-color">
            <h4 class="mb-0">Adjustment considerations</h4>
            <p class="mb-4">Summary of differentiating attributes</p>
            <table>
              <tbody>
                {% if lst["close_price"] %}
                  <tr>
                    <td>Closed</td>
                    <td><strong>$#{number_to_delimited(listing["close_price"], precision: 0)}</strong></td>
                  </tr>
                {% else %}
                  {% if lst["list_price"] %}
                    <tr>
                      <td>Listed</td>
                      <td><strong>$#{number_to_delimited(listing["list_price"], precision: 0)}</strong></td>
                    </tr>
                  {% endif %}
                {% endif %}
                {% if lst["adjustments"]["sqft"] %}
                  <tr>
                    <td>Sqft</td>
                    <td>
                      {% if lst["adjustments"]["sqft"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["sqft"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["sqft"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% if lst["adjustments"]["lotsize"] %}
                  <tr>
                    <td>Lotsize</td>
                    <td>
                      {% if lst["adjustments"]["lotsize"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["lotsize"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["lotsize"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% if lst["adjustments"]["beds"] %}
                  <tr>
                    <td>Beds</td>
                    <td>
                      {% if lst["adjustments"]["beds"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["beds"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["beds"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% if lst["adjustments"]["baths"] %}
                  <tr>
                    <td>Baths</td>
                    <td>
                      {% if lst["adjustments"]["baths"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["baths"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["baths"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% if lst["adjustments"]["stories"] %}
                  <tr>
                    <td>Stories</td>
                    <td>
                      {% if lst["adjustments"]["stories"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["stories"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["stories"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% if lst["adjustments"]["year_built"] %}
                  <tr>
                    <td>Year built</td>
                    <td>
                      {% if lst["adjustments"]["year_built"]["difference"] < 0 %}
                        + {{ lst["adjustments"]["year_built"]["difference"] | times: -1 }}
                      {% else %}
                        - {{ lst["adjustments"]["year_built"]["difference"] }}
                      {% endif %}
                    </td>
                  </tr>
                {% endif %}
                {% for adj in adjustments %}
                  <tr>
                    <td class="text-left">{{ adj["name"] }}</td>
                    <td class="value">${{ adj["display_value"] }}</td>
                  </tr>
                {% endfor %}
              </tbody>
            </table>
          </struct>
          <struct class="footer sub-header-color">
            <h1>Adjusted value <span class="header-color">$#{number_to_delimited(listing["excyte_price"], precision: 0)}</span></h1>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => listing, "adjustments" => adjustments}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def cover_cma(%{subject: sbj, agent_profile: ag, brokerage: brk}, _type) do
    """
      <struct class="section" id="cover" title="Intro">
        <struct class="cover-wrapper">
          <struct class="title">
            <h1 class="bg-color sub-header-color bg-opacity-50">Comparative</h1>
            <h3 class="bg-color header-color">Market Analysis</h3>
          </struct>
          <struct class="subtitle header-color">
            <h1 class="bg-color bg-opacity-50">
              {% if subject["street_number"] %}
                {{ subject["street_number"] }}
              {% endif %}
              {% if subject["street_name"] %}
                {{ subject["street_name"] }}
              {% endif %}
            </h1>
            <h3 class="bg-color sub-header-color">prepared by {{ agent["name"] }}</h3>
          </struct>
          {% if subject.main_photo_url %}
            <struct
              class="rounded-md pb-2/3 mx-auto bg-cover bg-center"
              style="background-image: url({{ subject.main_photo_url }});">
            </struct>
          {% endif %}
          <struct class="absolute rounded-md top-0 left-0 right-0 bottom-0 h-full bg-gray-900 bg-opacity-40"></struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj, "agent" => ag, "brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def cover_showcase(%{insight: ins, agent_profile: ag, brokerage: brk}, _type) do
    listing =
      case ProcessReso.process_init({:ok, %{listings: ins["content"]["listings"]}}, nil) do
        {:ok, res} ->
          Utilities.format_atom_json(hd(res.listings))
        {:error, err} -> IO.inspect(err)
      end
    """
      <super-cover img="{{ lst["cover_photo_url"] }}"></super-cover>
      <struct class="section full-view" id="cover" title="Intro">
        <h1 class="text-center">Showcase</h1>
        <h4 class="text-center">highlighting</h4>
        <h1 class="text-center header-color">{{ lst["street_number"] }} {{ lst["street_name"] }}</h1>
        <h3 class="text-center">
          {% if lst["city"] and lst["state"] %}
            {{ lst["city"] }}, {{ lst["state"] }}
          {% endif %}
          {% if lst["zip"] %}
            {{ lst["zip"] }}
          {% endif %}
        </h3>
        <h4 class="text-center">created by {{ agent["name"] }}</h4>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => listing, "agent" => ag, "brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def cover_buyer_tour(%{agent_profile: ag, brokerage: brk}, _type) do
    """
      <struct class="section" id="cover" title="Intro">
        <h1 class="text-center">Buyer Tour</h1>
        <h4 class="text-center">created by {{ agent["name"] }}</h4>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent" => ag, "brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def pricing_strategy(_, type) do
    """
      <divider type="#{type}"></divider>
      <struct class="section pricing" id="pricing_strategy" title="Pricing Strategy">
        <h1 class="header-color">Home Pricing Strategies</h1>
        <p class="mb-4 text-lg md:text-xl lg:text-2xl font-semibold sub-header-color">
        <span class="font-extrabold header-color">Currently its a Sellers
        Market</span> and its never been more important having an Agent
        like myself in your corner. I have the market knowledge to
        highlight the value of your home and the connections that can lead
        to a higher selling price.</p>
        <p class="text-lg mb-4 md:text-xl lg:text-2xl font-semibold sub-header-color">Market value is
        an opinion of what a property would sell for in a competitive market
        based on the features and benefits of that property (the value), the
        overall real estate market, supply and demand, and what other similar
        properties have sold for in the same condition. Using this strategy has
        a few benefits. It increases visability so more Brokers and Agents will
        want to show their Buyers. Also when Buyers search online one of the main
        criterias they search by is price so this will lead to more exposure.</p>
        <struct class="data-grid-fifty">
          <struct class="fifty">
            <h4>Above Market Value</h4>
            <p class="text-lg md:text-xl lg:text-2xl font-semibold sub-header-color mb-4">This pricing startegy can be risky and most seasoned Agents will avoid
            doing this to Sellers. The 1st 3 weeks of a listing is the most important
            and over pricing can negatively effect effect this time. You will see less
            Buyers at open houses, less offers and longer listing times. Ultimately
            this could lead to a price reduction and lessen your opportunity to
            capitalize on todays market.</p>
          </struct>
          <struct class="fifty">
            <h4>Below Market Value</h4>
            <p class="text-lg md:text-xl lg:text-2xl font-semibold sub-header-color mb-4">This senario works best for a Seller when time is of the essence and its
            important to sell quick. Or maybe there are improvements needed that the
            seller doesnt want to address. In todays market you may leave money on the
            table but you will sell fast.</p>
          </struct>
        </struct>
      </struct>
    """
  end

  def showcase(%{insight: ins}, type) do
    listing =
      case ProcessReso.process_init({:ok, %{listings: ins["content"]["listings"]}}, nil) do
        {:ok, res} ->
          Utilities.format_atom_json(hd(res.listings))
        {:error, err} -> IO.inspect(err)
      end
    # address_text = "#{listing["street_number"]} #{listing["street_name"]}, #{listing["city"]}, #{listing["state"]} #{listing["zip"]}"
    address_uri = URI.encode("#{listing["city"]}, #{listing["state"]}, United States")
    media = Jason.encode!(listing["media"]) |> String.replace("'", "")
    """
      <divider type="#{type}"></divider>
      <struct class="section showcase" id="showcase" title="Property" subtitle="{{ lst["street_number"] }} {{ lst["street_name"] }}">
        <showcase-gallery
          contenteditable="false"
          data-title="Showing"
          data-media-json='#{media}'
          data-listing-id='{{ lst["listing_id"] }}'
          class="showcase-gallery"></showcase-gallery>
        <p class="summary pt-4 sub-header-color mb-4">#{summarize_showcase(listing)}</p>
        {% if lst["public_remarks"] %}
          <p class="text-xl md:text-2xl font-semibold sub-header-color w-full lg:w-4/5 mx-auto mb-4">{{ lst["public_remarks"] }}</p>
        {% endif %}
        <struct class="main-details">
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["sqft"] %}
                #{number_to_delimited(listing["sqft"], precision: 0)}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Sqft</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["lotsize_preference"] == "sqft" %}
                #{number_to_delimited(listing["lotsize_sqft"], precision: 0)}
              {% else %}
                #{Utilities.sqft_to_acres(listing["lotsize_sqft"])}
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Lot #{String.capitalize(listing["lotsize_preference"])}</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["year_built"] %}
                {{ lst["year_built"] }}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Built</h4>
          </struct>
        </struct>
        <struct class="sub-details">
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["beds"] %}
                {{ lst["beds"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Beds</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["baths"] and lst["baths"]["total"] %}
                {{ lst["baths"]["total"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Baths</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["stories"] %}
                {{ lst["stories"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Stories</h4>
          </struct>
        </struct>
        <struct class="info">
          <struct class="extra-details">
            <struct class="extra-info">
              <struct class="val header-color">
                {{ lst["parking"]["type"] }}
                {% if lst["parking"]["spaces"] == "N/A" %}
                {% else %}
                  (#{listing["parking"]["spaces"]})
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Parking</struct>
              <struct class="val header-color">
                {% if lst["property_sub_type"] %}
                  {{ lst["property_sub_type"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Sub-Type</struct>
              {% if lst["walkscore"] %}
                <struct class="val header-color">
                  {{ lst["walkscore"] }}
                </struct>
                <struct class="label sub-header-color">Walkscore</struct>
              {% endif %}
            </struct>
            <struct class="extra-options">
              <struct>
                {% if lst["coords"] and lst["coords"][0] %}
                  <a href="https://www.google.com/maps/search/?api=1&query={{ lst["coords"][1] }}%2C{{ lst["coords"][0] }}">
                    <img src="/images/map_icon.png" alt="Map this address" /><span class="block text-sm">Map view</span>
                {% endif %}
                <a href="https://foursquare.com/explore?mode=url&near=#{address_uri}">
                  <img src="/images/explore.png" alt="Map this address" /><span class="block text-sm">Explore<br />Community</span>
                </a>
              </struct>
            </struct>
          </struct>
          <struct class="association sub-header-color">
            {% if lst["association"].size > 0 %}
              <h4 class="mb-0">Association (HOA)</h4>
              <table>
                <tbody>
                  {% for assoc in lst["association"] %}
                    <tr>
                      <td>{{ assoc["name"] }}</td>
                      <td>{{ assoc["human"] }}</td>
                    </tr>
                  {% endfor %}
                </tbody>
              </table>
            {% endif %}
            {% if lst["tax_year"] or lst["tax_assessed_value"] or lst["tax_annual_amount"] or lst["tax_exemptions"] %}
              <h4 class="sub-header-color mt-8">Tax Info
                {% if lst["tax_year"] %}
                  ({{ lst["tax_year"] }})
                {% endif %}
              </h4>
              <table>
                <tbody>
                  {% if lst["tax_annual_amount"] %}
                    <tr>
                      <td>Annual amount</td>
                      <td>{{ lst["tax_annual_amount"] }}</td>
                    </tr>
                  {% endif %}
                  {% if lst["tax_assessed_value"] %}
                    <tr>
                      <td>Assessed Value</td>
                      <td>{{ lst["tax_assessed_value"] }}</td>
                    </tr>
                  {% endif %}
                  {% if lst["tax_exemptions"] %}
                    <tr">
                      <td>Exemptions</td>
                      <td">{{ lst["tax_exemptions"] }}</td>
                    </tr>
                  {% endif %}
                </tbody>
              </table>
            {% endif %}
          </struct>
        </struct>
        <struct>
          {% if lst["features"].size > 0 %}
            <collapsable class="mb-6 w-full lg:w-4/5 mx-auto" title="Features">
              <struct class="grid grid-cols-1 lg:grid-cols-2 gap-4 sub-header-color">
                {% for feat in lst["features"] %}
                  <struct class="block">
                    <h4 class="header-color mb-0">{{ feat["name"] }}</h4>
                    <p class="text-lg md:text-xl font-semibold mb-4">{{ feat["human"] }}</p>
                  </struct>
                {% endfor %}
              </struct>
            </collapsable>
          {% endif %}
          {% if lst["layout_details"].size > 0 %}
            <collapsable class="mb-6 w-full lg:w-4/5 mx-auto" title="Room Details">
              <struct class="grid grid-cols-1 lg:grid-cols-2 gap-6 sub-header-color">
                {% for ld in lst["layout_details"] %}
                  <struct class="">
                    <h4 class="mb-0 header-color">{{ ld["room_name"] }}</h4>
                    {% for attr in ld["values"] %}
                      {% if attr["name"] == "Features" %}
                        <p class="italic text-lg md:text-xl font-semibold mb-4">{{ attr["value"] }}</p>
                      {% endif %}
                    {% endfor %}
                    <struct class="flex flex-wrap">
                      {% for attr in ld["values"] %}
                        {% if attr["name"] != "Features" %}
                          <struct class="w-2/5 py-1">{{ attr["name"] }} <strong>{{ attr["value"] }}</strong></struct>
                        {% endif %}
                      {% endfor %}
                    </struct>
                  </struct>
                {% endfor %}
              </struct>
            </collapsable>
          {% endif %}
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => listing}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def subject(%{subject: subject}, type) do
    """
      <divider type="#{type}"></divider>
      <struct class="section subject" id="subject" title="Subject" subtitle="{{ sbj["street_number"] }} {{ sbj["street_name"] }}">
        <h1 class="header-color">Understanding Comparable Listings</h1>
        <p class="sub-header-color text-lg md:text-xl lg:text-2xl font-semibold mb-4">In explaining the suggested pricing
        of your home we compare it to local properties with similiar
        features(sqft, beds, baths) as well as proximity to shopping,
        schools, recreational facilities, fire and police protection.</p>
        <struct class="header">
          {% if sbj["street_number"] or sbj["street_name"] %}
            <h4 class="mb-0">{{ sbj["street_number"] }} {{ sbj["street_name"] }}</h4>
          {% endif %}
        </struct>
        <struct class="main-details">
          <struct class="detail">
            <h1 class="header-color">
              {% if sbj["sqft"] %}
                #{number_to_delimited(subject["sqft"], precision: 0)}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Sqft</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if sbj["lotsize_preference"] == "sqft" %}
                #{number_to_delimited(subject["lotsize_sqft"], precision: 0)}
              {% else %}
                #{Utilities.sqft_to_acres(subject["lotsize_sqft"])}
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Lot #{String.capitalize(subject["lotsize_preference"])}</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if sbj["year_built"] %}
                {{ sbj["year_built"] }}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Built</h4>
          </struct>
        </struct>
        <struct class="sub-details">
          <struct class="detail">
            <h2 class="header-color">
              {% if sbj["beds"] %}
                {{ sbj["beds"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Beds</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if sbj["baths"] %}
                {{ sbj["baths"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Baths</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if sbj["stories"] %}
                {{ sbj["stories"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Stories</h4>
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"sbj" => subject}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def suggested_price(%{subject: sbj, insight: insight}, type) do
    averages =
      Enum.group_by(insight["content"]["listings"], fn lst -> lst["status"] end)
      |> Enum.map(fn {_k, v} -> calculated_averages(v) end)
      |> Enum.map(fn avgs -> format_averages(avgs) end)
      |> Enum.sort_by(&(&1["order"]))

    """
      <divider type="#{type}"></divider>
      <struct class="section suggested-price" id="suggested_price" title="Suggested List Price">
        <h1 class="header-color">Suggested List Price</h1>
        <p class="sub-header-color text-lg md:text-xl lg:text-2xl font-semibold mb-4">Based on
        all the comparable listings, local data, and the current market. The following are
        great data points to consider when selling your home.</p>
        <struct class="my-8 lg:my-20">
          <struct class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {% for avg in avgs %}
              <struct class="border rounded-md px-4 py-2">
                <h3 class="mb-0">{{ avg["count"] }} {{ avg["status"] }}</h3>
                <struct class="flex">
                  {% if avg["avg_close"] %}
                    <struct class="">
                      <p class="font-bold leading-none">Close price</p>
                      <h2 class="header-color mb-0">{{ avg["avg_close"] }}</h2>
                    </struct>
                    <struct class="slash flex items-center">/</struct>
                    <struct class="mt-1 ml-1">
                      <p class="font-bold leading-none">List price</p>
                      <h3 class="header-color mb-0">{{ avg["avg_list"] }}</h3>
                    </struct>
                  {% else %}
                    <struct class="">
                      <p class="font-bold leading-none">List price</p>
                      <h2 class="header-color mb-0">{{ avg["avg_list"] }}</h2>
                    </struct>
                    <struct class="flex items-end">
                      <p class="font-bold pl-2 pb-0.5"><span class="header-color">{{ avg["avg_sqft"] }}</span> per sqft</p>
                    </struct>
                  {% endif %}
                </struct>
                {% if avg["avg_dom"] %}
                  <h4 class="mb-0">Average days on market is <span class="header-color">{{ avg["avg_dom"] }}</span></h4>
                {% endif %}
              </struct>
            {% endfor %}
          </struct>
        </struct>
        <struct class="mt-12 md:mb-6 md:mt-24 md:mb-10">
          <h3 class="sub-header-color text-center"> Your Suggested price range is </h3>
          <h1 class="header-color text-center price-value">$#{number_to_delimited(insight["content"]["suggested_subject_price"]["min"], precision: 0)} - $#{number_to_delimited(insight["content"]["suggested_subject_price"]["max"], precision: 0)}</h1>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj, "insight" =>  insight, "avgs" => averages}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def tour_stop(%{listing: listing}, type) do
    address_text = "#{listing["street_number"]} #{listing["street_name"]}, #{listing["city"]}, #{listing["state"]} #{listing["zip"]}"
    destination_uri = URI.encode("#{listing["street_number"]} #{listing["street_name"]}, #{listing["city"]}, #{listing["state"]}")
    address_uri = URI.encode("#{listing["city"]}, #{listing["state"]}, United States")
    media = Jason.encode!(listing["media"]) |> String.replace("'", "")
    """
      <divider type="#{type}"></divider>
      <struct class="section tour" id="tour_stop_{{ lst["listing_id"] }}" title="Attraction" subtitle="{{ lst["street_number"] }} {{ lst["street_name"] }}">
        <struct class="flex">
          <h4><a href="https://www.google.com/maps/dir/?api=1&destination=#{destination_uri}">Map Directions</a></h4>
        </struct>
        <guard>
          <public-data data-listing-id='{{ lst["listing_id"] }}' data-address='#{address_text}'></public-data>
        </guard>
        <showcase-gallery
          contenteditable="false"
          data-title="Showing"
          data-media-json='#{media}'
          data-addr-number='{{ lst["street_number"] }}'
          data-addr-street='{{ lst["street_name"] }}'
          data-addr-city='
            {% if lst["city"] and lst["state"] %}
              {{ lst["city"] }}, {{ lst["state"] }}
            {% endif %}
            {% if lst["zip"] %}
              {{ lst["zip"] }}
            {% endif %}
          '
          data-listing-id='{{ lst["listing_id"] }}'
          class="showcase-gallery"></showcase-gallery>
        <p class="summary pt-4 sub-header-color mb-4">#{summarize_showcase(listing)}</p>
        {% if lst["public_remarks"] %}
          <p class="text-xl md:text-2xl font-semibold sub-header-color w-full lg:w-4/5 mx-auto mb-4">{{ lst["public_remarks"] }}</p>
        {% endif %}
        <struct class="main-details">
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["sqft"] %}
                #{number_to_delimited(listing["sqft"], precision: 0)}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Sqft</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["lotsize_preference"] == "sqft" %}
                #{number_to_delimited(listing["lotsize_sqft"], precision: 0)}
              {% else %}
                #{Utilities.sqft_to_acres(listing["lotsize_sqft"])}
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Lot #{String.capitalize(listing["lotsize_preference"])}</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h1 class="header-color">
              {% if lst["year_built"] %}
                {{ lst["year_built"] }}
              {% else %}
                N/A
              {% endif %}
            </h1>
            <h4 class="sub-header-color">Built</h4>
          </struct>
        </struct>
        <struct class="sub-details">
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["beds"] %}
                {{ lst["beds"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Beds</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["baths"] and lst["baths"]["total"] %}
                {{ lst["baths"]["total"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Baths</h4>
          </struct>
          <struct class="flex-1"></struct>
          <struct class="detail">
            <h2 class="header-color">
              {% if lst["stories"] %}
                {{ lst["stories"] }}
              {% else %}
                N/A
              {% endif %}
            </h2>
            <h4 class="sub-header-color">Stories</h4>
          </struct>
        </struct>
        <struct class="info">
          <struct class="extra-details">
            <struct class="extra-info">
              <struct class="val header-color">
                {{ lst["parking"]["type"] }}
                {% if lst["parking"]["spaces"] == "N/A" %}
                {% else %}
                  (#{listing["parking"]["spaces"]})
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Parking</struct>
              <struct class="val header-color">
                {% if lst["property_sub_type"] %}
                  {{ lst["property_sub_type"] }}
                {% else %}
                  N/A
                {% endif %}
              </struct>
              <struct class="label sub-header-color">Sub-Type</struct>
              {% if lst["walkscore"] %}
                <struct class="val header-color">
                  {{ lst["walkscore"] }}
                </struct>
                <struct class="label sub-header-color">Walkscore</struct>
              {% endif %}
              {% if lst["excyte_note"] != "" %}
                <struct class="mb-4 col-span-2">
                  <h4 class="mb-0 header-color">Agents Note</h4>
                  <p class="pr-4 leading-tight">{{ lst["excyte_note"] }}</p>
                </struct>
              {% endif %}
            </struct>
            <struct class="extra-options">
              <struct>
                {% if lst["coords"] and lst["coords"][0] %}
                  <a href="https://www.google.com/maps/search/?api=1&query={{ lst["coords"][1] }}%2C{{ lst["coords"][0] }}">
                    <img src="/images/map_icon.png" alt="Map this address" /><span class="block text-sm">Map view</span>
                {% endif %}
                <a href="https://foursquare.com/explore?mode=url&near=#{address_uri}">
                  <img src="/images/explore.png" alt="Map this address" /><span class="block text-sm">Explore<br />Community</span>
                </a>
              </struct>
            </struct>
          </struct>
          <struct class="association sub-header-color">
            {% if lst["association"].size > 0 %}
              <h4 class="mb-0">Association (HOA)</h4>
              <table>
                <tbody>
                  {% for assoc in lst["association"] %}
                    <tr>
                      <td>{{ assoc["name"] }}</td>
                      <td>{{ assoc["human"] }}</td>
                    </tr>
                  {% endfor %}
                </tbody>
              </table>
            {% endif %}
            {% if lst["tax_year"] or lst["tax_assessed_value"] or lst["tax_annual_amount"] or lst["tax_exemptions"] %}
              <h4 class="sub-header-color mt-8">Tax Info
                {% if lst["tax_year"] %}
                  ({{ lst["tax_year"] }})
                {% endif %}
              </h4>
              <table>
                <tbody>
                  {% if lst["tax_annual_amount"] %}
                    <tr>
                      <td>Annual amount</td>
                      <td>{{ lst["tax_annual_amount"] }}</td>
                    </tr>
                  {% endif %}
                  {% if lst["tax_assessed_value"] %}
                    <tr>
                      <td>Assessed Value</td>
                      <td>{{ lst["tax_assessed_value"] }}</td>
                    </tr>
                  {% endif %}
                  {% if lst["tax_exemptions"] %}
                    <tr">
                      <td>Exemptions</td>
                      <td">{{ lst["tax_exemptions"] }}</td>
                    </tr>
                  {% endif %}
                </tbody>
              </table>
            {% endif %}
          </struct>
        </struct>
        <struct>
          {% if lst["features"].size > 0 %}
            <collapsable class="mb-6 w-full lg:w-4/5 mx-auto" title="Features">
              <struct class="grid grid-cols-1 lg:grid-cols-2 gap-4 sub-header-color">
                {% for feat in lst["features"] %}
                  <struct class="block">
                    <h4 class="header-color mb-0">{{ feat["name"] }}</h4>
                    <p class="text-lg md:text-xl font-semibold mb-4">{{ feat["human"] }}</p>
                  </struct>
                {% endfor %}
              </struct>
            </collapsable>
          {% endif %}
          {% if lst["layout_details"].size > 0 %}
            <collapsable class="mb-6 w-full lg:w-4/5 mx-auto" title="Room Details">
              <struct class="grid grid-cols-1 lg:grid-cols-2 gap-6 sub-header-color">
                {% for ld in lst["layout_details"] %}
                  <struct class="">
                    <h4 class="mb-0 header-color">{{ ld["room_name"] }}</h4>
                    {% for attr in ld["values"] %}
                      {% if attr["name"] == "Features" %}
                        <p class="italic text-lg md:text-xl font-semibold mb-4">{{ attr["value"] }}</p>
                      {% endif %}
                    {% endfor %}
                    <struct class="flex flex-wrap">
                      {% for attr in ld["values"] %}
                        {% if attr["name"] != "Features" %}
                          <struct class="w-2/5 py-1">{{ attr["name"] }} <strong>{{ attr["value"] }}</strong></struct>
                        {% endif %}
                      {% endfor %}
                    </struct>
                  </struct>
                {% endfor %}
              </struct>
            </collapsable>
          {% endif %}
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => listing}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def video_section(%{asset: a}, type) do
    asset = Jason.encode!(%{
      title: a.title,
      thumb_url: a.thumb_url,
      stream_id: a.stream_id,
      description: a.description,
      video_url: a.video_url})
    """
      <divider type="#{type}"></divider>
      <struct class="section" id="video_{{ asset.stream_id }}" title="Video" subtitle="{{asset.title}}">
        <div data-type='simpleVideo' contenteditable="false" data-video-json='#{asset}'></div>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"asset" => asset}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def whats_cma(_, type) do
    """
      <divider type="#{type}"></divider>
      <struct class="section whats-cma" id="whats_cma" title="What's a CMA">
        <p class="text-lg md:text-xl lg:text-2xl font-semibold sub-header-color mb-4"><span class="font-extrabold header-color">
        A CMA is</span> a comparison of the most recent Active, Sold
        and Pending properties in the same neighborhood. These homes are commonly
        referred to as Listings. Each listing is detailed with information like
        square feet, bedrooms, bathrooms and lot size to name a few. I will use
        this information to determine the Market Value and most accurate listing
        price for your home.</p>
        <struct class="data-grid-fifty mt-8">
          <struct class="fifty">
            <h4>Where does the data come from?</h4>
            <p class="text-lg md:text-xl lg:text-2xl font-semibold sub-header-color mb-4">The information used in your CMA is provided by my local Multiple Listing
            Service or MLS. MLS data is private and can only be accessed by licensed members,
            like myself, who pay an annual dues. Brokers, Realtors and Appraisers all used
            this protected data to arrive at the most accurate listing price.</p>
          </struct>
          <struct class="fifty">
            <h4>How Accurate is a CMA?</h4>
            <p class="text-lg md:text-xl lg:text-2xl font-semibold sub-header-color mb-4">MLS data is live and the most accurate data that can be used. Listings are
            entered and updates are realtime. There is No Way to get more accurate data
            for your home. That's why it's so important to have a Realtor in your corner
            during one of the most important transactions in your life. The market is
            constantly changing because houses are bought and sold everyday. As your
            Realtor my finger is on the Markets pulse the entire time…….Real Time.</p>
          </struct>
        </struct>
      </struct>
    """
  end

  def why_an_agent(%{agent_profile: ap}, type) do
    """
      <divider type="#{type}"></divider>
      <struct class="section lg:w-4/5 mx-auto" id="why_an_agent" title="Why Use an Agent?">
        <h1 class="header-color mb-0">Why Use an Agent?</h1>
        <struct class="sub-header-color">
          <p class="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Anyone can go online and find
          recources that will give them an idea of what the
          estimated price your home can sell for in todays market......but whats next?
          Do you have the the knowledge and connections to capitalize in todays market?
          Do you have the tools and experience to market to the right audience?
          How do you prepare for and lead the largest transaction you'll ever enter? You
          Hire A Realtor, like myself,  to be in your corner! Todays market is challenging
          and requires more than negotiation skills. I have built a career on the skills needed
          to master todays market. As your Agent I will protect you during the transaction
          and get you the most money for your home. I will also put together a plan to take
          advantage of this market and make your next purchase.</p>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent_profile" => ap}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  defp calculated_averages(listings_list) do
    Enum.reduce(listings_list, %{list_prices: [], close_prices: [], doms: [], percents: [], pp_sqfts: [], count: 0}, fn lst, acc ->
      ppsqft = lst["adjustments"]["sqft"]["price_per_sqft"]
      %{
        status: lst["status"],
        pp_sqfts: (if ppsqft !== nil, do: [ppsqft | acc.pp_sqfts], else: []),
        percents: (if lst["close_price"] !== nil, do: [Float.round(((lst["close_price"] / lst["list_price"]) * 100), 1) | acc.percents], else: acc.percents),
        list_prices: (if lst["list_price"] !== nil, do: [lst["list_price"] | acc.list_prices], else: acc.list_prices),
        close_prices: (if lst["close_price"] !== nil, do: [lst["close_price"] | acc.close_prices], else: acc.close_prices),
        doms: (if lst["days_on_market"] !== nil, do: [lst["days_on_market"] | acc.doms], else: acc.doms),
        count: acc.count + 1
      }
    end)
  end

  def format_averages(grp) do
    prices = grp.list_prices ++ grp.close_prices
    order =
      case grp.status do
        "Active" -> 3
        "Active Under Contract" -> 5
        "Canceled" -> 7
        "Closed" -> 1
        "Expired" -> 4
        "Pending" -> 2
        "Withdrawn" -> 6
      end

    %{
      "order" => order,
      "count" => grp.count,
      "min" => Enum.min(prices),
      "max" => Enum.max(prices),
      "status" => grp.status,
      "avg_sqft" => (if length(grp.pp_sqfts) > 0, do: "$#{number_to_delimited(round(Enum.sum(grp.pp_sqfts) / length(grp.pp_sqfts)), precision: 0)}", else: 0),
      "avg_dom" => (if length(grp.doms) > 0, do: "#{number_to_delimited(round(Enum.sum(grp.doms) / length(grp.doms)), precision: 0)}", else: nil),
      "avg_list" => (if length(grp.list_prices) > 0, do: "$#{number_to_delimited(round(Enum.sum(grp.list_prices) / length(grp.list_prices)), precision: 0)}", else: nil),
      "avg_close" => (if length(grp.close_prices) > 0, do: "$#{number_to_delimited(round(Enum.sum(grp.close_prices) / length(grp.close_prices)), precision: 0)}", else: nil),
      "avg_percent" => (if length(grp.percents) > 0, do: "#{number_to_delimited(Float.round((Enum.sum(grp.percents) / length(grp.percents)), 1), precision: 1)}", else: nil),
    }
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

  defp summarize_showcase(listing) do
    if listing["list_price"] !== nil && listing["listing_id"] !== nil do
      "Priced at <span class=\"header-color font-extrabold\">$#{number_to_delimited(listing["list_price"], precision: 0)}</span>
      with MLS number <i>#{listing["listing_id"]}</i>"
    else
      if listing["list_price"] !== nil do
        "MLS number <span class=\"header-color font-extrabold\">#{listing["listing_id"]}</span>"
      else
        "Priced at <span class=\"header-color font-extrabold\">$#{number_to_delimited(listing["list_price"], precision: 0)}</span>"
      end
    end
  end

  defp summarize_sale_info(listing) do
    if listing["list_price"] !== nil || listing["close_price"] !== nil do
      if listing["close_price"] !== nil do
        when_text = time_to_text(listing, "close_date")
        close = if Map.has_key?(listing, "close_date"), do: " after <span class=\"header-color\">#{listing["days_on_market"]} days</span> on the market ", else: ""
        "Closed for <span class=\"header-color font-extrabold\">$#{number_to_delimited(listing["close_price"], precision: 0)}</span>#{close}#{when_text}"
      else
        when_text = time_to_text(listing, "on_market_date")
        listed = if Map.has_key?(listing, "close_date"), do: " with <span class=\"header-color\">#{listing["days_on_market"]} days</span> on the market ", else: ""
        "Listed for <span class=\"header-color font-extrabold\">$#{number_to_delimited(listing["list_price"], precision: 0)}</span>#{listed}#{when_text}"
      end
    else
      ""
    end
  end
end
