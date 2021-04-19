defmodule Excyte.Accounts.UserNotifier do
  import Bamboo.Email
  alias Excyte.Mailer

  @from_address "no-reply@excyte.io"
  @html_signature """
    Excyte.io<br/>
    <a href="//excyte.io/">https://excyte.io/</a><br/>
    contact@excyte.io<br/>
  """

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

  @doc """
  Deliver instructions to confirm account.
  """
  def deliver_confirmation_instructions(user, url) do
    text_body = """

    ==============================

    Hi #{user.email},

    You can confirm your account by visiting the url below:

    #{url}

    If you didn't create an account with us, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can confirm your account by visiting the url below:<br/></br/>
    <a href="#{url}" target="_blank">#{url}</a><br/></br/>
    If you didn't create an account with us, please ignore this.
    """

    deliver(user.email, "Please confirm your account", text_body, html_body)
  end

  def deliver_invitation_instructions(user, url) do
    IO.inspect(user, label: "USERRR")
    IO.inspect(url, label: "URLLL")
        text_body = """

    ==============================

    #{user.invite_message}

    You can accept your invitation by visiting the url below:

    #{url}

    If you didn't create an account with us, please ignore this.

    ==============================
    """

    html_body = """
    #{user.invite_message}<br/></br/>
    You can accept your invitation by visiting the url below:<br/></br/>
    <a href="#{url}" target="_blank">#{url}</a><br/></br/>
    #{@html_signature}
    """

    deliver(user.email, "Invitation from Excyte", text_body, html_body)
  end

  @doc """
  Deliver instructions to reset a user password.
  """
  def deliver_reset_password_instructions(user, url) do
    text_body = """

    ==============================

    Hi #{user.email},

    You can reset your password by visiting the url below:

    #{url}

    If you didn't request this change, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can reset your password by visiting the url below:<br/></br/>
    <a href="#{url}" target="_blank">#{url}</a><br/></br/>
    If you didn't request this change, please ignore this.
    """

    deliver(user.email, "Please confirm your account", text_body, html_body)
  end

  @doc """
  Deliver instructions to update a user email.
  """
  def deliver_update_email_instructions(user, url) do
    text_body = """

    ==============================

    Hi #{user.email},

    You can change your e-mail by visiting the url below:

    #{url}

    If you didn't request this change, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can change your e-mail by visiting the url below:<br/></br/>
    <a href="#{url}" target="_blank">#{url}</a><br/></br/>
    If you didn't request this change, please ignore this.
    """

    deliver(user.email, "Please confirm your account", text_body, html_body)
  end
end
