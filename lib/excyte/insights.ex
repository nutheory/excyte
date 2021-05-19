defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  import Excyte.Utils.Methods
  alias Ecto.Multi
  alias Excyte.{
    Activities,
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

  def get_document_templates(usr) do
    DocumentTemplate
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

  def get_full_insight(uid, insid) do
    ins = Repo.get_by(Insight, %{created_by_id: uid, id: insid})
          |> Repo.preload([:property, document_template: :section_templates])
    agent = Agents.get_agent_profile!(ins.created_by_id)
    %{brokerage: brp, sections: sections} = maybe_brokerage(%{
      brokerage_id: ins.brokerage_id,
      sections: ins.document_template.section_templates
    })
      IO.inspect(ins, label: "INS")
    {:ok, %{"insight" => ins, "agent_profile" => agent, "brokerage" => brp, "sections" => sections, "subject" => ins.property}}
  end

  def build_from_templates(uid, insid) do
    # get all section templates
    # build html skeleton by applying

    r =
      case get_full_insight(uid, insid) do
        {:ok, res} -> res
        {:error, err} -> Activities.handle_errors(err, "Insights.get_full_insight")
      end

    comp_template = Enum.find(r["sections"], fn s -> s.component_name === "comparable" end)
    comps =
      Enum.with_index(r["insight"].content.comps, comp_template.position)
      |> Enum.map(fn {comp_data, i} ->
        str_data = Jason.encode!(comp_data)
        Map.from_struct(comp_template)
        |> Map.merge(%{html_content: "<section data-component-name=\"#{comp_template.component_name}\" data-listing-json=\"#{str_data}\"></section>", position: i})
      end)

    pages =
      Enum.filter(r["sections"], fn sec -> sec.component_name !== "comparable" end)
      |> Enum.map(fn st ->
        str =
          Enum.reduce(st.component_data_types, "", fn dt, str_acc ->
            str_data = Jason.encode!(r[dt])
            "#{str_acc} data-#{dt}-json=\"#{str_data}\""
          end)

        Map.from_struct(st)
        |> Map.merge(%{html_content: "<section data-component-name=\"#{st.component_name}\"#{str}></section>"})
      end)
      |> Enum.concat(comps)
      |> Enum.sort(fn a, b -> a.position <= b.position end)

    {:ok, %{sections: pages}}
  end


  defp maybe_brokerage(%{brokerage_id: bid, sections: st}) do
    if bid do
      %{brokerage: Brokerages.get_brokerage_profile(bid), sections: st}
    else
      %{brokerage: nil, sections: Enum.filter(st, fn s -> s.component_name !== "brokerage_profile" end)}
    end
  end

end


    # {:ok, %{sections: pages, data: %{ "agent" => r.agent_profile, "brokerage" => r.brokerage, "subject" => r.insight.property, "listings" => r.insight.content.comps}}}

    # comp_template = Enum.find(r.sections, fn s -> s.section_type === "comp" end)
    # comps = Enum.map(r.insight.content.comps, fn comp ->
    #   IO.inspect(Jason.encode!(comp["media"]), label: "STR")
    #   data = Map.merge(comp, %{"media" => Jason.encode!(comp.media)})
    #   IO.inspect(data, label: "COM")
    #   transpile_template(comp_template, data)
    # end)

    # pages =
    #   Enum.filter(r.sections, fn sec -> sec.section_type !== "comp" end)
    #   |> Enum.map(fn st ->
    #     cond do
    #       # st.section_type === "cover" -> transpile_template(st, %{"agent" => r.agent_profile, "brokerage" => r.brokerage, "subject" => r.insight.property})
    #       # st.section_type === "brokerage_profile" -> transpile_template(st, %{"brokerage" => r.brokerage})
    #       # st.section_type === "agent_profile" -> transpile_template(st, %{"agent" => r.agent_profile})
    #       # st.section_type === "subject" -> transpile_template(st, %{"subject" => r.insight.property})
    #       # st.section_type === "synopsis" -> transpile_template(st, %{"listings" => r.insight.content.comps, "subject" => r.insight.property})
    #       true -> transpile_template(st, %{
    #         "agent" => r.agent_profile,
    #         "brokerage" => r.brokerage,
    #         "subject" => r.insight.property,
    #         "listings" => r.insight.content.comps})
    #     end
    #   end)
    #   |> Enum.concat(comps)
    #   |> Enum.sort(fn a, b -> a.position <= b.position end)

    # defp transpile_template(section_template, data) do
    #   if section_template.html_content === nil do
    #     Map.merge(section_template, %{html_content: ""})
    #   else
    #     {:ok, template} = Solid.parse(section_template.html_content)
    #     Map.merge(section_template, %{html_content: to_string(Solid.render(template, data))})
    #   end
    # end
