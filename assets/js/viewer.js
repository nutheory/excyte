import { Editor as TipTap } from "@tiptap/core"
import Blockquote from '@tiptap/extension-blockquote'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import HardBreak from '@tiptap/extension-hard-break'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Italic from '@tiptap/extension-italic'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { 
  ExcyteHeading,
  ExcyteParagraph,
  ExcyteLink, 
} from './extensions/modified_extensions'
import ShowcaseGallery from './extensions/showcase_gallery'
import SimpleVideo from './extensions/simple_video'
import Collapsable from './extensions/collapsable'
import Contact from './extensions/contact'
import Span from './extensions/span'
import Struct from './extensions/struct'
import tippy from 'tippy.js'
import Glightbox from 'glightbox'

window.viewerHook = {}

window.currentViewer = function (content) {
  
  return {
    content: content,
    viewer: null,
    toc_visible: false,

    init(el) {
      let viewer = new TipTap({
        element: el,
        editable: false,
        extensions: [
          Italic,
          Bold,
          Blockquote,
          Strike,
          Document,
          BulletList,
          OrderedList,
          ListItem,
          ExcyteHeading,
          HardBreak,
          Text,
          ExcyteParagraph,
          ExcyteLink,
          Image.configure({ inline: true }),
          Highlight,
          Underline, 
          TextAlign,
          Table,
          TableHeader,
          TableRow,
          TableCell,
          Contact,
          Collapsable,
          ShowcaseGallery,
          SimpleVideo,
          Struct,
          Span,
        ],
        content: this.content,
        autofocus: true,
      })

      this.viewer = viewer
      window.viewerHook.currentViewer = this
    },
  }
}

export const InitViewer = {
  mounted() {
    window.viewerHook.base = this
    console.log("THIS", window.viewerHook.currentViewer.viewer)
    this.handleEvent("loadViewer", ({ content, theme }) => {
      setTimeout(() => {
        window.viewerHook.currentViewer.viewer.commands.setContent(content)
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
  let rule = `div.viewer-wrapper {background-color: ${theme.background}; color: ${theme.text}; font-family: ${theme.font}}`
      rule += `div.viewer-wrapper .header-color {color: ${theme.header_text}}`
      rule += `div.viewer-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
      rule += `div.viewer-wrapper .accent-color {border-color: ${theme.accent}}`
      rule += `div.viewer-wrapper a {color: ${theme.link}}`
      rule += `div.viewer-wrapper button {color: ${theme.link}}`
      rule += `div.viewer-wrapper th {border-bottom-color: ${theme.accent}}`
      rule += `div.viewer-wrapper mark {background-color: ${theme.highlight_background}; color: ${theme.highlight_text}}`
      rule += `div.preview-wrapper blockquote::before {content: '\\201C'; position: absolute; top: -2.6rem; left: -1rem; color: ${theme.muted_text}; font-size: 5.6rem; z-index: -1;}`
  return rule
}

const addCss = (rule) => {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}