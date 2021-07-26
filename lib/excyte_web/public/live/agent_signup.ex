defmodule ExcyteWeb.AgentSignup do
  use ExcyteWeb, :live_public_view
  alias Excyte.{Accounts, Agents.Agent}
  alias ExcyteWeb.{PublicView, Helpers.Utilities}

  def render(assigns), do: PublicView.render("agent_signup.html", assigns)

  def mount(_params, _sesh, socket) do
    cs = Agent.pre_register_agent(%Agent{}, %{})

    {:ok, assign(socket,
      changeset: cs,
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
      {:error, %Ecto.Changeset{} = changeset} -> {:noreply, assign(socket, changeset: changeset)}

    end
  end
end
