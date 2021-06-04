defmodule ExcyteWeb.Insight.Review do
  use ExcyteWeb, :live_view

  alias Excyte.{
    Accounts,
    Insights,
    Insights.Insight,
    Mls.ResoApi,
    Properties,
    Properties.Adjustments
  }
  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("review.html", assigns)

  def mount(%{"insight_id" => id}, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    with %Insight{} = ins <- Insights.get_review_insight(cu.id, id),
         {:ok, comps} <- ResoApi.get_by_listing_ids(cu.current_mls,
                    ins.selected_listing_ids, ins.property),
         templates <- Insights.get_document_templates(cu) do
          s_comps = Adjustments.process_init(comps.listings, ins.property)
          min_max = Enum.min_max_by(s_comps, &(&1.excyte_suggested_price))
      {:ok, assign(socket,
        current_user: cu,
        subject: ins.property,
        insight_uuid: id,
        insight_name: ins.name,
        error: nil,
        templates: templates,
        selected_tmpl: Enum.find(templates, fn tmpl -> tmpl.type_default === true end),
        listings: comps.listings,
        suggested_range: get_suggested_range(min_max, ins.content),
        selected_comps: Enum.sort_by(s_comps, &(&1.excyte_suggested_price), :asc)
      )}
    else
      _ -> {:ok, push_redirect(socket, to: "/insights/cma/create")}
    end
  end

  def handle_info({:template_callback, %{template: template}}, %{assigns: a} = socket) do
    sel = Enum.find(a.templates, fn t -> t.id === template.value end)
    {:noreply, assign(socket, selected_tmpl: sel)}
  end

  def handle_info({:update_suggested_price, %{suggested_price: sp}}, %{assigns: a} = socket) do
    {:noreply, assign(socket, suggested_range: %{"min" => sp.low, "max" => sp.high})}
  end

  def handle_event("adjust-comp", %{"adjustment" => adj, "listing-id" => id}, %{assigns: a} = socket) do
    val = if String.contains?(adj, "."), do: round(String.to_float(adj)), else: String.to_integer(adj)
    comps = Enum.map(a.selected_comps, fn c ->
      if c.listing_id === id, do: Map.merge(c, %{excyte_price: val}), else: c
    end)
    {:noreply, assign(socket, selected_comps: comps)}
  end

  def handle_event("toggle-adjustment", %{"action" => act, "id" => id}, %{assigns: a} = socket) do
    comps = Enum.map(a.selected_comps, fn c ->
      val = if act === "apply", do: c.excyte_suggested_price, else: c.default_price.value
      if c.listing_id === id, do: Map.merge(c, %{excyte_price: val}), else: c
    end)
    {:noreply, assign(socket, selected_comps: comps)}
  end

  def handle_event("form-change", %{"name" => name}, %{assigns: a}  = socket) do
    {:noreply, assign(socket, insight_name: name)}
  end

  def handle_event("save-review", %{"button" => choice, "name" => name}, %{assigns: a}  = socket) do
    path = if choice === "publish", do: "auto", else: "builder"
    if String.length(a.insight_name) > 0 do
      case Insights.update_insight(a.insight_uuid, a.current_user.id, %{
        content: %{comps: a.selected_comps, suggested_subject_price: a.suggested_range},
        document_attributes: a.selected_tmpl.attributes,
        document_template_id: a.selected_tmpl.id,
        name: a.insight_name
      }) do
        {:ok, _} -> {:noreply, push_redirect(socket, to: "/insights/#{a.insight_uuid}/#{path}")}
        {:error, err} -> {:noreply, put_flash(socket, :error, "Something went wrong.")}
      end
    else
      {:noreply, assign(socket, error: "Please enter a name")}
    end
  end

  defp get_suggested_range(min_max, insight_content) do
    if Map.has_key?(insight_content, :suggested_subject_price) do
      insight_content.suggested_subject_price
    else
      %{
        "min" => Integer.floor_div(elem(min_max, 0).excyte_suggested_price, 1000)*1000,
        "max" => Integer.floor_div(elem(min_max, 1).excyte_suggested_price, 1000)*1000
      }
    end
  end

end
