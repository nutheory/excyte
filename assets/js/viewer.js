import { Editor as TipTap } from "@tiptap/core"
import Blockquote from '@tiptap/extension-blockquote'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import HardBreak from '@tiptap/extension-hard-break'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
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
  ExcyteParagraph 
} from './extensions/modified_extensions'
import SimpleGallery from './extensions/simple_gallery'
import Comparable from './extensions/comparable'
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
          Link,
          Image,
          Highlight,
          Underline, 
          TextAlign,
          SimpleGallery,
          Struct,
          Comparable,
        ],
        content: this.content,
      })

      this.viewer = viewer
      window.viewerHook.currentViewer = this
    },
  }
}

export const InitViewer = {
  mounted() {
    window.viewerHook.base = this
    this.handleEvent("loadViewer", ({ content, theme }) => {
      window.viewerHook.currentViewer.viewer.commands.setContent(content)
      console.log("THEME", theme) 
      let rule  = `div.preview-wrapper {background-color: ${theme.background}; color: ${theme.text}; font-family: ${theme.font}}`
          rule += `div.preview-wrapper .header-color {color: ${theme.sub_header_text}}`
          rule += `div.preview-wrapper .sub-header-color {color: ${theme.sub_header_text}}`
          rule += `div.preview-wrapper .accent-color {border-color: ${theme.accent}}`
          rule += `div.preview-wrapper .muted-color {color: ${theme.muted_text}}`
          rule += `div.preview-wrapper mark {background-color: ${theme.highlight_background}; color: ${theme.highlight_text}}`
      addCss(rule)
    })
  },
  destroyed() {
     window.viewerHook = null
     window.currentViewer = null
  },
}

const addCss = (rule) => {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}