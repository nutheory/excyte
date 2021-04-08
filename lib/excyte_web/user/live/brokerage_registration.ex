defmodule ExcyteWeb.BrokerageRegistrationLive do
  use ExcyteWeb, :live_auth_view
  alias Excyte.{Accounts, Accounts.User, Agents.Agent}
  alias ExcyteWeb.{UserView, Helpers.Utilities}

  def render(assigns), do: UserView.render("brokerage_registration.html", assigns)

  def mount(params, _sesh, socket) do
    cs = Agent.pre_register(%Agent{}, %{})
    sp = Enum.find(Application.get_env(:excyte, :pricing_items), fn x ->
      x.friendly_name === params["plan"]
    end)
    plan_id = if sp, do: sp.plan_id, else: nil

    {:ok, assign(socket,
      changeset: cs,
      selected_plan: plan_id,
      current_user: nil,
      password_type: "password",
      password_value: "",
      show_text: "show password"
    )}

  end
end
