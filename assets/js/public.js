import "../css/public.css"

import 'alpinejs'
import "phoenix_html"
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import topbar from "topbar"

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".p-container")

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})

let Hooks = {}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks, 
  params: { _csrf_token: csrfToken },
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

liveSocket.connect()

window.liveSocket = liveSocket