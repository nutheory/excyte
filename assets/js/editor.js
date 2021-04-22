import { Editor as TipTap } from "@tiptap/core"
import { defaultExtensions } from "@tiptap/starter-kit"
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import FloatingMenu from '@tiptap/extension-floating-menu'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
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
  console.log("loaded")
  // updatedAt is to force Alpine to rerender on selection change
  return {
    updatedAt: Date.now(),
    content: '<div><div class="prose max-w-full" id="5dba1fc04aa4055b9f298357"><div class="mx-6"><h2>114 Tianna Expressway Streets</h2></div><div class="image-scroller h-32 lg:h-48 xl:h-64 my-6"><div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/33.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/29.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/26.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/05.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/03.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/18.jpg"> </div> <div> <img class="h-full block" src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/25.jpg"> </div> </div> <br> </div></div>',
    inFocus: true,
    linkInput: null,
    menuLinkVisible: false,
    imagePanelVisible: false,
    editor: null,

    init(el) {
      let editor = new TipTap({
        element: el,
        extensions: [        
          ...defaultExtensions(),
          Link,
          Image,
          Highlight,
          Underline, 
          FontFamily,
          TextAlign,
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
    // let el = this.el.querySelector('#editor')
    // const bubbleMenu = document.querySelector('#bubbleMenu')
    // const floatingMenu = document.querySelector('#floatingMenu')
    const editorWrapper = document.querySelector('#editorWrapper')
      .setAttribute("style",`height:${window.innerHeight - editorOffsetHeight}px`)
    // let c = "Initializing..."
    // let editor

    // const content = ()[0].outerHTML

    this.handleEvent("loadContentFromDb", ({content}) => {
      console.log("CONTENT", content)
      // editor.commands.setContent(content)
    })

    // this.editor = new TipTap({
    //   element: el,
    //   extensions: [
    //     ...defaultExtensions(),
    //     Link,
    //     BubbleMenu.configure({
    //       element: bubbleMenu,
    //     }),
    //     FloatingMenu.configure({
    //       element: floatingMenu,
    //     })
    //   ],
    //   content: c,
    //   editorProps: {
    //     attributes: {
    //       class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl focus:outline-none"
    //     }
    //   },
    // })

    // console.log("mount", editor)

    // window.editor = editor

  }
}
