defmodule ExcyteWeb.Router do
  use ExcyteWeb, :router

  import ExcyteWeb.UserAuth

  pipeline :app_browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ExcyteWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :public do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ExcyteWeb.LayoutView, :public_root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end



  pipeline :auth do
    plug :put_layout, {ExcyteWeb.LayoutView, "auth.html"}
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # scope "/", ExcyteWeb do
  #   pipe_through :app_browser

  #   live "/", PageLive, :index
  # end

  # Other scopes may use custom stacks.
  # scope "/api", ExcyteWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  # if Mix.env() in [:dev, :test] do
  #   import Phoenix.LiveDashboard.Router

  #   scope "/" do
  #     pipe_through :app_browser
  #     live_dashboard "/dashboard", metrics: ExcyteWeb.Telemetry
  #   end
  # end

  if Mix.env() == :dev do
    # If using Phoenix
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end

  ## Authentication routes

  scope "/settings", ExcyteWeb.Settings do
    pipe_through [:app_browser, :require_authenticated_user]
    live "/", Dashboard
    # put "/settings/update_password", UserSettingsController, :update_password
    # put "/settings/update_email", UserSettingsController, :update_email
    get "/settings/confirm_email/:token", UserSettingsController, :confirm_email
  end

  scope "/insights", ExcyteWeb.Insight do
    pipe_through [:app_browser, :require_authenticated_user]
    live "/:type/create", Create
    live "/:type/:insight_id/comparables", Comps
    live "/:type/:insight_id/review", Review
    live "/:type/:insight_id/builder", Builder
    live "/:type/:insight_id/editor/:doc_id", Editor
  end

  scope "/agent", ExcyteWeb.Agent do
    pipe_through [:app_browser, :require_authenticated_user]
    live "/dash", Dashboard
    live "/getting-started", GettingStarted
  end

  scope "/brokerage", ExcyteWeb.Brokerage do
    pipe_through [:app_browser, :require_authenticated_user]
    live "/dash", Dashboard
    live "/getting-started", GettingStarted
  end

  scope "/", ExcyteWeb do
    pipe_through [:app_browser, :require_authenticated_user]
    get "/confirm_mls/:mls", UserConfirmationController, :confirm_mls
    delete "/log_out", UserSessionController, :delete
  end

  scope "/", ExcyteWeb do
    pipe_through [:app_browser, :redirect_if_user_is_authenticated, :auth]
    live "/agent/registration", AgentRegistration
    live "/brokerage/registration", BrokerageRegistration
    get "/log_in", UserSessionController, :new
    post "/log_in", UserSessionController, :create
    get "/reset_password", UserResetPasswordController, :new
    post "/reset_password", UserResetPasswordController, :create
    get "/reset_password/:token", UserResetPasswordController, :edit
    put "/reset_password/:token", UserResetPasswordController, :update
  end

  scope "/", ExcyteWeb do
    pipe_through [:public]
    get "/confirm", UserConfirmationController, :new
    post "/confirm", UserConfirmationController, :create
    get "/confirm/:token", UserConfirmationController, :confirm
    live "/", Home
    live "/agents", AgentsMarketing
    live "/agents/pricing", AgentPricing
    live "/brokerages", BrokeragesMarketing
    live "/brokerages/pricing", BrokeragePricing
  end
end
