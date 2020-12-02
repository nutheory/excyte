defmodule Excyte.Repo do
  use Ecto.Repo,
    otp_app: :excyte,
    adapter: Ecto.Adapters.Postgres
end
