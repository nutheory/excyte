defmodule ExcyteWeb.Public.AgentSignup do
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
    with {:ok, %{agent: agent, account: acc}} <- Accounts.register_agent(Utilities.key_to_atom(attrs)),
         {:ok, token} <- Accounts.generate_login_token(agent) do
      {:noreply,
        socket
        |> put_flash(:info, "Account created.")
        |> redirect(to: Routes.user_session_path(socket, :create_from_token, token, agent.email))
      }
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
      err ->
        IO.inspect(err, label: "AGENT SIGNUP ERR")
        {:noreply, socket}
    end
  end
end
