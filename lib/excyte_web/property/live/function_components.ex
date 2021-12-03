defmodule ExcyteWeb.Property.FC do
  use Phoenix.Component
  use Phoenix.HTML
  alias Phoenix.LiveView.JS
  alias ExcyteWeb.Components.{Function}
  alias ExcyteWeb.Helpers.{UI}
  alias ExcyteWeb.Router.Helpers, as: Routes

  # def status_options() do
  #   [
  #     %{}
  #   ]
  # end

  def association_fee_frequency_options() do
    [
      %{value: "Annually", text: "Annually"},
      %{value: "Monthly", text: "Monthly"},
      %{value: "Quarterly", text: "Quarterly"},
      %{value: "Semi Annually", text: "Semi Annually"},
    ]
  end

  def parking_options() do
    [
      %{value: "Garage (attached)", text: "Garage (attached)"},
      %{value: "Garage (detached)", text: "Garage (detached)"},
      %{value: "Carport", text: "Carport"},
      %{value: "Street", text: "Street"},
    ]
  end

  def property_type_options() do
    [
      %{value: "Residential", text: "Residential"},
      %{value: "Residential Income", text: "Residential Income"},
      %{value: "Residential Lease", text: "Residential Lease"},
      %{value: "Commercial Sale", text: "Commercial Sale"},
      %{value: "Land", text: "Land"}
    ]
  end

  def property_sub_type_options() do
    [
      %{value: "Single Family", text: "Single Family"},
      %{value: "Condominium", text: "Condominium"},
      %{value: "Townhouse", text: "Townhouse"},
      %{value: "Apartment", text: "Apartment"},
      %{value: "Multi Family", text: "Multi Family"},
      %{value: "Manufactured Home", text: "Manufactured Home"}
    ]
  end

  # def form(assigns) do
  #   ~H"""
  #   <div>

  #   </div>
  #   """
  # end

end
