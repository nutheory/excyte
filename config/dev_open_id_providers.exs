use Mix.Config

config :excyte,
       :mls_auth_options, [
         %{val: "actris_ref", name: "ACTRIS"},
         %{val: "miamire", name: "MIAMIRE"},
         %{val: "test", name: "Test"}
        ]

config :excyte,
       :openid_connect_providers,
       actris_ref: [
        discovery_document_uri: "http://localhost:4004/actris_ref/.well-known/openid-configuration",
        client_id: "184991032516-u7rfoihpggj3q1rs1a6df1onjoq2o1i7.apps.googleusercontent.com",
        client_secret: "JKvXPvqulBY4fZGokDaCnuID",
        redirect_uri: "http://localhost:4000/confirm_mls/crmls",
        response_type: "code",
        scope: "openid"
      ],
      test: [
        discovery_document_uri: "http://localhost:4004/test/.well-known/openid-configuration",
        client_id: "JufbUZM7YgSPn2fGSbHn",
        client_secret: "01EOMai00EPYiwO6HK0ZAPEIzlBV3ULVoVS4hr7O",
        redirect_uri: "http://localhost:4000/confirm_mls/crmls",
        response_type: "code",
        scope: "openid"
      ]
