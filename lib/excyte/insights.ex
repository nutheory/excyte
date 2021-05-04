defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  import Excyte.Utils.Methods
  alias Ecto.Multi
  alias Excyte.{
    Agents,
    Brokerages,
    Properties,
    Repo
  }
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

  def get_minimal_insight(uuid, uid) do
    Insight.minimal_insight(uuid, uid) |> Repo.one()
  end

  def build_from_templates(uid, insid) do
    ins = Repo.get_by(Insight, %{created_by_id: uid, id: insid})
          |> Repo.preload([:subject, document_template: :section_templates])
    agent = Agents.get_agent_profile!(ins.created_by_id) |> Map.from_struct() |> stringify_keys()
    %{brokerage: brp, sections: sections} = maybe_brokerage(%{
      brokerage_id: ins.brokerage_id,
      sections: ins.document_template.section_templates
    })
    comp_template = Enum.find(sections, fn s -> s.section_type === "comp" end)

    comps = Enum.map(ins.content.comps, fn comp ->
      {:ok, template} = Solid.parse(comp_template.html_content)
      transpile_template(comp_template, %{"listing" => stringify_keys(comp)})
    end)

    subject = stringify_keys(ins.subject)
    brokerage = stringify_keys(brp)
    listings = stringify_keys(ins.content.comps)

    pages =
      comps ++ sections
      |> Enum.map(fn st ->
        cond do
          st.section_type === "cover" -> transpile_template(st, %{"agent" => agent, "brokerage" => brokerage, "subject" => subject})
          st.section_type === "brokerage_profile" -> transpile_template(st, %{"brokerage" => brokerage})
          st.section_type === "agent_profile" -> transpile_template(st, %{"agent" => agent})
          st.section_type === "comp" -> st
          st.section_type === "subject" -> transpile_template(st, %{"subject" => subject})
          st.section_type === "synopsis" -> transpile_template(st, %{
            "listings" => listings,
            "subject" => subject
          })
          true -> transpile_template(st, %{
            "agent" => agent,
            "brokerage" => brokerage,
            "subject" => subject,
            "listings" => listings})
        end
      end)
      |> Enum.sort(fn a, b -> a.position <= b.position end)
     {:ok, pages}
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

  def get_document(id) do
    Repo.get(Document, id)
  end

  defp transpile_template(section_template, data) do
    if section_template.html_content === nil do
      Map.merge(section_template, %{html_content: ""})
    else
      {:ok, template} = Solid.parse(section_template.html_content)
      Map.merge(section_template, %{html_content: to_string(Solid.render(template, data))})
    end
  end

  defp maybe_brokerage(%{brokerage_id: bid, sections: st}) do
    if bid do
      %{brokerage: Brokerages.get_brokerage_profile(bid), sections: st}
    else
      %{brokerage: nil, sections: Enum.filter(st, fn s -> s.section_type !== "brokerage_profile" end)}
    end
  end
end
