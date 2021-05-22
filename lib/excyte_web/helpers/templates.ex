defmodule ExcyteWeb.Helpers.Templates do
  import Phoenix.LiveView.Helpers
  use Timex
  import Number.{Delimit}
  alias Excyte.{Activities}

  def agent_profile(%{agent_profile: ap}) do
    """

    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent_profile" => ap}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def brokerage_profile(%{brokerage: brk}) do
    """

    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"brokerage" => brk}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def commission_distribution() do
    """

    """
  end

  def comparable(%{listing: lst}) do
    media = Jason.encode!(lst["media"])
    """
      <struct class="section">
        <struct class="body">
          <div data-type="simpleGallery" contenteditable="false" data-media-json='#{media}' class="simple-gallery"></div>
          <div data-type="compDetails" class="comp-details">
            {% if listing["street_number"] or listing["street_name"] %}
              <h1>{{ listing["street_number"] }} {{ listing["street_name"] }}</h1>
            {% endif %}
          </div>
        </struct>
      </struct>
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"listing" => lst}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def cover(%{subject: sbj}) do
    """
      The biggest mistake home sellers make is overpricing their home. A
      Comparative Market Analysis or CMA is used to help decide the best
      price to list your home.
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def pricing_strategy() do
    """
      <h2>What Pricing Startegy Works for you?</h2>
      <p>Currently its a Sellers Market and its never been more important
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
    """
  end

  def subject(%{subject: sbj}) do
    """

    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def synopsis(%{subject: sbj}) do
    """

    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"subject" => sbj}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end

  def whats_cma() do
    """
      <h1>What is a CMA?</h1>
      <p><strong>A CMA is</strong> a comparison of the most recent Active, Sold
      and Pending properties in the same neighborhood. These homes are commonly
      referred to as Listings. Each listing is detailed with information like
      square feet, bedrooms, bathrooms and lot size to name a few. I will use
      this information to determine the Market Value and most accurate listing
      price for your home.</p>

      <h3>Where does the data come from?</h3>
      <p>The information used in your CMA is provided by my local Multiple Listing
      Service or MLS. MLS data is private and can only be accessed by licensed members,
      like myself, who pay an annual dues. Brokers, Realtors and Appraisers all used
      this protected data to arrive at the most accurate listing price.</p>

      <h3>How Accurate is a CMA?</h3>
      <p>MLS data is live and the most accurate data that can be used. Listings are
      entered and updates are realtime. There is No Way to get more accurate data
      for your home. That's why it's so important to have a Realtor in your corner
      during one of the most important transactions in your life. The market is
      constantly changing because houses are bought and sold everyday. As your
      Realtor my finger is on the Markets pulse the entire time…….Real Time.</p>
    """
  end

  def why_an_agent(%{agent_profile: ap}) do
    """
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
    """
    |> Solid.parse()
    |> case do
      {:ok, template} -> to_string(Solid.render(template, %{"agent_profile" => ap}))
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Helpers.Templates")
    end
  end
end
