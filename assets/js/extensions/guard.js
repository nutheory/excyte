import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'guard',

  group: 'block',

  content: 'block*',

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
    }
  },

  parseHTML() {
    return [
      {
        tag: 'guard',
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    console.log("HERE")
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      // const boom = document.createElement('div')
      // boom.innerHTML = "BOOM"
      // dom.append(boom)
      // const content = document.createElement('div')
      // content.classList.add('hidden')
      // dom.append(content)
      // return {
      //   dom,
      //   contentDOM: content
      // }
      console.log("RET", window.viewerHook.attrs)

      if (window.viewerHook.attrs.authorized_agent === true) {
        const content = document.createElement('div')
        dom.append(content)
        return {
          dom,
          contentDOM: content
        }
      } else {
        console.log("FAIL")
        // node.content = null
        const content = document.createElement('div')
        content.classList.add('hidden')
        dom.append(content)
        return {
          dom,
          contentDOM: content
        }
      }
    }
  }
})