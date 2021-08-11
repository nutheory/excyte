# defmodule Excyte.Accounts.UserNotifier do
#   use Bamboo.Phoenix, view: Excyte.EmailView
#   import Bamboo.Email
#   alias Excyte.Mailer

#   @base_url Application.get_env(:excyte, :base_url)
#   @from_address "no-reply@excyte.io"
#   @html_signature """
#     Excyte.io<br/>
#     <a href="//excyte.io/">https://excyte.io/</a><br/>
#     contact@excyte.io<br/>
#   """

#   def deliver_welcome_email(user, acc) do
#     new_email
#       |> from("no-reply@workstatus.com")
#       |> to(user.email)
#       |> subject("Welcome to WorkStatus!!")
#       |> assign(:user, user)
#       |> render("welcome_mail.html")
#   end


  # defp deliver(to, subject, text_body, html_body) do
  #   email =
  #     new_email(
  #       to: to,
  #       from: @from_address,
  #       subject: subject,
  #       text_body: text_body,
  #       html_body: html_body
  #     )
  #     |> Mailer.deliver_now()

  #   {:ok, email}
  # end

  # def deliver_welcome_email(user, acc) do

  #   text_body = """
    # Welcome to excyte cma,\n\n
    # We're so glad you're here. We want you to enjoy making reports for your\n
    # customers from anywhere. Our mobile-first CMA is built for the mobile-first\n
    # Agent. It's easy to make reports that separate you from the competition and\n
    # amaze your Clients.\n\n

    # Your currently registered for (give plan and cost)\n
    # Your free trial will end on #{Calendar.strftime(acc.current_period_end, "%b %d, %Y")}\n\n
    # If you need additional help getting started please feel free to join our
    # daily webinar using the link below-\n\n
    # Daily Webinar-\n
    # https://my.demio.com/ref/qEnsCaytGIrl9NUI\n\n
    # We do have live chat on our website that can offer support and you can also\n
    # call 949-207-8769 Monday-Friday 9:00 am - 5:00 pm EST.\n\n
    # Thanks again for giving us an opportunity we look forward to earning your business.\n\n
    # We appreciate you,\n
    # excyte cma Team
  #   """

  #   deliver(user.email, "Welcome to Excyte CMA", text_body, html_body)
  # end

  # def deliver_invite_welcome_email(user, brokerage) do
  #   text_body = """
  #   Hello!
  #   Welcome from the entire Excyte CMA team! We are here to help anyway possible.
  #   We offer daily webinars, 1st class customer support and a mobile first solution
  #   like no other presentation software.

  #   We are thrilled to have you aboard and look forward to your feedback. We believe
  #   the best way to get better is to grow together.

  #   We appreciate you,

  #   Excyte CMA Team
  #   """

  #   html_body = """
  #   <div style="max-width:'600px';">
  #   <p>Hello!</p>

  #   <p>Welcome from the entire Excyte CMA team! We are here to help anyway possible.
  #   We offer daily webinars, 1st class customer support and a mobile first solution
  #   like no other presentation software.</p>

  #   <p>We are thrilled to have you aboard and look forward to your feedback. We believe
  #   the best way to get better is to grow together.</p>

  #   <p>We appreciate you,</p>

  #   #{@html_signature}
  #   </div>
  #   """

  #   deliver(user.email, "Welcome to Excyte CMA", text_body, html_body)
  # end


  # @doc """
  # Deliver instructions to confirm account.
  # """
  # def deliver_confirmation_instructions(user, url) do
  #   text_body = """

  #   ==============================

  #   Hi #{user.email},

  #   You can confirm your account by visiting the url below:

  #   #{@base_url}#{url}

  #   If you didn't create an account with us, please ignore this.

  #   ==============================
  #   """

  #   html_body = """
  #   Hi #{user.email},<br/></br/>
  #   You can confirm your account by visiting the url below:<br/></br/>
  #   <a href="#{@base_url}#{url}" target="_blank">#{@base_url}#{url}</a><br/></br/>
  #   If you didn't create an account with us, please ignore this.<br/></br/>
  #   #{@html_signature}
  #   """

  #   deliver(user.email, "Please confirm your account", text_body, html_body)
  # end

# end
