defmodule Excyte.BulkAgentInfo do
  use Tesla, only: [:get], docs: false
  # alias NimbleCSV.RFC4180, as: CSV

  plug Tesla.Middleware.BaseUrl, "https://realty-in-us.p.rapidapi.com/"
  plug Tesla.Middleware.FollowRedirects, max_redirects: 10
  plug Tesla.Middleware.Headers, [
    {"x-rapidapi-key", Application.get_env(:excyte, :realtor_rapid_api_key)},
    {"x-rapidapi-host", "realty-in-us.p.rapidapi.com"}
  ]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger
  plug Tesla.Middleware.Timeout, timeout: 30000

  @key System.os_time(:second)

  def agent_contact_info(mls) do
    {:ok, zips} = get_json("config/zip_codes.json")
    res =
      Enum.uniq(zips[mls])
      |> Enum.map(&process_zip_code([], &1, 0, 0, 1))
      |> List.flatten()
      |> Enum.uniq_by(fn %{email: em} -> em end)

    IO.inspect(length(res), label: "DONE")
    tocsv(res)
  end

  def process_zip_code(ags, zip, page, count, total) when count < total do
    get("/agents/list?postal_code=#{zip}&offset=#{page}&limit=20", opts: [adapter: [recv_timeout: 30_000]])
    # get("/agents/list", query: [postal_code: zip, offset: page, limit: 20])
    |> format_response()
    |> case do
      {:ok, %{agents: ag_list, count: c}} ->
        Enum.map(ag_list, &process_contact_info(&1))
        |> Enum.uniq_by(fn %{id: id} -> id end)
        |> Enum.concat(ags)
        |> cache()
        |> process_zip_code(zip, page + 1, count + length(ag_list), c)
      {:error, err} -> IO.inspect(err, label: "GET Failed")
    end
  end

  def process_zip_code(ags, _, _, _, _) do
    ags
  end

  def cache(curr_ag) do
    Cachex.put(:scrape_agent_cache, @key, curr_ag)
    curr_ag
  end

  defp process_contact_info(ag) do
    %{
      last_name: ag["last_name"],
      first_name: ag["first_name"],
      email: ag["email"],
      id: ag["id"],
      city: ag["address"]["city"],
      state: ag["address"]["state"],
      postal_code: ag["address"]["postal_code"],
      phone_number: (if ag["phones"] && is_list(ag["phones"]) && (length(ag["phones"]) > 0), do: phone(hd(ag["phones"])), else: nil)
    }
  end

  def phone(ph) do
    ph["number"] <> " (" <> ph["type"] <> ")"
  end

  defp get_json(filename) do
    with {:ok, body} <- File.read(filename),
         {:ok, json} <- Jason.decode(body), do: {:ok, json}
  end

  defp format_response({:ok, %Tesla.Env{:body => res} = rest}) do
    # IO.inspect(res, label: "OK RES ONE")
    # IO.inspect(rest, label: "OK RES HALF")
    if is_binary(res) || res === "" do
      url = String.trim_leading(rest.url, "https://realty-in-us.p.rapidapi.com")
      get(url, opts: [adapter: [recv_timeout: 30_000]])
      # get("/agents/list", query: [postal_code: zip, offset: page, limit: 20])
      |> format_response()
    else
      {:ok, %{
        agents: res["agents"],
        count: res["matching_rows"]
      }}
    end
  end

  defp format_response({:ok, %Tesla.Env{} = res}) do
    IO.inspect(res, label: "OK RES TWO")
  end

  defp format_response({:error, err}) do
    IO.inspect(err, label: "ERR")
    {:error, err}
  end

  def tocsv(map) do
    [["last_name", "first_name", "email", "phone_number", "postal_code", "city", "state_province_region"]]
    |> Stream.concat(map |> Stream.map(&[&1.first_name, &1.last_name, &1.email, &1.phone_number, &1.postal_code, &1.city, &1.state]))
    |> CSV.encode()
    |> Enum.into(File.stream!("contacts.csv"))
  end
end
