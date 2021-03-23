import { Editor as TipTap } from "@tiptap/core"
// import { defaultExtensions } from "@tiptap/starter-kit"
import Document from '@tiptap/extension-document'
import Bold from '@tiptap/extension-bold'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
// import Image from '@tiptap/extension-image'
import Italic from '@tiptap/extension-italic'
import Focus from '@tiptap/extension-focus'
import Heading from '@tiptap/extension-heading'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import Paragraph from '@tiptap/extension-paragraph'
import Hardbreak from '@tiptap/extension-hard-break'
import MenuBubble from '@tiptap/extension-menu-bubble'
import MenuFloat from '@tiptap/extension-menu-float'
// import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
// import TextAlign from '@tiptap/extension-text-align'
// import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import { verifyLink } from "./utilities"

const floatOffsetHeight = () => {
  let intViewportWidth = window.innerWidth
  if (intViewportWidth <= 640) {
    return 55
  } else if (intViewportWidth <= 768) {
    return 56
  } else if (intViewportWidth <= 1024) {
    return 88
  } else if (intViewportWidth <= 1280) {
    return 88
  } else if (intViewportWidth <= 1536) {
    return 90
  } else {
    return 92
  }
}

window.setupEditor = function (content) {

  // updatedAt is to force Alpine to rerender on selection change
  return {
    pdatedAt: Date.now(),
    content: content,
    inFocus: true,
    linkInput: null,
    menuLinkVisible: false,
    imagePanelVisible: false,
    editor: null,

    init(el, bubbleMenu, floatMenu) {
      let editor = new TipTap({
        element: el,
        extensions: [
          Bold,
          Text,
          Link,
          Focus,
          // Image,
          Italic,
          Document,
          Paragraph,
          Blockquote,
          Hardbreak,
          Underline, 
          Highlight, 
          // FontFamily, 
          // TextAlign, 
          // TextStyle,
          ListItem,
          BulletList,
          OrderedList,
          Heading.configure({
            levels: [1, 2, 3],
          }),
          MenuBubble.configure({
            menuEl: bubbleMenu,
            xOffset: 0,
            yOffset: -40,
          }),
          MenuFloat.configure({
            menuEl: floatMenu,
            xOffset: 0,
            yOffset: floatOffsetHeight(),
          }),
        ],
        content: this.content,
        editorProps: {
          attributes: {
            class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl focus:outline-none"
          }
        },
      })

      editor.on("update", ({ editor }) => {
        // this.content = this.editor.getHTML()
        this.updatedAt = Date.now()
      })

      editor.on("focus", () => {
        this.inFocus = true
        this.updatedAt = Date.now()
      })

      editor.on("selectionUpdate", ({ editor }) => {
        this.updatedAt = Date.now()
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
    const editorOffsetHeight = window.innerWidth <= 768 ? 84 : 116
    const editorWrapper = document.querySelector('#editorWrapper')

    .setAttribute("style",`height:${window.innerHeight - editorOffsetHeight}px`)

    this.handleEvent("loadContentFromDb", ({content}) => {
      window.setupEditor('<p>Hello</p>')
    })
  }
}
