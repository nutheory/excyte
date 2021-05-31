import { Editor as TipTap } from "../_snowpack/pkg/@tiptap.core.v2.0.0-beta.13.js"
import { defaultExtensions } from "../_snowpack/pkg/@tiptap.starter-kit.v2.0.0-beta.8.js"
import Link from '../_snowpack/pkg/@tiptap.extension-link.v2.0.0-beta.1.js'
import Image from '../_snowpack/pkg/@tiptap.extension-image.v2.0.0-beta.1.js'
import BubbleMenu from '../_snowpack/pkg/@tiptap.extension-bubble-menu.v2.0.0-beta.5.js'
import FloatingMenu from '../_snowpack/pkg/@tiptap.extension-floating-menu.v2.0.0-beta.2.js'
import Highlight from '../_snowpack/pkg/@tiptap.extension-highlight.v2.0.0-beta.1.js'
import TextAlign from '../_snowpack/pkg/@tiptap.extension-text-align.v2.0.0-beta.1.js'
import FontFamily from '../_snowpack/pkg/@tiptap.extension-font-family.v2.0.0-beta.1.js'
import Underline from '../_snowpack/pkg/@tiptap.extension-underline.v2.0.0-beta.1.js'
import Table from '../_snowpack/pkg/@tiptap.extension-table.v2.0.0-beta.5.js'
import TableRow from '../_snowpack/pkg/@tiptap.extension-table-row.v2.0.0-beta.1.js'
import TableHeader from '../_snowpack/pkg/@tiptap.extension-table-header.v2.0.0-beta.3.js'
import TableCell from '../_snowpack/pkg/@tiptap.extension-table-cell.v2.0.0-beta.1.js'
import { verifyLink } from "./utilities.js"

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
