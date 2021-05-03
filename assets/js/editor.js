import { Editor as TipTap } from "@tiptap/core"

import Italic from '@tiptap/extension-italic'
import Bold from '@tiptap/extension-bold'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Strike from '@tiptap/extension-strike'
import Document from '@tiptap/extension-document'
import History from '@tiptap/extension-history'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Heading from '@tiptap/extension-heading'
import HardBreak from '@tiptap/extension-hard-break'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import FloatingMenu from '@tiptap/extension-floating-menu'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import Dropcursor from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Commands from './extensions/commands'
import tippy from 'tippy.js'
import { verifyLink } from './utilities'

window.currentEditor = function (content) {
  console.log("loaded")
  // updatedAt is to force Alpine to rerender on selection change
  return {
    updatedAt: Date.now(),
    content: `
      <div><simple-gallery>booger</simple-gallery></div>
    `,
    inFocus: true,
    linkInput: null,
    menuLinkVisible: false,
    imagePanelVisible: false,
    editor: null,

    init(el) {
      let editor = new TipTap({
        element: el,
        extensions: [        
          Italic,
          Bold,
          Strike,
          Document,
          History,
          BulletList,
          OrderedList,
          ListItem,
          Heading,
          HardBreak,
          Text,
          Paragraph,
          Link,
          Image,
          Highlight,
          Underline, 
          FontFamily,
          TextAlign,
          Gapcursor,
          Table.configure({ resizable: true }),
          TableRow,
          TableHeader,
          TableCell,
          Commands.configure({
            suggestion: {
              render: () => {
                let component = document.querySelector('#commandsMenu') 
                let popup
                return {
                  onStart: props => {
                    popup = tippy('body', {
                      getReferenceClientRect: props.clientRect,
                      appendTo: () => document.body,
                      content: component,
                      showOnCreate: true,
                      interactive: true,
                      trigger: 'manual',
                      placement: 'bottom-start',
                    })
                  },
                  onUpdate(props) {
                    popup[0].setProps({
                      getReferenceClientRect: props.clientRect,
                    })
                  },
                  onKeyDown(props) {
                    return component.ref?.onKeyDown(props)
                  },
                  onExit() {
                    popup[0].destroy()
                  },
                }
              }
            }
          }),
          BubbleMenu.configure({
            element: document.querySelector('#bubbleMenu'),
          }),
          FloatingMenu.configure({
            element: document.querySelector('#floatingMenu'),
          }),
        ],
        content: this.content,
        editorProps: {
          attributes: {
            class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl focus:outline-none"
          }
        },
        onUpdate: ({ editor }) => {
          this.content = editor.getHTML()
        },
      })

      this.editor = editor
    },

    linkKeydownCallback(ev) {
      const proxyThis = ev.target.proxyThis
      const key = ev.code
      if (key === "Enter" || key === "Escape") {
        ev.preventDefault()
        const url = ev.target.value
        if (verifyLink(url)) {
          proxyThis.editor.chain().focus().setLink({ href: url }).run()
          linkInput.removeEventListener('keydown', linkKeydownCallback)
        } else {
          alert("bunk")
        }
        proxyThis.menuLinkVisible = false
      }
    },

    addLink() {
      this.menuLinkVisible = true
      const linkInput = document.querySelector('input#editor-link')
      linkInput.addEventListener('keydown', this.linkKeydownCallback)
      linkInput.proxyThis = this
    },

    cancelLink() {
      const linkInput = document.querySelector('input#editor-link')
      this.menuLinkVisible = false
      linkInput.value = ""
    },

    toggleAddImage() {
      const imagePanel = document.querySelector('#image-panel')
      if (this.imagePanelVisible) {
        this.editor.chain().focus()
        this.imagePanelVisible = false
      } else {
        imagePanel.focus()
        this.imagePanelVisible = true
      }
    },

    addImage() {
      // this.editor.chain().focus().setImage({ src: url }).run()
    },

  }
}

export const InitEditor = {
  mounted() {
    window.editorHook = this
  },
  destroyed() {
     window.editorHook = null
     window.currentEditor = null
  },
  saveSectionHTML(editor) {
    this.pushEvent('save_section', { html: editor.getHTML() })
  },
  saveSectionTemplateHTML(editor) {
    this.pushEvent('save_section_template', { html: editor.getHTML() })
  },
}