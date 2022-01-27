defmodule ExcyteWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use ExcyteWeb, :controller
      use ExcyteWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  def static_paths do
    ~w(assets fonts images favicon.ico robots.txt)
  end

  def controller do
    quote do
      use Phoenix.Controller, namespace: ExcyteWeb

      import Plug.Conn
      import ExcyteWeb.Gettext
      unquote(verified_routes())
    end
  end

  def view(opts \\ [root: "lib/excyte_web/layouts"]) do
    opts = opts ++ [namespace: ExcyteWeb, pattern: "**/*"]

    quote do
      use Phoenix.View, unquote(opts)

      # Import convenience functions from controllers
      import Phoenix.Controller,
        only: [get_csrf_token: 0, view_module: 1, view_template: 1]

      # Include shared imports and aliases for views
      unquote(view_helpers())
    end
  end

  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {ExcyteWeb.LayoutView, :app}

      use ViewportHelpers

      unquote(view_helpers())
    end
  end

  def live_auth_view do
    quote do
      use Phoenix.LiveView,
        layout: {ExcyteWeb.LayoutView, :auth}

      unquote(view_helpers())
    end
  end

  def live_public_view do
    quote do
      use Phoenix.LiveView,
        layout: {ExcyteWeb.LayoutView, :public}

      unquote(view_helpers())
    end
  end

  def live_client_view do
    quote do
      use Phoenix.LiveView,
        layout: {ExcyteWeb.LayoutView, "client.html"}

      unquote(view_helpers())
    end
  end

  def live_component do
    quote do
      use Phoenix.LiveComponent

      unquote(view_helpers())
    end
  end

  def router do
    quote do
      use Phoenix.Router

      import Plug.Conn
      import Phoenix.Controller
      import Phoenix.LiveView.Router
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import ExcyteWeb.Gettext
    end
  end

  defp view_helpers do
    quote do
      # Use all HTML functionality (forms, tags, etc)
      import Phoenix.HTML

      # Import LiveView helpers (live_render, live_component, live_patch, etc)
      # import Phoenix.LiveView.Helpers
      import Phoenix.Component
      import ExcyteWeb.CoreComponents

      # Import basic rendering functionality (render, render_layout, etc)
      import Phoenix.View

      import ExcyteWeb.ErrorHelpers
      import ExcyteWeb.Gettext

      alias Phoenix.LiveView.JS
      unquote(verified_routes())
    end
  end

  def verified_routes do
    quote do
      use Phoenix.VerifiedRoutes,
        endpoint: ExcyteWeb.Endpoint,
        router: ExcyteWeb.Router,
        statics: ExcyteWeb.static_paths()
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end

  defmacro __using__({which, opts}) when is_atom(which) do
    apply(__MODULE__, which, [opts])
  end
end
