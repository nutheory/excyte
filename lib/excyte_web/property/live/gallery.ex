defmodule ExcyteWeb.Property.Gallery do
  use ExcyteWeb, :live_view_form
  alias Excyte.{
    Properties
  }
  alias ExcyteWeb.{Property.FC, PropertyView}

  @impl true
  def render(assigns), do: PropertyView.render("gallery.html", assigns)

  @impl true
  def mount(%{"id" => id}, _sesh, %{assigns: a} = socket) do
    {:ok, assign(socket,
      property_id: id,
      cover_uuid: nil,
      uploaded_files: []
      ) |> allow_upload(:photos, accept: ~w(.jpg .jpeg .png .gif), max_entries: 40)}
  end

  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  def handle_event("select-cover-photo", %{"photo-id" => id}, %{assigns: a} = socket) do
    {:noreply, push_event(socket, "photoGallery", %{refid: id})}
  end

  def error_to_string(:too_large), do: "Too large"
  def error_to_string(:too_many_files), do: "You have selected too many files"
  def error_to_string(:not_accepted), do: "You have selected an unacceptable file type"
end
