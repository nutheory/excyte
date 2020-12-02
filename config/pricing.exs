use Mix.Config

config :excyte,
       :pricing_items, [
          %{
            amount: 2000,
            interval: "month",
            name: "Standard",
            friendly_name: "standard",
            description: "This is a standard description",
            plan_id: "price_1HiUlkJYg86TDWnAQqN5j0Ac",
            prod_id: "prod_IJ6zgwW0tC6HMw"
          },
          %{
            amount: 3000,
            interval: "month",
            name: "Premium",
            friendly_name: "premium",
            description: "This is a premium description",
            plan_id: "price_1HiUm7JYg86TDWnATXPkLgB7",
            prod_id: "prod_IJ6zgwW0tC6HMw"
          }
        ]
