import { debounce } from "../utilities"

let resizeHandler

export const ViewportResize = {

  mounted () {
    // Direct push of current window size to properly update view
    this.pushResizeEvent()

    resizeHandler = debounce(() => {
      this.pushResizeEvent()
    }, 100)
    window.addEventListener('resize', resizeHandler)
  },

  pushResizeEvent () {
    this.pushEvent('viewport_resize', {
      width: window.innerWidth,
      height: window.innerHeight
    })
  },

  turbolinksDisconnected () {
    window.removeEventListener('resize', resizeHandler)
  }
}