defmodule ExcyteWeb.Settings.CancelAccount do
  use ExcyteWeb, :live_component

  def update(assigns, socket) do
    {:ok,
      current_user: assigns.current_user
    }
  end

  def handle_event() do

  end
end
