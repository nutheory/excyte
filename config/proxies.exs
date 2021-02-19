use Mix.Config

config :excyte,
       :proxies, [
          %{
            ip: "82.99.243.35",
            port: 8080,
            protocol: "HTTPS"
          },
          %{
            ip: "37.120.140.242",
            port: 3128,
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
            ip: "37.120.239.151",
            port: 3128,
            protocol: "HTTPS"
          }
        ]
