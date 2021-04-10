defmodule ExcyteWeb.AgentRegistration do
  use ExcyteWeb, :live_auth_view
  alias Excyte.{Accounts, Accounts.User, Agents.Agent}
  alias ExcyteWeb.{UserView, Helpers.Utilities}

  def render(assigns), do: UserView.render("agent_registration.html", assigns)

  def mount(params, _sesh, socket) do
    cs = Agent.pre_register_agent(%Agent{}, %{})
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

  def handle_event("togglePassword", _sesh, socket) do
    {type, text} =
      if socket.assigns.password_type === "password" do
        {"text", "hide password"}
      else
        {"password", "show password"}
      end
      val = socket.assigns.changeset.changes.password
    {:noreply, assign(socket,
      password_type: type,
      show_text: text,
      password_value: val
    )}
  end

  def handle_event("validate", %{"agent" => attrs}, socket) do
    cs = Agent.pre_register_agent(%Agent{}, attrs)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{"agent" => attrs}, socket) do
    case Accounts.register_agent(Utilities.key_to_atom(attrs)) do
      {:ok, user} ->
        {:ok, _} =
          Accounts.deliver_user_confirmation_instructions(
            user,
            &Routes.user_confirmation_path(socket, :confirm, &1)
          )

        {:noreply,
          socket
          |> put_flash(:info, "Account created. Please check your email for confirmation instructions.")
          |> redirect(to: Routes.user_session_path(socket, :new))
        }
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
