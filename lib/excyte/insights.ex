defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.{Properties, Repo}
  alias Excyte.Insights.{Insight, Document, Template, SavedSearch}

  def create_insight(attrs) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :create_insight, [attrs])
    |> Multi.run(:claim_subject, __MODULE__, :claim_subject, [attrs])
    |> Multi.run(:search, __MODULE__, :create_saved_search, [attrs])
    |> Repo.transaction()
    |> case do
      {:ok, %{insight: insight}} -> {:ok, insight}
      {:error, method, changeset, _} -> {:error, changeset}
    end
  end

  def create_insight(_repo, _changes, %{insight: ins}) do
    %Insight{}
    |> Insight.changeset(ins)
    |> Repo.insert()
  end

  def create_saved_search(_repo, changes, %{search: srch}) do
    %SavedSearch{}
    |> SavedSearch.changeset(Map.merge(srch, %{insight_id: changes.insight.id}))
    |> Repo.insert()
  end

  def claim_subject(_repo, %{insight: ins}, %{property: prop}) do
    Properties.update_property(prop.subject_id, prop.agent_id, %{insight_id: ins.id})
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload([:subject, :saved_search])
  end

  def get_review_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:subject)
  end



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

  def update_insight(uid, iid, attrs) do
    insight = Repo.get_by(Insight, %{created_by_id: uid, uuid: iid})
    Insight.changeset(insight, attrs)
    |> Repo.update()
  end

  def create_document(attrs) do
    %Document{}
    |> Document.changeset(attrs)
    |> Repo.insert()
  end

  def get_document(id) do
    Repo.get(Document, id)
  end

  defp maybe_filter_by_tgl(query, schema, tgl) do
    if tgl != "", do: where(query, [schema], like(schema.tgl, ^tgl)), else: query
  end
end
