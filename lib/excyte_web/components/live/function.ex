defmodule ExcyteWeb.Components.Function do
  use Phoenix.Component
  use Phoenix.HTML
  import ExcyteWeb.ErrorHelpers

  def address_form(assigns) do
    ~H"""
    <div class="">
      <%= if @form do %>
        <%= for fa <- inputs_for(@form, :address_items) do %>
          <%= if fa.data.id do %>
            <%= hidden_input(fa, :id, value: fa.data.id) %>
          <% end %>
          <div class="">
            <div class="mt-2">
              <%= text_input(fa, :address_one, class: "text-field", placeholder: "Address line 1") %>
            </div>
            <div class="mt-2">
              <%= text_input(fa, :address_two, class: "text-field", placeholder: "Address line 2") %>
            </div>
            <div class="flex mt-2 -mx-1">
              <div class="px-1 flex-1">
                <%= text_input(fa, :city, class: "text-field", placeholder: "City") %>
              </div>
              <div class="px-1 w-20">
                <%= text_input(fa, :state, class: "text-field", placeholder: "State") %>
              </div>
              <div class="px-1 w-28">
                <%= text_input(fa, :zip, class: "text-field", placeholder: "Zip code") %>
              </div>
            </div>
          </div>
        <% end %>
      <% end %>
    </div>
    """
  end

  def contact_form(assigns) do
    ~H"""
    <div>
      <%= if @form do %>
        <div class="mt-2 -mx-1">
          <%= for fc <- inputs_for(@form, :contact_items) do %>
            <%= if fc.data.id do %>
              <%= hidden_input(fc, :id, value: fc.data.id) %>
            <% end %>
            <div class="py-2 relative">
              <%= if Map.has_key?(fc.params, "delete") && fc.params["delete"] == "true" do %>
                <div class="text-xs bg-red-700 text-white absolute top-1 right-0 px-1">
                  marked for delete
                </div>
              <% end %>
              <div class="flex content-start items-start">
                <div class="px-1 flex-1">
                  <%= label(fc, :name, class: "text-xs") %>
                  <%= text_input(fc, :name,
                    class: "text-field w-full",
                    placeholder: "Mobile phone, Slack etc.",
                    phx_debounce: "blur"
                  ) %>
                  <%= error_tag(fc, :name) %>
                </div>
                <div class="px-1 flex-1">
                  <%= label(fc, :content, class: "text-xs") %>
                  <%= text_input(fc, :content,
                    class: "text-field",
                    placeholder: "(555) 555-5555",
                    phx_debounce: 2000
                  ) %>
                  <%= error_tag(fc, :content) %>
                </div>
                <div class="px-1 w-12">
                  <%= checkbox(fc, :delete, class: "appearance-none h-0") %>
                  <%= if is_nil(fc.data.temp_id) do %>
                    <%= label fc, :delete, class: "text-xs cursor-pointer" do %>
                      <%= if Map.has_key?(fc.params, "delete") && fc.params["delete"] == "true" do %>
                        <span class="inline-block mt-2.5 text-center">undo</span>
                      <% else %>
                        <span class="text-red-700 inline-block text-center">mark<br />delete</span>
                      <% end %>
                    <% end %>
                  <% else %>
                    <%= hidden_input(fc, :temp_id) %>
                    <a
                      href="#"
                      class="delete-button mt-5 "
                      phx-click="remove-contact"
                      phx-value-remove={fc.data.temp_id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                        />
                      </svg>
                    </a>
                  <% end %>
                </div>
              </div>
              <%= if fc.data.type === "phone" || (Map.has_key?(fc.source.changes, :type) && fc.source.changes.type === "phone") do %>
                <div class="w-full px-1 pt-3">
                  <%= checkbox(fc, :textable, class: "") %>
                  <%= label(fc, :textable, "Recieve text messages using this number?",
                    class: "text-sm cursor-pointer inline pl-2"
                  ) %>
                </div>
              <% end %>
            </div>
          <% end %>
          <div class="pt-3">
            <a href="#" class="pl-1 link-button" phx-click="add-contact">Add a Contact</a>
          </div>
        </div>
      <% end %>
    </div>
    """
  end

  def feature_form(assigns) do
    ~H"""
    <div>
      <%= if @form do %>
        <div class="mt-2 -mx-1">
          <%= for fc <- inputs_for(@form, :features) do %>
            <%= if fc.data.id do %>
              <%= hidden_input(fc, :id, value: fc.data.id) %>
            <% end %>
            <div class="py-2 relative">
              <%= if Map.has_key?(fc.params, "delete") && fc.params["delete"] == "true" do %>
                <div class="text-xs bg-red-700 text-white absolute top-1 right-0 px-1">
                  marked for delete
                </div>
              <% end %>
              <div class="flex">
                <div class="px-1 flex-1">
                  <%= label(fc, :name, class: "text-xs") %>
                  <%= text_input(fc, :name,
                    class: "text-field w-full",
                    placeholder: "Mobile phone, Slack etc.",
                    phx_debounce: "blur"
                  ) %>
                  <%= error_tag(fc, :name) %>
                </div>
                <div class="px-1 w-12">
                  <%= checkbox(fc, :delete, class: "appearance-none h-0") %>
                  <%= if is_nil(fc.data.temp_id) do %>
                    <%= label fc, :delete, class: "text-xs cursor-pointer" do %>
                      <%= if Map.has_key?(fc.params, "delete") && fc.params["delete"] == "true" do %>
                        <span class="inline-block mt-2.5 text-center">undo</span>
                      <% else %>
                        <span class="text-red-700 inline-block text-center">mark<br />delete</span>
                      <% end %>
                    <% end %>
                  <% else %>
                    <%= hidden_input(fc, :temp_id) %>
                    <a
                      href="#"
                      class="delete-button mt-5 "
                      phx-click="remove_feature"
                      phx-value-remove={fc.data.temp_id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                        />
                      </svg>
                    </a>
                  <% end %>
                </div>
              </div>
              <div class="mt-2">
                <%= label(fc, :description, class: "text-xs") %>
                <%= text_input(fc, :description,
                  class: "text-field",
                  placeholder: "Describe this feature",
                  phx_debounce: 2000
                ) %>
                <%= error_tag(fc, :description) %>
              </div>
            </div>
          <% end %>
          <div class="pt-3">
            <a href="#" class="pl-1 link-button" phx-click="add_feature">Add a Feature</a>
          </div>
        </div>
      <% end %>
    </div>
    """
  end
end
