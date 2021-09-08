import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'divider',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: element => {
          return {
            class: element.getAttribute('class')
          }
        }
      },
      type: {
        default: null,
        parseHTML: element => {
          return {
            type: element.getAttribute('type')
          }
        }
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'divider',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const line = document.createElement('div')
      dom.classList.add('divider')
      line.classList.add('mt-3', 'border-t-2', 'mx-auto', 'w-2/5',  'accent-color')
      dom.append(line)

      return {
        dom,
      }
    }
  }
})