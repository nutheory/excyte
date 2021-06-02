import { Node } from '@tiptap/core'

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
      style: {
        default: null,
        parseHTML: element => {
          return {
            style: element.getAttribute('style')
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
})