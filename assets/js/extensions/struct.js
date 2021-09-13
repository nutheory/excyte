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
      title: {
        default: null,
        parseHTML: element => {
          return {
            title: element.getAttribute('title')
          }
        },
        renderHTML: attr => {
          return { 
            'data-section-title': attr.title
          }
        }
      },
      subtitle: {
        default: null,
        parseHTML: element => {
          return {
            subtitle: element.getAttribute('subtitle')
          }
        },
        renderHTML: attr => {
          return {
            'data-section-subtitle': attr.subtitle
          }
        }
      },
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
  //     // console.log("HTMLAttributes", HTMLAttributes)
  //     const dom = document.createElement('div')
  //     const content = document.createElement('div')
  //     dom.setAttribute('class', HTMLAttributes.class)
  //     dom.setAttribute('id', HTMLAttributes.id)
  //     dom.setAttribute('style', HTMLAttributes.style)
  //     // if (HTMLAttributes.title) { 
  //       // dom.setAttribute('data-section-title', HTMLAttributes.title) 
  //     // }
  //     // if (HTMLAttributes.subtitle) { dom.setAttribute('data-section-subtitle', HTMLAttributes.subtitle) }
  //     // dom.append(content)
  //     return {
  //       dom,
  //       // contentDOM: content
  //     }
  //   }
  // }
})