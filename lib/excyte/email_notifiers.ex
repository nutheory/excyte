defmodule Excyte.EmailNotifiers do
  use Bamboo.Phoenix, view: ExcyteWeb.EmailView
  import Bamboo.Email
  alias Excyte.Mailer

  # @base_url Application.get_env(:excyte, :base_url)

  def deliver_welcome_email(user, acc) do
    base_email()
    |> to(user.email)
    |> subject("Welcome to ExcyteCMA")
    |> assign(:w, %{user: user, account: acc})
    |> render(:welcome)
    |> Mailer.deliver_later()
  end

  def deliver_invitation_instructions(user, url) do
    base_email()
    |> to(user.email)
    |> subject("Invitation from Excyte")
    |> assign(:i, %{user: user, url: url})
    |> render(:agent_invitation)
    |> Mailer.deliver_later()
  end

  # def deliver_reset_password_instructions(user, url) do

  # end

  # def deliver_update_email_instructions(user, url) do

  # end


  # def deliver_invitation_instructions(user, url) do
  #   text_body = """

    # ==============================

    # #{user.invite_message}

    # You can accept your invitation by visiting the url below:

    # #{url}

    # If you didn't create an account with us, please ignore this.

    # ==============================
  #   """

  #   html_body = """
    # #{user.invite_message}<br/></br/>
    # You can accept your invitation by visiting the url below:<br/></br/>
    # <a href="#{url}" target="_blank">#{url}</a><br/></br/>
  #   #{@html_signature}
  #   """

  #   deliver(user.email, "Invitation from Excyte", text_body, html_body)
  # end

  # @doc """
  # Deliver instructions to reset a user password.
  # """
  # def deliver_reset_password_instructions(user, url) do
  #   text_body = """

  #   ==============================

  #   Hi #{user.email},

  #   You can reset your password by visiting the url below:

  #   #{@base_url}#{url}

  #   If you didn't request this change, please ignore this.

  #   ==============================
  #   """

  #   html_body = """
  #   Hi #{user.email},<br/></br/>
  #   You can reset your password by visiting the url below:<br/></br/>
  #   <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
  #   If you didn't request this change, please ignore this.
  #   """

  #   deliver(user.email, "Please confirm your account", text_body, html_body)
  # end

  # @doc """
  # Deliver instructions to update a user email.
  # """
  # def deliver_update_email_instructions(user, url) do
  #   text_body = """

  #   ==============================

  #   Hi #{user.email},

  #   You can change your e-mail by visiting the url below:

  #   #{@base_url}#{url}

  #   If you didn't request this change, please ignore this.

  #   ==============================
  #   """

  #   html_body = """
  #   Hi #{user.email},<br/></br/>
  #   You can change your e-mail by visiting the url below:<br/></br/>
  #   <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
  #   If you didn't request this change, please ignore this.
  #   """

  #   deliver(user.email, "Please confirm your account", text_body, html_body)
  # end

  defp base_email do
    new_email()
    |> from("no-reply@excyte.io")
    |> put_html_layout({ExcyteWeb.LayoutView, :email}) # Set default layout
    # |> put_text_layout({ExcyteWeb.LayoutView, "email.text"}) # Set default text layout
  end
end
