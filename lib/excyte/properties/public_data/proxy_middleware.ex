defmodule Excyte.ProxyMiddleware do
  @impl Crawly.Pipeline
  def run(request, state, opts \\ []) do
    # Set default proxy and proxy_auth to nil
    p = Enum.random(Application.get_env(:excyte, :proxies))
    opts = Enum.into(opts, %{proxy: {p.ip, p.port}, proxy_auth: nil})

    case opts.proxy do
      nil ->
        # do nothing
        {request, state}
      value ->
        old_options = request.options
        new_options = [proxy: opts.proxy, proxy_auth: nil]
        new_request =  Map.put(request, :options, old_options ++ new_options)
        {new_request, state}
    end
  end
end
