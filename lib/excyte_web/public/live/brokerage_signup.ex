defmodule ExcyteWeb.BrokerageSignup do
  use ExcyteWeb, :live_public_view
  alias Excyte.{Accounts, Accounts.User, Agents.Agent}
  alias ExcyteWeb.{PublicView, Helpers.Utilities}

  def render(assigns), do: PublicView.render("brokerage_signup.html", assigns)

  def mount(_params, _sesh, socket) do
    cs = Agent.pre_register_brokerage(%Agent{}, %{})

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
    cs = Agent.pre_register_brokerage(%Agent{}, attrs)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("save", %{"agent" => attrs}, socket) do
    case Accounts.register_brokerage(Utilities.key_to_atom(attrs)) do
      {:ok, user} ->
        {:ok, _} =
          extract_user_token(fn url ->
            Accounts.deliver_user_confirmation_instructions(user, url)
          end)
          |> Accounts.confirm_user()

        {:noreply,
          socket
          |> put_flash(:info, "Brokerage account created for #{user.email}.")
          |> redirect(to: "/agent/dash")
        }
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp extract_user_token(fun) do
    {:ok, captured} = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token, _] = String.split(captured.text_body, "[TOKEN]")
    token
  end
end
