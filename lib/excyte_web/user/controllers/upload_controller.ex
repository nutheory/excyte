defmodule ExcyteWeb.UploadController do
  use ExcyteWeb, :controller

  def auth(conn, params) do
    aws = Application.get_env(:excyte, :aws)
    IO.inspect(params, label: "PARA")
    {:ok, dt} = Calendar.ISO.parse_naive_datetime(params["datetime"], :basic)
    date_stamp = Calendar.strftime(%{year: elem(dt, 0), month: elem(dt, 1), day: elem(dt, 2)}, "%Y%m%d")
    IO.inspect(date_stamp, label: "PARA")
    # Date.strptime(params[:datetime], "%Y%m%dT%H%M%SZ").strftime("%Y%m%d")
    secret_key = aws.secret_access_key
    IO.inspect(aws.region, label: "AWS")
    aws_region = aws.region

    # date_key = OpenSSL::HMAC.digest("sha256", "AWS4" + secret_key, date_stamp)
    # region_key = OpenSSL::HMAC.digest("sha256", date_key, aws_region)
    # service_key = OpenSSL::HMAC.digest("sha256", region_key, "s3")
    # signing_key = OpenSSL::HMAC.digest("sha256", service_key, "aws4_request")
    # render plain: OpenSSL::HMAC.hexdigest("sha256", signing_key, params[:to_sign]).gsub("\n", "")

    date_key = :crypto.mac(:hmac, :sha256, "AWS4#{secret_key}", date_stamp)
    region_key = :crypto.mac(:hmac, :sha256, date_key, aws_region)
    service_key = :crypto.mac(:hmac, :sha256, region_key, "s3")
    signing_key = :crypto.mac(:hmac, :sha256, service_key, "aws4_request")
    signature = :crypto.mac(:hmac, :sha256, signing_key, String.replace(params["to_sign"], "\n", ""))
    text(conn, Base.encode16(signature, case: :lower))
  end
end
