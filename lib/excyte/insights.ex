defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.{Properties, Repo}
  alias Excyte.Insights.{
    Insight,
    Document,
    DocumentTemplate,
    Section,
    SectionTemplate
  }

  def create_insight(attrs) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :create_insight, [attrs])
    |> Multi.run(:create_subject, __MODULE__, :create_subject, [attrs])
    |> Repo.transaction()
  end

  def create_insight(_repo, _changes, %{insight: ins}) do
    %Insight{}
    |> Insight.changeset(ins)
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

  def get_document_templates(usr) do
    DocumentTemplate
    |> DocumentTemplate.by_creator(usr.id)
    |> DocumentTemplate.by_brokerage(usr.brokerage_id)
    |> DocumentTemplate.by_public()
    |> Repo.all()
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload([:subject])
  end

  def get_review_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:subject)
  end

  def get_insight(uuid, uid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: uuid}) |> Repo.preload([:subject])
  end

  def create_document_template(attrs) do
    %DocumentTemplate{}
    |> DocumentTemplate.changeset(attrs)
    |> Repo.insert()
  end

  def create_section_template(attrs) do
    %SectionTemplate{}
    |> SectionTemplate.changeset(attrs)
    |> Repo.insert()
  end

  def create_section(attrs) do
    %Section{}
    |> Section.changeset(attrs)
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
