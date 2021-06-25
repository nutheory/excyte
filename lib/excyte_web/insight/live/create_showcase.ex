defmodule ExcyteWeb.Insight.CreateShowcase do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Insights, Mls.ResoApi, Properties}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("create_showcase.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    mls = cu.current_mls
    {:ok, agent_listings} = ResoApi.get_listings_by_agent(mls, %{list_agent_key: mls.member_key})
    {:ok, assign(socket,
      current_user: cu,
      mls: mls,
      listing_id: "",
      recent: agent_listings,
      errors: []
    )}
  end

  def handle_info({:create_insight, %{listing_id: id}}, %{assigns: a} = socket) do
    key = "shw#{a.current_user.id}#{System.os_time(:second)}"
      case ResoApi.get_listing_by_key(a.mls, %{listing_key: id}) do
        {:ok, listing} ->
          case Insights.create_insight(insight_data(listing, key, a)) do
            {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{key}/customize")}
            {:error, _method, _changeset, _} ->
              {:noreply, put_flash(socket, :error, "Something went wrong.")}
          end
        {:error, %{message: msg}} -> {:noreply, put_flash(socket, :error, msg)}
      end
  end

  def handle_info({:property_search, %{prop_id: mpr_id}}, socket) do
    case Properties.fetch_mls_info(mpr_id) do
      {:ok, %{id: listing_id}} ->
        send self(), {:create_insight, %{listing_id: listing_id}}
        {:noreply, socket}
      {:error, _err} ->
        {:noreply, put_flash(socket, :error, "Could not find this property on the MLS.")}
    end
  end

  def handle_event("update-listing-id", %{"listing_id" => id}, socket) do
    {:noreply, assign(socket, listing_id: id)}
  end

  def handle_event("submit-id", %{"listing_id" => id}, socket) do
     send self(), {:create_insight, %{listing_id: id}}
    {:noreply, socket}
  end

  def handle_event("select-recent", %{"listing-id" => id}, socket) do
    send self(), {:create_insight, %{listing_id: id}}
    {:noreply, socket}
  end

  defp insight_data(property_attrs, key, a) do
    theme_attrs = Insights.get_theme_attributes(a.current_user.id, a.current_user.brokerage_id)
    template = Insights.get_document_templates(a.current_user, "showcase")
    %{
      uuid: key,
      type: "showcase",
      name: "draft",
      cover_photo_url: property_attrs["MainPhotoUrl"],
      created_by_id: a.current_user.id,
      brokerage_id: a.current_user.brokerage_id,
      document_attributes: Map.from_struct(theme_attrs),
      document_template_id: hd(template).id,
      published: false,
      mls: a.mls.dataset_id,
      selected_listing_ids: [],
      content: %{listings: [property_attrs]}
    }
  end
end
