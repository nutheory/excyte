defmodule Excyte.Repo.Migrations.UserUpdates do
  use Ecto.Migration

  def change do
    alter table(:activities) do
      modify :account_id, references(:accounts, on_delete: :delete_all), from: references(:accounts)
      modify :agent_id, references(:users, on_delete: :nilify_all), from: references(:users)
      modify :brokerage_id, references(:brokerages, on_delete: :nilify_all), from: references(:brokerages)
      modify :insight_id, references(:insights, on_delete: :nilify_all), from: references(:insights)
      modify :client_id, references(:clients, on_delete: :nilify_all), from: references(:clients)
    end

    alter table(:profiles) do
      modify :agent_id, references(:users, on_delete: :delete_all), from: references(:users)
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
    end

    alter table(:brokerages) do
      modify :account_id, references(:accounts, on_delete: :delete_all), from: references(:accounts)
    end

    alter table(:users) do
      modify :account_id, references(:accounts, on_delete: :delete_all), from: references(:accounts)
    end

    alter table(:properties) do
      modify :agent_id, references(:users, on_delete: :nilify_all), from: references(:users)
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
    end

    alter table(:document_templates) do
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
      modify :created_by_id, references(:users, on_delete: :nilify_all), from: references(:users)
    end

    alter table(:clients) do
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
      modify :created_by_id, references(:users, on_delete: :nilify_all), from: references(:users)
      modify :assigned_to_id, references(:users, on_delete: :nilify_all), from: references(:users)
    end

    alter table(:insights) do
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
      modify :created_by_id, references(:users, on_delete: :delete_all), from: references(:users)
      modify :client_id, references(:clients, on_delete: :nilify_all), from: references(:clients)
      modify :document_template_id, references(:document_templates, on_delete: :nilify_all), from: references(:document_templates)
    end

    alter table(:section_templates) do
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
      modify :created_by_id, references(:users, on_delete: :nilify_all), from: references(:users)
      modify :document_template_id, references(:document_templates, on_delete: :nilify_all), from: references(:document_templates)
    end

    alter table(:conversations) do
      modify :brokerage_id, references(:brokerages, on_delete: :delete_all), from: references(:brokerages)
      modify :agent_id, references(:users, on_delete: :delete_all), from: references(:users)
      modify :client_id, references(:clients, on_delete: :nilify_all), from: references(:clients)
    end

    alter table(:assets) do
      modify :brokerage_id, references(:brokerages, on_delete: :nilify_all), from: references(:brokerages)
      modify :uploaded_by_id, references(:users, on_delete: :nilify_all), from: references(:users)
    end

    alter table(:accounts) do
      add :deleted_at, :utc_datetime
    end
  end
end
