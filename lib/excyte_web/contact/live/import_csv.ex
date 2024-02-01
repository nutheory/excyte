defmodule ExcyteWeb.Contact.ImportCsv do
  use ExcyteWeb, :live_view
    alias Excyte.{
    Contacts
  }
  alias ExcyteWeb.{
    ContactView,
    Helpers.Utilities
  }

  def render(assigns), do: ContactView.render("import_csv.html", assigns)

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok, assign(socket,
        csv_file: nil,
        contacts: [],
        mappings: []
      )
      |> allow_upload(:contact_csv, accept: ~w(.txt .csv), max_entries: 1)}
  end

  @impl Phoenix.LiveView
  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  @impl Phoenix.LiveView
  def handle_event("cancel-upload", %{"ref" => ref}, socket) do
    {:noreply, cancel_upload(socket, :avatar, ref)}
  end

  @impl Phoenix.LiveView
  def handle_event("save", _params, %{assigns: a} = socket) do
    uploaded_files =
      consume_uploaded_entries(socket, :contact_csv, fn %{path: path}, _entry ->
        dest = Path.join([:code.priv_dir(:excyte), "static", "uploads", Path.basename(path)])
        File.cp!(path, dest)
        Routes.static_path(socket, "/uploads/#{Path.basename(dest)}")
      end)

    contacts = Contacts.import_csv_contacts(hd(uploaded_files))
    # mappings = create_mapping_schema(contacts)
    {:noreply, assign(socket, contacts: contacts, uploaded_files: uploaded_files)}
  end

  # def handle_event("process_csv", _, %{assigns: a} = socket) do
  #   contacts = Contacts.import_csv_contacts(hd(a.csv_file))
  #   {:noreply, assign(socket, read_contacts: contacts)}
  # end

  # defp create_mapping_schema(cnts) do
  #   init = %{
  #     position: 0,
  #     examples: [],
  #     value: nil
  #   }

  #   hd(cnts)
  #   |> Enum.with_index()
  #   |> Enum.reduce(init, fn {attr, idx}, acc ->
  #     Enum.take(cnts, 3)
  #     |>
  #   end)
  #   |> IO.inspect(label: "BOOM")
  # end

  defp error_to_string(:too_large), do: "Too large"
  defp error_to_string(:too_many_files), do: "You have selected too many files"
  defp error_to_string(:not_accepted), do: "You have selected an unacceptable file type"
end
