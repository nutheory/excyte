import "../css/client.css"

import 'alpinejs'
import "phoenix_html"
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import {ClientViewer} from "./client_viewer"
import {setupSizing} from "./mobile_sizing"
import {ClosedListingsChart} from "./closed_listings_chart"
import {VideoInitialize} from "./video"
import {WalkNeighborhood} from "./walk_neighborhood"
import {Mapping} from "./mapping"
import {TableOfContents} from "./table_of_contents"

import topbar from "topbar"
let Hooks = {}

Hooks.TableOfContents = TableOfContents
Hooks.ClosedListingsChart = ClosedListingsChart
Hooks.VideoInitialize = VideoInitialize
Hooks.WalkNeighborhood = WalkNeighborhood
Hooks.Mapping = Mapping
Hooks.ClientViewer = ClientViewer

setupSizing()

window.addEventListener("resize", function(){
  setupSizing()
})

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks, 
  params: { 
    _csrf_token: csrfToken,
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
Alpine.start()
// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()

window.liveSocket = liveSocket