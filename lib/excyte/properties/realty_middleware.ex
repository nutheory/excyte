defmodule Excyte.RealtyMiddleware do
  @behaviour Tesla.Middleware

  def call(env, next, _) do
    case ExRated.check_rate("realty_ratelimiter", 1_000, 4) do
      {:ok, _} ->
        IO.inspect(ExRated.inspect_bucket("realty_ratelimiter", 1_000, 5), label: "ONE")
        Process.sleep(200)
        Tesla.run(env, next)
      {:error, _} ->
        IO.inspect(ExRated.inspect_bucket("realty_ratelimiter", 1_000, 5), label: "THREE")
        Process.sleep(1_000)
        Tesla.run(env, next)
    end
  end
end
