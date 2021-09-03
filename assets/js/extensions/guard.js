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

  renderHTML({ HTMLAttributes }) {
    console.log("HERE")
    return ['guard', mergeAttributes(HTMLAttributes), 0]
    // return window.viewerHook.base.pushEvent('check-security', {}, reply => {
    //   console.log("reply", reply)
    //   if (reply.logged_in === true) {
    //     console.log("PASS")
    //     return ['guard', mergeAttributes(HTMLAttributes), 0]
    //   } else {
    //     console.log("FAIL2")
    //     // node.content = []
    //     // return ['span']
    //     return ['guard', mergeAttributes(HTMLAttributes), 0]
    //   }
    // })
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const boom = document.createElement('div')
      boom.innerHTML = "BOOM"
      dom.append(boom)
      console.log("VIWE", node)
      return {
        dom,
        // contentDOM: boom
      }
      // const c = document.createElement('div')
      // dom.append(c)
      // console.log("VIWE", node)
      // return window.viewerHook.base.pushEvent('check-security', {}, reply => {
      //   console.log("reply", reply)
      //   const content = document.createElement('div')
      //   if (reply.logged_in === true) {
      //     console.log("PASS")
      //     return {
      //       dom,
      //       contentDOM: content
      //     }
      //   } else {
      //     console.log("FAIL")
      //     node.content = []
      //     return {
      //       dom,
      //       // contentDOM: c
      //     }
      //   }
      // })
    }
  }
})