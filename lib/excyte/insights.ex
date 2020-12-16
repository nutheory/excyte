defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Excyte.Repo
  alias Excyte.Insights.{Template, Section}

  def get_templates(agent_id, brokerage_id) do

    # Ecto.Query.from(r in Record, where: r.id in [9, 1, 4, 3])
    # |> Ecto.Query.order_by([r], fragment("array_position(?, ?)", [9, 1, 4, 3], r.id)
    # |> Repo.all()


    query =
      # if is_nil(brokerage_id) do
        from t in Template, where: t.created_by_id == ^agent_id
      # else
      #   from t in Template,
      #   where: t.created_by_id == ^agent_id,
      #   or_where: not is_nil(t.brokerage_id) == ^brokerage_id
      #   # Add select to only pull id and name
      # end

    Repo.all(query)
    # ++ [Template.default_cma()]
  end


  def create_document(attrs) do
    %Section{}
    |> Section.changeset(attrs)
    |> Repo.insert()
  end

  def get_section(id) do
    Repo.get(Section, id)
  end

  defp maybe_filter_by_tgl(query, schema, tgl) do
    if tgl != "", do: where(query, [schema], like(schema.tgl, ^tgl)), else: query
  end
end
