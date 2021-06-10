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

import 'alpinejs'
import "phoenix_html"
import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"
import {ViewportResize} from "./viewport_resize"
import {InitSortable} from "./sorting"
import {InitGallery} from "./gallery"
import {InitColorPicker} from "./theme"
import {InitEditor} from "./editor"
import {InitPreview} from "./preview"
import {InitViewer} from "./viewer"
import {InitCheckout} from "./init_checkout"
import {AutocompleteLocation} from "./location"
import topbar from "topbar"

let Uploaders = {}
let Hooks = {}

Hooks.InitCheckout = InitCheckout
Hooks.InitSortable = InitSortable
Hooks.InitGallery = InitGallery
Hooks.InitColorPicker = InitColorPicker
Hooks.AutocompleteLocation = AutocompleteLocation
Hooks.ViewportResize = ViewportResize
Hooks.InitEditor = InitEditor
Hooks.InitPreview = InitPreview
Hooks.InitViewer = InitViewer
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
      if(from.__x){ window.Alpine.clone(from.__x, to) }
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

