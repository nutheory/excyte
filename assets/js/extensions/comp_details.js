import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'compDetails',

  group: 'block',

  content: 'block+',


  parseHTML() {
    return [
      {
        tag: 'div[data-type="comp-details"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'comp-details'}), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      dom.classList.add("simple-gallery", "w-full", "lg:w-1/3")
    }
  }
})
