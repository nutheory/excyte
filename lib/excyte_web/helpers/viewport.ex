defmodule ViewportHelpers do
  alias Phoenix.{LiveView, View}

  # in sync with css/shared/_media_queries.scss
  @sm_max_width 640
  @md_max_width 768
  @lg_max_width 1024
  @xl_max_width 1280

  @display_size_sm "sm"
  @display_size_md "md"
  @display_size_lg "lg"
  @display_size_xl "xl"

  defmacro __using__(_) do
    quote do
      import ViewportHelpers

      def handle_event("viewport_resize", %{"width" => width}, socket) do
        {:noreply, assign(socket, client_info: %{ width: width, media: display_size(width) })}
      end
    end
  end

  def assign_client_info(socket) do
    width =
      socket.private
      |> get_in([:connect_params, "viewport", "width"])

    IO.inspect(width, label: "running assign_client_info")
    LiveView.assign(socket, client_info: %{ width: width, media: display_size(width) })
  end

  def display_size(width) when width >= @xl_max_width, do: @display_size_xl
  def display_size(width) when width >= @lg_max_width, do: @display_size_lg
  def display_size(width) when width >= @md_max_width, do: @display_size_md
  def display_size(width), do: @display_size_sm
end
