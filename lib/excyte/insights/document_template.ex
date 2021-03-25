defmodule Excyte.Insights.DocumentTemplate do
  use Ecto.Schema
  import Ecto.Changeset
  alias Excyte.{
    Accounts.User,
    Brokerages.Brokerage,
    Insights.Document,
    Insights.Template
  }

  schema "document_templates" do
    belongs_to(:templates, Template)
    belongs_to(:documents, Document)
    belongs_to(:brokerage, Brokerage)
    belongs_to(:created_by, User)
    timestamps()
  end


end
