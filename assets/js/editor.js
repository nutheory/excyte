import { Editor as TipTap } from "@tiptap/core"
import Blockquote from '@tiptap/extension-blockquote'
import Bold from '@tiptap/extension-bold'
import BubbleMenu from '@tiptap/extension-bubble-menu'
// import BulletList from '@tiptap/extension-bullet-list'
import Commands from './extensions/commands'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import FloatingMenu from '@tiptap/extension-floating-menu'
import FontFamily from '@tiptap/extension-font-family'
import Gapcursor from '@tiptap/extension-gapcursor'
import HardBreak from '@tiptap/extension-hard-break'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import History from '@tiptap/extension-history'
import Image from '@tiptap/extension-image'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
// import ListItem from '@tiptap/extension-list-item'
// import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import tippy from 'tippy.js'
import { verifyLink } from './utilities'

window.editorHook = {}
window.currentEditor = function (content) {
  console.log("loaded")
  
  return {
    content: content,
    editor: null,
    linkInput: null,
    menuLinkVisible: false,
    imagePanelVisible: false,

    init(el) {
      let editor = new TipTap({
        element: el,
        extensions: [        
          Italic,
          Bold,
          Blockquote,
          Strike,
          Document,
          History,
          // BulletList,
          // OrderedList,
          // ListItem,
          Heading,
          HardBreak,
          Text,
          Paragraph.configure({
            HTMLAttributes: {
              class: 'my-custom-paragraph',
            },
          }),
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
      window.editorHook.currentEditor = this
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
    window.editorHook.base = this
    // console.log("THIS", window.editorHook.currentEditor.editor)
    this.handleEvent("loadContent", ({ content }) => {
      window.editorHook.currentEditor.editor.commands.setContent(content)
      console.log("CONT", window.editorHook.currentEditor.editor.commands)
    })
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