defmodule Excyte.ApiServices do

  def pexel_image_search(search_term, per_page, offset) do
    response =
      HTTPoison.get(
        "https://api.pexels.com/v1/search?query=#{URI.encode(search_term)}&per_page=#{per_page}&page=#{
          offset
        }",
        Authorization: System.get_env("PEXEL")
      )
      |> ResponseFormatter.format_response()

    {:ok, response}
  end

  def pexel_image_next(next_url) do
    response =
      HTTPoison.get(next_url, Authorization: System.get_env("PEXEL"))
      |> ResponseFormatter.format_response()

    {:ok, response}
  end

end
