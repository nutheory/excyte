use Mix.Config

config :excyte,
       :proxies, [
          %{
            ip: "159.89.221.73",
            port: 3128,
            protocol: "HTTPS"
          },
          %{
            ip: "51.81.82.175",
            port: 80,
            protocol: "HTTPS"
          },
          # %{
          #   ip: "136.233.215.142",
          #   port: 80,
          #   protocol: "HTTP"
          # },
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
            ip: "208.80.28.208",
            port: 8080,
            protocol: "HTTPS"
          }
        ]
