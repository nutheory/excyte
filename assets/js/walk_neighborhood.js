export const WalkNeighborhood = {
  mounted() {
    const root = this.el
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

function initialize(coords, el) {
  const loc = { lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) }
  const panorama = new google.maps.StreetViewPanorama(el, {
    position: loc,
    pov: { heading: 34, pitch: 10 },
  })
}