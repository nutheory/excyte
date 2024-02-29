defmodule ExcyteWeb.Insight.CreateCma do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Insights,
    Mls,
    Properties
  }

  alias ExcyteWeb.{InsightView, Helpers.Utilities}

  def render(assigns), do: InsightView.render("create_cma.html", assigns)

  def mount(_params, _sesh, %{assigns: %{current_user: cu}} = socket) do
    mls_list = Mls.get_credentials(%{agent_id: cu.id})
    mls_opts = Enum.map(mls_list, fn mls -> %{text: mls.mls_name, value: mls.dataset_id} end)

    selected_mls =
      if Enum.empty?(cu.current_mls) do
        %{name: "Public Data", value: "public"}
      else
        m = cu.current_mls
        %{name: m.mls_name, value: m.dataset_id}
      end

    {:ok,
     assign(socket,
       mls_options: mls_opts ++ [%{text: "Public Data", value: "public"}],
       current_mls: selected_mls,
       current_user: cu,
       prop_id: nil,
       subject: nil,
       photo: nil,
       errors: nil,
       fetching: false
     )}
  end

  def handle_info({:init_subject, %{prop_id: prop_id}}, socket) do
    send(self(), {:setup_subject, %{prop_id: prop_id}})
    {:noreply, assign(socket, prop_id: prop_id, fetching: true)}
  end

  def handle_info({:setup_subject, %{prop_id: prop_id}}, %{assigns: a} = socket) do
    case Properties.fetch_listing_details(prop_id, a.current_user.id) do
      {:ok, subject} ->
        {:noreply,
         assign(socket,
           subject: subject,
           photo: subject["main_photo_url"],
           fetching: false
         )}

      {:error, err} ->
        {:noreply, assign(socket, errors: err, fetching: false)}
    end
  end

  def handle_info({:create_subject, attrs}, %{assigns: a} = socket) do
    key = "cma#{a.current_user.id}#{System.os_time(:second)}"

    case Insights.create_insight(insight_data(attrs, key, a)) do
      {:ok, _} ->
        {:noreply, push_redirect(socket, to: "/auth/insights/#{key}/listings")}

      {:error, _method, _changeset, _} ->
        # Activities.handle_errors(changeset.errors, "create_cma.create_subject")
        {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  def handle_info({:auto_create_cma, attrs}, %{assigns: a} = socket) do
    key = "cma#{a.current_user.id}#{System.os_time(:second)}"

    case Insights.auto_create_cma(auto_insight_data(attrs, key, a)) do
      {:ok, _} ->
        {:noreply, push_redirect(socket, to: "/auth/insights/#{key}/customize")}

      {:error, _method, changeset, _} ->
        # Activities.handle_errors([%{}], "create_cma.auto_create_cma")
        {:noreply, put_flash(socket, :error, "Something went wrong.")}
    end
  end

  def handle_info({:receive_uploads, %{upload_url: url, name: _name}}, socket) do
    {:noreply, assign(socket, photo: url)}
  end

  def handle_info({:destroy_uploads, %{name: _name}}, socket) do
    {:noreply, assign(socket, photo: "")}
  end

  def handle_event("select_source", %{"option" => opt}, %{assigns: a} = socket) do
    mls = Enum.find(a.mls_options, fn o -> o.value === opt end)
    {:noreply, assign(socket, current_mls: mls)}
    # key = "cma#{a.current_user.id}#{System.os_time(:second)}"
    # case Insights.auto_create_cma(auto_insight_data(a.subject, key, a)) do
    #   {:ok, cma} -> {:noreply, socket}
    #   {:error, cma} -> {:noreply, socket}
    # end
  end

  defp auto_insight_data(subject, key, %{current_user: cu} = a) do
    theme_attrs = Insights.get_theme_attributes(cu.id, cu.brokerage_id)
    template = Insights.get_document_templates(cu, %{type: "cma", auto: true})

    subject_attrs =
      Map.merge(subject, %{
        "main_photo_url" => a.photo,
        "brokerage_id" => cu.brokerage_id,
        "agent_id" => cu.id
      })

    IO.inspect(subject, label: "SUB")

    %{
      insight: %{
        uuid: key,
        type: "cma",
        name: "auto draft",
        document_attributes: Map.from_struct(theme_attrs),
        document_template_id: hd(template).id,
        cover_photo_url: subject_attrs["main_photo_url"],
        created_by_id: cu.id,
        brokerage_id: cu.brokerage_id,
        published: false,
        auto_generated: true
      },
      subject: subject_attrs,
      search_opts: Utilities.default_filter(Map.merge(a.subject, %{"dataset_id" => "public"}))
    }
  end

  defp insight_data(subject, key, %{current_user: cu} = a) do
    theme_attrs = Insights.get_theme_attributes(cu.id, cu.brokerage_id)
    template = Insights.get_document_templates(cu, %{type: "cma", auto: false})
    subject_attrs = Map.merge(subject, %{"main_photo_url" => a.photo})

    %{
      insight: %{
        uuid: key,
        type: "cma",
        name: "draft",
        document_attributes: Map.from_struct(theme_attrs),
        document_template_id: hd(template).id,
        cover_photo_url: subject_attrs["main_photo_url"],
        created_by_id: cu.id,
        brokerage_id: cu.brokerage_id,
        published: false,
        mls: "public",
        selected_listing_ids: [],
        saved_search: %{
          query: "",
          coords: subject_attrs["coords"],
          zip: subject_attrs["zip"],
          criteria: Utilities.default_filter(Map.merge(subject_attrs, %{dataset_id: "public"}))
        }
      },
      subject: subject_attrs
    }
  end
end
