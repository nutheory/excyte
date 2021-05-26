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
    this.handleEvent("loadViewer", ({ content }) => {
      window.viewerHook.currentViewer.viewer.commands.setContent(content)     
    })
  },
  destroyed() {
     window.viewerHook = null
     window.currentViewer = null
  },
}