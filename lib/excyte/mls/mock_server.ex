defmodule Mls.MockServer do
  use Plug.Router
  use Plug.Debugger
  use Plug.ErrorHandler
  plug Plug.Parsers, parsers: [:json],
                    pass:  ["text/*"],
                    json_decoder: Jason

  plug :match
  plug :dispatch

  # This causes response already sent error
  # plug Plug.Logger, log: :debug

  get "/:dataset/.well-known/openid-configuration" do
    success(conn, %{
      "authorization_endpoint" => "http://localhost:4004/o/oauth2/v2/#{dataset}",
      "claims_supported" => [
        "aud",
        "email",
        "email_verified",
        "exp",
        "family_name",
        "given_name",
        "iat",
        "iss",
        "locale",
        "name",
        "picture",
        "sub"
      ],
      "code_challenge_methods_supported" => ["plain", "S256"],
      "id_token_signing_alg_values_supported" => ["RS256"],
      "issuer" => "http://localhost:4004",
      "jwks_uri" => "http://localhost:4004/oauth2/v3/certs",
      "response_types_supported" => [
        "code",
        "token",
        "id_token",
        "code token",
        "code id_token",
        "token id_token",
        "code token id_token",
        "none"
      ],
      "revocation_endpoint" => "http://localhost:4004/o/oauth2/revoke",
      "scopes_supported" => ["openid", "email", "profile"],
      "subject_types_supported" => ["public"],
      "token_endpoint" => "http://localhost:4004/oauth2/v4/token",
      "token_endpoint_auth_methods_supported" => ["client_secret_post", "client_secret_basic"],
      "userinfo_endpoint" => "http://localhost:4004/oauth2/v3/userinfo"
    })
  end

  get "/oauth2/v3/certs" do
    success(conn, %{
      "keys" => [
        %{
          "alg" => "RS256",
          "e" => "AQAB",
          "kid" => "dad44739576485ec30d228842e73ace0bc367bc4",
          "kty" => "RSA",
          "n" =>
            "0_8faqWY4x8LCariP6tIbqt2atUM2nSKAuTb57NYZYOGeUYo4uaEhJjF6sJ2djOSdpj-a70zEamhlHGyCsgzNroQX70oaL05zL1wV0Q9TPHa1qRobVDSBglhmJLHfER9L0mk9jokXJhWpL7NFU7qyKCD7gwe84NR4C7emXtfQGzFS4VcKqxNO17uwmRKzx_ZMy4St999KEDBPCtuq8XGvjMYZE2Rfk6-LWcmAtJ7COOS1yfEfAgbvCAbDKnIZqojPusn_5jRUOotJd2T3GgnSMEFn1G1DGK7hNHLBKqzimeEMTQpnhYXbPwqTbAAll3rtKV4PCM585QTsV0U3U5VaQ",
          "use" => "sig"
        },
        %{
          "alg" => "RS256",
          "e" => "AQAB",
          "kid" => "4ef5118b0800bd60a4194186dcb538fc66e5eb34",
          "kty" => "RSA",
          "n" =>
            "4ZSPB8TO7y3xZF_GxB_JSx_yBEtNs0mDilLvesSLLypYmxt4U7Dxk-vLAf1IVRwaZeeqQRIhrKJjljIqd33tVwfAp5PinjUm7lHi-ufZ_VNQw3uJA5_3tmkMWaLcvdRcILFMlVfBcESp-R5mcF6-bMeYH0n3D5CCJKspIqDERD1gQxfVxWDzafyrqkIROXKEtv3rMe7Z9Yc4mBsL02G6dDKVbjSxvkZ14wMykXEnGkfIiTUSiH8Qm1rdniZigPv2Pa2uSnJ94V-tIDHigjkXR7Cfun4Z38KZdSDRNgJr-m41Pu-plX98j59iGvVyaKP24ZbukGIJRPHYn06xkQeoWw",
          "use" => "sig"
        }
      ]
    })
  end

  get "/o/oauth2/v2/:dataset" do
    at =
      case dataset do
        "actris_ref" -> "access_token=c72f9c07c32759011128b84001acb35d&member_key=77c4b2f3ec218c88bd7e41617ef63489"
        "test" -> "access_token=6baca547742c6f96a6ff71b138424f21&member_key=M_5dba1fa4a2a50c5b81f082d9"
        _ -> "oops"
      end

    nm = String.split(dataset, "_") |> hd() |> String.upcase()
    qs = "code=5465c65&mls_name=#{nm}&dataset_id=#{dataset}&#{at}&refresh_token=3o0iipzrpiknijyxtjrugkt29&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazci&expires_in=3600"

    conn
    |> Plug.Conn.put_resp_header("location", "#{conn.params["redirect_uri"]}?#{qs}&excyte_user_id=#{conn.params["excyte_user_id"]}&return_to=#{conn.params["return_to"]}")
    |> Plug.Conn.send_resp(conn.status || 302, "hey")
  end

  match _ do
    success(conn, %{"body" => %{"message" => "MATCH"}})
  end

  defp success(conn, body) do
    conn
    |> Plug.Conn.send_resp(200, Jason.encode!(body))
  end

  defp failure(conn, body) do
    conn
    |> Plug.Conn.send_resp(422, Jason.encode!(body))
  end

  defp handle_errors(conn, %{kind: kind, reason: reason, stack: _stack}) do
    send_resp(
      conn,
      conn.status,
      "Something went wrong \nKIND: #{kind} --- \nREASON: #{reason} ---"
    )
  end
end
