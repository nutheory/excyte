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
    DocumentTemplate,
    SectionTemplate
  }

  # def publish_insight(%{sections: sections, insight: insight}) do
  #   Multi.new()
  #   |> Multi.run(:update_insight, __MODULE__, :update_insight, [insight])
  #   |> Multi.run(:create_sections, __MODULE__, :create_sections, [sections])
  #   |> Repo.transaction()
  # end

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
    Properties.create_property(Map.merge(sub, %{insight_id: ins.id}))
  end

  def update_insight(_repo, %{new_client: client}, %{id: id}) do
    ins = Repo.get!(Insight, id)
    if ins do
      Insight.changeset(ins, %{client_id: client.id})
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

  # def create_sections(_repo, %{update_insight: %{created_by_id: uid}}, sections_arr) do
  #   sects=
  #     Enum.map(sections_arr, fn s ->
  #       create_section(Map.merge(s, %{created_by_id: uid}))
  #     end)
  #   {:ok, sects}
  # end

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

  def get_document_templates(usr, type) do
    DocumentTemplate
    |> DocumentTemplate.by_type(type)
    |> DocumentTemplate.by_public()
    |> DocumentTemplate.by_creator(usr.id)
    |> DocumentTemplate.by_brokerage(usr.brokerage_id)
    |> Repo.all()
  end

  def get_initial_insight(uid, iid) do
    Repo.get_by(Insight, %{created_by_id: uid, uuid: iid}) |> Repo.preload(:property)
  end

  def get_minimal_insight(uuid, uid) do
    Insight.minimal_insight(uuid, uid) |> Repo.one()
  end

  def get_published_insight(uuid) do
    ins = Repo.get_by(Insight, %{uuid: uuid, published: true})
          |> Repo.preload([:created_by])
    {:ok, ins}
  end

  def get_published_agent_insights(uid, type) do
    Insight.published_agent_insights(uid, type) |> Repo.all()
  end

  def get_full_insight(%{usr_id: uid, insight_id: insid}) do
    Multi.new()
    |> Multi.run(:get_publishing_info, __MODULE__, :get_publish_insight, [%{usr_id: uid, insight_id: insid}])
    |> Multi.run(:get_agent_info, Agents, :get_agent_profile, [])
    |> Multi.run(:setup_possible_brokerage, __MODULE__, :maybe_brokerage, [])
    |> Repo.transaction()
    |> case do
      {:ok, %{get_publishing_info: gpi, get_agent_info: gai, setup_possible_brokerage: spb}} ->
        {:ok, %{insight: gpi, agent_profile: gai, brokerage: spb.brokerage, sections: spb.sections}}
      {:error, err} -> Activities.handle_errors(err, "Insights.get_full_insight")
    end
  end

  def build_sections(%{usr_id: uid, insight_id: insid}) do
    case get_full_insight(%{usr_id: uid, insight_id: insid}) do
      {:ok, %{insight: ins, agent_profile: ap, brokerage: bp, sections: sections}} ->
        pages = Enum.map(sections, fn st ->
            section = Map.from_struct(st)
            if section.component_name === "comparable" || section.component_name === "tour_stop" do
              Map.merge(section, %{listings: ins.content.listings})
            else
              section
            end
          end)
          |> Enum.sort(fn a, b -> a.position <= b.position end)
          |> Enum.with_index()
          |> Enum.map(fn {st, i} -> Map.merge(st, %{temp_id: i, enabled: true}) end)
        {:ok, %{
          sections: pages,
          data: %{
            insight: sanitize_data(Map.delete(ins, :saved_search)),
            agent_profile: sanitize_data(ap),
            brokerage: sanitize_data(bp),
            subject: sanitize_data(ins.property)
          }
        }}
      {:error, err} -> {:error, %{error: err, message: "Oops something went wrong in the build."}}
    end
  end

  def get_publish_insight(_repo, _changes, %{usr_id: uid, insight_id: insid}) do
    case Repo.get_by(Insight, %{created_by_id: uid, id: insid})
    |> Repo.preload([:property, document_template: :section_templates]) do
      %Insight{} = ins -> {:ok, ins}
      nil -> {:error, %{message: "Insight could not be found."}}
    end
  end

  def maybe_brokerage(_repo, %{get_publishing_info: insight}) do
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

  defp sanitize_data(struct) do
    if is_struct(struct) do
      Enum.reduce(Map.from_struct(struct), %{}, fn
        ({_k, %Ecto.Association.NotLoaded{}}, acc) -> acc
        ({:__meta__, _}, acc) -> acc
        ({k, v}, acc) -> Map.put(acc, k, v)
      end)
      |> Excyte.Utils.Methods.stringify_keys()
    else
      struct
    end
  end
end
