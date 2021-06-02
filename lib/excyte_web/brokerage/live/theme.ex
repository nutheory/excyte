defmodule ExcyteWeb.Brokerage.Theme do
  use ExcyteWeb, :live_view
  alias Excyte.{Accounts, Activities, Agents, Brokerages, Brokerages.Profile}
  alias ExcyteWeb.{Helpers.SimpleS3Upload, Helpers.Utilities, BrokerageView}

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

  def mount(_params, %{"user_token" => token, "return_to" => rt}, socket) do
    cu = Accounts.get_user_by_session_token(token)
    agent_profile = Agents.get_agent_profile!(cu.id)
    brokerage_profile = Brokerages.get_brokerage_profile(cu.brokerage_id)
    {:ok, assign(socket,
      return_to: rt,
      agent_profile: agent_profile,
      brokerage_profile: brokerage_profile,
      theme_settings: Map.from_struct(brokerage_profile.theme_settings),
      fonts: @fonts
    )}
  end

  def handle_info({:update_theme, %{id: id, color: c}}, %{assigns: a} = socket) do
    {:noreply, assign(socket, theme_settings: Map.put(a.theme_settings, String.to_atom(id), c))}
  end

  def handle_event("filter-fonts", %{"filter" => filter}, %{assigns: a} = socket) do
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

  def handle_event("save-theme", _, %{assigns: a} = socket) do
    case Brokerages.update_profile(a.brokerage_profile, %{theme_settings: a.theme_settings}) do
      {:ok, _profile} -> {:noreply, put_flash(socket, :info, "Brokerage Profile updated successfully")
                                    |> push_redirect(to: a.return_to)}
      {:error, err} -> Activities.handle_errors(err, "ExcyteWeb.Brokerage.Theme")
    end
  end

end
