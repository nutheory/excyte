defmodule ExcyteWeb.UserConfirmationController do
  use ExcyteWeb, :controller

  alias Excyte.{Accounts}
  alias ExcyteWeb.UserAuth

  plug :put_view, ExcyteWeb.UserView

  def new(conn, _params) do
    render(conn, "resend_confirmation.html")
  end

  # def create(conn, %{"user" => %{"email" => email}}) do
  #   # if user = Accounts.get_user_by_email(email) do
  #   #   Accounts.deliver_user_confirmation_instructions(
  #   #     user,
  #   #     &Routes.user_confirmation_url(conn, :confirm, &1)
  #   #   )
  #   # end

  #   # Regardless of the outcome, show an impartial success/error message.
  #   conn
  #   |> put_flash(
  #     :info,
  #     "If your email is in our system and it has not been confirmed yet, " <>
  #       "you will receive an email with instructions shortly."
  #   )
  #   |> redirect(to: "/")
  # end

  # Do not log in the user after confirmation to avoid a
  # leaked token giving the user access to the account.
  def confirm(conn, %{"token" => token}) do
    case Accounts.confirm_user(token) do
      {:ok, confirmed_user} ->
        conn
        |> put_flash(:info, "Account confirmed successfully.")
        |> UserAuth.log_in_user(confirmed_user)

      :error ->
        conn
        |> put_flash(:error, "Confirmation link is invalid or it has expired.")
        |> redirect(to: "/")
    end
  end

  def confirm_mls(conn, %{"mls" => incoming_mls} = params) do
    mls = String.to_atom(incoming_mls)
    # if Application.get_env(:excyte, :env) === :prod do
      with {:ok, tokens} <- OpenIDConnect.fetch_tokens(mls, params["code"]),
           {:ok, _claims} <- OpenIDConnect.verify(mls, tokens["id_token"]) do
          #  {:ok, confirmed_user} <- Accounts.confirm_user(params["excyte_confirm_token"]),
          #  {:ok, agent} <- Mls.create_credential(mls_params(confirmed_user, tokens, claims)) do
        conn
        |> put_flash(:info, "Account confirmed successfully.")
        # |> UserAuth.log_in_user(confirmed_user)
      else
        {:error, err} -> {:error, err}
      end
    # else
    #   {:ok, _} = bypass_open_id(conn, params)

    #   conn
    #   |> put_flash(:info, "MLS successfully added.")
    #   |> redirect(to: params["return_to"])
    # end

  end

  #c hanged first param from conn to agent_id to call directly
  # def bypass_open_id(agent_id, params) do
  #   # agent_id = conn.assigns.current_user.id
  #   case Mls.create_credential(mls_params(agent_id, %{
  #          "access_token" => params["access_token"],
  #          "refresh_token" => params["refresh_token"],
  #          "id_token" => params["id_token"],
  #          "mls_name" => params["mls_name"],
  #          "member_key" => params["member_key"],
  #          "office_key" => params["office_key"],
  #          "dataset_id" => params["dataset_id"],
  #          "expires_in" => params["expires_in"]
  #        }, %{
  #          "agent_name" => "Derek Rush",
  #          "mls_id" => "67475454757",
  #          "sub" => "actris_ref",
  #          "username" => "nutheory",
  #          "zoneinfo" => "America/Chicago"
  #        })) do
  #     {:ok, agent} -> {:ok, agent}
  #     {:error, err} -> {:error, err}
  #   end
  # end

  # defp mls_params(agent_id, tokens, claims) do
  #   %{
  #     agent_id: agent_id,
  #     access_token: tokens["access_token"],
  #     refresh_token: tokens["refresh_token"],
  #     id_token: tokens["id_token"],
  #     expires_in: tokens["expires_in"],
  #     dataset_id: tokens["dataset_id"],
  #     mls_name: tokens["mls_name"],
  #     member_key: tokens["member_key"],
  #     office_key: tokens["office_key"],
  #     mls_id: claims["mls_id"],
  #     agent_name: claims["agent_name"],
  #     sub: claims["sub"],
  #     username: claims["username"],
  #     zone_info: claims["zoneinfo"]
  #   }
  # end
end
