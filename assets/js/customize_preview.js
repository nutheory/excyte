import Glightbox from 'glightbox'

export const CustomizePreview = {
  mounted() {
    this.handleEvent("loadPreview", ({ content, theme }) => {
      setTimeout(() => {
        const styles = buildTheme(theme)
        addCss(styles)
        let lightbox = Glightbox({
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          selector: ".glightbox"
        })
      }, 500)
    })
  },
  destroyed() {},
}

const buildTheme = (theme) => {
  const bgLight = setRGBAlpha(theme.background, 0.1)
  let rule = `div.preview-wrapper {background-color: ${theme.background}; color: ${theme.sub_header_text}; font-family: ${theme.font}}`
    rule += `div.preview-wrapper .bg-color {background-color: ${theme.background};}`
    rule += `div.preview-wrapper .bg-ex-gradient {background: linear-gradient(${setRGBAlpha(theme.background, 0)}, ${theme.background});}`
    rule += `div.preview-wrapper .header-color {color: ${theme.header_text};}`
    rule += `div.preview-wrapper .bg-light-color {background-color: ${setRGBAlpha(theme.header_text, 0.2)};}`
    rule += `div.preview-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
    rule += `div.preview-wrapper .accent-color {border-color: ${theme.accent}}`
    rule += `div.preview-wrapper .accent-svg-color {stroke: ${theme.accent}}`
    // rule += `div.preview-wrapper a {color: ${theme.link}}`
    rule += `div.preview-wrapper button {color: ${theme.link}}`
    rule += `div.preview-wrapper th {border-bottom-color: ${theme.accent}}`
    // rule += `div.preview-wrapper mark {background-color: ${theme.highlight_background}; color: ${theme.highlight_text}}`
    // rule += `div.preview-wrapper blockquote::before {content: '\\201C'; position: absolute; top: -2.6rem; left: -1rem; color: ${theme.sub_header_text}; font-size: 5.6rem; z-index: -1;}`
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
};

const addCss = (rule) => {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}