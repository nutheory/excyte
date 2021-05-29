import "../css/public.css"

import 'alpinejs'
import "phoenix_html"
import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"
import {validatePassword, toggleShowPassword} from "./auth"
import topbar from "topbar"

const regPassword = document.querySelector("#invite_password")
const showPassword = document.querySelector("#show_password_txt")

if (regPassword) {
  regPassword.addEventListener('keyup', validatePassword)
  showPassword.addEventListener('click', (e) => toggleShowPassword(e, regPassword, showPassword))
}

let Hooks = {}

Hooks.HomeSplit = {
  mounted(){

  }
}

Hooks.Registration = {
  mounted(){
    this.el.addEventListener('keyup', validatePassword)
  }
}


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