defmodule Excyte.Mls.ResoOfficeApi do
  use Tesla, only: [:get], docs: false
  import SweetXml
  alias Excyte.Mls.{MetaCache}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  # plug Tesla.Middleware.Headers,
  #   [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_api_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  def getOfficeDetails(mls) do
    get("#{mls.dataset_id}/Office(%27#{mls.office_key}%27)?access_token=#{mls.access_token}")
    |> format_response()
    |> case do
      {:ok, md} ->
        %{
          contacts: process_contacts(md),
          address: [%{
            address_one: md["OfficeAddress1"],
            address_two: md["OfficeAddress2"],
            zip: md["OfficePostalCode"],
            city: md["OfficeCity"],
            state: md["OfficeStateOrProvince"]
          }]
        }
      {:error, err} -> {:error, err}
    end
  end

  defp process_contacts(member) do
    fields = ["OfficeEmail", "OfficeFax", "OfficePhone"]
    Enum.reduce(fields, [], fn md, acc ->
      if member[md] !== nil do
        [%{ name: split_name_by_case(md), content: member[md] } | acc]
      else
        acc
      end
    end)

  end

  def split_name_by_case(str) do
    tl(String.split(str, "Office"))
    |> hd()
    |> String.split(~r/(?=[A-Z])/)
    |> tl()
    |> Enum.join(" ")
  end

  defp format_response({:ok, %Tesla.Env{:body => body}}) do
    {:ok, body}
  end

  defp format_response({:error, error}) do
    IO.inspect(error, label: "ERR")
    {:error, error}
  end
end
