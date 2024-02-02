defmodule ExcyteWeb.PublicHeader do
  use ExcyteWeb, :live_component

  def mount(_params, _session, socket) do
    {:ok, assign(socket, content: nil)}
  end

  def render(assigns) do
    ~H"""
    <div></div>
    """
  end

end
