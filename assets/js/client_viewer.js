import Glightbox from 'glightbox'

export const ClientViewer = {
  mounted() {
    let lightbox = Glightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      selector: ".glightbox"
    })
    this.handleEvent("loadViewer", ({ content, theme, brokerage, agent, authorized_agent }) => {
      // setTimeout(() => {
        // const styles = buildTheme(theme)
        // addCss(styles)
        // let lightbox = Glightbox({
        //   touchNavigation: true,
        //   loop: true,
        //   autoplayVideos: true,
        //   selector: ".glightbox"
        // })
      // }, 200)
    })
  },
  destroyed() {},
}

// const buildTheme = (theme) => {
//   let rule = `div.viewer-wrapper {background-color: ${theme.background}; color: ${theme.sub_header_text}; font-family: ${theme.font}}`
//       rule += `div.viewer-wrapper .bg-color {background-color: ${theme.background}}`
//       rule += `div.viewer-wrapper .header-color {color: ${theme.header_text}}`
//       rule += `div.viewer-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
//       rule += `div.viewer-wrapper .accent-color {border-color: ${theme.accent}}`
//       rule += `div.viewer-wrapper .accent-svg-color {stroke: ${theme.accent}}`
//       rule += `div.viewer-wrapper a {color: ${theme.link}}`
//       rule += `div.viewer-wrapper .link {color: ${theme.link}, border-color: ${theme.link}}`
//       rule += `div.viewer-wrapper button {color: ${theme.link}}`
//       rule += `div.viewer-wrapper th {border-bottom-color: ${theme.accent}}`
//   return rule
// }

// const addCss = (rule) => {
//   let css = document.createElement('style');
//   css.type = 'text/css';
//   if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
//   else css.appendChild(document.createTextNode(rule)); // Support for the rest
//   document.getElementsByTagName("head")[0].appendChild(css);
// }