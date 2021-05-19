import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'structure',

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
      id: {
        default: null,
        parseHTML: element => {
          return {
            id: element.getAttribute('id')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'struct',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', HTMLAttributes, 0]
  },

  // addNodeView() {
  //   return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
  //     console.log("HTMLAttributes", HTMLAttributes)
  //     console.log("Node", node)
  //   }
  // }
})