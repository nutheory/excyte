use Mix.Config

config :excyte,
       :proxies, [
          %{
            ip: "159.203.70.121",
            port: 3128,
            protocol: "HTTPS"
          },
          %{
            ip: "157.230.6.23",
            port: 8080,
            protocol: "HTTPS"
          },
          %{
            ip: "50.116.45.250",
            port: 3128,
            protocol: "HTTPS"
          },
          # %{
          #   ip: "12.186.206.85",
          #   port: 80,
          #   protocol: "HTTP"
          # },
          # %{
          #   ip: "136.233.215.136",
          #   port: 80,
          #   protocol: "HTTP"
          # },
          # %{
          #   ip: "136.233.215.139",
          #   port: 80,
          #   protocol: "HTTP"
          # },
          # %{
          #   ip: "136.233.215.137",
          #   port: 80,
          #   protocol: "HTTP"
          # }
          %{
            ip: "157.230.208.88",
            port: 8080,
            protocol: "HTTPS"
          }
        ]
