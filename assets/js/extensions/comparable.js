import { Node, mergeAttributes } from '@tiptap/core'
import Glightbox from 'glightbox'

export default Node.create({
  name: 'compDetails',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      listing: {
        default: null,
        parseHTML: element => {
          return {
            listing: element.getAttribute('data-listing-json')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="compDetails"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'compDetails'}), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      dom.classList.add("relative", "w-full", "lg:ml-6", "lg:flex-1")

      const content = document.createElement('div')
      dom.append(content)

      return {
        dom,
        contentDOM: content,
      }
    }
  }
})