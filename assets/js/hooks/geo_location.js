export const GeoLocation = {
  mounted() {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, errPosition)
      } else {
        x.innerHTML = "Geolocation is not supported by this browser."
      }
    }

    const setPosition = (pos) => {
      if (pos.coords.latitude && pos.coords.longitude){
        this.pushEvent('current_location_coords', { lat: pos.coords.latitude, lng: pos.coords.longitude, autodetected: true})
      }
    }

    const errPosition = (err) => {
      if (err.code){
        this.pushEvent('current_location_coords', { message: err.message, autodetected: false})
      }
    }

    window.setGeoLocation = getLocation()
  }
}