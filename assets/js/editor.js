import { Editor as TipTap } from "@tiptap/core"
import { defaultExtensions } from "@tiptap/starter-kit"
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import { verifyLink } from "./utilities"

const extensions = [
  ...defaultExtensions(), 
  Link, 
  Image, 
  Underline, 
  Highlight, 
  FontFamily, 
  TextAlign, 
  TextStyle
]

window.setupEditor = function (content) {
  // updatedAt is to force Alpine to rerender on selection change
  return {
    content: content,
    inFocus: true,
    linkInput: null,
    menuLinkVisible: false,
    menuFloatVisible: false,
    updatedAt: Date.now(),
    editor: null,

    init(el) {
      let editor = new TipTap({
        element: el,
        extensions,
        content: this.content,
        editorProps: {
          attributes: {
            class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl py-4 focus:outline-none"
          }
        }
      })

      editor.on("update", () => {
        this.content = this.editor.getHTML()
      })

      editor.on("focus", () => {
        this.inFocus = true
      })

      editor.on("selection", () => {
        this.updatedAt = Date.now()
      })

      this.editor = editor
    },
    addLink() {
      const mThis = this
      this.menuLinkVisible = true
      const linkInput = document.querySelector('input#editor-link')
      linkInput.addEventListener('keydown', function _func(ev) {
        const key = ev.code
        if (key === "Enter" || key === "Escape") {
          ev.preventDefault()
          const url = ev.target.value
          if (verifyLink(url)) {
            mThis.editor.chain().focus().setLink({ href: url }).run()
            linkInput.removeEventListener('click', _func)
          } else {
            alert("bunk")
          }
          mThis.menuLinkVisible = false
        }
      })
      setTimeout(() => { linkInput.focus() }, 0)
    }
  }
}

export const InitEditor = {
  mounted() {
    this.handleEvent("loadContentFromDb", ({content}) => {
      window.setupEditor('<p>Hello</p>')
    })

    console.log("too late")
  }
}
