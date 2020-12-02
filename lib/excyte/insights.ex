defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Excyte.Repo
  alias Excyte.Insights.{Template}

  def get_templates(agent_id, brokerage_id) do
    query =
      from t in "templates",
      where: t.created_by_id == ^agent_id,
      or_where: t.brokerage_id == ^brokerage_id

    case Repo.all(query) do
      [] -> Template.default_cma()
      [_ | _] = templates -> templates
    end
  end
end
