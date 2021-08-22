defmodule ExcyteWeb.Helpers.Templates do
  import Phoenix.LiveView.Helpers
  import Excyte.Utils.Methods
  use Timex
  import Number.{Delimit}
  alias Excyte.{Activities, Mls.ProcessReso}
  alias ExcyteWeb.{Helpers.Utilities}


  def agent_profile(%{agent_profile: ap}) do
    profile = Excyte.Utils.Methods.stringify_keys(ap)
    """
      <struct class="section agent w-full lg:w-4/5 mx-auto" id="agent_profile">
        <struct class="grid grid-cols-4 gap-6">
          {% if agent["photo_url"] %}
            <struct class="">
              <img src="{{ agent["photo_url"] }}" alt="{{ agent["name"] }} photo" />
            </struct>
          {% endif %}
          <struct class="col-span-3">
            {% if agent["name"] %}
              <h1 class="header-color">{{ agent["name"] }}</h1>
            {% endif %}
            {% if agent["tagline"] %}
              <struct class="my-6">
                <blockquote>{{ agent["tagline"] }}</blockquote>
              </struct>
            {% endif %}
            {% if agent["company_name"] %}
              <h3 class="mb-0 header-color">{{ agent["company_name"] }}</h3>
            {% endif %}
            {% if agent["job_title"] %}
              <p class="font-semibold"><i>{{ agent["job_title"] }}</i></p>
            {% endif %}
          </struct>
        </struct>
        {% if agent["bio"] %}
          <p class="mt-4 sub-header-color font-semibold text-lg md:text-xl lg:text-2xl">{{ agent["bio"] }}</p>
        {% endif %}
        <struct class="grid md:grid-cols-2 gap-x-6 gap-y-4">
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

  def brokerage_profile(%{brokerage: brk}) do
    profile = Excyte.Utils.Methods.stringify_keys(brk)
    """
      <struct class="section w-full lg:w-4/5 mx-auto" id="brokerage">
        {% if brokerage["logo_url"] %}
          <struct class="flex items-center justify-center">
            <img src="{{ brokerage["logo_url"] }}" alt="logo" />
          </struct>
        {% endif %}
        <h2 class="header-color text-center mt-4">{{ brokerage["company_name"]}}</h2>
        {% if brokerage["tagline"] %}
          <struct class="flex items-center justify-center my-4">
            <blockquote>{{ brokerage["tagline"] }}</blockquote>
          </struct>
        {% endif %}
        {% if brokerage["description"] %}
          <p class="sub-header-color font-semibold text-lg md:text-xl lg:text-2xl">{{ brokerage["description"] }}</p>
        {% endif %}
        <struct class="grid md:grid-cols-2 gap-y-2 gap-x-6">
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

  def commission_distribution(_) do
    """
      <struct class="section" id="commission_distribution">
        <struct class="body">
        </struct>
      </struct>
    """
  end

  def comparable(%{listing: listing}) do
    adjustments = Enum.map(listing["custom_adjustments"], fn adj ->
      Map.merge(adj, %{"display_value" => number_to_delimited(adj["value"], precision: 0)})
    end)
    media = Jason.encode!(listing["media"])
    """
      <struct class="section comparable" id="comparable_#{listing["listing_key"]}">
        <div
          data-type="showcaseGallery"
          contenteditable="false"
          data-title="Comparable Listing"
          data-media-json='#{media}'
          data-addr-number='{{ lst["street_number"] }}'
          data-addr-street='{{ lst["street_name"] }}'
          data-addr-city='{{ lst["city"] }}'
          data-listing-id='{{ lst["listing_id"] }}'
          class="showcase-gallery"></div>
        <p class="summary  pt-4 sub-header-color">#{summarize_sale_info(listing)}</p>
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
                    <img src="/images/map_icon.png" alt="Map this address" />
                    <span class="block text-sm">Map view</span>
                  </a>
                {% else %}
                  N/A
                {% endif %}
              </struct>
            </struct>
          </struct>
          <struct class="adjustments sub-header-color">
            <h4 class="mb-0">Adjustment considerations</h4>
            <p class="">Summary of differentiating attributes</p>
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

  def cover(%{subject: sbj, agent_profile: ag, brokerage: brk}) do
    """
      <struct class="section" id="cover">
        <struct class="cover-wrapper">
          <struct class="title">
            <h1 class="bg-color sub-header-color">Comparative Market</h1>
            <h3 class="bg-color header-color">Analysis</h3>
          </struct>
          <struct class="subtitle header-color">
            <h1 class="bg-color">
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
              class="rounded-md pb-2/3 mx-auto bg-cover"
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

  def pricing_strategy(_) do
    """
      <struct class="section" id="pricing_strategy">
        <h1 class="muted-color">What pricing strategy works for you?</h1>
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
            doing this to Sellers. The 1st 3 weeks of a listing is the most important
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
    """
  end

  def showcase(%{insight: ins}) do
    listing =
      case ProcessReso.process_init({:ok, %{listings: ins["content"]["listings"]}}, nil) do
        {:ok, res} ->
          Utilities.format_atom_json(hd(res.listings))
        {:error, err} -> IO.inspect(err)
      end
    address_uri = URI.encode("#{listing["city"]}, #{listing["state"]}, United States")
    media = Jason.encode!(listing["media"])
    """
      <struct class="section" id="showcase">

          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        <h1 class="muted-color">Showcase</h1>
        <struct class="header flex flex-wrap">
          <struct class="flex-1">
            <h2 class="header-color mb-0">
              {{ lst["street_number"] }} {{ lst["street_name"] }}
            </h2>
            <h4 class="sub-header-color">
              {% if lst["city"] and lst["state"] %}
                {{ lst["city"] }}, {{ lst["state"] }}
              {% endif %}
              {% if lst["zip"] %}
                {{ lst["zip"] }}
              {% endif %}
            </h4>
          </struct>
          {% if lst["list_price"] %}
            <struct class="mt-4 lg:mt-0">
              <p class="font-bold text-right">List price</p>
              <h2 class="ml-4"><mark>$#{number_to_delimited(listing["list_price"], precision: 0)}</mark></h2>
            </struct>
          {% endif %}
        </struct>
        <div data-type="showcaseGallery" contenteditable="false" data-media-json='#{media}' data-listing-id='{{ lst["listing_id"] }}' class="showcase-gallery"></div>
        <struct class="data-grid mt-4 lg:mt-6">
          <struct class="major left-right-wrapper">
            <h3 class="sub-header-color border-b accent-color pb-1">Property Details</h3>
            <struct class="data-grid-fifty mb-6">
              <table>
                <tbody>
                  <tr>
                    <td class="label">Sqft</td>
                    <td class="value">
                      {% if lst["sqft"] %}
                        #{number_to_delimited(listing["sqft"], precision: 0)}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Stories</td>
                    <td class="value">
                      {% if lst["stories"] %}
                        {{ lst["stories"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Beds</td>
                    <td class="value">
                      {% if lst["beds"] %}
                        {{ lst["beds"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Baths</td>
                    <td class="value">
                      {% if lst["baths"] and lst["baths"]["total"] %}
                        {{ lst["baths"]["total"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Built</td>
                    <td class="value">
                      {% if lst["year_built"] %}
                        {{ lst["year_built"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td class="label">Lot #{String.capitalize(listing["lotsize_preference"])}</td>
                    <td class="value">
                      {% if lst["lotsize_preference"] == "sqft" %}
                        #{number_to_delimited(listing["lotsize_sqft"], precision: 0)}
                      {% else %}
                        #{Utilities.sqft_to_acres(listing["lotsize_sqft"])}
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Parking</td>
                    <td class="value">
                      {{ lst["parking"]["type"] }}
                      {% if lst["parking"]["spaces"] == "N/A" %}
                      {% else %}
                        (#{listing["parking"]["spaces"]})
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Sub Type</td>
                    <td class="value">
                      {% if lst["property_sub_type"] %}
                        {{ lst["property_sub_type"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Listing ID</td>
                    <td class="value">
                      {% if lst["listing_id"] %}
                        {{ lst["listing_id"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">View on Map</td>
                    <td class="value">
                      {% if lst["coords"] and lst["coords"][0] %}
                        <a href="https://www.google.com/maps/search/?api=1&query={{ lst["coords"][1] }}%2C{{ lst["coords"][0] }}">Click here</a>
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                </tbody>
              </table>
            </struct>
            {% if lst["features"].size > 0 %}
              <collapsable class="mb-6" title="Features">
                <struct class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {% for feat in lst["features"] %}
                    <struct class="block">
                      <p><strong>{{ feat["name"] }}: </strong>{{ feat["human"] }}</p>
                    </struct>
                  {% endfor %}
                </struct>
              </collapsable>
            {% endif %}
            {% if lst["layout_details"].size > 0 %}
              <collapsable class="mb-6" title="Room Details">
                <struct class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {% for ld in lst["layout_details"] %}
                    <struct class="">
                      <h4 class="mb-0 inline-block">{{ ld["room_name"] }}</h4>
                      {% for attr in ld["values"] %}
                        {% if attr["name"] == "Features" %}
                          <p class="italic inline-block text-base ml-2">{{ attr["value"] }}</p>
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
          <struct class="minor">
            {% if lst["public_remarks"] %}
              <h4 class="sub-header-color">About</h4>
              <p>{{ lst["public_remarks"] }}</p>
            {% endif %}
            {% if lst["walkscore"] %}
              <h4 class="text-right">Walkscrore: {{ lst["walkscore"] }}</h4>
            {% endif %}
            <a href="https://foursquare.com/explore?mode=url&near=#{address_uri}" class="button text-center">Explore the Community</a>
            {% if lst["association"].size > 0 %}
              <h4 class="sub-header-color mt-8 border-b accent-color pb-1">Association</h4>
              {% for assoc in lst["association"] %}
                <struct class="flex w-full py-1 border-b muted-border">
                  <struct class="flex-1">{{ assoc["name"] }}</struct>
                  <struct class="font-bold w-1/2">{{ assoc["human"] }}</struct>
                </struct>
              {% endfor %}
            {% endif %}
            {% if lst["tax_year"] or lst["tax_assessed_value"] or lst["tax_annual_amount"] or lst["tax_exemptions"] %}
              <h4 class="sub-header-color mt-8">Tax Info
                {% if lst["tax_year"] %}
                  ({{ lst["tax_year"] }})
                {% endif %}
              </h4>
              {% if lst["tax_annual_amount"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Annual amount</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_annual_amount"] }}</struct>
                </struct>
              {% endif %}
              {% if lst["tax_assessed_value"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Assessed Value</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_assessed_value"] }}</struct>
                </struct>
              {% endif %}
              {% if lst["tax_exemptions"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Exemptions</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_exemptions"] }}</struct>
                </struct>
              {% endif %}
            {% endif %}
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => listing}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def subject(%{subject: subject}) do
    """
      <struct class="section subject" id="subject">
        <h1 class="header-color">Understanding Comparable Listings</h1>
        <p class="sub-header-color text-lg md:text-xl lg:text-2xl font-semibold">In explaining the suggested pricing
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

  def synopsis(%{subject: sbj, insight: insight}) do
    """
      <struct class="section" id="synopsis">
        <h1 class="header-color">Synopsis</h1>
        <p class="">Based on all the Comparable information above along with this information.</p>
        <struct class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <struct>
            <h3 class="sub-header-color">Average Days on Market</h3>
            <h2>#{number_to_delimited(insight["content"]["avg_dom"], precision: 0)}</h2>
          </struct>
          {% if insight["content"]["avg_list"] %}
            <struct>
              <h3 class="sub-header-color">Average List Price</h3>
              <h2>$#{number_to_delimited(insight["content"]["avg_list"], precision: 0)}</h2>
            </struct>
          {% endif %}
          {% if insight["content"]["avg_close"] %}
            <struct>
              <h3 class="sub-header-color">Average Close Price</h3>
              <h2>$#{number_to_delimited(insight["content"]["avg_close"], precision: 0)}</h2>
            </struct>
          {% endif %}
        </struct>
        <struct class="mt-12">
            <h4> Your Suggested price range is </h4>
            <h2>$#{number_to_delimited(insight["content"]["suggested_subject_price"]["min"], precision: 0)} - $#{number_to_delimited(insight["content"]["suggested_subject_price"]["max"], precision: 0)}</h2>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj, "insight" =>  insight}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def tour_stop(%{listing: lst}) do
    destination_uri = URI.encode("#{lst["street_number"]} #{lst["street_name"]}, #{lst["city"]}, #{lst["state"]}")
    address_uri = URI.encode("#{lst["city"]}, #{lst["state"]}, United States")
    media = Jason.encode!(lst["media"])
    """
      <struct class="section" id="showcase">

          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        <struct class="flex">
          <h1 class="muted-color flex-1" x-on:click="{alert("boom")}">Tour Stop</h1>
          <h4><a href="https://www.google.com/maps/dir/?api=1&destination=#{destination_uri}">Get Directions</a></h4>
        </struct>
        <struct class="header flex flex-wrap">
          <struct class="flex-1">
            <h2 class="header-color mb-0">
              {{ lst["street_number"] }} {{ lst["street_name"] }}
            </h2>
            <h4 class="sub-header-color">
              {% if lst["city"] and lst["state"] %}
                {{ lst["city"] }}, {{ lst["state"] }}
              {% endif %}
              {% if lst["zip"] %}
                {{ lst["zip"] }}
              {% endif %}
            </h4>
          </struct>
          {% if lst["list_price"] %}
            <struct class="mt-4 lg:mt-0">
              <p class="font-bold text-right">List price</p>
              <h2 class="ml-4"><mark>$#{number_to_delimited(lst["list_price"], precision: 0)}</mark></h2>
            </struct>
          {% endif %}
        </struct>
        <div data-type="showcaseGallery" contenteditable="false" data-media-json='#{media}' data-listing-id='{{ lst["listing_id"] }}' class="showcase-gallery"></div>
        <struct class="data-grid mt-4 lg:mt-6">
          <struct class="major left-right-wrapper">
            <h3 class="sub-header-color border-b accent-color pb-1">Property Details</h3>
            <struct class="data-grid-fifty mb-6">
              <table>
                <tbody>
                  <tr>
                    <td class="label">Sqft</td>
                    <td class="value">
                      {% if lst["sqft"] %}
                        #{number_to_delimited(lst["sqft"], precision: 0)}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Stories</td>
                    <td class="value">
                      {% if lst["stories"] %}
                        {{ lst["stories"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Beds</td>
                    <td class="value">
                      {% if lst["beds"] %}
                        {{ lst["beds"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Baths</td>
                    <td class="value">
                      {% if lst["baths"] and lst["baths"]["total"] %}
                        {{ lst["baths"]["total"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Built</td>
                    <td class="value">
                      {% if lst["year_built"] %}
                        {{ lst["year_built"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td class="label">Lot #{String.capitalize(lst["lotsize_preference"])}</td>
                    <td class="value">
                      {% if lst["lotsize_preference"] == "sqft" %}
                        #{number_to_delimited(lst["lotsize_sqft"], precision: 0)}
                      {% else %}
                        #{Utilities.sqft_to_acres(lst["lotsize_sqft"])}
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Parking</td>
                    <td class="value">
                      {{ lst["parking"]["type"] }}
                      {% if lst["parking"]["spaces"] == "N/A" %}
                      {% else %}
                        (#{lst["parking"]["spaces"]})
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Sub Type</td>
                    <td class="value">
                      {% if lst["property_sub_type"] %}
                        {{ lst["property_sub_type"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Listing ID</td>
                    <td class="value">
                      {% if lst["listing_id"] %}
                        {{ lst["listing_id"] }}
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">View on Map</td>
                    <td class="value">
                      {% if lst["coords"] and lst["coords"][0] %}
                        <a href="https://www.google.com/maps/search/?api=1&query={{ lst["coords"][1] }}%2C{{ lst["coords"][0] }}">Click here</a>
                      {% else %}
                        N/A
                      {% endif %}
                    </td>
                  </tr>
                </tbody>
              </table>
            </struct>
            {% if lst["features"].size > 0 %}
              <collapsable class="mb-6" title="Features">
                <struct class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {% for feat in lst["features"] %}
                    <struct class="block">
                      <p><strong>{{ feat["name"] }}: </strong>{{ feat["human"] }}</p>
                    </struct>
                  {% endfor %}
                </struct>
              </collapsable>
            {% endif %}
            {% if lst["layout_details"].size > 0 %}
              <collapsable class="mb-6" title="Room Details">
                <struct class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {% for ld in lst["layout_details"] %}
                    <struct class="">
                      <h4 class="mb-0 inline-block">{{ ld["room_name"] }}</h4>
                      {% for attr in ld["values"] %}
                        {% if attr["name"] == "Features" %}
                          <p class="italic inline-block text-base ml-2">{{ attr["value"] }}</p>
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
          <struct class="minor">
            {% if lst["public_remarks"] %}
              <h4 class="sub-header-color">About</h4>
              <p>{{ lst["public_remarks"] }}</p>
            {% endif %}
            {% if lst["walkscore"] %}
              <h4 class="text-right">Walkscrore: {{ lst["walkscore"] }}</h4>
            {% endif %}
            <a href="https://foursquare.com/explore?mode=url&near=#{address_uri}" class="button text-center">Explore the Community</a>
            {% if lst["association"].size > 0 %}
              <h4 class="sub-header-color mt-8 border-b accent-color pb-1">Association</h4>
              {% for assoc in lst["association"] %}
                <struct class="flex w-full py-1 border-b muted-border">
                  <struct class="flex-1">{{ assoc["name"] }}</struct>
                  <struct class="font-bold w-1/2">{{ assoc["human"] }}</struct>
                </struct>
              {% endfor %}
            {% endif %}
            {% if lst["tax_year"] or lst["tax_assessed_value"] or lst["tax_annual_amount"] or lst["tax_exemptions"] %}
              <h4 class="sub-header-color mt-8">Tax Info
                {% if lst["tax_year"] %}
                  ({{ lst["tax_year"] }})
                {% endif %}
              </h4>
              {% if lst["tax_annual_amount"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Annual amount</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_annual_amount"] }}</struct>
                </struct>
              {% endif %}
              {% if lst["tax_assessed_value"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Assessed Value</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_assessed_value"] }}</struct>
                </struct>
              {% endif %}
              {% if lst["tax_exemptions"] %}
                <struct class="flex w-full py-1">
                  <struct class="flex-1">Exemptions</struct>
                  <struct class="font-bold w-1/2">{{ lst["tax_exemptions"] }}</struct>
                </struct>
              {% endif %}
            {% endif %}
          </struct>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"lst" => lst}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def video_section(%{asset: a}) do
    asset = Jason.encode!(%{
      title: a.title,
      thumb_url: a.thumb_url,
      stream_id: a.stream_id,
      description: a.description,
      video_url: a.video_url})
    """
      <struct class="section">
        <div data-type='simpleVideo' contenteditable="false" data-video-json='#{asset}'></div>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"asset" => asset}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def whats_cma(_) do
    """
      <struct class="section whats-cma" id="whats_cma">
        <p class="text-xl md:text-2xl font-semibold sub-header-color"><span class="font-extrabold header-color">
        A CMA is</span> a comparison of the most recent Active, Sold
        and Pending properties in the same neighborhood. These homes are commonly
        referred to as Listings. Each listing is detailed with information like
        square feet, bedrooms, bathrooms and lot size to name a few. I will use
        this information to determine the Market Value and most accurate listing
        price for your home.</p>
        <struct class="data-grid-fifty mt-8">
          <struct class="fifty">
            <h4>Where does the data come from?</h4>
            <p class="md:text-lg font-semibold sub-header-color">The information used in your CMA is provided by my local Multiple Listing
            Service or MLS. MLS data is private and can only be accessed by licensed members,
            like myself, who pay an annual dues. Brokers, Realtors and Appraisers all used
            this protected data to arrive at the most accurate listing price.</p>
          </struct>
          <struct class="fifty">
            <h4>How Accurate is a CMA?</h4>
            <p class="md:text-lg font-semibold sub-header-color">MLS data is live and the most accurate data that can be used. Listings are
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

  def why_an_agent(%{agent_profile: ap}) do
    """
      <struct class="section lg:w-4/5 mx-auto" id="why_an_agent">
        <h1 class="header-color mb-0">Why use an agent?</h1>
        <struct class="sub-header-color">
          <p class="text-lg md:text-xl lg:text-2xl font-semibold">Anyone can go online and find
          recources that will give them an idea of what the
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

  def simple_row(%{name: n, data: d}) do
    """
      <tr>
        <td class="label">n</td>
        <td class="value">
          {% if d %}
            {{ d }}
          {% else %}
            N/A
          {% endif %}
        </td>
      </tr>
    """
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
