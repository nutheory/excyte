# defmodule ExcyteWeb.UserRegistrationController do
#   use ExcyteWeb, :controller

#   alias Excyte.Accounts
#   alias Excyte.Accounts.User
#   alias ExcyteWeb.{Helpers.Utilities, UserAuth}

#   plug :put_view, ExcyteWeb.UserView

#   def new(conn, _params) do
#     changeset = Accounts.change_user_registration(%User{})
#     render(conn, "registration.html", changeset: changeset, mls_opts: Application.get_env(:excyte, :mls_auth_options))
#   end

#   def create(conn, %{"user" => user_params}) do
#     case Accounts.register(Utilities.key_to_atom(user_params)) do
#       {:ok, user} ->
#         {:ok, confirm_token} =
#           Accounts.deliver_user_confirmation_instructions(
#             user,
#             &Routes.user_confirmation_url(conn, :confirm, &1)
#           )

#         mls_redirect =
#           OpenIDConnect.authorization_uri(
#             String.to_atom(user_params["mls"]),
#             %{excyte_confirm_token: confirm_token}
#           )

#         redirect(conn, external: mls_redirect)

#       {:error, %Ecto.Changeset{} = changeset} ->
#         render(conn, "registration.html", changeset: changeset, mls_opts: Application.get_env(:excyte, :mls_auth_options))
#     end
#   end
# end
