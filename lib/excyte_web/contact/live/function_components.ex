defmodule ExcyteWeb.Contact.FC do
  use Phoenix.Component
  use Phoenix.HTML
  alias Phoenix.LiveView.JS
  alias ExcyteWeb.Components.{Function}
  alias ExcyteWeb.Helpers.{UI}
  alias ExcyteWeb.Router.Helpers, as: Routes

  def form(assigns) do
    ~H"""
    <div>
      <label>Name</label>
      <div class="flex -mx-1">
        <div class="px-1 w-20">
          <%= text_input @f, :title, class: "text-field", placeholder: "Title", autocomplete: "off" %>
        </div>
        <div class="px-1 flex-1">
          <%= text_input @f, :first_name, class: "text-field", placeholder: "First Name" %>
        </div>
        <div class="px-1 flex-1">
          <%= text_input @f, :last_name, class: "text-field", placeholder: "Last Name" %>
        </div>
        <div class="px-1 w-20">
          <%= text_input @f, :suffix, class: "text-field", placeholder: "Suffix", autocomplete: "off" %>
        </div>
      </div>
      <div class="mt-6 flex -mx-1">
        <div class="px-1 w-2/3">
          <%= label @f, :email %>
          <%= text_input @f, :email, class: "text-field", placeholder: "carol@gmail.com" %>
        </div>
        <div class="px-1 w-1/3">
          <label>Phone <span class="text-sm">(textable)</span></label>
          <%= telephone_input @f, :phone_number, class: "text-field", placeholder: "(555) 555-5555" %>
        </div>
      </div>
      <div class="mt-6 flex -mx-1">
        <div class="flex-1 px-1">
          <%= label @f, :type, "Assign a contact type" %>
          <UI.dropdown
            options={@contact_types}
            attr={"type"}
            selected={@type}
            origin={"left"}
            callback={"select_change"}
            label={"Contact type"}
            id={:contact_type}
          />
        </div>
        <div class="flex-1 px-1">
          <%= label @f, :type, "Assign a priority" %>
          <UI.dropdown
            options={@priorities}
            attr={"priority"}
            selected={@priority}
            origin={"left"}
            callback={"select_change"}
            label={"Priority"}
            id={:priority}
          />
        </div>
        <div class="flex-1 px-1">
          <%= label @f, :type, "Assign a priority" %>
          <UI.dropdown
            options={@priorities}
            attr={"priority"}
            selected={@priority}
            origin={"left"}
            callback={"select_change"}
            label={"Priority"}
            id={:priority}
          />
        </div>
      </div>
      <div class="bg-white border border-gray-400 rounded my-6 p-4">
        <label class="text-xl font-bold">Points of Contact</label>
        <p class="text-sm"></p>
        <Function.contact_form form={@f} id={:contact_items} />
      </div>
      <div class="bg-white border border-gray-400 rounded my-6 p-4">
        <label class="text-xl font-bold">Address</label>
        <Function.address_form form={@f} id={:address_items} />
        <%# <UI.large_toggle
          input_name={:create_property}
          label={"BOOM"}
          form={f}
          id={"create_property_toggle"}
        /> %>
      </div>
      <%# Share with Team %>
        <%# Assign to %>
      <div class="mt-6">
        <%= label @f, :notes %>
        <%= textarea @f, :notes, class: "textarea" %>
      </div>
    </div>
    """
  end

end
