defmodule Excyte.Clients.ClientNotifier do
  import Bamboo.Email
  alias Excyte.Mailer

  @base_url Application.get_env(:excyte, :base_url)
  @from_address "no-reply@excyte.io"
  # @html_signature """
  #   Excyte.io<br/>
  #   <a href="//excyte.io/">https://excyte.io/</a><br/>
  #   contact@excyte.io<br/>
  # """

  defp deliver(to, subject, text_body, html_body) do
    email =
      new_email(
        to: to,
        from: @from_address,
        subject: subject,
        text_body: text_body,
        html_body: html_body
      )
      |> Mailer.deliver_now()

    {:ok, email}
  end

  def deliver_report(_repo, _changes, %{client: cl, email: em, insight: ins}) do
    IO.inspect(em.profile, label: "PROFILE")
    text_body = """

    ==============================

    #{em.message}

    You can see your report by visiting the url below:

    #{@base_url}/client/#{ins.uuid}

    #{em.profile.name}
    #{em.profile.company_name}
    ==============================
    """

    html_body = """
    #{String.replace(em.message, "\n", "<br/>")}<br/></br/>
    You can confirm your account by visiting the url below:<br/></br/>
    <a href="#{@base_url}/client/#{ins.uuid}" target="_blank">#{@base_url}/client/#{ins.uuid}</a><br/></br/>
    If you didn't create an account with us, please ignore this.<br/></br/>
    #{em.profile.name}<br/>
    #{em.profile.company_name}<br/>
    """

    deliver(cl.email, em.subject, text_body, html_body)
  end
end
