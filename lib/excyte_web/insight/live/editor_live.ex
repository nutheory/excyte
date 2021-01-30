defmodule ExcyteWeb.Insight.EditorLive do
  use ExcyteWeb, :live_view

  alias Excyte.{Accounts, Insights}
  alias ExcyteWeb.{ComponentView}

  def render(assigns), do: ComponentView.render("editor.html", assigns)

  def mount(%{"doc_id" => did}, %{"user_token" => token}, socket) when did !== "new" do
    cu = Accounts.get_user_by_session_token(token)
    doc = Insights.get_document(did)
    IO.inspect(socket, label: "DOC")
    # send self(), {:load_document, %{doc: hd(doc.content)}}
    {:ok, assign(socket, current_user: cu, doc: doc.content)}
  end

  def mount(_, %{"user_token" => token}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    IO.inspect(cu, label: "NO DOC")
    {:ok, assign(socket, current_user: cu)}
  end

  # def handle_info({:load_document, attrs}, socket) do
  #   {:noreply, push_event(socket, "loadContentFromDb", %{content: attrs})}
  # end

  def handle_event("editor-update", params, socket) do
    IO.inspect(params, label: "INP")
    {:noreply, assign(socket, doc: params)}
  end

  def handle_event("editor-save", params, socket) do
    IO.inspect(socket, label: "SAVE")
    {:ok, _} = Insights.create_document(%{
      "content" => [params],
      "title" => "CMA Cover",
      "created_by_id" => socket.assigns.user_id
    })
    {:noreply, assign(socket, doc: params)}
  end

end
