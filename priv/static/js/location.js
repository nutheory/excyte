export const AutocompleteLocation = {
  mounted() {
    let autocomplete
    const locationInput = this.el.querySelector('input#location')
    var options = {
        types: ['geocode'],
        componentRestrictions: {country: 'us'}
      }

    autocomplete = new google.maps.places.Autocomplete(locationInput, options)
    autocomplete.setFields(["address_component", "adr_address", "formatted_address", "geometry"])
    autocomplete.addListener("place_changed", () => {
      const locationDetails = autocomplete.getPlace()
      this.pushEventTo("#locationEventTarget", "location-details", locationDetails, (reply) => {
        console.log("REPLY", reply)
      })
    })
  }
}