defmodule ExcyteWeb.Client.Components do
  use Phoenix.Component
  import Number.{Delimit}
  alias ExcyteWeb.{Helpers.Utilities}

  def divider() do
    assigns = nil
    ~H"""
      <div class="divider">
        <div class="mt-3 border-t-2 mx-auto w-2/5 accent-color"></div>
      </div>
    """
  end

  def property_details(details, id) do
    assigns = %{details: details, id: id}
    ~H"""
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sub-header-color">
        <%= for ld <- @details do %>
          <div class="">
            <h4 class="mb-0 header-color"><%= ld["room_name"] %></h4>
            <%= for attr <- ld["values"] do %>
              <%= if attr["name"] == "Features" do %>
                <p class="italic text-lg md:text-xl font-semibold mb-4"><%= attr["value"] %></p>
              <% end %>
            <% end %>
            <div class="flex flex-wrap">
              <%= for attr <- ld["values"] do %>
                <%= if attr["name"] != "Features" do %>
                  <div class="w-2/5 py-1"><%= attr["name"] %> <strong><%= attr["value"] %></strong></div>
                <% end %>
              <% end %>
            </div>
          </div>
        <% end %>
      </div>
    """
  end

  def property_features(features, id) do
    assigns = %{features: features, id: id}
    ~H"""
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sub-header-color">
        <%= for feat <- @features do %>
          <div class="block mb-2">
            <p class="header-color text-base md:text-lg font-semibold"><%= feat["name"] %></p>
            <p class="text-base md:text-lg"><%= feat["human"] %></p>
          </div>
        <% end %>
      </div>
    """
  end

  def property_price_history(price, id) do
    assigns = %{price_history: price, id: id}
    ~H"""
      <div class="overflow-x-scroll">
        <table class="min-w-max w-full table-auto text-base">
          <tr class="uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Date</th>
            <th class="py-3 px-6 text-left">Event</th>
            <th class="py-3 px-6 text-center">Price</th>
            <th class="py-3 px-6 text-center">Price/Sq Ft</th>
            <th class="py-3 px-6 text-left">Source</th>
          </tr>
          <%= for ph <- @price_history do %>
            <% {:ok, dt} = NaiveDateTime.from_iso8601(ph["date"]) %>
            <tr class="border-t accent-color">
              <td class="py-3 px-6 text-left"><%= Calendar.strftime(dt, "%m/%d/%Y") %></td>
              <td class="py-3 px-6 text-left"><%= ph["event_name"] %></td>
              <td class="py-3 px-6 text-center"><%= if ph["price"], do: "$#{number_to_delimited(ph["price"], precision: 0)}", else: "-" %></td>
              <td class="py-3 px-6 text-center"><%= if ph["price"] && ph["sqft"] && ph["sqft"] > 0, do: "$#{number_to_delimited(round(ph["price"]/ph["sqft"]), precision: 0)}", else: "-"  %></td>
              <td class="py-3 px-6 text-left"><%= ph["datasource_name"] %></td>
            </tr>
          <% end %>
        </table>
      </div>
    """
  end

  def property_tax_history(tax, id) do
    assigns = %{tax_history: tax, id: id}
    ~H"""
      <div class="overflow-y-scroll">
        <table class="min-w-max w-full table-auto text-base">
          <tr class="uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Year</th>
            <th class="py-3 px-6 text-center">Taxes</th>
            <th class="py-3 px-6 text-center">Land</th>
            <th class="py-3 px-6 text-center"></th>
            <th class="py-3 px-6 text-center">Additions</th>
            <th class="py-3 px-6 text-center"></th>
            <th class="py-3 px-6 text-center">Total assessments</th>
          </tr>
          <%= for th <- @tax_history do %>
            <tr class="border-t accent-color">
              <td class="py-3 px-6 text-left"><%= if th["year"], do: th["year"], else: "N/A" %></td>
              <td class="py-3 px-6 text-center"><%= if th["tax"], do: "$#{number_to_delimited(th["tax"], precision: 0)}", else: "N/A" %></td>
              <td class="py-3 px-6 text-center"><%= if th["assessment"] && th["assessment"]["land"], do: "$#{number_to_delimited(th["assessment"]["land"], precision: 0)}", else: "N/A" %></td>
              <td class="py-3 px-6 text-center">+</td>
              <td class="py-3 px-6 text-center"><%= if th["assessment"] && th["assessment"]["building"], do: "$#{number_to_delimited(th["assessment"]["building"], precision: 0)}", else: "N/A" %></td>
              <td class="py-3 px-6 text-center">=</td>
              <td class="py-3 px-6 text-center"><%= if th["assessment"] && th["assessment"]["total"], do: "$#{number_to_delimited(th["assessment"]["total"], precision: 0)}", else: "N/A" %></td>
            </tr>
          <% end %>
        </table>
      </div>
    """
  end

  def schools(schools, id) do
    assigns = %{schools: schools, id: id}
    ~H"""
      <div class="overflow-y-scroll">
        <table class="min-w-max w-full table-auto text-base">
          <tr class="uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Rating</th>
            <th class="py-3 px-6 text-left">School Name</th>
            <th class="py-3 px-6 text-left">Grades</th>
            <th class="py-3 px-6 text-left">Type</th>
            <th class="py-3 px-6 text-left">Students</th>
            <th>Reviews</th>
            <th>Distance</th>
          </tr>
          <%= for sch <- @schools do %>
            <tr class="border-t accent-color">
              <td class="py-3 px-6 text-left"><%= if sch["ratings"]["great_schools_rating"], do: Phoenix.HTML.raw("<strong>#{sch["ratings"]["great_schools_rating"]}</strong>/10"), else: "N/A" %></td>
              <td class="py-3 px-6 text-left"><%= if sch["name"], do: sch["name"], else: "N/A" %></td>
              <% low = if sch["grades"] && sch["grades"]["range"] && sch["grades"]["range"]["low"], do: sch["grades"]["range"]["low"], else: "N/A" %>
              <% high = if sch["grades"] && sch["grades"]["range"] && sch["grades"]["range"]["high"], do: sch["grades"]["range"]["high"], else: "N/A" %>
              <td class="py-3 px-6 text-left"><%= low %> - <%= high %></td>
              <td class="py-3 px-6 text-left"><%= if sch["funding_type"], do: sch["funding_type"], else: "N/A" %></td>
              <td class="py-3 px-6 text-left"><%= if sch["student_count"], do: sch["student_count"], else: "N/A" %></td>
              <% stars = Enum.reduce(1..5, "", fn c, acc ->
                color = if c <= sch["ratings"]["parent_rating"], do: "#FCD34D", else: "#E5E5E5"
                acc =
                  acc <> "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 block\" fill=\"#{color}\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z\" />
                    </svg>"
                acc
              end) %>
              <td class="py-3 px-6 text-left">
                <div class="flex">
                  <%= Phoenix.HTML.raw(stars) %>
                </div>
              </td>
              <td class="py-3 px-6 text-left"><%= if sch["distance_in_miles"], do: "#{sch["distance_in_miles"]} mi", else: "N/A" %></td>
            </tr>
          <% end %>
        </table>
      </div>
    """
  end

  def directions(lst) do
    assigns = %{loc: URI.encode("#{lst["street_number"]} #{lst["street_name"]}, #{lst["city"]}, #{lst["state"]}")}
    ~H"""
      <a href={"https://www.google.com/maps/dir/?api=1&destination=#{@loc}"} rel="noopener noreferrer" target="_blank">
        <svg version="1.1" class="svg-shadow w-12 md:w-20 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
          <path style="fill:#00A2A9;" d="M487.894,54.343c-15.335-15.007-35.737-23.267-57.465-23.267c-0.05,0-0.102,0-0.152,0
            c0,0,0,0-0.001,0c-44.983,0.08-81.514,36.743-81.435,81.726c0.032,18.318,11.489,45.175,35.025,82.108
            c16.377,25.699,32.502,46.623,33.18,47.501c3.252,4.21,8.271,6.674,13.588,6.674c0.024,0,0.048,0,0.072,0
            c5.344-0.023,10.373-2.531,13.604-6.787c0.675-0.888,16.716-22.068,32.993-48.024c23.382-37.283,34.732-64.3,34.7-82.595
            C511.961,89.879,503.4,69.517,487.894,54.343z"/>
          <path style="fill:#00A2A9;" d="M430.428,31.075c-0.05,0-0.102,0-0.152,0c0,0,0,0-0.001,0c-44.983,0.08-81.514,36.743-81.435,81.726
            c0.032,18.318,11.489,45.175,35.025,82.108c16.377,25.699,32.502,46.623,33.18,47.501c3.252,4.21,8.271,6.674,13.588,6.674
            c0.024,0,0.048,0,0.072,0C430.705,249.084,430.276,31.075,430.428,31.075z"/>
          <path style="fill:#CFCDCF;" d="M157.405,446.585c-4.522,0-8.952,1.832-12.145,5.037c-3.194,3.194-5.025,7.612-5.025,12.134
            s1.832,8.952,5.025,12.145c3.194,3.194,7.624,5.025,12.145,5.025c4.51,0,8.94-1.832,12.134-5.025
            c3.194-3.194,5.037-7.624,5.037-12.145c0-4.522-1.843-8.94-5.037-12.134C166.346,448.416,161.927,446.585,157.405,446.585z"/>
          <g>
            <path style="fill:#B1B0BC;" d="M332.889,259.723c9.49-0.023,17.159-7.727,17.138-17.205c-0.024-9.49-7.727-17.159-17.205-17.136
              c-9.49,0.023-17.159,7.727-17.136,17.205c0.023,9.478,7.703,17.136,17.171,17.136C332.867,259.723,332.879,259.723,332.889,259.723
              z"/>
            <path style="fill:#B1B0BC;" d="M387.436,446.173c-9.49,0.023-17.159,7.727-17.147,17.205c0.023,9.478,7.703,17.136,17.171,17.136
              c0.011,0,0.023,0,0.033,0c9.478-0.011,17.159-7.715,17.138-17.194C404.618,453.831,396.914,446.161,387.436,446.173z"/>
            <path style="fill:#B1B0BC;" d="M341.418,446.265c-9.477,0.011-17.159,7.715-17.136,17.194c0.011,9.478,7.692,17.148,17.171,17.148
              c0.011,0,0.011,0,0.023,0c9.49-0.023,17.159-7.727,17.148-17.205C358.599,453.911,350.896,446.242,341.418,446.265z"/>
            <path style="fill:#B1B0BC;" d="M347.657,307.147c-9.49,0.023-17.159,7.727-17.136,17.205c0.023,9.467,7.703,17.136,17.171,17.136
              c0.011,0,0.023,0,0.033,0c9.478-0.023,17.159-7.727,17.138-17.205C364.839,314.794,357.135,307.124,347.657,307.147z"/>
            <path style="fill:#B1B0BC;" d="M393.663,307.044c-9.478,0.023-17.148,7.727-17.125,17.217c0.011,9.467,7.703,17.125,17.171,17.125
              c0.011,0,0.023,0,0.033,0c9.478-0.011,17.148-7.715,17.125-17.205C410.857,314.702,403.153,307.034,393.663,307.044z"/>
            <path style="fill:#B1B0BC;" d="M467.337,403.316c-8.814-3.48-18.796,0.847-22.276,9.673c-3.468,8.814,0.859,18.785,9.673,22.265
              c2.072,0.824,4.201,1.202,6.296,1.202c6.845,0,13.313-4.121,15.98-10.875C480.49,416.766,476.163,406.796,467.337,403.316z"/>
            <path style="fill:#B1B0BC;" d="M422.968,438.881c-8.162,4.831-10.852,15.374-6.021,23.524c3.217,5.414,8.929,8.425,14.79,8.425
              c2.976,0,5.998-0.778,8.746-2.404c8.15-4.842,10.852-15.374,6.01-23.524C441.661,436.74,431.13,434.051,422.968,438.881z"/>
          </g>
          <g>
            <path style="fill:#CFCDCF;" d="M203.377,446.505c-9.478,0.023-17.148,7.715-17.136,17.205c0.023,9.467,7.704,17.136,17.171,17.136
              c0.011,0,0.023,0,0.034,0c9.478-0.011,17.159-7.715,17.136-17.205C220.571,454.163,212.867,446.493,203.377,446.505z"/>
            <path style="fill:#CFCDCF;" d="M306.287,306.403c-9.146-2.484-18.579,2.93-21.052,12.088c-2.484,9.146,2.932,18.579,12.089,21.051
              c1.5,0.412,3.011,0.607,4.499,0.607c7.555,0,14.492-5.037,16.564-12.695C320.859,318.308,315.445,308.877,306.287,306.403z"/>
            <path style="fill:#CFCDCF;" d="M288.521,267.551c3.491,0,7.03-1.065,10.073-3.274c7.67-5.575,9.375-16.312,3.8-23.982
              c-5.575-7.681-16.312-9.375-23.982-3.8c0-0.011,0-0.011,0-0.011c-7.67,5.575-9.374,16.312-3.799,23.993
              C277.967,265.102,283.209,267.551,288.521,267.551z"/>
          </g>
          <g>
            <path style="fill:#B1B0BC;" d="M446.593,378.991c2.186,7.486,9.033,12.351,16.461,12.351c1.603,0,3.228-0.229,4.842-0.698
              c9.1-2.679,14.309-12.214,11.642-21.315c-2.667-9.1-12.203-14.309-21.303-11.642C449.123,360.353,443.916,369.889,446.593,378.991z
              "/>
            <path style="fill:#B1B0BC;" d="M426.906,351.241c3.032,2.186,6.548,3.24,10.016,3.24c5.333,0,10.589-2.473,13.953-7.132
              c5.54-7.692,3.8-18.43-3.891-23.97c-7.694-5.54-18.431-3.8-23.97,3.892C417.462,334.965,419.213,345.691,426.906,351.241z"/>
          </g>
          <g>
            <path style="fill:#CFCDCF;" d="M249.395,446.426c-9.478,0.011-17.159,7.715-17.136,17.205c0.011,9.467,7.692,17.136,17.159,17.136
              c0.011,0,0.023,0,0.034,0c9.49-0.023,17.159-7.715,17.136-17.205C266.577,454.084,258.873,446.403,249.395,446.426z"/>
            <path style="fill:#CFCDCF;" d="M295.4,446.344c-9.477,0.011-17.147,7.715-17.136,17.194c0.024,9.478,7.704,17.148,17.171,17.148
              c0.011,0,0.024,0,0.034,0c9.478-0.023,17.159-7.727,17.136-17.205C312.594,454.003,304.889,446.321,295.4,446.344z"/>
            <path style="fill:#CFCDCF;" d="M289.173,287.791c-1.694-9.329-10.634-15.511-19.964-13.817
              c-9.328,1.694-15.522,10.634-13.816,19.964c1.51,8.299,8.734,14.103,16.872,14.103c1.02,0,2.049-0.092,3.091-0.286
              C284.686,306.061,290.866,297.119,289.173,287.791z"/>
          </g>
          <path style="fill:#B1B0BC;" d="M391.224,254.594c3.194-3.194,5.026-7.624,5.026-12.145c0-4.51-1.833-8.94-5.026-12.134
            c-3.193-3.205-7.623-5.037-12.144-5.037s-8.941,1.832-12.145,5.037c-3.194,3.194-5.025,7.612-5.025,12.134
            c0,4.522,1.832,8.952,5.025,12.145c3.205,3.194,7.624,5.025,12.145,5.025C383.601,259.62,388.02,257.788,391.224,254.594z"/>
          <path style="fill:#FF4F59;" d="M194.523,170.928c-21.453-20.994-49.992-32.549-80.389-32.549c-0.07,0-0.142,0-0.213,0
            c0,0,0,0-0.001,0C50.994,138.492-0.111,189.779,0,252.707c0.046,25.624,16.073,63.196,48.996,114.862
            c22.91,35.95,45.467,65.221,46.416,66.45c4.549,5.89,11.57,9.336,19.008,9.336c0.033,0,0.068,0,0.1,0
            c7.475-0.031,14.51-3.542,19.03-9.494c0.944-1.243,23.384-30.871,46.155-67.181c32.709-52.156,48.586-89.951,48.542-115.543
            C228.192,220.642,216.216,192.157,194.523,170.928z"/>
          <path style="fill:#FF4F59;" d="M114.135,138.379c-0.07,0-0.142,0-0.213,0c0,0,0,0-0.001,0C50.994,138.492-0.111,189.779,0,252.707
            c0.046,25.624,16.073,63.196,48.996,114.862c22.91,35.95,45.467,65.221,46.416,66.45c4.549,5.89,11.57,9.336,19.008,9.336
            c0.033,0,0.068,0,0.1,0C114.521,443.356,113.92,138.379,114.135,138.379z"/>
          <circle style="fill:#FFFFFF;" cx="114.14" cy="262.747" r="49.214"/>
          <path style="fill:#FFFFFF;" d="M114.23,311.961c-27.18,0.048-49.252-21.945-49.301-49.125c-0.048-27.18,21.945-49.252,49.125-49.301
            L114.23,311.961z"/>
          <circle style="fill:#FFFFFF;" cx="430.436" cy="119.978" r="35.179"/>
          <path style="fill:#FFFFFF;" d="M430.496,155.158c-19.429,0.034-35.208-15.688-35.242-35.116
            c-0.034-19.429,15.688-35.208,35.116-35.242L430.496,155.158z"/>
        </svg>
        <p class="text-xs md:text-sm text-center pt-1">Driving<br />Directions</p>
      </a>
    """
  end

  def map_view(lst) do
    assigns = %{lst: lst}
    ~H"""
      <%= if @lst["coords"] && hd(@lst["coords"]) do %>
        <a href={"https://www.google.com/maps/search/?api=1&query=#{hd(tl(@lst["coords"]))}%2C#{hd(@lst["coords"])}"} rel="noopener noreferrer" target="_blank">
          <svg version="1.1" class="svg-shadow w-12 md:w-20 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <polygon style="fill:#C7CFE2;" points="344.276,512 167.724,450.207 167.724,114.759 344.276,176.552 "/>
            <path style="fill:#E4EAF6;" d="M344.276,512l156.172-57.537c6.941-2.557,11.552-9.17,11.552-16.566v-306.68
              c0-7.985-7.951-13.528-15.443-10.769l-152.281,56.104V512z"/>
            <path style="fill:#C3E678;" d="M512,131.217c0-7.985-7.951-13.528-15.443-10.769l-125.799,46.347v120.081
              c0,21.726,28.548,29.74,39.855,11.189L512,131.725V131.217z"/>
            <path style="fill:#E4EAF6;" d="M15.443,506.311l152.281-56.104V114.759L11.552,172.296C4.611,174.852,0,181.465,0,188.863v306.679
              C0,503.527,7.951,509.07,15.443,506.311z"/>
            <g>
              <polygon style="fill:#D7DEED;" points="273.655,487.283 308.966,499.641 308.966,164.193 273.655,151.834 	"/>
              <polygon style="fill:#D7DEED;" points="220.69,468.745 256,481.103 256,145.655 220.69,133.297 	"/>
            </g>
            <polygon style="fill:#EFF2FA;" points="167.97,338.763 0,400.65 0,438.277 167.478,376.574 344.03,446.892 512,385.005 512,347.378
              344.522,409.081 "/>
            <polygon style="fill:#D7DEED;" points="167.724,338.854 167.724,376.671 344.03,446.892 344.276,446.802 344.276,408.984
              167.97,338.763 "/>
            <g>
              <polygon style="fill:#EFF2FA;" points="512,183.036 382.151,396.905 412.332,415.233 512,251.073 	"/>
              <polygon style="fill:#EFF2FA;" points="79.448,482.73 97.103,476.225 97.103,246.801 0,282.577 0,300.138 79.448,270.956 	"/>
            </g>
            <path style="fill:#FF6464;" d="M344.276,0c-51.191,0-92.69,41.498-92.69,92.69c0,92.69,92.69,154.483,92.69,154.483
              s92.69-61.793,92.69-154.483C436.966,41.498,395.467,0,344.276,0z M344.276,136.828c-24.376,0-44.138-19.762-44.138-44.138
              s19.762-44.138,44.138-44.138s44.138,19.762,44.138,44.138S368.652,136.828,344.276,136.828z"/>
            <path style="fill:#D2555A;" d="M344.276,0c-51.191,0-92.69,41.498-92.69,92.69c0,92.69,92.69,154.483,92.69,154.483
              s-61.793-52.966-61.793-158.897C282.483,37.085,317.461,0,344.276,0z"/>
            <path style="fill:#C3E678;" d="M203.034,127.117l-35.31-12.359L11.551,172.296C4.611,174.854,0,181.465,0,188.862v75.966
              l92.994-34.263c10.559-3.891,21.764,3.923,21.764,15.176v78.905c0,6.142,6.116,10.407,11.88,8.284l41.08-15.136
              c0.002,0,11.271,4.151,23.413,8.625c5.769,2.125,11.903-2.14,11.903-8.287V127.117z"/>
            <path style="fill:#A5D76E;" d="M203.034,318.143V127.117l-35.31-12.359v203.037c0.025,0.008,11.287,4.157,23.42,8.627
              C196.907,328.545,203.034,324.285,203.034,318.143z"/>
            <path style="fill:#C3E678;" d="M379.586,498.99l120.862-44.529c6.941-2.557,11.552-9.17,11.552-16.567v-32.04l-109.311,40.274
              c-13.881,5.116-23.103,18.34-23.103,33.134V498.99z"/>
          </svg>
          <p class="text-xs md:text-sm text-center pt-1">Map view</p>
        </a>
      <% end %>
    """
  end

  def explore_community(lst) do
    assigns = %{address_uri: URI.encode("#{lst["city"]}, #{lst["state"]}, United States")}
    ~H"""
      <a href={"https://foursquare.com/explore?mode=url&near=#{@address_uri}"}>
        <svg version="1.1" class="svg-shadow w-12 md:w-20 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 340 340" style="enable-background:new 0 0 340 340;" xml:space="preserve">
          <g id="XMLID_1117_">
            <g id="XMLID_1118_">
              <circle id="XMLID_1119_" style="fill:#EBEBEC;" cx="170" cy="170" r="170"/>
            </g>
            <g id="XMLID_1120_">
              <path id="XMLID_1121_" style="fill:#CDCDD0;" d="M170,0c93.889,0,170,76.111,170,170c0,93.888-76.111,170-170,170"/>
            </g>
            <g id="XMLID_1122_">
              <circle id="XMLID_1123_" style="fill:#78B9EB;" cx="170" cy="170" r="140"/>
            </g>
            <g id="XMLID_1124_">
              <path id="XMLID_1125_" style="fill:#5A8BB0;" d="M170,30c77.32,0,140,62.68,140,140c0,77.32-62.68,140-140,140"/>
            </g>
            <g id="XMLID_1126_">
              <g id="XMLID_1127_">
                <polygon id="XMLID_18_" style="fill:#FFFFFF;" points="130,170 210,170 170,60 			"/>
              </g>
              <g id="XMLID_1128_">
                <polygon id="XMLID_17_" style="fill:#DEDDE0;" points="170,170 210,170 170,60 			"/>
              </g>
              <g id="XMLID_1129_">
                <polygon id="XMLID_16_" style="fill:#FF5023;" points="130,170 210,170 170,280 			"/>
              </g>
              <g id="XMLID_1130_">
                <polygon id="XMLID_15_" style="fill:#BF3C1A;" points="170,170 210,170 170,280 			"/>
              </g>
            </g>
          </g>
        </svg>
        <p class="text-xs md:text-sm text-center pt-1">Explore the<br />Community</p>
      </a>
    """
  end

  def summarize_showcase(listing) do
    assigns = %{listing_id: listing["listing_id"], list_price: listing["list_price"]}
    ~H"""
      <%= if @list_price !== nil && @listing_id !== nil do %>
        Priced at <span class="header-color font-extrabold">$<%= number_to_delimited(@list_price, precision: 0) %></span>
        with MLS number <i><%= @listing_id %></i>
      <% else %>
        <%= if @list_price !== nil do %>
          MLS number <span class="header-color font-extrabold"><%= @listing_id %></span>
        <% else %>
          Priced at <span class="header-color font-extrabold">$<%= number_to_delimited(@list_price, precision: 0) %></span>
        <% end %>
      <% end %>
    """
  end

  def summarize_sale_info(listing) do
    if listing["list_price"] !== nil || listing["close_price"] !== nil do
      if listing["close_price"] !== nil do
        when_text = Utilities.time_to_text(listing, "close_date")
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}
        ~H"""
          <h2>Closed for <span class="text-4xl md:text-5xl">$<%= number_to_delimited(@listing["close_price"], precision: 0) %></span>
          <%= if Map.has_key?(@listing, "close_date") do %>
            <br />after <span class="text-3xl md:text-4xl"><%= @listing["days_on_market"] %> days</span> on the market
          <% end %>
          <%= @when_text %></h2>
        """
      else
        when_text = Utilities.time_to_text(listing, "on_market_date")
        assigns = %{__changed__: nil, listing: listing, when_text: when_text}
        ~H"""
          <h2>Listed for <span class="text-4xl md:text-5xl">$<%= number_to_delimited(@listing["list_price"], precision: 0) %></span>
          <%= if Map.has_key?(@listing, "days_on_market") do %>
            <br />with <span class="text-3xl md:text-4xl"><%= @listing["days_on_market"] %></span> days on the market
          <% end %>
          <%= @when_text %></h2>
        """
      end
    else
      ""
    end
  end
end
