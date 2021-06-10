defmodule ExcyteWeb.Insight.CreateShowcase do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Insights.Insight, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create_showcase.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    mls = cu.current_mls
    {:ok, agent_listings} = ResoApi.get_listings_by_agent(mls, %{list_agent_key: mls.member_key})
    {:ok, assign(socket,
      listing_id: "",
      recent: agent_listings
    )}
  end

  def handle_info({:create_insight, %{}}, %{assigns: a} = socket) do
    {:ok, listing} = ResoApi.get_listing_by_key(a.mls, %{listing_key: a.mls.member_key})
    {:noreply, socket}
  end

  def handle_event("update-listing-id", %{"listing_id" => id}, socket) do
    {:noreply, assign(socket, listing_id: id)}
  end

  def handle_event("submit-id", %{"listing_id" => id}, socket) do
    {:noreply, assign(socket, listing_id: id)}
  end

  def handle_event("select-recent", %{"listing-id" => id}, socket) do
    {:noreply, assign(socket, listing_id: id)}
  end

end
