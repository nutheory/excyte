defmodule ExcyteWeb.Property.Create do
  use ExcyteWeb, :live_view
  use ViewportHelpers

  alias Excyte.{
    Properties,
    Properties.Feature
  }

  alias ExcyteWeb.{
    Property.FC,
    PropertyView,
    Helpers.Utilities
  }

  @impl true
  def render(assigns), do: PropertyView.render("create.html", assigns)

  @impl true
  def mount(_params, _sesh, %{assigns: a} = socket) do
    cs = Properties.change_property(%{})

    {:ok,
     assign(socket,
       property_id: nil,
       form: to_form(cs),
       parking_options: FC.parking_options(),
       property_type_options: FC.property_type_options(),
       property_sub_type_options: FC.property_sub_type_options(),
       association_fee_frequency_options: FC.association_fee_frequency_options(),
       lotsize_unit: "sqft",
       lotsize_value: nil,
       main_photo_url: nil,
       fetching: false
     )}
  end

  def handle_info({:init_listing, %{prop_id: prop_id}}, socket) do
    send(self(), {:setup_listing, %{prop_id: prop_id}})
    {:noreply, assign(socket, property_id: prop_id, fetching: true)}
  end

  def handle_info({:setup_listing, %{prop_id: prop_id}}, %{assigns: a} = socket) do
    with {:ok, listing} <- Properties.fetch_listing_details(prop_id, a.current_user.id),
         cs <-
           Properties.change_property(listing)
           |> Ecto.Changeset.put_embed(:features, [%Feature{temp_id: Utilities.get_temp_id()}]) do
      {:noreply,
       assign(socket,
         form: to_form(cs),
         photo: listing["main_photo_url"],
         fetching: false
       )}
    else
      {:error, err} -> {:noreply, assign(socket, errors: err, fetching: false)}
    end
  end

  def handle_event("add_feature", _, %{assigns: a} = socket) do
    existing_features = Map.get(a.changeset.changes, :features, a.changeset.data.features)

    features =
      existing_features
      |> Enum.concat([%Feature{temp_id: Utilities.get_temp_id()}])

    cs = Ecto.Changeset.put_embed(a.changeset, :features, features)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("update_property", %{"attr" => attr, "option" => opt}, %{assigns: a} = socket) do
    cs = Ecto.Changeset.put_change(a.changeset, String.to_atom(attr), opt)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("validate", %{"property" => property}, socket) do
    cs = Properties.change_property(property) |> Map.put(:action, :validate)
    {:noreply, assign(socket, changeset: cs)}
  end

  def handle_event("submit_property", %{"property" => property}, %{assigns: a} = socket) do
    params = filter_empty_features(property)

    case Properties.create_property(
           Map.merge(params, %{
             "agent_id" => a.current_user.id,
             "internal_type" => "pocket"
           })
         ) do
      {:ok, res} ->
        # IO.inspect(res, label: "REZZZZ")
        {:noreply,
         put_flash(socket, :info, "Property updated successfully")
         |> push_redirect(to: "/auth/properties/#{res.id}/gallery")}

      {:error, %Ecto.Changeset{} = changeset} ->
        IO.inspect(changeset, label: "ERR CHANGES")
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp filter_empty_features(property_params) do
    features =
      Enum.filter(property_params["features"], fn {_k, v} ->
        if v["name"] !== "", do: true, else: false
      end)
      |> Enum.map(fn {_k, v} -> v end)

    Map.merge(property_params, %{"features" => features})
  end
end
