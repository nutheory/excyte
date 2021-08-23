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
import Struct from './extensions/struct'
import Span from './extensions/span'
import tippy from 'tippy.js'
import Glightbox from 'glightbox'

window.previewHook = {}

window.currentPreview = function (content) {
  return {
    content: content,
    viewer: null,
    toc_visible: false,

    init(el) {
      let preview = new TipTap({
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
          Image.configure({inline: true}),
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
      this.preview = preview
      window.previewHook.currentPreview = this
    },
  }
}

export const InitPreview = {
  mounted() {
    window.previewHook.base = this
    this.handleEvent("loadPreview", ({ content, theme }) => {
      setTimeout(() => {
        window.previewHook.currentPreview.preview.commands.setContent(content)
        const styles = buildTheme(theme)
        addCss(styles)
        // bind glightbox images after load
        let lightbox = Glightbox({
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          selector: ".glightbox"
        })
      }, 500)
    })
  },
  destroyed() {
    //  window.previewHook = null
    //  window.currentPreview = null
  },
}

const buildTheme = (theme) => {
  let rule = `div.preview-wrapper {background-color: ${theme.background}; color: ${theme.text}; font-family: ${theme.font}}`
    rule += `div.preview-wrapper .bg-color {background-color: ${theme.background};}`
    rule += `div.preview-wrapper .header-color {color: ${theme.header_text};}`
    rule += `div.preview-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
    rule += `div.preview-wrapper .accent-color {border-color: ${theme.accent}}`
    rule += `div.preview-wrapper a {color: ${theme.link}}`
    rule += `div.preview-wrapper button {color: ${theme.link}}`
    rule += `div.preview-wrapper th {border-bottom-color: ${theme.accent}}`
    rule += `div.preview-wrapper mark {background-color: ${theme.highlight_background}; color: ${theme.highlight_text}}`
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