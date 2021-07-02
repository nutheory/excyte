defmodule ExcyteWeb.Insight.Editor do
  use ExcyteWeb, :live_view

  alias Excyte.{Accounts, Insights, ApiServeces}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("editor.html", assigns)

  def mount(_params, %{"content_id" => cid, "user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    case Cachex.get(:editor_cache, cid) do
      {:ok, content} -> send self(), {:setup_editor, content}
      {:error, err} -> {:ok, assign(socket, current_user: cu, error: "replace with notice and redirect or notice and new doc" )}
    end
    {:ok, assign(socket,
      current_user: cu,
      search_term: nil,

    )}
  end

  def mount(_, %{"user_token" => token} = sesh, socket) do

    cu = Accounts.get_user_by_session_token(token)
    send self(), {:load_document, ""}
    {:ok, assign(socket, current_user: cu, booger: "Hello")}
  end

  def handle_info({:setup_editor, %{section: section}}, socket) do
    # Push Content to JS
    {:noreply, push_event(socket, "loadContent", %{content: section.html_content})}
  end

  def handle_event("section_save", %{html: html}, %{assigns: a} = socket) do
    IO.inspect(html, label: "html")
    # case Insights. do
    #   {:ok, section} ->
    #   {:error, err} ->
    # end
    {:noreply, socket}
  end

  # def handle_event("search-pexel-images", %{"term" => term}, %{assigns: a} = socket) do
  #   ApiServices.pexel_image_search(term, 20, 0)
  #   {:noreply, socket}
  # end

  # def fetch_pexel_images("load-pexel-images", %{"page-url" => url}, %{assigns: a} = socket) do
  #   ApiServices.pexel_image_next(url)
  #   {:noreply, socket}
  # end

  # def handle_event("toggle-image-panel", _, %{assigns: a} = socket) do
  #   {:noreply, assign(socket, image_panel: !a.image_panel)}
  # end

  # def handle_event("editor-update", params, socket) do
  #   {:noreply, assign(socket, doc: params)}
  # end

  # def handle_event("editor-save", params, socket) do
  #   {:ok, _} = Insights.create_document(%{
  #     "content" => [params],
  #     "title" => "CMA Cover",
  #     "created_by_id" => socket.assigns.user_id
  #   })
  #   {:noreply, assign(socket, doc: params)}
  # end

end
