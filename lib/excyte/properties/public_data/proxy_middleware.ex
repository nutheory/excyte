defmodule Excyte.ProxyMiddleware do
  @impl Crawly.Pipeline
  def run(request, state, opts \\ []) do
    # Set default proxy and proxy_auth to nil
    opts = Enum.into(opts, %{proxy: nil, proxy_auth: nil})

    p = Enum.random(Application.get_env(:excyte, :proxies))

    case opts.proxy do
      nil ->
        # do nothing
        {request, state}
      value ->
        old_options = request.options
        new_options = [proxy: {p.ip, p.port}, proxy_auth: nil]
        new_request =  Map.put(request, :options, old_options ++ new_options)
        IO.inspect(new_request, label: "NR")
        {new_request, state}
    end
  end
end
