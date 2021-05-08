defmodule Excyte.Activities do
  @moduledoc """
    Activites api
  """

  import Ecto.Query, only: [from: 2]
  alias Excyte.{Repo, Activities.ErrorLog}

  def handle_errors(err, func_name, opts \\ []) do
    IO.inspect(err, label: "ERR")
    IO.inspect(func_name, label: "func_name")
    IO.inspect(opts, label: "opts")

    case err do
      {:error, err, _} ->
        __MODULE__.log_error(%{
          error: [err],
          location: func_name,
          source: read_source(err),
          user_id: Keyword.get(opts, :user_id, nil),
          type: read_type(err)
        })

      {:error, err} ->
        __MODULE__.log_error(%{
          error: [err],
          location: func_name,
          source: read_source(err),
          user_id: Keyword.get(opts, :user_id, nil),
          type: read_type(err)
        })

      unknown_err ->
        IO.inspect(unknown_err)

        __MODULE__.log_error(%{
          error: [unknown_err],
          location: func_name,
          source: "unknown",
          user_id: Keyword.get(opts, :user_id, nil)
        })
    end
  end

  def get_errors(params) do
    opts =
      if params === nil or params === %{} do
        %{
          sort_key: "inserted_at",
          sort_value: "desc",
          page_size_limit: 20,
          offset: 0
        }
      else
        params
      end

    sk = String.to_atom(opts.sort_key)
    sv = String.to_atom(opts.sort_value)

    query =
      from(lg in ErrorLog,
        offset: ^opts.offset,
        # where: a.account_id == ^acc_id,
        order_by: [{^sv, field(lg, ^sk)}],
        limit: ^opts.page_size_limit
      )

    {:ok, Repo.all(query)}
  end

  def get_errors(), do: __MODULE__.get_errors(nil)

  def log_error(params) do
    {:ok, res} =
      %ErrorLog{}
      |> ErrorLog.changeset(params)
      |> Repo.insert()

    {:error,
     %{
       message:
         "An unknown error has occurred. It has been recorded and we will look into it. Error ID is #{
           res.id
         }"
     }}
  end

  def delete_error(id) do
    Repo.get(ErrorLog, id)
    |> Repo.delete()
  end

  def update_error(id, params) do
    Repo.get(ErrorLog, id)
    |> ErrorLog.changeset(params)
    |> Repo.update()
  end

  defp read_source(err) do
    case err do
      %{"fbtrace_id" => _} -> "facebook"
      _ -> "excyte"
    end
  end

  defp read_type(err) do
    case err do
      %{"type" => _} -> err["type"]
      _ -> "unknown"
    end
  end
end
