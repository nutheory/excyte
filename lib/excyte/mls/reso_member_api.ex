defmodule Excyte.Mls.ResoMemberApi do
  use Tesla, only: [:get], docs: false
  alias Excyte.Mls.{ProcessReso}

  plug Tesla.Middleware.BaseUrl, "https://api.bridgedataoutput.com/api/v2/OData"
  # plug Tesla.Middleware.Headers,
  #   [{"authorization", "Bearer #{Application.get_env(:excyte, :bridge_server_key)}"}]
  plug Tesla.Middleware.JSON
  plug Tesla.Middleware.Logger

  def getMembersByName(mls, name) do
    name_arr = String.split(name, " ")
    if length(name_arr) > 1 do
      get("#{mls.dataset_id}/Member?access_token=#{mls.access_token}&$expand=Office&$filter="
      <> "endswith(tolower(MemberLastName),%27#{hd(tl(name_arr))}%27)%20and%20startswith(tolower(MemberFirstName),%27#{hd(name_arr)}%27)")
      |> format_response()
      |> case do
        {:ok, %{agents: agents}} -> {:ok, agents}
        {:error, err} -> {:error, err}
      end
    else
      {:ok, []}
    end
  end

  def getMemberByLoginId(mls, id) do
    get("#{mls.dataset_id}/Member?access_token=#{mls.access_token}&$expand=Office&$filter="
    <> "MemberLoginId%20eq%20%27#{id}%27")
    |> format_response()
    |> case do
      {:ok, %{agents: agents}} -> {:ok, (if length(agents) > 0, do: hd(agents), else: nil)}
      {:error, _err} -> {:ok, nil}
    end
  end

  def getMemberListings(mls) do
    if mls.member_key do
      get("#{mls.dataset_id}/Member?access_token=#{mls.access_token}&$expand=Listings&$top=9&"
      <> "$orderby=ModificationTimestamp%20desc&$filter=MemberKey%20eq%20%27#{mls.member_key}%27")
      |> case do
        {:ok, %Tesla.Env{:body => %{"value" => agents}}} ->
          agent = hd(agents)
          ProcessReso.simple_process({:ok, %{listings: agent["Listings"]}})
        {:error, _err} -> {:ok, %{listings: []}}
      end
    else
      {:ok, %{listings: []}}
    end
  end

  def getMemberDetails(mls) do
    get("#{mls.dataset_id}/Member(%27#{mls.member_key}%27)?access_token=#{mls.access_token}")
    |> case do
      {:ok, %Tesla.Env{:body => md}} ->
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
    {:ok, %{
      context: body["@odata.context"],
      count: body["@odata.count"],
      next_link: body["@odata.nextLink"],
      agents: body["value"]
    }}
  end

  defp format_response({:error, error}) do
    {:error, error}
  end
end
