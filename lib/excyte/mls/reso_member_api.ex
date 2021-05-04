defmodule Excyte.Mls.ResoMemberApi do
  use Tesla, only: [:get], docs: false
  import SweetXml
  alias Excyte.Mls.{MetaCache}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  # plug Tesla.Middleware.Headers,
  #   [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_api_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  def getMemberDetails(mls) do
    get("#{mls.dataset_id}/Member(%27#{mls.member_key}%27)?access_token=#{mls.access_token}")
    |> format_response()
    |> case do
      {:ok, md} ->
        %{
          company_name: md["OfficeName"],
          job_title: md["JobTitle"],
          contacts: process_contacts(md),
          address: [%{
            address_one: md["MemberAddress1"],
            address_two: md["MemberAddress2"],
            zip: md["MemberPostalCode"],
            city: md["MemberCity"],
            state: md["MemberStateOrProvince"]
          }]
        }
      {:error, err} -> {:error, err}
    end
  end

  defp process_contacts(member) do
    fields = ["MemberMobilePhone", "MemberHomePhone", "MemberOfficePhone", "MemberTollFreePhone", "MemberTollFreePhone", "MemberVoiceMail"]
    Enum.reduce(fields, [], fn md, acc ->
      if member[md] !== nil do
        [%{ name: split_name_by_case(md), content: member[md] } | acc]
      else
        acc
      end
    end)

  end

  def split_name_by_case(str) do
    tl(String.split(str, "Member"))
    |> hd()
    |> String.split(~r/(?=[A-Z])/)
    |> tl()
    |> Enum.join(" ")
  end

  defp format_response({:ok, %Tesla.Env{:body => body}}) do
    {:ok, body}
  end

  defp format_response({:error, error}) do
    {:error, error}
  end
end
