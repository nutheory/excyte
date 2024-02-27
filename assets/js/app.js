// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//

import Alpine from 'alpinejs'
import "phoenix_html"
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import {ViewportResize} from "./hooks/viewport_resize"
import {InitSectionSortable, InitListingSortable} from "./hooks/sorting"
import {InitGallery} from "./hooks/gallery"
import {InitColorPicker} from "./hooks/theme"
import {ClosedListingsChart} from "./hooks/closed_listings_chart"
import {VideoInitialize} from "./hooks/video"
import {WalkNeighborhood} from "./hooks/walk_neighborhood"
import {Mapping} from "./hooks/mapping"
import {CustomizePreview} from "./hooks/customize_preview"
import {ImageEditor} from "./hooks/image_editor"
import {PhotoGallery} from "./hooks/photo_gallery"
import {setupSizing} from "./utilities"
import {MuxUploader} from "./hooks/mux_uploader"
import {InitCheckout} from "./hooks/checkout"
import {GeoLocation} from "./hooks/geo_location"
import {AutocompleteLocation} from "./hooks/location"
import topbar from "topbar"

window.Alpine = Alpine
 
Alpine.start()

let Uploaders = {}
let Hooks = {}

Hooks.InitCheckout = InitCheckout
Hooks.InitSectionSortable = InitSectionSortable
Hooks.InitListingSortable = InitListingSortable
Hooks.InitGallery = InitGallery
Hooks.InitColorPicker = InitColorPicker
Hooks.AutocompleteLocation = AutocompleteLocation
Hooks.ViewportResize = ViewportResize
Hooks.PhotoGallery = PhotoGallery
Hooks.CustomizePreview = CustomizePreview
Hooks.ClosedListingsChart = ClosedListingsChart
Hooks.VideoInitialize = VideoInitialize
Hooks.WalkNeighborhood = WalkNeighborhood
Hooks.Mapping = Mapping
Hooks.ImageEditor = ImageEditor
Hooks.MuxUploader = MuxUploader
Hooks.GeoLocation = GeoLocation
Hooks.DistanceSelector = {
  mounted(){
    const add = this.el.querySelector('.add-distance')
    const minus = this.el.querySelector('.minus-distance')
    add.addEventListener("click", () => {
      this.pushEventTo("#distance-selector", "update", "add", reply => {})  
    })
    minus.addEventListener("click", () => {
      this.pushEventTo("#distance-selector", "update", "minus", reply => {})  
    })
  }
}

Hooks.CopyToClipboard = {
  mounted(){
    const copyText = this.el.querySelector("#copyReportLink")
    const button = this.el.querySelector("#copyReportLinkButton")
    const alert = this.el.querySelector("#alertCopied")
    button.addEventListener("click", () => {
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
      alert.classList.remove("hidden")
    })
  }
}

setupSizing()

window.addEventListener("resize", function(){
  setupSizing()
})

Uploaders.S3 = function(entries, onViewError){
  entries.forEach(entry => {
    let formData = new FormData()
    let {url, fields} = entry.meta
    Object.entries(fields).forEach(([key, val]) => formData.append(key, val))
    formData.append("file", entry.file)
    let xhr = new XMLHttpRequest()
    onViewError(() => xhr.abort())
    xhr.onload = () => xhr.status === 204 || entry.error()
    xhr.onerror = () => entry.error()
    xhr.upload.addEventListener("progress", (event) => {
      if(event.lengthComputable){
        let percent = Math.round((event.loaded / event.total) * 100)
        entry.progress(percent)
      }
    })

    xhr.open("POST", url, true)
    xhr.send(formData)
  })
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks, 
  uploaders: Uploaders, 
  params: { 
    _csrf_token: csrfToken,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  dom: {
    onBeforeElUpdated(from, to){
      if (from._x_dataStack) {
        window.Alpine.clone(from, to)
      }
    }
  }
})

// Show progress bar on live navigation and form submits
let progressTimeout
topbar.config({ barThickness : 5, shadowColor: "rgba(0, 0, 0, .6)" })
window.addEventListener("phx:page-loading-start", () => { clearTimeout(progressTimeout); progressTimeout = setTimeout(topbar.show, 100) })
window.addEventListener("phx:page-loading-stop", () => { clearTimeout(progressTimeout); topbar.hide() })

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()

window.liveSocket = liveSocket

