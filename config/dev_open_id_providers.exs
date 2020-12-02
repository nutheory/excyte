use Mix.Config

config :excyte,
       :mls_auth_options, [
         %{val: "actris_ref", name: "ACTRIS"}
        ]

config :excyte,
       :openid_connect_providers,
       actris_ref: [
        discovery_document_uri: "http://localhost:4004/.well-known/openid-configuration",
        client_id: "184991032516-u7rfoihpggj3q1rs1a6df1onjoq2o1i7.apps.googleusercontent.com",
        client_secret: "JKvXPvqulBY4fZGokDaCnuID",
        redirect_uri: "http://localhost:4000/confirm_mls/crmls",
        response_type: "code",
        scope: "openid"
      ]
