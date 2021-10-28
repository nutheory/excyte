defmodule ExcyteWeb.Brokerage.Theme do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Activities, Agents, Brokerages}
  alias ExcyteWeb.{Helpers.Utilities, BrokerageView}
  on_mount ExcyteWeb.UserLiveAuth

  @fonts [
    %{name: "Arial, Helvetica Neue, Helvetica, sans-serif", family: "Arial, Helvetica Neue, Helvetica, sans-serif"},
    %{name: "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif", family: "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif"},
    %{name: "Bodoni MT, Bodoni 72, Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif", family: "Bodoni MT, Bodoni 72, Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif"},
    %{name: "Century Gothic, CenturyGothic, AppleGothic, sans-serif", family: "Century Gothic, CenturyGothic, AppleGothic, sans-serif"},
    %{name: "Copperplate, Copperplate Gothic Light, fantasy", family: "Copperplate, Copperplate Gothic Light, fantasy"},
    %{name: "Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace", family: "Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace"},
    %{name: "Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif", family: "Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif"},
    %{name: "Helvetica Neue, Helvetica, Arial, sans-serif", family: "Helvetica Neue, Helvetica, Arial, sans-serif"},
    %{name: "Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif", family: "Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif"},
  ]


  def render(assigns), do: BrokerageView.render("theme.html", assigns)

  def mount(_params, %{"return_to" => rt}, %{assigns: %{current_user: cu}} = socket) do
    agent = Agents.get_agent_profile!(cu.id)
    brokerage = if cu.brokerage_id, do: Brokerages.get_brokerage_profile(cu.brokerage_id), else: nil
    theme =
      if brokerage && Utilities.authorized?(cu.brokerage_role) do
        Map.from_struct(brokerage.theme_settings)
      else
        Map.from_struct(agent.theme_settings)
      end

    {:ok, assign(socket,
      return_to: rt,
      current_user: cu,
      agent_profile: agent,
      brokerage_profile: brokerage,
      theme_settings: theme,
      fonts: @fonts
    )}
  end

  def handle_info({:update_theme, %{id: id, color: c}}, %{assigns: a} = socket) do
    {:noreply, assign(socket, theme_settings: Map.put(a.theme_settings, String.to_atom(id), c))}
  end

  def handle_event("filter-fonts", %{"filter" => filter}, socket) do
    fonts =
      if String.valid?(filter) do
        Enum.filter(@fonts, fn f -> String.contains?(String.downcase(f.name), String.downcase(filter)) end)
      else
        @fonts
      end
    {:noreply, assign(socket, fonts: fonts)}
  end

  def handle_event("option-select", %{"family" => family}, %{assigns: a} = socket) do
    {:noreply, assign(socket, theme_settings: Map.put(a.theme_settings, :font, family))}
  end

  def handle_event("toggle-brokerage-default", _, %{assigns: a} = socket) do
    bd = !a.theme_settings.brokerage_default
    {:noreply, assign(socket, theme_settings: Map.put(a.theme_settings, :brokerage_default, bd))}
  end

  def handle_event("save-theme", _, %{assigns: a} = socket) do
    if a.brokerage_profile && Utilities.authorized?(a.current_user.brokerage_role) && a.theme_settings.brokerage_default === true do
      case Brokerages.update_profile(a.brokerage_profile, %{theme_settings: a.theme_settings}) do
        {:ok, _profile} -> {:noreply, put_flash(socket, :info, "Theme updated.")
                                      |> push_redirect(to: a.return_to)}
        {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Brokerage.Theme")
      end
    else
      case Agents.update_profile(a.agent_profile, %{theme_settings: a.theme_settings}) do
        {:ok, _profile} -> {:noreply, put_flash(socket, :info, "Theme updated.")
                                      |> push_redirect(to: a.return_to)}
        {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Brokerage.Theme")
      end
    end
  end

end
