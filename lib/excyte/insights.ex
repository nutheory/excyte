defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.{Properties, Repo}
  alias Excyte.Insights.{Insight, Document, Template, SavedSearch}

  def create_insight(attrs) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :create_insight, [attrs])
    |> Multi.run(:create_subject, __MODULE__, :create_subject, [attrs])
    |> Multi.run(:search, __MODULE__, :create_saved_search, [attrs])
    |> Repo.transaction()
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

  def create_subject(_repo, %{insight: ins}, %{subject: sub}) do
    Properties.create_property(Map.merge(sub, %{insight_id: ins.id}))
  end

  def update_insight(uuid, uid, attrs) do
    ins = Repo.get_by(Insight, %{created_by_id: uid, uuid: uuid})
    if ins do
      Insight.changeset(ins, attrs)
      |> Repo.update()
    else
      {:error, %{message: "Insight could not be found."}}
    end
  end

  def update_saved_search(ins_id, filter_criteria) do
    ss = Repo.get(SavedSearch, ins_id)
    if ss do
      SavedSearch.changeset(ss, %{criteria: filter_criteria})
      |> Repo.update()
    else
      {:error, %{message: "Search could not be found."}}
    end
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload([:subject, :saved_search])
  end

  def get_review_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:subject)
  end

  def get_insight(uuid, uid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: uuid}) |> Repo.preload([:subject, :documents])
  end

  def create_template(attrs) do
    %Template{}
    |> Template.changeset(attrs)
    |> Repo.insert()
  end

  def create_document(attrs) do
    %Document{}
    |> Document.changeset(attrs)
    |> Repo.insert()
  end

  def update_insight(uid, iid, attrs) do
    insight = Repo.get_by(Insight, %{created_by_id: uid, uuid: iid})
    Insight.changeset(insight, attrs)
    |> Repo.update()
  end

  def get_document(id) do
    Repo.get(Document, id)
  end

  defp maybe_filter_by_tgl(query, schema, tgl) do
    if tgl != "", do: where(query, [schema], like(schema.tgl, ^tgl)), else: query
  end
end
