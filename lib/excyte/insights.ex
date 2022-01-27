defmodule Excyte.Insights do
  import Ecto.Query, warn: false
  alias Ecto.Multi
  alias Excyte.{
    Agents,
    Activities,
    Brokerages,
    Properties,
    Repo
  }
  alias Excyte.Insights.{
    Insight,
    Section,
    DocumentTemplate,
    SectionTemplate
  }

  def create_insight(%{subject: _} = attrs) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :create_insight, [attrs])
    |> Multi.run(:create_subject, __MODULE__, :create_subject, [attrs])
    |> Repo.transaction()
  end

  def create_insight(attrs) do
    %Insight{}
    |> Insight.changeset(attrs)
    |> Repo.insert()
  end

  def create_insight(_repo, _changes, %{insight: ins}) do
    %Insight{}
    |> Insight.changeset(ins)
    |> Repo.insert()
  end

  def create_subject(_repo, %{insight: ins}, %{subject: sub}) do
    Properties.create_property(Map.merge(sub, %{"insight_id" => ins.id}))
  end

  def auto_create_cma(attrs) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :create_insight, [attrs])
    |> Multi.run(:subject, __MODULE__, :create_subject, [attrs])
    |> Multi.run(:listings, __MODULE__, :fetch_auto_comparables, [attrs])
    |> Multi.run(:complete, __MODULE__, :merge_insight_comparables, [attrs])
    |> Repo.transaction()
  end

  def fetch_auto_comparables(_repo, %{subject: subj}, %{search_opts: opts}) do
    Properties.comparable_properties(subj, opts)
  end

  def merge_insight_comparables(_repo, %{insight: ins, listings: lsts} = chng, _attrs) do
    IO.inspect(hd(lsts), label: "LSTS")
    Insight.changeset(ins, %{content: %{
      suggested_subject_price: chng.subject.est_price,
      avg_dom: Properties.calculate_averages(Enum.filter(Enum.map(lsts, fn lst -> lst["dom"] end), fn lst -> lst >= 0 end)),
      avg_list: Properties.calculate_averages(Enum.map(lsts, fn lst -> lst["list_price"] end)),
      avg_close: Properties.calculate_averages(Enum.map(lsts, fn lst -> lst["close_price"] end)),
      listings: lsts
    }}) |> Repo.update()
  end

  def update_insight(_repo, %{new_contact: contact}, %{id: id}) do
    ins = Repo.get!(Insight, id)
    if ins do
      Insight.changeset(ins, %{contact_id: contact.id})
      |> Repo.update()
    else
      {:error, %{message: "Insight could not be found."}}
    end
  end

  def update_insight(_repo, _, %{created_by_id: uid, id: id} = attrs) do
    ins = Repo.get_by(Insight, %{created_by_id: uid, id: id})
    if ins do
      Insight.changeset(ins, attrs)
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

  def publish_insight(%{insight: ins, sections: secs}) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :update_insight, [ins])
    |> Multi.run(:create_sections, __MODULE__, :create_sections, [secs])
    |> Repo.transaction()
  end

  def create_sections(_repo, %{insight: ins}, section_attrs) do
    Enum.with_index(section_attrs)
    |> Enum.reduce(Multi.new(), fn {attrs, idx}, multi ->
      section_changeset =
        %Section{}
        |> Section.changeset(Map.merge(attrs, %{insight_id: ins.id}))

      Multi.insert(multi, {:section, idx}, section_changeset)
    end)
    |> Repo.transaction()
  end

  # def create_section(attrs) do
  #   %Section{}
  #   |> Section.changeset(attrs)
  #   |> Repo.insert()
  # end

  # def destroy_sections(_repo, %{update_insight: ins} , _) do
  #   Repo.delete_all(from(s in Section, where: s.insight_id == ^ins.id))
  # end

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

  def get_document_templates(usr, %{type: type, auto: auto}) do
    DocumentTemplate
    |> DocumentTemplate.by_type(type)
    |> DocumentTemplate.by_auto(auto)
    |> DocumentTemplate.by_public()
    |> DocumentTemplate.by_creator(usr.id)
    |> DocumentTemplate.by_brokerage(usr.brokerage_id)
    |> Repo.all()
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:property)
  end
  def get_initial_insight(_repo, _changes, %{usr_id: uid, insight_id: insid}) do
    case Repo.get_by(Insight, %{created_by_id: uid, id: insid})
    |> Repo.preload([:property, document_template: :section_templates]) do
      %Insight{} = ins -> {:ok, ins}
      nil -> {:error, %{message: "Insight could not be found."}}
    end
  end

  def get_minimal_insight(uuid, uid) do
    Insight.minimal_insight(uuid, uid) |> Repo.one()
  end

  def get_published_insight(uuid) do
    Multi.new()
    |> Multi.run(:insight, fn _repo, _changes ->
      case Repo.get_by(Insight, %{uuid: uuid, published: true})
      |> Repo.preload([:property, :sections]) do
        %Insight{} = ins -> {:ok, ins}
        nil -> {:error, %{message: "No report found."}}
      end
    end)
    |> Multi.run(:agent_profile, Agents, :get_agent_profile, [])
    |> Multi.run(:brokerage, Brokerages, :get_brokerage_profile, [])
    |> Repo.transaction()
  end

  def get_published_agent_insights(uid, type) do
    Insight.published_agent_insights(uid, type) |> Repo.all()
  end

  def get_full_insight(%{usr_id: uid, insight_id: insid}) do
    Multi.new()
    |> Multi.run(:insight, __MODULE__, :get_initial_insight, [%{usr_id: uid, insight_id: insid}])
    |> Multi.run(:get_agent_info, Agents, :get_agent_profile, [])
    |> Multi.run(:setup_possible_brokerage, __MODULE__, :maybe_brokerage, [])
    |> Repo.transaction()
    |> case do
      {:ok, %{insight: gpi, get_agent_info: gai, setup_possible_brokerage: spb}} ->
        {:ok, %{insight: gpi, agent_profile: gai, brokerage: spb.brokerage, sections: spb.sections}}
      {:error, err} -> Activities.handle_errors(err, "Insights.get_full_insight")
    end
  end

  def build_sections(%{usr_id: uid, insight_id: insid}) do
    case get_full_insight(%{usr_id: uid, insight_id: insid}) do
      {:ok, %{insight: ins, agent_profile: ap, brokerage: bp}} ->
        {:ok, %{
          insight: Map.delete(ins, :saved_search),
          agent_profile: ap,
          brokerage: bp
        }}
      {:error, err} -> {:error, %{error: err, message: "Oops something went wrong in the build."}}
    end
  end

  def delete_insight(query_params) do
    ins = Repo.get_by(Insight, query_params)
    if ins do
      Repo.delete(ins)
    end
  end

  def maybe_brokerage(_repo, %{insight: insight}) do
    if insight.brokerage_id do
      {:ok, %{
        brokerage: Brokerages.get_brokerage_profile(insight.brokerage_id),
        sections: insight.document_template.section_templates
      }}
    else
      {:ok, %{
        brokerage: nil,
        sections: Enum.filter(insight.document_template.section_templates, fn s -> s.component_name !== "brokerage_profile" end)
      }}
    end
  end

end
