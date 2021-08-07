defmodule Excyte.Scheduler do
  use Quantum, otp_app: :excyte

  # Cleanup orphans

  # Delete soft deleted accounts after 60 days

  # Deactivate overdue accounts
  # DateTime.add(4*24*60*60, :second)
end
