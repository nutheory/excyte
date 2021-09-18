import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'synopsis-chart',

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
      data: {
        default: null,
        parseHTML: element => {
          return {
            data: element.getAttribute('data-chart')
          }
        },
        // renderHTML: attributes => {
        //   return {
        //     'data-chart': attributes.data,
        //   }
        // }
      },
      title: {
        default: null,
        parseHTML: element => {
          return {
            title: element.getAttribute('title')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'synopsis-chart',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },


  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const canvas = document.createElement('canvas')
      canvas.setAttribute('id', 'synopsisChart')
      console.log(HTMLAttributes.data)
      canvas.setAttribute('data-chart', HTMLAttributes.data)

      dom.append(canvas)
      return {
        dom,
      }
    }
  }
})