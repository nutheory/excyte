defmodule Excyte.Insights.Template do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.Document,
    Utils.MapType
  }

  @timestamps_opts [type: :utc_datetime]

  schema "templates" do
    field :name, :string
    field :description, :string
    field :content, MapType
    field :default, :boolean
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    many_to_many(:documents, Document, join_through: "document_templates")
    timestamps()
  end

  def changeset(template, attrs) do
    template
    |> cast(attrs, [
      :name,
      :description,
      :content,
      :default,
      :brokerage_id,
      :created_by_id
    ])
  end


  def default_cma() do
    %{
      name: "Excyte default",
      id: "default",
      system: true,
      sections: [
        %{

          position: 1,
          enabled: true,
          func: :intro,
          title: "Intro"
        }, %{
          position: 2,
          enabled: true,
          func: :agent_profile,
          title: "Agent Profile"
        }, %{
          position: 3,
          enabled: true,
          func: :subject_property,
          title: "Subject Property"
        }, %{
          position: 4,
          enabled: true,
          func: :comparables,
          title: "Comparables"
        }, %{
          position: 5,
          enabled: true,
          func: :market_trends,
          title: "Market Trends"
        }
      ]
    }
  end

  def intro(intro) do
    "BOOM"
  end

  def subject_property(subject) do
    # Add Previous sale/listing info (sold and unsold)
    "HEY"
  end

  def comparables(listings) do
    ["this", "is", "a", "test"]
  end

  def agent_profile(profile) do
    "gdhgdjhgdjdjdj"
  end

  def market_trends(whatevs) do
    "gfghkhgfkfk"
  end

end
