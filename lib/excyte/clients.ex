
defmodule Excyte.Clients do
  import Ecto.Query, warn: false
  alias Ecto.Multi

  # alias ExTwilio.JWT.AccessToken
  alias Excyte.{Repo, Activities, Clients.Conversation, Clients.Client, Clients.ClientNotifier, Insights}

  @proxies []

  def create_client(%{client: client, insight: insight, email: email} = all) do
    Multi.new()
    |> Multi.run(:new_client, __MODULE__, :create_client, [%{client: client, agent_id: email.profile.agent_id}])
    |> Multi.run(:update_insight, Insights, :update_insight, [insight])
    |> Multi.run(:send_email, ClientNotifier, :deliver_report, [all])
    |> Multi.run(:new_activity, Activities, :create_activity, [])
    |> Repo.transaction()
  end

  def create_client(_repo, _changes, %{client: cl, agent_id: aid}) do
    case Repo.get_by(Client, %{email: cl.email, created_by_id: aid}) do
      %Client{} = client -> {:ok, client}
      nil -> Repo.insert(Client.changeset(%Client{}, cl))
    end
  end

  def create_insight_conversation(%{insight: ins, agent: ag}) do
    # Enum.find textable phone #
    # If phone do
    Multi.new()
    |> Multi.run(:conversation, __MODULE__, :create_conversation, ["#{ins.name} client-#{ins.client.id}"])
    |> Multi.run(:participant, __MODULE__, :create_participant, [%{agent: ag, proxies: @proxies}])
    |> Multi.run(:save_conversation, __MODULE__, :save_conversation, [%{insight: ins, agent: ag}])
    |> Repo.transaction()
  end

  def create_conversation(_repo, _changes, name) do
    case ExTwilio.Conversations.create(%{friendly_name: name}) do
      {:ok, created} -> {:ok, created}
      err -> Activities.handle_errors(err, "Excyte.Clients.create_conversation")
    end
  end

  def create_participant(_repo, convo, %{agent: ag, proxies: p}) when length(p) > 0 do
    proxy = hd(p)["number"]

    IO.inspect(ag.phone, label: "lead.phone")
    IO.inspect(proxy, label: "proxy")

    case ExTwilio.Conversations.Participant.create(
           %{
             attributes: %{name: ag.name},
             messaging_binding: %{address: "+1#{ag.phone}", proxy_address: "+1#{proxy}"}
           },
           conversation: convo.conversation.id
         ) do
      {:ok, created} ->
        {:ok, created}

      {:error, _, 409} ->
        create_participant(nil, convo, %{agent: ag, proxies: tl(p)})

      err ->
        Activities.handle_errors(err, "Excyte.Clients.create_conversation_participant")
    end
  end

  # def create_participant(_repo, _convo, %{agent: ag, proxies: p}) do
  #   IO.inspect(p, label: "EMPTY")
  # end

  def save_conversation(_repo, %{conversation: c, participant: p}, %{insight: ins, agent: ag}) do
    save_conversation(%{
      insight_id: ins.id,
      sms_participant_sid: p.sid,
      friendly_name: c.friendly_name,
      conversation_sid: c.sid,
      chat_service_sid: c.chat_service_sid,
      agent_id: ag.id
    })
  end

  def create_conversation_chat_participant(convo_id, identity, avatar, name) do
    case ExTwilio.Conversations.Participant.create(
           %{identity: identity, attributes: %{avatar: avatar, name: name}},
           conversation: convo_id
         ) do
      {:ok, created} -> {:ok, created}
      err -> err
    end
  end

  def get_conversation_for_insight(%{insight_id: iid, agent: ag}) do
    convo = Repo.get_by(Conversation, %{insight_id: iid, agent: ag})

    if convo && Map.has_key?(convo, :conversation_sid) && convo.conversation_sid do
      # with {:ok, c} <- ExTwilio.Conversations.find(convo.conversation_sid),
      #             _ <- create_conversation_chat_participant(
      #                     c.conversation_sid,
      #                     ag.email,
      #                     ag.avatar,
      #                     "#{ag.first_name} #{ag.last_name}"
      #                   ),
      #      {:ok, token} <- create_twilio_token("#{ag.email}", c.chat_service_sid) do
      #   {:ok, %{token: token, details: c}}
      # else
      #   {:error, err, _status} -> Activities.handle_errors(err, "Excyte.Clients.get_conversation_for_lead")
      #   err -> Activities.handle_errors(err, "Excyte.Clients.get_conversation_for_lead")
      # end
    # else
    #   with ins <- Repo.get!(Insight, iid),
    #        {:ok, c} <- create_insight_conversation(lead, account),
    #        _ <-
    #          create_conversation_chat_participant(
    #            convo.conversation_id,
    #            usr.email,
    #            usr.avatar,
    #            "#{usr.first_name} #{usr.last_name}"
    #          ),
    #        {:ok, token} <-
    #          create_twilio_token("#{usr.email}", convo.chat_service_sid) do
    #     {:ok, %{token: token, details: convo}}
    #   else
    #     {:error, err} -> Activities.handle_errors(err, "Excyte.Clients.get_conversation_for_lead")
    #     err -> Activities.handle_errors(err, "Excyte.Clients.get_conversation_for_lead")
    #   end
    end
  end

  def list_conversation_participants(convo_id) do
    ExTwilio.Conversations.Participant.all(conversation: convo_id)
  end

  # def bulk_message_leads(lead_ids, message, acc, usr) do
  #   Enum.each(lead_ids, fn lid ->
  #     convo = Repo.get_by(Conversation, lead_id: hd(lid), account_id: acc.id)

  #     res =
  #       __MODULE__.create_conversation_message(
  #         convo.conversation_id,
  #         message,
  #         acc.company_name,
  #         %{
  #           bulk: true,
  #           sender: "#{usr.first_name} #{usr.last_name}",
  #           source: "account_#{acc.id}",
  #           company: acc.company_name
  #         },
  #         nil
  #       )

  #     IO.inspect(res, label: "RESP")
  #   end)
  # end

  def create_conversation_message(convo_id, body, author, attrs, _media) do
    ExTwilio.Conversations.Message.create(
      %{body: body, attributes: attrs, author: author},
      conversation: convo_id
    )
  end

  defp save_conversation(attrs) do
    %Conversation{}
    |> Conversation.changeset(attrs)
    |> Repo.insert()
  end

  def destroy_conversation(convo_id) do
    ExTwilio.Conversations.destroy(convo_id)
  end

  # defp create_twilio_token(identity, service_sid) do
  #   token =
  #     AccessToken.new(
  #       account_sid: Application.get_env(:ex_twilio, :account_sid),
  #       api_key: Application.get_env(:ex_twilio, :api_key),
  #       api_secret: Application.get_env(:ex_twilio, :api_secret),
  #       identity: identity,
  #       expires_in: 86_400,
  #       grants: [AccessToken.ChatGrant.new(service_sid: service_sid)]
  #     )

  #   {:ok, AccessToken.to_jwt!(token)}
  # end
end
