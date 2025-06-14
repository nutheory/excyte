defmodule Excyte.Release do
  @moduledoc """
  Responsible for custom release commands
  """

  @app :excyte

  def run_seeds do
    ensure_started()
    Excyte.Repo.start_link()
    Code.eval_file("priv/repo/seeds.exs")
  end

  def migrate do
    ensure_started()

    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  def rollback(version) do
    ensure_started()

    repo = hd(repos())
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  defp repos do
    Application.load(@app)
    Application.fetch_env!(@app, :ecto_repos)
  end

  defp ensure_started do
    Application.ensure_all_started(:ssl)
  end
end
