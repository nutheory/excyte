const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let labelIndex = 0
let pinColor = "#0E7490";
const pinSVGFilled = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
const labelOriginFilled = new google.maps.Point(12, 9);

export const Mapping = {
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
        <div class="pr-2">Return to CMA</div>
      </div>
    `

    closer.addEventListener("click", (e) => {
      wrapper.remove()
    })

    this.handleEvent("create_map_and_markers", ({ subject, listings }) => {
      viewer.setAttribute("id", "map_all_properties")
      wrapper.append(closer, viewer)
      root.append(wrapper)

      initMap(subject, listings, viewer)
    })
  }
}

function initMap(subject, listings, dom_el) {
  const subjectPos = { lat: subject.coords.lat, lng: subject.coords.lng }
  const map = new google.maps.Map(dom_el, {
    zoom: 13,
    center: subjectPos,
  })

  new google.maps.Marker({
    position: subjectPos,
    map,
    title: subject.address,
  })

  listings.forEach((lst, i) => {
    const markerImage = {  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
      path: pinSVGFilled,
      anchor: new google.maps.Point(12, 17),
      fillOpacity: 1,
      fillColor: pinColor,
      strokeWeight: 2,
      strokeColor: "white",
      scale: 2,
      labelOrigin: labelOriginFilled
    };
    const contentString =
      `<div class="p-2">` +
      `<h4 class="">${lst.address}</h4>` +
      `<div class=""><img class="rounded w-full" src="${lst.main_photo_url}" /></div>` +
      `</div>`;
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 320,
    });
    const marker = new google.maps.Marker({
      position: { lat: lst.coords.lat, lng: lst.coords.lng },
      map,
      label: { 
        text: labels[labelIndex++ % labels.length],
        color: "white",
        fontSize: "12px",
      },
      title: lst.address,
      icon: markerImage,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      })
    })
  })
}