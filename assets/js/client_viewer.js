import { optionsForElement } from 'dropzone'
import Glightbox from 'glightbox'

export const ClientViewer = {
  mounted() {
    // window.viewerHook.base = this
    this.handleEvent("loadViewer", ({ content, theme, brokerage, agent, authorized_agent }) => {
      setTimeout(() => {
        const cover = this.el.querySelector("[data-index='0']")
        const firstDivider = cover.querySelector(".divider")
        const allDividers = this.el.querySelectorAll(".divider")
        if (firstDivider !== null) {
          firstDivider.remove()
        }
        killDivs(allDividers)
        const styles = buildTheme(theme)
        addCss(styles)
        console.log("viewer called")
        let lightbox = Glightbox({
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          selector: ".glightbox"
        })
      }, 0)
    })

    this.handleEvent("openAccordian", ({ button_id }) => {
      const el = document.getElementById(button_id)
      // const open = document.getElementById(`${button_id}_open`)
      console.log("accordian called", el)
      // el.setAttribute('x-data', '{ expanded: true }')
      // open.style['height'] = 'auto'
      el.click()
    })
  },
  destroyed() {},
}

const killDivs = (els) => {
  const divs = Array.from(els)
  divs.forEach(el => {
    const parent = el.closest('.section')
    const prev = parent.previousElementSibling.children[0]
    if (prev.dataset.displayType === "full_width") {
      el.remove()
    }
  })
}

const buildTheme = (theme) => {
  const bgLight = setRGBAlpha(theme.background, 0.1)
  let rule = `div.viewer-wrapper {background-color: ${theme.background}; color: ${theme.sub_header_text}; font-family: ${theme.font};}`
  rule += `div.viewer-wrapper .bg-color {background-color: ${theme.background};}`
  rule += `div.viewer-wrapper .bg-ex-gradient {background: linear-gradient(${setRGBAlpha(theme.background, 0)}, ${theme.background});}`
  rule += `div.viewer-wrapper .header-color {color: ${theme.header_text};}`
  rule += `div.viewer-wrapper .bg-light-color {background-color: ${setRGBAlpha(theme.header_text, 0.2)};}`
  rule += `div.viewer-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
  rule += `div.viewer-wrapper .accent-color {border-color: ${theme.accent}}`
  rule += `div.viewer-wrapper .accent-svg-color {stroke: ${theme.accent}}`
  // rule += `div.viewer-wrapper a {color: ${theme.link}}`
  rule += `div.viewer-wrapper button {color: ${theme.link}}`
  rule += `div.viewer-wrapper th {border-bottom-color: ${theme.accent}}`
  // rule += `div.viewer-wrapper mark {background-color: ${theme.highlight_background}; color: ${theme.highlight_text}}`
  // rule += `div.viewer-wrapper blockquote::before {content: '\\201C'; position: absolute; top: -2.6rem; left: -1rem; color: ${theme.sub_header_text}; font-size: 5.6rem; z-index: -1;}`
  return rule
}

const setRGBAlpha = function (string, opacity) {
  const colors = string.substring(
    string.indexOf('(') + 1,
    string.lastIndexOf(')')
  ).split(/,s*/)
  const rgb = {
    r: Number(colors[0]),
    g: Number(colors[1]),
    b: Number(colors[2]),
    a: Number(colors[3])
  }

  return `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
}

const addCss = (rule) => {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}