defmodule ExcyteWeb.ClientView do
  use ExcyteWeb, {:view, [root: "lib/excyte_web/client/templates", path: ""]}

  alias ExcyteWeb.Client.{Viewer, Header}
end
