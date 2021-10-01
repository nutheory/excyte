defmodule ExcyteWeb.Agent.SendToClient do
  use ExcyteWeb, :live_component
  alias Excyte.{Activities, Agents}
  alias ExcyteWeb.AgentView

  def render(assigns), do: AgentView.render("send_to_client.html", assigns)

  def update(assigns, socket) do
    profile = Agents.get_agent_profile!(assigns.current_user.id)
    activities = Activities.fetch_insight_activities(%{insight_id: assigns.insight.id, agent_id: assigns.current_user.id})
    last_sent = if length(activities) > 0, do: hd(Enum.filter(activities, fn a -> a.name === "sent" end)), else: nil
    subject_type_text =
      case assigns.insight.type do
        "cma" -> "has sent you a Comparative Market Analysis for your home"
        "showcase" -> "has sent you a \"Showcase\" of property you might be interested in"
        "buyer_tour" -> "has sent you a Buyer Tour of places to visit"
      end
    message_type_text =
      case assigns.insight.type do
        "cma" -> "Comparative Market Analysis for you to browse at your convenience"
        "showcase" -> "\"Showcase\" of property you might be interested in"
        "buyer_tour" -> "Buyer Tour of places to visit with mobile friendly directions"
      end
    subject = "#{profile.name} #{subject_type_text}."
    message = "Dear {{client}},\nI have created a #{message_type_text}."
    {:ok, assign(socket,
      insight: assigns.insight,
      last_sent: last_sent,
      profile: profile,
      client_name: "",
      email: "",
      valid: false,
      errors: [],
      subject: subject,
      message: message
    )}
  end

  def handle_event("name-blur", %{"value" => name}, %{assigns: a} = socket) do
    message = String.replace(a.message, "{{client}}", name)
    {:noreply, assign(socket, message: message, name: name)}
  end

  def handle_event("validate-email-form", %{"send_to" => f}, %{assigns: a} = socket) do
    valid =
      if String.match?(a.email, ~r/^[^\s]+@[^\s]+$/) && String.length(a.subject) > 0 && String.length(a.client_name) > 0 do
        true
      else
        false
      end
    {:noreply, assign(socket, valid: valid, client_name: f["client_name"], subject: f["subject"], email: f["email"])}
  end

  def handle_event("submit-email-form", %{"send_to" => f}, %{assigns: a} = socket) do
    if a.valid do
      send self(), {:save_client, %{
        client: %{name: f["client_name"], email: f["email"]},
        insight: a.insight,
        email: %{message: f["message"], subject: f["subject"], profile: a.profile}
      }}
      {:noreply, socket}
    else
      {:noreply, assign(socket, errors: [%{message: "Please make sure you have a name, valid email, and subject."}])}
    end
  end
end
