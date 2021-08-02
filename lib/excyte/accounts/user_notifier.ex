defmodule Excyte.Accounts.UserNotifier do
  import Bamboo.Email
  alias Excyte.Mailer

  @base_url Application.get_env(:excyte, :base_url)
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

  def deliver_welcome_email(user) do
    text_body = """
    Hello!
    Welcome from the entire Excyte CMA team! We are here to help anyway possible.
    We offer daily webinars, 1st class customer support and a mobile first solution
    like no other presentation software.

    Your free 30 day trial ends 07/26/2016. Information to your membership is located
    in the settings on your dashboard under the Account button. You can change your
    email/password or cancel your account there. We will remind you 10 days prior
    to your account being charged in case you want to make any changes to your plan
    or end the free trial.

    We are thrilled to have you aboard and look forward to your feedback. We believe
    the best way to get better is to grow together.

    We appreciate you,

    Excyte CMA Team
    """

    html_body = """
    <div style="max-width:'600px';">
    <p>Hello!</p>

    <p>Welcome from the entire Excyte CMA team! We are here to help anyway possible.
    We offer daily webinars, 1st class customer support and a mobile first solution
    like no other presentation software.</p>

    <p>Your free 30 day trial ends 07/26/2016. Information to your membership is located
    in the settings on your dashboard under the Account button. You can change your
    email/password or cancel your account there. We will remind you 10 days prior to
    your account being charged in case you want to make any changes to your plan or
    end the free trial.</p>

    <p>We are thrilled to have you aboard and look forward to your feedback. We believe
    the best way to get better is to grow together.</p>

    <p>We appreciate you,</p>

    #{@html_signature}
    </div>
    """

    deliver(user.email, "Welcome to Excyte CMA", text_body, html_body)
  end


  @doc """
  Deliver instructions to confirm account.
  """
  def deliver_confirmation_instructions(user, url) do
    text_body = """

    ==============================

    Hi #{user.email},

    You can confirm your account by visiting the url below:

    #{@base_url}#{url}

    If you didn't create an account with us, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can confirm your account by visiting the url below:<br/></br/>
    <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
    If you didn't create an account with us, please ignore this.<br/></br/>
    #{@html_signature}
    """

    deliver(user.email, "Please confirm your account", text_body, html_body)
  end

  def deliver_invitation_instructions(user, url) do
    text_body = """

    ==============================

    #{user.invite_message}

    You can accept your invitation by visiting the url below:

    #{@base_url}#{url}

    If you didn't create an account with us, please ignore this.

    ==============================
    """

    html_body = """
    #{user.invite_message}<br/></br/>
    You can accept your invitation by visiting the url below:<br/></br/>
    <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
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

    #{@base_url}#{url}

    If you didn't request this change, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can reset your password by visiting the url below:<br/></br/>
    <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
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

    #{@base_url}#{url}

    If you didn't request this change, please ignore this.

    ==============================
    """

    html_body = """
    Hi #{user.email},<br/></br/>
    You can change your e-mail by visiting the url below:<br/></br/>
    <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
    If you didn't request this change, please ignore this.
    """

    deliver(user.email, "Please confirm your account", text_body, html_body)
  end
end
