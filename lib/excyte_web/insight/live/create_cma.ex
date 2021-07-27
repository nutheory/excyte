defmodule ExcyteWeb.Insight.CreateCma do
  use ExcyteWeb, :live_view
  alias Excyte.{
    Accounts,
    Activities,
    Insights,
    Properties
  }
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create_cma.html", assigns)

  def mount(_params, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)

    {:ok, assign(socket,
      current_user: cu,
      prop_id: nil,
      subject: nil,
      errors: nil,
      fetching: false
    )}
  end

  def handle_info({:init_subject, %{prop_id: prop_id}}, socket) do
    send self(), {:setup_subject, %{prop_id: prop_id}}
    {:noreply, assign(socket, prop_id: prop_id, fetching: true)}
  end

  def handle_info({:setup_subject, %{prop_id: prop_id}}, %{assigns: a} = socket) do
    case Properties.fetch_subject_details(prop_id, a.current_user.id) do
      {:ok, subject} ->
        {:noreply, assign(socket, subject: subject, fetching: false)}
      {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false)}
    end
  end

  def handle_info({:create_subject, attrs}, %{assigns: a} = socket) do
    key = "cma#{a.current_user.id}#{System.os_time(:second)}"
    case Insights.create_insight(insight_data(attrs, key, a)) do
      {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{key}/listings")}
      {:error, method, changeset, _} ->
          Activities.handle_errors(changeset, method)
          {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  defp insight_data(subject_attrs, key, a) do
    theme_attrs = Insights.get_theme_attributes(a.current_user.id, a.current_user.brokerage_id)
    template = Insights.get_document_templates(a.current_user, "cma")
    %{
      insight: %{
        uuid: key,
        type: "cma",
        name: "draft",
        document_attributes: Map.from_struct(theme_attrs),
        document_template_id: hd(template).id,
        cover_photo_url: subject_attrs.main_photo_url,
        created_by_id: a.current_user.id,
        brokerage_id: a.current_user.brokerage_id,
        published: false,
        mls: a.current_user.current_mls.dataset_id,
        selected_listing_ids: [],
        saved_search: %{
          query: "",
          coords: subject_attrs.coords,
          zip: subject_attrs.zip,
          criteria: Utilities.default_filter(Map.merge(subject_attrs, %{dataset_id: a.current_user.current_mls.dataset_id}))
        }
      },
      subject: subject_attrs
    }
  end
end
