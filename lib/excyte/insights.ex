defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.{
    Agents,
    Brokerages,
    Properties,
    Repo
  }
  alias Excyte.Insights.{
    Insight,
    DocumentTemplate,
    Section,
    SectionTemplate
  }

  def publish_insight(%{sections: sections, insight: insight}) do
    Multi.new()
    |> Multi.run(:update_insight, __MODULE__, :update_insight, [insight])
    |> Multi.run(:create_sections, __MODULE__, :create_sections, [sections])
    |> Repo.transaction()
  end

    def republish_insight(%{sections: sections, insight: insight}) do
    Multi.new()
    |> Multi.run(:update_insight, __MODULE__, :update_insight, [insight])
    |> Multi.run(:destroy_current_sections, __MODULE__, :destroy_sections, [])
    |> Multi.run(:create_sections, __MODULE__, :create_sections, [sections])
    |> Repo.transaction()
  end

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

  def update_insight(_repo, _changes, %{id: id} = insight) do
    ins = Repo.get!(Insight, id)
    if ins do
      Insight.changeset(ins, insight)
      |> Repo.update()
    else
      {:error, %{message: "Insight could not be found."}}
    end
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

  def create_sections(_repo, _changes, sections_arr) do
    sects=
      Enum.map(sections_arr, fn s ->
        create_section(s)
      end)
    {:ok, sects}
  end

  def create_section(attrs) do
    %Section{}
    |> Section.changeset(attrs)
    |> Repo.insert()
  end

  def destroy_sections(_repo, %{update_insight: ins} , _) do
    Repo.delete_all(from(s in Section, where: s.insight_id == ^ins.id))
  end

  def get_theme_attributes(aid, bid) do
    profile =
      if bid do
        bk = Brokerages.get_brokerage_profile(bid)
        if bk.theme_settings.brokerage_default do
          bk
        else
          Agents.get_agent_profile!(aid)
        end
      else
        Agents.get_agent_profile!(aid)
      end
    profile.theme_settings
  end

  def get_document_templates(usr, type) do
    DocumentTemplate
    |> DocumentTemplate.by_type(type)
    |> DocumentTemplate.by_creator(usr.id)
    |> DocumentTemplate.by_brokerage(usr.brokerage_id)
    |> DocumentTemplate.by_public()
    |> Repo.all()
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:property)
  end

  def get_review_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:property)
  end

  def get_minimal_insight(uuid, uid) do
    Insight.minimal_insight(uuid, uid) |> Repo.one()
  end

  def get_published_insight(uuid) do
    ins = Repo.get_by(Insight, %{uuid: uuid, published: true})
          |> Repo.preload([:sections])
    {:ok, ins}
  end

  def get_published_agent_insights(uid) do
    Insight.published_agent_insights(uid) |> Repo.all()
  end

  def get_full_insight(uid, insid) do
    ins = Repo.get_by(Insight, %{created_by_id: uid, id: insid})
          |> Repo.preload([:property, document_template: :section_templates])
    agent = Agents.get_agent_profile!(ins.created_by_id)
    %{brokerage: brp, sections: sections} = maybe_brokerage(%{
      brokerage_id: ins.brokerage_id,
      sections: ins.document_template.section_templates
    })
    {:ok, %{"insight" => ins, "agent_profile" => agent, "brokerage" => brp, "sections" => sections, "subject" => ins.property}}
  end

  def build_from_templates(uid, insid) do
    r = case get_full_insight(uid, insid) do
        {:ok, res} -> res
        # {:error, err} -> Activities.handle_errors(err, "Insights.get_full_insight")
      end

    comp_template = Enum.find(r["sections"], fn s -> s.component_name === "comparable" end)
    comps = Enum.with_index(r["insight"].content.comps, comp_template.position)
      |> Enum.map(fn {comp_data, i} ->
        Map.from_struct(comp_template) |> Map.merge(%{data: comp_data, position: i})
      end)

    pages = Enum.filter(r["sections"], fn sec -> sec.component_name !== "comparable" end)
      |> Enum.map(fn st ->
        Map.from_struct(st)
      end)
      |> Enum.concat(comps)
      |> Enum.sort(fn a, b -> a.position <= b.position end)
      |> Enum.with_index()
      |> Enum.map(fn {st, i} -> Map.merge(st, %{temp_id: i, enabled: true}) end)
    {:ok, %{
      sections: pages,
      data: %{
        insight: sanitize_data(Map.delete(r["insight"], :saved_search)),
        agent_profile: sanitize_data(r["agent_profile"]),
        brokerage: sanitize_data(r["brokerage"]),
        subject: sanitize_data(r["subject"])
      }
    }}
  end

  defp sanitize_data(struct) do
    Enum.reduce(Map.from_struct(struct), %{}, fn
      ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
      ({:__meta__, _}, acc) -> acc
      ({k, v}, acc) -> Map.put(acc, k, v)
    end)
    |> Excyte.Utils.Methods.stringify_keys()
  end

  defp maybe_brokerage(%{brokerage_id: bid, sections: st}) do
    if bid do
      %{brokerage: Brokerages.get_brokerage_profile(bid), sections: st}
    else
      %{brokerage: nil, sections: Enum.filter(st, fn s -> s.component_name !== "brokerage_profile" end)}
    end
  end

end
