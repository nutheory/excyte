import Config

config :excyte, :mls_auth_options, [
  %{value: "tmls", text: "Triangle MLS (TMLS)", type: "bridge"},
  %{value: "none", text: "No MLS", type: "none"}
]

config :excyte,
       :openid_connect_providers,
       google: [
         discovery_document_uri: "https://accounts.google.com/.well-known/openid-configuration",
         client_id: "184991032516-u7rfoihpggj3q1rs1a6df1onjoq2o1i7.apps.googleusercontent.com",
         client_secret: "JKvXPvqulBY4fZGokDaCnuID",
         redirect_uri: "https://example.com/session",
         response_type: "code",
         scope: "openid email profile"
       ],
       google_too: [
         name: "The Googs Duece",
         discovery_document_uri: "https://accounts.google.com/.well-known/openid-configuration",
         client_id: "CLIENT_ID",
         client_secret: "CLIENT_SECRET",
         redirect_uri: "https://example.com/session",
         response_type: "code",
         scope: "openid email profile"
       ]
