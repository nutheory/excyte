import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'superCover',

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
      },
      img: {
        default: null,
        parseHTML: element => {
          return {
            img: element.getAttribute('img')
          }
        },
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'super-cover',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['super-cover', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const bg = HTMLAttributes.img
      const dom = document.createElement('div')
      dom.style.backgroundImage = `url(${bg})`
      dom.classList.add('static')
      
      return {
        dom
      }
    }
  }

})