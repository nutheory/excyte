defmodule ExcyteWeb.Insight.Editor do
  use ExcyteWeb, :live_view

  alias Excyte.{Accounts, Insights}
  alias ExcyteWeb.{InsightView}

  def render(assigns), do: InsightView.render("editor.html", assigns)

  def mount(%{"doc_id" => did}, %{"user_token" => token}, socket) when did !== "new" do
    cu = Accounts.get_user_by_session_token(token)
    doc = Insights.get_document(did)
    # send self(), {:load_document, %{doc: hd(doc.content)}}
    {:ok, assign(socket, current_user: cu, doc: doc.content)}
  end

  def mount(_, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    send self(), {:load_document, ""}
    {:ok, assign(socket, current_user: cu)}
  end

  def handle_info({:load_document, _}, socket) do
    {:noreply, push_event(socket, "loadContentFromDb", %{content: "Hello from phoenix"})}
  end

  def handle_event("section_save", %{html: html}, %{assigns: a} = socket) do
    IO.inspect(html, label: "html")
    # case Insights. do
    #   {:ok, section} ->
    #   {:error, err} ->
    # end
    {:noreply, socket}
  end

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
