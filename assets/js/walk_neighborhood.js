export const WalkNeighborhood = {
  mounted() {
    const root = document.querySelector("#mapping-container")
    const wrapper = document.createElement('div')
    const viewer = document.createElement('div')
    const closer = document.createElement('button')
    wrapper.classList.add('mapping-wrapper')
    viewer.classList.add('mapping-viewer')
    closer.classList.add('leave-mapping')
    closer.innerHTML = `
      <div class="flex">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div class="pr-2">Leave Neighborhood</div>
      </div>
    `

    closer.addEventListener("click", (e) => {
      wrapper.remove()
    })

    this.handleEvent("load_neighborhood", ({coords, id}) => {
      const viewerId = `walk_pano_${id}`
      const exists = document.querySelector(`#${viewerId}`)
      if (exists === null) {
        viewer.setAttribute("id", viewerId)
        wrapper.append(closer, viewer)
        root.append(wrapper)
        initialize(coords, viewer)
      }
    })
  }
}

function initialize(coords, el, wrapper) {
  const loc = { lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) }

  var svService = new google.maps.StreetViewService()
  var panoRequest = {
      location: loc,
      preference: google.maps.StreetViewPreference.NEAREST,
      radius: 50,
      source: google.maps.StreetViewSource.OUTDOOR
  }

  var findPanorama = function(radius) {
    panoRequest.radius = radius
    svService.getPanorama(panoRequest, function(panoData, status){
      if (status === google.maps.StreetViewStatus.OK) {
        var panorama = new google.maps.StreetViewPanorama(el, {
          pano: panoData.location.pano,
          pov: { heading: 45, pitch: 0 },
        })
      } else {
        if (radius > 110) {
          wrapper.remove()
          alert("Street View is not available") 
        } else {
          findPanorama(radius + 20)
        }
      }
    })     
  }

  findPanorama(50)
}